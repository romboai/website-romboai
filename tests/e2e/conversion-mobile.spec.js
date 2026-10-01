const { test, expect } = require('@playwright/test');

for (const width of [375, 390, 1280]) {
  test('confirmed lead and funnel at width ' + width, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.route('https://hook.eu2.make.com/**', route =>
      route.fulfill({ status: 200, contentType: 'text/plain', body: 'Accepted' }));
    await page.route('https://calendly.com/**', route => route.abort());
    const media = [];
    page.on('request', request => { if (/\.mp4(?:\?|$)/.test(request.url())) media.push(request.url()); });
    await page.goto('/product/');
    await expect(page.locator('h1')).toContainText('AI for industrial NMR analysis');
    if (width < 768) {
      expect(media).toHaveLength(0);
      const dismiss = page.locator('.cc-dismiss');
      if (await dismiss.isVisible()) await dismiss.click();
      await expect(page.locator('.mobile-feasibility a')).toBeVisible();
      await page.locator('.mobile-feasibility a').click();
    } else {
      await page.locator('[data-cta-location="product_hero"]').click();
    }
    await page.locator('#firstName').fill('QA');
    await page.locator('#company').fill('Test');
    await page.locator('#email').fill('qa@example.test');
    await page.locator('#query').fill('Evaluate NMR feasibility');
    await page.locator('#terms').check();
    await page.getByRole('button', { name: 'Request analysis', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('received successfully');
    const leads = await page.evaluate(() => window.__romboEvents.filter(e => e.event === 'generate_lead'));
    expect(leads).toHaveLength(1);
    expect(leads[0].params.landing_path).toBe('/product/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
