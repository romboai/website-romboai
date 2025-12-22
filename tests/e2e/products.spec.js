const { test, expect } = require("@playwright/test");

test("products: landing shows AutoML and hides Client; AutoML detail loads", async ({ page }) => {
  await page.goto("/product/");
  await expect(page.locator("body")).toContainText(/Products/i);

  // Client is temporarily unpublished
  await expect(page.locator("body")).not.toContainText(/Rombo Client/i);
  await expect(page.getByRole("link", { name: /learn more/i })).toHaveCount(1);

  await page.getByRole("link", { name: /learn more/i }).click();
  await expect(page).toHaveURL(/\/product\/rombo-automl\/?$/);
  await expect(page.getByRole("heading", { name: /rombo automl/i }).first()).toBeVisible();
});


