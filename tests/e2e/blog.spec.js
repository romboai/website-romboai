const { test, expect } = require("@playwright/test");

test("blog: list loads and first post page renders", async ({ page }) => {
  await page.goto("/blog/");
  await expect(page.locator("body")).toContainText(/Welcome to RomboAI Blog/i);

  // Click the first blog post link (exclude the blog index itself)
  const firstPostLink = page
    .locator('a[href^="/blog/"]')
    .filter({ hasNot: page.locator('a[href="/blog/"]') })
    .first();

  await expect(firstPostLink).toHaveAttribute("href", /\/blog\/.+\//);
  await firstPostLink.click();

  await expect(page).toHaveURL(/\/blog\/.+\/$/);
  // Article page uses the article layout; title is present in the hero header.
  await expect(page.locator(".post_header")).toHaveCount(1);
});


