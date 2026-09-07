// Accessibility smoke tests using axe-core + a headless browser (e.g. Playwright)
// TODO: install deps: npm install --save-dev @axe-core/playwright playwright
//
// Then run: npx playwright test tests/a11y/axe-check.js

const { test, expect } = require('@playwright/test');
const { checkA11y, injectAxe } = require('axe-playwright');

const pages = [
  { name: 'Home',    path: '/index.html'   },
  { name: 'Menu',    path: '/menu.html'    },
  { name: 'Photos',  path: '/photos.html'  },
  { name: 'About',   path: '/about.html'   },
  { name: 'Contact', path: '/contact.html' },
];

const BASE = 'http://localhost:5500'; // adjust to your local server port

for (const { name, path } of pages) {
  test(`${name} page has no critical a11y violations`, async ({ page }) => {
    await page.goto(BASE + path);
    await injectAxe(page);
    await checkA11y(page, null, {
      detailedReport: true,
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
    });
  });
}
