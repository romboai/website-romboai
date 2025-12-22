const { test, expect } = require("@playwright/test");

test("home -> contact form submit -> confirmation", async ({ page }) => {
  // Prevent the post-confirmation Calendly redirect from navigating away during the test.
  await page.route("https://calendly.com/**", (route) => route.abort());

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

  // Make the submission stay on-site but still trigger the existing success UI:
  // submit to a local "handler" page that immediately redirects to /contact/?status=ok.
  // This keeps the referrer off "/contact", matching the production redirect behavior.
  await page.evaluate(() => {
    const form = document.querySelector("#contact-form");
    if (!form) throw new Error("contact-form not found");
    form.setAttribute("action", "/e2e/redirect.html");
    form.setAttribute("method", "GET");
  });

  await Promise.all([
    page.waitForURL(/\/contact\/\?status=ok/),
    page.getByRole("button", { name: /send email/i }).click(),
  ]);

  // Assert the confirmation UI is shown.
  await expect(
    page.getByRole("heading", { name: /thank you for contacting us/i })
  ).toBeVisible();
  await expect(
    page.getByText(/your message has been received successfully/i)
  ).toBeVisible();
});


