const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const analytics = fs.readFileSync('js/analytics.js', 'utf8');
const contact = fs.readFileSync('_includes/hero_contact.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/g)[1].replace(/^<script>|<\/script>$/g, '');

function fixture({ ok = true, valid = true, bot = false, storageBlocked = false, query = '', deferred = false } = {}) {
  const ready = [], events = [], storage = new Map();
  let requests = 0, alerts = 0, resolve;
  const button = { disabled: false };
  const field = { value: 'QA', validity: { valid: true }, addEventListener() {} };
  const form = new EventTarget();
  Object.assign(form, {
    style: {}, parentNode: { insertBefore() {} },
    checkValidity: () => valid, reportValidity() {},
    querySelector: s => s.includes('banana_slug') ? { checked: bot } : button,
    getAttribute: () => 'https://example.test/webhook',
    setAttribute() {}, removeAttribute() {}
  });
  const location = { origin: 'https://rombo.ai', pathname: '/contact/', search: query, href: 'https://rombo.ai/contact/' + query };
  const document = {
    referrer: '', documentElement: { scrollHeight: 800, clientHeight: 800 },
    getElementById: id => id === 'contact-form' ? form : id === 'contact-heading' ? { style: {} } : field,
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
    FormData: class {}, alert: () => alerts++, setTimeout() {}, setInterval() {}, clearInterval() {},
    fetch: () => { requests++; return deferred ? new Promise(r => { resolve = r; }) : Promise.resolve({ ok, status: ok ? 200 : 500 }); }
  };
  context.window = { location, romboTrack: (event, params) => events.push({ event, params }) };
  vm.createContext(context);
  vm.runInContext(contact, context);
  vm.runInContext(analytics, context);
  ready.forEach(cb => cb());
  return {
    events, form, button,
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
