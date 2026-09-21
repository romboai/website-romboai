const { test, expect } = require("@playwright/test");

test("navigation smoke: main pages load and key headings render", async ({ page, context, baseURL }) => {
  // This test exercises site navigation, not the cookie-consent widget. Seed the
  // consent cookie before the first request so the asynchronously loaded banner
  // cannot appear between the visibility check and a navigation click.
  await context.addCookies([
    {
      name: "cookieconsent_status",
      value: "dismiss",
      url: new URL(baseURL).origin,
    },
  ]);

  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();

  // About
  await page.getByRole("link", { name: /about us/i }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.locator("body")).toContainText(/Rombo AI/i);

  // Products dropdown -> Rombo AI Platform
  await page.locator("#productsDropdown").click();
  await page.getByRole("link", { name: "Rombo AI Platform", exact: true }).click();
  await expect(page).toHaveURL(/\/product\/?$/);
  await expect(page.locator("body")).toContainText(/Rombo AI Platform/i);

  // Contact
  await page.getByRole("link", { name: /contact us/i }).first().click();
  await expect(page).toHaveURL(/\/contact\/?$/);
  await expect(page.locator("#contact-form")).toHaveCount(1);

  // Blog lives in the footer, not the top nav
  await page.locator("footer").getByRole("link", { name: /^blog$/i }).click();
  await expect(page).toHaveURL(/\/blog\/?$/);
  await expect(
    page.getByRole("heading", { name: "Insights on AI and NMR", exact: true })
  ).toBeVisible();
});
