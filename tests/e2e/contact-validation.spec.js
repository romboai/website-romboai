const { test, expect } = require("@playwright/test");

test("contact form: required checkbox blocks validity when unchecked", async ({ page }) => {
  await page.goto("/contact/");

  await page.locator("#firstName").fill("Test");
  await page.locator("#lastName").fill("User");
  await page.locator("#company").fill("QA Inc");
  await page.locator("#email").fill("qa@example.com");
  await page.locator("#telephone").fill("+39000000000");
  await page.locator("#role").selectOption({ label: "CTO" });
  await page.locator("#query").fill("Validation test");

  // Leave terms unchecked.
  const isValid = await page.$eval("#contact-form", (form) => form.checkValidity());
  expect(isValid).toBe(false);

  const termsMissing = await page.$eval("#terms", (el) => el.validity.valueMissing);
  expect(termsMissing).toBe(true);
});

test("contact form: invalid email fails HTML5 validity", async ({ page }) => {
  await page.goto("/contact/");
  await page.locator("#email").fill("not-an-email");

  const emailValid = await page.$eval("#email", (el) => el.checkValidity());
  expect(emailValid).toBe(false);
});


