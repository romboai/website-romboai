const { test, expect } = require("@playwright/test");

const MAKE_WEBHOOK = "https://hook.eu2.make.com/**";

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
  await page.getByRole("button", { name: /request analysis/i }).click();

  // The success message is injected client-side once the webhook responds OK.
  const status = page.getByRole("status");
  await expect(status).toBeVisible();
  await expect(status).toContainText(/thank you for requesting a free feasibility analysis/i);
  await expect(status).toContainText(/your request has been received successfully/i);

  // The webhook should have been called and carry the API key header + payload.
  expect(webhookRequest).not.toBeNull();
  expect(webhookRequest.method()).toBe("POST");
  expect(webhookRequest.headers()["x-make-apikey"]).toBeTruthy();

  const postData = webhookRequest.postData() || "";
  expect(postData).toContain("qa@example.com");
});
