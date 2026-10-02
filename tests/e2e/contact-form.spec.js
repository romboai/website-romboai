const { test, expect } = require("@playwright/test");

const MAKE_WEBHOOK = "https://hook.eu2.make.com/**";

test("home hero assigns and tracks a configured CTA variant", async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem("rombo_experiment_variant_home_hero_cta_copy_v1", "b");
  });

  await page.goto("/");

  const cta = page.getByRole("link", { name: "Discuss your use case", exact: true });
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("data-experiment-variant", "b");

  const experimentView = await page.evaluate(() =>
    window.__romboEvents.find((entry) => entry.event === "experiment_view")
  );
  expect(experimentView.params).toMatchObject({
    experiment_id: "home_hero_cta_copy_v1",
    experiment_variant: "b",
    experiment_label: "Discuss your use case",
  });
});

test("home -> contact form submit -> confirmation", async ({ page }) => {
  // Prevent the post-confirmation Calendly redirect from navigating away during the test.
  await page.route("https://calendly.com/**", (route) => route.abort());

  // Intercept the Make.com webhook so the test never hits the live scenario.
  let webhookRequest = null;
  await page.route(MAKE_WEBHOOK, async (route) => {
    webhookRequest = route.request();
    await route.fulfill({ status: 200, contentType: "text/plain", body: "Accepted" });
  });

  await page.goto("/");
  await expect(page).toHaveTitle(/Rombo/i);

  // Use the nav link (real user flow).
  await page.getByRole("link", { name: /contact us/i }).first().click();
  await expect(page).toHaveURL(/\/contact\/?/);

  // Fill required fields.
  await page.locator("#firstName").fill("Playwright");
  await page.locator("#lastName").fill("Tester");
  await page.locator("#company").fill("Rombo QA");
  await page.locator("#email").fill("qa@example.com");
  await page.locator("#telephone").fill("+39000000000");
  await page.locator("#role").selectOption({ label: "CTO" });
  await page.locator("#query").fill("E2E test submission.");
  await page.locator("#terms").check();

  // Submit the form; it posts to the Make.com webhook via fetch and renders
  // the success UI client-side (no redirect back from the endpoint).
  await page.getByRole("button", { name: /book a demo/i }).click();

  // The success message is injected client-side once the webhook responds OK.
  const status = page.getByRole("status");
  await expect(status).toBeVisible();
  await expect(status).toContainText(/thank you for getting in touch/i);
  await expect(status).toContainText(/your request has been received successfully/i);

  const successEvent = await page.evaluate(() =>
    window.__romboEvents.find((entry) => entry.event === "contact_form_success")
  );
  expect(successEvent).toBeTruthy();
  expect(successEvent.params).toMatchObject({
    experiment_id: "home_hero_cta_copy_v1",
    funnel_step: "lead_confirmed",
  });

  // The webhook should have been called and carry the API key header + payload.
  expect(webhookRequest).not.toBeNull();
  expect(webhookRequest.method()).toBe("POST");
  expect(webhookRequest.headers()["x-make-apikey"]).toBeTruthy();

  const postData = webhookRequest.postData() || "";
  expect(postData).toContain("qa@example.com");
});
