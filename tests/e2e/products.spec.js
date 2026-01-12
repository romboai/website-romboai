const { test, expect } = require("@playwright/test");

test("products: page loads and module anchors render", async ({ page }) => {
  await page.goto("/product/");
  await expect(page.locator("body")).toContainText(/Products/i);

  // Key sections (avoid brittle checks on promotional cards/CTAs)
  await expect(page.locator("#nmr-ai-analysis-tool")).toHaveCount(1);
  await expect(page.locator("#automl-materials")).toHaveCount(1);

  // Headings exist (content-level smoke)
  await expect(page.getByRole("heading", { name: /NMR AI Analyzer/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /AutoML for material analysis/i }).first()).toBeVisible();
});


