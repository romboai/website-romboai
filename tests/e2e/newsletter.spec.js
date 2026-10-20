const { test, expect } = require("@playwright/test");

const WEBHOOK = "https://newsletter.example.test/subscribe";
const SIGNUP_CONSENT_VERSION = "newsletter-signup-v2";
const SIGNUP_CONSENT_TEXT = "By subscribing, you agree to Rombo AI emails. Unsubscribe at any time.";
const CONTACT_CONSENT_TEXT = "I agree to receive Rombo AI emails about NMR, AI, articles and product news. I can unsubscribe at any time.";
const responseHeaders = { "access-control-allow-origin": "*" };

// Model a configured Jekyll page without touching the real Make configuration.
async function openConfiguredSignup(page, path = "/") {
  await page.route((url) => url.pathname === path, async (route) => {
    const response = await route.fetch();
    let html = await response.text();
    html = html.replace(/(<form\b[^>]*data-newsletter-form[^>]*\baction=")[^"]*"/, `$1${WEBHOOK}"`);

    await route.fulfill({ response, body: html });
  });
  await page.goto(path);
  const form = page.locator("[data-newsletter-form]");
  await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeEnabled();
  await expect(form.locator('input[type="checkbox"]')).toHaveCount(0);
  return form;
}

async function expectStandaloneSection(page, location) {
  const footer = page.locator("footer");
  await expect(footer).toHaveCount(1);
  await expect(page.locator("[data-newsletter-section]")).toHaveCount(1);
  await expect(page.locator("[data-newsletter-form]")).toHaveCount(1);
  const section = footer.locator(":scope > [data-newsletter-section]:first-child");
  await expect(section).toHaveCount(1);
  await expect(footer.locator(":scope > [data-newsletter-section] + * .footer-bar")).toHaveCount(1);
  await expect(section.getByRole("heading", { name: "Rombo AI newsletter", exact: true })).toBeVisible();
  await expect(section.locator(".newsletter-description")).toHaveText("NMR, AI and product updates.");
  const form = section.locator(`[data-newsletter-form][data-newsletter-location="${location}"]`);
  await expect(form).toBeVisible();
  await expect(form.locator('input[type="checkbox"]')).toHaveCount(0);
  await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeVisible();
  await expect(form).toHaveAttribute("data-consent-version", SIGNUP_CONSENT_VERSION);
  await expect(form).toHaveAttribute("data-consent-text", SIGNUP_CONSENT_TEXT);
  const privacy = form.locator(".newsletter-privacy");
  await expect(privacy.locator("span")).toBeVisible();
  await expect(privacy.locator("span")).toHaveText(SIGNUP_CONSENT_TEXT);
  await expect(form.getByRole("link", { name: "Privacy", exact: true })).toHaveCount(0);
  await expect(form).not.toContainText("Newsletter signup is not available yet. Please check back soon.");

  return form;
}

async function payloadOf(request) {
  return new Response(request.postDataBuffer(), {
    headers: { "content-type": request.headers()["content-type"] },
  }).formData();
}

test("signup controls reflect the Make configuration and use checkbox-free consent", async ({ page }) => {
  await page.goto("/");
  const form = await expectStandaloneSection(page, "home");
  if ((await form.getAttribute("action") || "").trim()) {
    await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeEnabled();
  } else {

    await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeDisabled();
  }
});

test("an unconfigured signup stays disabled without an unavailable notice", async ({ page }) => {
  let submissions = 0;
  page.on("request", (request) => { if (request.method() === "POST") submissions++; });
  await page.route((url) => url.pathname === "/", async (route) => {
    const response = await route.fetch();
    const html = (await response.text()).replace(/(<form\b[^>]*data-newsletter-form[^>]*\baction=")[^"]*"/, '$1"');
    await route.fulfill({ response, body: html });
  });
  await page.goto("/");
  const form = await expectStandaloneSection(page, "home");
  await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeDisabled();
  await form.getByLabel("Email address").fill("reader@example.test");
  await form.evaluate((element) => element.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })));
  await expect(form.getByRole("status")).toBeEmpty();
  expect(submissions).toBe(0);
});

test("blog and article pages each contain one newsletter in the shared footer", async ({ page }) => {
  await page.goto("/blog/");
  await expectStandaloneSection(page, "blog");
  const article = page.locator('main .card a[href^="/blog/"]:not([href="/blog/"])').first();
  await article.click();
  await expectStandaloneSection(page, "article");
});

for (const path of [
  "/about/",
  "/product/",
  "/contact/",
  "/privacy/",
  "/use-cases/",
  "/spectra/",
  "/smart-start/",
  "/voucher/",
  "/nmr-feasibility/",
  "/campaigns/linkedin/",
  "/campaigns/terrapinn/",
  "/404.html",
  "/use-cases/crude-oil-monitoring/",
  "/author/andrea-zanda/",
]) {
  test(`${path} contains one shared-footer newsletter with footer location`, async ({ page }) => {
    await page.goto(path);
    await expectStandaloneSection(page, "footer");
  });
}

for (const width of [320, 1280]) {
  test(`newsletter stays compact with usable controls at width ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const form = await openConfiguredSignup(page);
    const section = page.locator("[data-newsletter-section]");
    await expect(section.locator(".newsletter-panel")).toHaveCSS("border-top-width", "0px");
    await section.scrollIntoViewIfNeeded();
    await page.evaluate(() => document.fonts.ready);
    const sectionBounds = await section.boundingBox();
    expect(sectionBounds).not.toBeNull();
    expect(sectionBounds.height).toBeLessThan(width === 320 ? 260 : 210);
    expect(sectionBounds.x).toBeGreaterThanOrEqual(0);
    expect(sectionBounds.x + sectionBounds.width).toBeLessThanOrEqual(width);
    for (const control of [form.getByLabel("Email address"), form.getByRole("button", { name: "Subscribe", exact: true })]) {
      await expect(control).toBeVisible();
      const bounds = await control.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds.height).toBeGreaterThanOrEqual(44);
      expect(bounds.width).toBeGreaterThanOrEqual(44);
      expect(bounds.x).toBeGreaterThanOrEqual(sectionBounds.x);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(sectionBounds.x + sectionBounds.width);
    }
  });
}

