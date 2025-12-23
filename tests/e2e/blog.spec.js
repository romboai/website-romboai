const { test, expect } = require("@playwright/test");

test("blog: list loads and first post page renders", async ({ page }) => {
  await page.goto("/blog/");
  await expect(page.locator("body")).toContainText(/Welcome to RomboAI Blog/i);

  // Click the first blog post link (avoid navbar/footer links like /blog/).
  // Blog list comes from `_includes/blog_articles.html` (cards within the main content).
  const firstPostLink = page.locator(
    'main section.container-fluid.bg-white .card a[href^="/blog/"]:not([href="/blog/"]):not([href="/blog"])'
  ).first();

  await expect(firstPostLink).toHaveAttribute("href", /\/blog\/.+\//);
  await firstPostLink.click();

  await expect(page).toHaveURL(/\/blog\/.+\/$/);
  // Article page uses the article layout; title is present in the hero header.
  await expect(page.locator(".post_header")).toHaveCount(1);
});


