const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/a11y',

  // Base URL used by page.goto('/') in tests
  use: {
    baseURL: 'http://localhost:5500',
  },

  // Spin up a static file server before tests run, stop it after
  webServer: {
    command: 'npx serve -p 5500 .',
    port: 5500,
    reuseExistingServer: true, // reuse if already running (e.g. Live Server)
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
