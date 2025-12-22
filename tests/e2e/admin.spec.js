const { test, expect } = require("@playwright/test");

test("admin: /admin/ is served (not 404) and basic Tina shell exists", async ({ page }) => {
  const res = await page.goto("/admin/");
  expect(res, "Expected a response for /admin/").toBeTruthy();
  expect(res.status(), "Expected /admin/ to be served (not 404)").toBeLessThan(400);

  await expect(page).toHaveTitle(/TinaCMS/i);
  await expect(page.locator("#root")).toHaveCount(1);

  // Sanity: admin HTML should reference Tina dev scripts or built assets.
  const html = await page.content();
  expect(html).toMatch(/localhost:4001|\/admin\/.*assets/i);
});


