# Conversion rollout

## Evidence and deployment boundary

Inspected on 2026-10-01: account Rombo AI, property rombo web (517267910).
GA4 Admin currently marks contact_form_submit as a key event, counted once per
event. generate_lead is not listed as a key event. The 19 key events and 42
generate_lead events therefore measure different things. The precise historical
gap also requires the property change history / activation date; it is not
evidence by itself of duplicate conversions.

The old JavaScript emitted both contact_form_submit and generate_lead at submit
time, before the Make response, including failed requests and honeypots. This
patch emits only generate_lead, once after HTTP success; a successful HTTP response
means the endpoint accepted the request, not that a salesperson qualified it.
GA4's enhanced-measurement form_submit may still exist as a diagnostic event.

This branch has not been published. Network restrictions prevented fetch/push,
so rebase onto current origin/main and rerun checks before deployment.
No GA4 settings were changed: coordinate the following migration with deployment.

## GA4 migration at deployment

1. Mark generate_lead as the only lead key event (once per event).
2. Unmark contact_form_submit; do not mark automatic form_submit or form_start.
   Leave unrelated purchase configuration untouched.
3. Register event-scoped landing_path and funnel_version custom dimensions.
4. Create an open Funnel exploration with these indirectly-followed steps:
   landing → high_intent_page_view → cta_click → contact_form_start → generate_lead.
   Direct contact arrivals may skip steps; use an open funnel, and inspect these
   separately rather than interpreting them as broken journeys.
5. Break down by landing_path, Country, Device category and Session source / medium.
   Use native GA4 acquisition fields; never put UTM parameters on internal links.
6. Add a deployment annotation. Historical attempts cannot be retrospectively
   converted into server-confirmed leads.

landing_path is tab/session-storage scoped and expires after 30 minutes between
page loads. It is a diagnostic journey context, not a replacement for GA4's native
session definition. Blocked storage falls back to the current page. Country and
device are supplied by GA4 rather than inferred in browser code.

## Campaign URLs (external placements only)

- LinkedIn organic:
  https://rombo.ai/campaigns/linkedin/?utm_source=linkedin&utm_medium=social&utm_campaign=nmr_feasibility&utm_content=company_post
- Terrapinn referral:
  https://rombo.ai/campaigns/terrapinn/?utm_source=terrapinn&utm_medium=referral&utm_campaign=nmr_feasibility&utm_content=partner_listing

Campaign pages are noindex and excluded from the sitemap. /nmr-feasibility/ is
the indexable page for evaluation intent. Actual rising search queries have not
been inspected; validate this copy against Search Console before claiming
query-specific optimization. No unverified customer names or new performance
claims have been added; the evidence link uses the existing refinery case study.

## Verification

- node --test tests/conversion-funnel.test.cjs: 7 passing tests.
- Jekyll build and JavaScript syntax: passing locally.
- New browser tests: tests/e2e/conversion-mobile.spec.js, covering 375, 390 and
  1280px, mocked submissions, mobile video requests and horizontal overflow.
- Browser tests / visual mobile QA not executed locally: binding a preview server
  is blocked by sandbox permissions. Run npm run test:e2e in CI before release.
- Check sticky CTA against cookie banner, open navigation and safe-area inset on
  a real phone; verify keyboard, optional telephone/surname, failure and retry.
- Do not test against the live Make webhook with invented contact details.

After release, verify in DebugView that an unsuccessful request yields zero leads,
a successful request yields one, and the native source / medium is preserved from
each campaign entry through contact. Confirm lead delivery in Make separately.