for (const [path, location, pageType] of [
  ["/", "home", "home"],
  ["/blog/", "blog", "blog"],
  ["/contact/", "footer", "contact"],
]) {
  test(`one Subscribe click sends checkbox-free consent and source from ${location}`, async ({ page }) => {
    const requests = [];
    await page.route(WEBHOOK, async (route) => {
      requests.push(route.request());
      await route.fulfill({ status: 202, headers: responseHeaders, body: "Accepted" });
    });
    await openConfiguredSignup(page, path);
    const form = await expectStandaloneSection(page, location);
    const consent = form.locator(".newsletter-privacy span");
    await expect(consent).toBeVisible();
    const visibleConsent = (await consent.innerText()).trim();
    expect(visibleConsent).toBe(SIGNUP_CONSENT_TEXT);
    await expect(form).toHaveAttribute("data-consent-text", visibleConsent);
    expect(requests).toHaveLength(0);
    await form.getByLabel("Email address").fill("reader@example.test");
    expect(requests).toHaveLength(0);
    await form.getByRole("button", { name: "Subscribe", exact: true }).click();
    await expect(form.getByRole("status")).toContainText("signup request has been received");
    expect(requests).toHaveLength(1);
    const request = requests[0];
    const data = await payloadOf(request);
    expect(data.get("email")).toBe("reader@example.test");
    expect(data.get("form_type")).toBe("newsletter");
    expect(data.get("newsletter_opt_in")).toBe("true");
    expect(data.get("newsletter_source")).toBe(location);
    expect(data.get("newsletter_page_path")).toBe(path);
    expect(data.get("newsletter_consent_version")).toBe(SIGNUP_CONSENT_VERSION);
    await expect(form).toHaveAttribute("data-consent-version", SIGNUP_CONSENT_VERSION);
    expect(data.get("newsletter_consent_text")).toBe(visibleConsent);
    expect(data.get("newsletter_consent_at")).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(request.headers()["x-make-apikey"]).toBeUndefined();
    await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeDisabled();
    const events = await page.evaluate(() => window.__romboEvents);
    const signupEvents = events.filter((entry) => entry.event === "newsletter_signup_request");
    expect(signupEvents).toHaveLength(1);
    expect(signupEvents[0].params).toMatchObject({
      newsletter_location: location,
      page_type: pageType,
      funnel_step: "newsletter_request",
    });
    expect(events.filter((entry) => entry.event === "generate_lead")).toHaveLength(0);
    expect(JSON.stringify(events)).not.toContain("reader@example.test");
  });
}

test("signup requires a valid email and never submits before a deliberate Subscribe click", async ({ page }) => {
  let requests = 0;
  await page.route(WEBHOOK, (route) => {
    requests++;
    return route.fulfill({ status: 202, headers: responseHeaders, body: "Accepted" });
  });
  const form = await openConfiguredSignup(page);
  const email = form.getByLabel("Email address");
  const button = form.getByRole("button", { name: "Subscribe", exact: true });
  expect(requests).toBe(0);
  await email.fill("not-an-email");
  await button.click();
  expect(requests).toBe(0);
  await expect(form.getByRole("status")).toBeEmpty();
  await email.fill("reader@example.test");
  await email.blur();
  // Observe a quiet interval so delayed input/change handlers cannot imply consent.
  await page.waitForTimeout(250);
  expect(requests).toBe(0);
  await expect(form.getByRole("status")).toBeEmpty();
  await button.click();
  await expect(form.getByRole("status")).toContainText("has been received");
  expect(requests).toBe(1);
});

