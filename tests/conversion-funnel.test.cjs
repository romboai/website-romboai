const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const analytics = fs.readFileSync('js/analytics.js', 'utf8');
const contact = fs.readFileSync('_includes/hero_contact.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/g)[1].replace(/^<script>|<\/script>$/g, '');

function fixture({ ok = true, valid = true, bot = false, storageBlocked = false, query = '', deferred = false, newsletterOptIn = false } = {}) {
  const ready = [], events = [], payloads = [], storage = new Map();
  let requests = 0, alerts = 0, resolve;
  const button = { disabled: false };
  const consent = { checked: newsletterOptIn, dataset: { consentVersion: 'newsletter-v1' } };
  const field = { value: 'QA', validity: { valid: true }, addEventListener() {} };
  const form = new EventTarget();
  Object.assign(form, {
    style: {}, parentNode: { insertBefore() {} },
    checkValidity: () => valid, reportValidity() {},
    querySelector: s => s.includes('banana_slug') ? { checked: bot } : s.includes('data-newsletter-consent-text') ? { textContent: 'Newsletter consent text' } : button,
    getAttribute: () => 'https://example.test/webhook',
    setAttribute() {}, removeAttribute() {}
  });
  const location = { origin: 'https://rombo.ai', pathname: '/contact/', search: query, href: 'https://rombo.ai/contact/' + query };
  const document = {
    referrer: '', documentElement: { scrollHeight: 800, clientHeight: 800 },
    getElementById: id => id === 'contact-form' ? form : id === 'contact-heading' ? { style: {} } : id === 'contact-newsletter-opt-in' ? consent : field,
    querySelector: () => null,
    createElement: () => ({ setAttribute() {}, style: {}, querySelector: () => ({}) }),
    addEventListener: (name, cb) => { if (name === 'DOMContentLoaded') ready.push(cb); }
  };
  const context = {
    document, location, URL, URLSearchParams, CustomEvent, Date,
    sessionStorage: {
      getItem: k => { if (storageBlocked) throw Error('blocked'); return storage.get(k) || null; },
      setItem: (k, v) => { if (storageBlocked) throw Error('blocked'); storage.set(k, v); }
    },
    FormData: class { constructor() { this.fields = new Map(); } set(key, value) { this.fields.set(key, value); } get(key) { return this.fields.get(key); } }, alert: () => alerts++, setTimeout() {}, setInterval() {}, clearInterval() {},
    fetch: (_url, options) => { requests++; payloads.push(options.body); return deferred ? new Promise(r => { resolve = r; }) : Promise.resolve({ ok, status: ok ? 200 : 500 }); }
  };
  context.window = { location, romboTrack: (event, params) => events.push({ event, params }) };
  vm.createContext(context);
  vm.runInContext(contact, context);
  vm.runInContext(analytics, context);
  ready.forEach(cb => cb());
  return {
    events, form, button, payloads,
    submit: () => form.dispatchEvent(new Event('submit', { cancelable: true })),
    requests: () => requests, alerts: () => alerts,
    resolve: response => resolve(response),
    leads: () => events.filter(e => e.event === 'generate_lead')
  };
}
const flush = () => new Promise(resolve => setImmediate(resolve));

test('only confirmed HTTP success emits one canonical lead', async () => {
  const f = fixture({ deferred: true });
  f.submit(); f.submit();
  assert.equal(f.requests(), 1);
  assert.equal(f.leads().length, 0);
  f.resolve({ ok: true }); await flush();
  f.submit();
  assert.equal(f.requests(), 1);
  assert.equal(f.leads().length, 1);
  assert.equal(f.events.filter(e => ['contact_form_submit', 'form_submit'].includes(e.event)).length, 0);
  assert.equal(f.leads()[0].params.landing_path, '/contact/');
});
test('failed requests emit no lead and permit a retry', async () => {
  const f = fixture({ ok: false }); f.submit(); await flush();
  assert.equal(f.leads().length, 0); assert.equal(f.button.disabled, false);
  f.submit(); await flush(); assert.equal(f.requests(), 2);
});
test('invalid forms and honeypots never reach the endpoint or count as leads', async () => {
  for (const opts of [{ valid: false }, { bot: true }]) {
    const f = fixture(opts); f.submit(); await flush();
    assert.equal(f.requests(), 0); assert.equal(f.leads().length, 0);
  }
});
test('storage restrictions do not break confirmation tracking', async () => {
  const f = fixture({ storageBlocked: true }); f.submit(); await flush();
  assert.equal(f.leads().length, 1);
});
test('a success query alone cannot generate a lead', () => {
  assert.equal(fixture({ query: '?status=ok' }).leads().length, 0);
});
test('duplicate controller notifications are deduplicated', () => {
  const f = fixture();
  f.form.dispatchEvent(new CustomEvent('rombo:lead-confirmed'));
  f.form.dispatchEvent(new CustomEvent('rombo:lead-confirmed'));
  assert.equal(f.leads().length, 1);
});
test('newsletter consent is explicitly false when not selected', async () => {
  const f = fixture(); f.submit(); await flush();
  assert.equal(f.payloads[0].get('newsletter_opt_in'), 'false');
  assert.equal(f.payloads[0].get('newsletter_consent_at'), undefined);
  assert.equal(f.leads().length, 1);
});
test('newsletter consent metadata is sent only for an explicit opt-in', async () => {
  const f = fixture({ newsletterOptIn: true }); f.submit(); await flush();
  const payload = f.payloads[0];
  assert.equal(payload.get('newsletter_opt_in'), 'true');
  assert.equal(payload.get('newsletter_source'), 'contact');
  assert.equal(payload.get('newsletter_page_path'), '/contact/');
  assert.equal(payload.get('newsletter_consent_version'), 'newsletter-v1');
  assert.equal(payload.get('newsletter_consent_text'), 'Newsletter consent text');
  assert.match(payload.get('newsletter_consent_at'), /^\d{4}-\d{2}-\d{2}T/);
});
test('funnel events carry a landing path and exclude form content', () => {
  const f = fixture({ query: '?email=private@example.test' });
  f.form.dispatchEvent(new Event('focusin'));
  assert.equal(f.events.filter(e => e.event === 'landing').length, 1);
  assert.equal(f.events.filter(e => e.event === 'contact_form_start').length, 1);
  for (const event of f.events) {
    assert.equal(event.params.landing_path, '/contact/');
    assert.equal(JSON.stringify(event).includes('private@example.test'), false);
  }
});
