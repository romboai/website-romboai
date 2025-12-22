const { test, expect } = require("@playwright/test");

test("admin page is served (not 404) and renders Tina root/placeholder", async ({ page }) => {
  const res = await page.goto("/admin/");
  expect(res, "Expected a response for /admin/").toBeTruthy();
  expect(res.status(), "Expected /admin/ to be served (not 404)").toBeLessThan(400);

  // The admin page always includes the root node (it may be empty / 0-height).
  await expect(page.locator("#root")).toHaveCount(1);

  // In CI, Tina dev assets are not running; we expect the fallback UI to appear.
  // (This makes the test stable without requiring Tina build secrets.)
  await expect(page.getByText(/Failed loading TinaCMS assets/i)).toBeVisible();
});


