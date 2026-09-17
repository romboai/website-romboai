const { test, expect } = require("@playwright/test");

async function lastCtaClick(page) {
  return page.evaluate(() => {
    const events = (window.__romboEvents || []).filter((item) => item.event === "cta_click");
    return events.length ? events[events.length - 1] : null;
  });
}

async function prepareCtaPage(page) {
  await page.waitForFunction(() => typeof window.romboTrack === "function");
  const cookieDismiss = page.locator(".cc-dismiss");
  if (await cookieDismiss.isVisible()) await cookieDismiss.click();
  await page.evaluate(() => {
    document.addEventListener(
      "click",
      (event) => {
        const link = event.target.closest("a[href]");
        if (!link) return;
        const href = link.getAttribute("href") || "";
        if (href.indexOf("/contact") !== -1 || href.indexOf("github.com") !== -1) {
          event.preventDefault();
        }
      },
      true
    );
  });
}

test("home header CTAs send cta_source=home_header", async ({ page }) => {
  await page.goto("/");
  await prepareCtaPage(page);

  await page.locator(".nav-cta").click();
  let event = await lastCtaClick(page);
  expect(event).toBeTruthy();
  expect(event.params.cta_source).toBe("home_header");
  expect(event.params.cta_location).toBe("home_header");
  expect(event.params.page_type).toBe("home");
  expect(event.params.funnel_step).toBe("cta_to_contact");

  await page.locator('.hero-section a[data-cta-location="home_header"]').click();
  event = await lastCtaClick(page);
  expect(event.params.cta_source).toBe("home_header");
  expect(event.params.page_type).toBe("home");
});

test("home engage CTA is not tagged as home_header", async ({ page }) => {
  await page.goto("/");
  await prepareCtaPage(page);

  await page.locator("[data-cta-section='engage'] a[href*='contact']").click();
  const event = await lastCtaClick(page);
  expect(event).toBeTruthy();
  expect(event.params.cta_source).toBe("other");
  expect(event.params.cta_location).toBe("engage");
  expect(event.params.page_type).toBe("home");
});

test("blog CTAs send cta_source=blog", async ({ page }) => {
  await page.goto("/blog/article-AI-in-downstream-strategy/");
  await prepareCtaPage(page);

  await page.locator(".nav-cta").click();
  let event = await lastCtaClick(page);
  expect(event.params.cta_source).toBe("blog");
  expect(event.params.cta_location).toBe("blog");
  expect(event.params.page_type).toBe("blog");

  await page.locator(".markdown-content a[href*='contact']").click();
  event = await lastCtaClick(page);
  expect(event.params.cta_source).toBe("blog");
  expect(["blog", "blog_inline", "content"]).toContain(event.params.cta_location);
  expect(event.params.page_type).toBe("blog");
});

test("product page CTAs send cta_source=other", async ({ page }) => {
  await page.goto("/product/");
  await prepareCtaPage(page);

  await page.locator(".nav-cta").click();
  const event = await lastCtaClick(page);
  expect(event.params.cta_source).toBe("other");
  expect(event.params.cta_location).toBe("header");
  expect(event.params.page_type).toBe("platform");
});
