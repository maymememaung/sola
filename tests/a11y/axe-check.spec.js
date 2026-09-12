// Accessibility smoke tests — axe-core via Playwright
// Checks all five pages for WCAG 2.1 A and AA violations.
//
// Run with:  npm run test:a11y
// (playwright.config.js starts a local server automatically)

const { test, expect } = require('@playwright/test');
const { injectAxe, checkA11y } = require('axe-playwright');

const pages = [
  { name: 'Home',    path: '/' },
  { name: 'Menu',    path: '/menu.html' },
  { name: 'Photos',  path: '/photos.html' },
  { name: 'About',   path: '/about.html' },
  { name: 'Contact', path: '/contact.html' },
];

for (const { name, path } of pages) {
  test(`${name} page — no WCAG 2.1 AA violations`, async ({ page }) => {
    await page.goto(path);
    await injectAxe(page);
    await checkA11y(page, null, {
      detailedReport: true,
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
    });
  });
}
