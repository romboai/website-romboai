const { test, expect } = require("@playwright/test");

test("navigation smoke: main pages load and key headings render", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();

  // About
  await page.getByRole("link", { name: /about us/i }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.locator("body")).toContainText(/Rombo AI/i);

  // Products dropdown -> Rombo AutoML
  await page.locator("#productsDropdown").click();
  await page.getByRole("link", { name: /AutoML Framework/i }).click();
  await expect(page).toHaveURL(/\/product\/#automl-materials$/);
  await expect(page.getByRole("heading", { name: /AutoML Framework/i }).first()).toBeVisible();

  // Blog
  await page.getByRole("link", { name: /^blog$/i }).click();
  await expect(page).toHaveURL(/\/blog\/?$/);
  await expect(page.locator("body")).toContainText(/Rombo AI Blog/i);

  // Contact
  await page.getByRole("link", { name: /contact us/i }).first().click();
  await expect(page).toHaveURL(/\/contact\/?$/);
  await expect(page.locator("#contact-form")).toHaveCount(1);
});


