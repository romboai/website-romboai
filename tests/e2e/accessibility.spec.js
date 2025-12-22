const { test, expect } = require("@playwright/test");

test("a11y smoke: skip link exists and keyboard focus is visible", async ({ page }) => {
  await page.goto("/");

  const skip = page.locator('a.skip-link[href="#main-content"]');
  await expect(skip).toHaveCount(1);

  // Ensure the skip link is focusable (tab order can vary due to navbar).
  await skip.focus();
  await expect(skip).toBeFocused();

  // Focus indicator should be present (outline or shadow).
  const hasFocusRing = await skip.evaluate((el) => {
    const cs = window.getComputedStyle(el);
    return (
      (cs.outlineStyle && cs.outlineStyle !== "none" && cs.outlineWidth !== "0px") ||
      (cs.boxShadow && cs.boxShadow !== "none")
    );
  });
  expect(hasFocusRing).toBeTruthy();

  // Activating skip link should jump to the main content anchor.
  await skip.click();
  expect(page.url()).toMatch(/#main-content$/);
  await expect(page.locator("#main-content")).toHaveCount(1);
});

test("a11y smoke: Products dropdown is usable and navigates", async ({ page }) => {
  await page.goto("/");
  await page.locator("#productsDropdown").click();
  await expect(page.getByRole("link", { name: /rombo automl/i })).toBeVisible();
  await page.getByRole("link", { name: /rombo automl/i }).click();
  await expect(page).toHaveURL(/\/product\/rombo-automl\/?$/);
});


