const { test, expect } = require("@playwright/test");

test("robots.txt is served and references sitemap", async ({ page }) => {
  const res = await page.request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const txt = await res.text();
  expect(txt).toMatch(/Sitemap:\s*https:\/\/rombo\.ai\/sitemap\.xml/);
});

test("sitemap.xml is served and includes key URLs", async ({ page }) => {
  const res = await page.request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const xml = await res.text();
  expect(xml).toContain("<urlset");
  // In local `jekyll serve`, Jekyll can emit localhost URLs even if `site.url` is set.
  expect(xml).toMatch(/<loc>(https:\/\/rombo\.ai|http:\/\/localhost:4000)\/<\/loc>/);
  expect(xml).toMatch(/<loc>(https:\/\/rombo\.ai|http:\/\/localhost:4000)\/about\/<\/loc>/);
  expect(xml).toMatch(/<loc>(https:\/\/rombo\.ai|http:\/\/localhost:4000)\/product\/<\/loc>/);
  expect(xml).toMatch(/<loc>(https:\/\/rombo\.ai|http:\/\/localhost:4000)\/contact\/<\/loc>/);
  // Should not include admin or e2e helper pages
  expect(xml).not.toContain("/admin");
  expect(xml).not.toContain("/e2e/");
});


