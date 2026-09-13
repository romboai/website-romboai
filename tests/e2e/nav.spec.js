const { test, expect } = require("@playwright/test");

test("navigation smoke: main pages load and key headings render", async ({ page }) => {
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
  const cookieDismiss = page.locator(".cc-dismiss");
  if (await cookieDismiss.isVisible()) await cookieDismiss.click();
  await page.locator("footer").getByRole("link", { name: /^blog$/i }).click();
  await expect(page).toHaveURL(/\/blog\/?$/);
  await expect(page.locator("body")).toContainText(/Rombo AI Blog/i);
});