test("a failed request can be retried without claiming success", async ({ page }) => {
  let attempts = 0;
  await page.route(WEBHOOK, (route) => {
    attempts++;
    return route.fulfill({ status: attempts === 1 ? 500 : 200, headers: responseHeaders, body: "Response" });
  });
  const form = await openConfiguredSignup(page);
  await form.getByLabel("Email address").fill("reader@example.test");
  await form.getByRole("button", { name: "Subscribe", exact: true }).click();
  await expect(form.getByRole("status")).toContainText("could not send");
  await expect(form.getByRole("button", { name: "Subscribe", exact: true })).toBeEnabled();
  expect(await page.evaluate(() => window.__romboEvents.filter((entry) => entry.event === "newsletter_signup_request"))).toHaveLength(0);
  await form.getByRole("button", { name: "Subscribe", exact: true }).click();
  await expect(form.getByRole("status")).toContainText("has been received");
  expect(attempts).toBe(2);
});

test("honeypot submissions never reach Make", async ({ page }) => {
  let requests = 0;
  await page.route(WEBHOOK, (route) => { requests++; return route.abort(); });
  const form = await openConfiguredSignup(page);
  await form.getByLabel("Email address").fill("bot@example.test");
  await form.locator('[name="website"]').evaluate((input) => { input.value = "spam"; });
  await form.getByRole("button", { name: "Subscribe", exact: true }).click();
  expect(requests).toBe(0);
  await expect(form.getByRole("status")).toBeEmpty();
});

test("duplicate submissions are ignored while a request is pending and after success", async ({ page }) => {
  let requests = 0;
  await page.route(WEBHOOK, async (route) => {
    requests++;
    await new Promise((resolve) => setTimeout(resolve, 250));
    await route.fulfill({ status: 200, headers: responseHeaders, body: "Accepted" });
  });
  const form = await openConfiguredSignup(page);
  await form.getByLabel("Email address").fill("reader@example.test");
  await form.evaluate((element) => { element.requestSubmit(); element.requestSubmit(); });
  await expect(form.getByRole("status")).toContainText("has been received");
  await form.evaluate((element) => element.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })));
  expect(requests).toBe(1);
});

for (const optedIn of [false, true]) {
  test(`contact form sends newsletter opt-in=${optedIn} without changing the contact flow`, async ({ page }) => {
    let request;
    await page.route("https://hook.eu2.make.com/**", async (route) => {
      request = route.request();
      await route.fulfill({ status: 200, headers: responseHeaders, body: "Accepted" });
    });
    await page.route("https://calendly.com/**", (route) => route.abort());
    await page.route("https://calendar.app.google/**", (route) => route.abort());
    await page.route("https://calendar.google.com/**", (route) => route.abort());
    await page.goto("/contact/");
    const optIn = page.locator("#contact-newsletter-opt-in");
    await expect(optIn).toHaveAttribute("type", "checkbox");
    await expect(optIn).not.toBeChecked();
    await expect(optIn).toHaveJSProperty("required", false);
    await expect(optIn).toHaveAttribute("data-consent-version", "newsletter-v1");
    const consentLabel = page.locator('label[for="contact-newsletter-opt-in"]');
    await expect(consentLabel.locator("[data-newsletter-consent-text]")).toHaveText(CONTACT_CONSENT_TEXT);
    await expect(page.getByText("Newsletter privacy details", { exact: true })).toHaveCount(0);
    const referenceFont = await page.locator('label[for="firstName"]').evaluate((label) => {
      const style = getComputedStyle(label);
      return { family: style.fontFamily, size: style.fontSize, lineHeight: style.lineHeight };
    });
    await expect(page.getByText("Stay in the loop (optional)", { exact: true })).toHaveCount(0);
    for (const text of [consentLabel, page.locator('label[for="terms"]')]) {
      await expect(text).toHaveCSS("font-family", referenceFont.family);
      await expect(text).toHaveCSS("font-size", referenceFont.size);
      await expect(text).toHaveCSS("line-height", referenceFont.lineHeight);
      await expect(text).toHaveCSS("font-weight", "400");
    }
    await page.locator("#firstName").fill("QA");
    await page.locator("#company").fill("Test company");
    await page.locator("#email").fill("reader@example.test");
    await page.locator("#query").fill("Evaluate my application");
    await page.locator("#terms").check();
    if (optedIn) await optIn.check();
    await page.getByRole("button", { name: "Book a demo", exact: true }).click();
    await expect(page.locator(".hero-contact-form").getByRole("status")).toContainText("received successfully");
    const data = await payloadOf(request);
    expect(data.get("form_type")).toBe("contact");
    expect(data.get("newsletter_opt_in")).toBe(String(optedIn));
    if (optedIn) {
      expect(data.get("newsletter_consent_version")).toBe("newsletter-v1");
      expect(data.get("newsletter_source")).toBe("contact");
      expect(data.get("newsletter_consent_text")).toBe(CONTACT_CONSENT_TEXT);
    } else {
      expect(data.get("newsletter_consent_at")).toBeNull();
      expect(data.get("newsletter_consent_text")).toBeNull();
    }
  });
}
