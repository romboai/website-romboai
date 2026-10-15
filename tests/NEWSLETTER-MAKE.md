# Newsletter via Make

## Activation status

The dedicated Make webhook supplied by the site owner is configured in `webhook_url` in `_data/newsletter.yml`. Standalone signup is enabled on a fresh build. Clearing that URL disables submission without displaying an unavailable notice. The repository cannot verify or provision the subscriber storage, confirmation emails or unsubscribe handling inside the external Make scenario; those still need to be configured and checked in Make.

The standalone form has no consent checkbox: entering an email and submitting **Subscribe** expresses newsletter consent. A short, visible disclosure explains this before submission; the privacy policy remains accessible through the footer. Typing an email or browsing does not send a request. The exact disclosure is stored in `signup_consent_text` in `_data/newsletter.yml` with version `newsletter-signup-v2`; the contact checkbox retains its separate `newsletter-v1` wording.

The configured Make webhook has previously returned **401 Unauthorized** to unauthenticated requests. The public newsletter form intentionally sends no secret: authenticated command-line acceptance does not prove that browser signup or Odoo subscription works. Configure a server-side proxy (including origin/abuse protection), or a webhook intended for public browser submissions, before treating this as live.

The contact form remains operational. Its optional newsletter checkbox is unchecked by default and adds consent fields to the existing contact webhook. **Adding these fields does not automatically create subscribers until the contact scenario is updated as described below.**

Do not send standalone newsletter requests to the existing contact webhook without explicitly changing that scenario's routing. That could turn signups into sales enquiries.

## 1. Dedicated newsletter scenario

1. In Make, create a scenario starting with **Webhooks > Custom webhook**.
2. Copy its HTTPS URL into `webhook_url` in `_data/newsletter.yml`, then rebuild/redeploy Jekyll. Do not put private Make API keys or email-provider credentials in the website. If webhook authentication is required, use a server-side proxy rather than exposing a secret in JavaScript.
3. Validate `form_type = newsletter`, a valid email, `newsletter_opt_in = true`, and the expected consent version/text. Reject invalid requests with a non-2xx response.
4. Normalize and upsert the email into your subscriber storage (for example, a Make Data store) as **pending**. Keep an existing confirmed subscription without duplicating it. Maintain suppression/unsubscribe state; an unchecked contact checkbox must never unsubscribe an existing subscriber.
5. Use the email service connected to Make to send a double-opt-in confirmation link. The link must use an unpredictable, expiring token generated server-side, not just the email address. Only a verified confirmation should change the subscriber status to active. A repeat signup from an unsubscribed address needs fresh confirmation.
6. Use a **Webhook response** module to acknowledge a valid request only after it has been durably stored/queued. Respond within 15 seconds, return HTTP 200 or 202, and allow the site's origin through CORS. For local preview, allow the local origin too. The frontend uses a simple multipart POST with no cookies or custom authentication headers.
7. Every newsletter email must include a working unsubscribe mechanism. Process unsubscribe requests in Make and exclude suppressed addresses from every mailing.
8. Add server-side validation, rate limiting and abuse protection. The website's honeypot and duplicate-submit guard are only client-side mitigations, not security controls.

The website reports **“your signup request has been received”** after HTTP success. It does not claim that the address has completed double opt-in. A webhook acknowledgement alone is not a confirmed subscription.

### Request fields

| Field | Standalone signup | Contact opt-in |
| --- | --- | --- |
| `form_type` | `newsletter` | `contact` on the existing contact webhook |
| `email` | Trimmed email address | Existing contact email |
| `newsletter_opt_in` | String `true` | String `true` or `false` |
| `newsletter_source` | `home`, `blog`, `article`, or `footer` on other pages | `contact`, only when opted in |
| `newsletter_page_path` | URL path only | URL path only, only when opted in |
| `newsletter_consent_at` | Browser UTC ISO timestamp | Only when opted in |
| `newsletter_consent_version` | `newsletter-signup-v2` | `newsletter-v1`, only when opted in |
| `newsletter_consent_text` | Exact visible Subscribe disclosure | Exact checkbox wording, only when opted in |

Browser metadata is untrusted. Record an additional server receipt timestamp in Make and validate version/text against the consent wording you maintain. Keep the actual consent evidence in subscriber storage, not in GA4. Define retention and processor arrangements with the data controller before launch.

## 2. Existing contact scenario

Keep the existing contact/sales handling unchanged. Add a separate route **only when `newsletter_opt_in` equals the string `true`**:

- Forward a minimal subscription request to the dedicated newsletter scenario via Make's HTTP module: `form_type = newsletter`, `email`, and the `newsletter_*` consent fields from the contact payload.
- Do not forward phone numbers, analytical challenges or other sales data to subscriber storage.
- When `newsletter_opt_in` is `false` or missing, do not touch the newsletter list.
- Reuse the same pending/confirmation/upsert process as standalone signup.
- Handle newsletter-route failures independently from the contact response; retain the request for retry rather than making a successful sales enquiry fail.

No second newsletter network call is made by the contact page. This avoids coupling a demo request to the availability of a separate newsletter endpoint.

## 3. Placement and analytics

- Every page using `_includes/footer.html`: one compact signup strip inside the shared footer, above the logo and existing footer links. This includes home, blog, articles, authors, contact, about, product, use cases, campaign/feasibility pages, privacy, funding pages and 404.
- Home, blog and article keep their existing source/location values. All other footer signups use `footer`; `newsletter_page_path` records the originating page. Include `footer` in any Make source filters.
- Contact: the footer signup is independent of the sales form. The sales form keeps its separate optional consent before the existing privacy checkbox and submit button.
- Privacy: `/privacy/#newsletter` explains the purpose, consent, data and withdrawal.

`newsletter_signup_request` is emitted only after a successful standalone HTTP acknowledgement, with `newsletter_location` and no email or consent evidence. It is not a confirmed-subscription event and does not emit `generate_lead`. Confirmation and unsubscribe metrics belong in Make/email-service reporting.

## 4. Verification

Newsletter settings live in `_data/newsletter.yml`, which Jekyll reloads during local watch mode. This avoids a stale `_config.yml` leaving the signup endpoint and consent text empty until the preview server is restarted. Other `_config.yml` changes still require a restart. The default Playwright configuration can reuse a running server, so verify it serves the latest data/templates.

Run:

```sh
node --test tests/conversion-funnel.test.cjs tests/patch-tinacms-cli.test.cjs
npx playwright test tests/e2e/newsletter.spec.js tests/e2e/contact-form.spec.js
```

Browser tests cover one-click consent without a standalone checkbox, email validation, compact mobile/desktop layout, shared-footer placement across page types without duplicates, duplicate protection, retries and optional contact consent. They intercept all newsletter/contact endpoints and never add real subscribers or invoke the live Make scenario. Configured-mode browser tests inject a test endpoint into the HTML response before the scripts initialize, without changing the real `_data/newsletter.yml`.

Before activation, manually verify with your own test address in Make: pending request, confirmation, duplicate handling, unsubscribe, repeat opt-in after unsubscribe, and opt-out on the contact form. Verify the CORS response from the actual deployment origin. Previous authenticated command-line checks received HTTP 200 / Accepted from Make using test-only, non-opted-in data; they did not verify browser authentication, Odoo creation or a confirmed subscription.
