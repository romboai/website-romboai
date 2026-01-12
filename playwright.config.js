// @ts-check
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: { timeout: 8_000 },
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"], ["html"]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:4000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: {
    command:
      // Note: Jekyll 3.x doesn't accept `--livereload=false` (it errors with OptionParser::NeedlessArgument).
      // We simply omit livereload in CI.
      // Also disable watch to avoid pulling jekyll-watch/listen in CI and test runs.
      "bundle exec jekyll serve --no-watch --host 127.0.0.1 --port 4000 --trace",
    url: "http://127.0.0.1:4000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});


