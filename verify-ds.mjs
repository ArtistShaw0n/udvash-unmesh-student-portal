import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const consoleErrors = [];
page.on('console', msg => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', err => consoleErrors.push(`PAGEERROR: ${err.message}`));

console.log('Navigating to http://localhost:3000/');
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

// Screenshot light mode
await page.screenshot({ path: '/tmp/ds-light.png', fullPage: true });
console.log('Saved light mode screenshot');

// Inspect content
const checks = await page.evaluate(() => {
  const present = (selector) => !!document.querySelector(selector);
  const textContains = (substr) => document.body.innerText.includes(substr);

  return {
    title: document.title,
    h1: document.querySelector('h1')?.innerText || null,
    h2Count: document.querySelectorAll('h2').length,
    buttonCount: document.querySelectorAll('button').length,
    inputCount: document.querySelectorAll('input').length,
    isDarkClass: document.documentElement.classList.contains('dark'),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    bodyText: getComputedStyle(document.body).color,
    hasHeader: present('header'),
    hasBanglaTitle: textContains('উদ্ভাস'),
    hasBanglaCard: textContains('অধ্যায়-১'),
    hasPrimaryBtn: textContains('Primary'),
    hasBadgeLive: textContains('Live'),
    hasTokenSwatch: textContains('surface') && textContains('brand'),
  };
});
console.log('Light mode checks:', JSON.stringify(checks, null, 2));

// Find and click dark toggle
const toggleBtn = await page.locator('button:has-text("Dark")').or(page.locator('button:has-text("Light")')).first();
const toggleVisible = await toggleBtn.isVisible().catch(() => false);
console.log('Dark toggle visible:', toggleVisible);

if (toggleVisible) {
  await toggleBtn.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/ds-dark.png', fullPage: true });

  const darkChecks = await page.evaluate(() => ({
    isDarkClass: document.documentElement.classList.contains('dark'),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    bodyText: getComputedStyle(document.body).color,
    bgSurfaceValue: getComputedStyle(document.documentElement).getPropertyValue('--sem-surface').trim(),
    inkValue: getComputedStyle(document.documentElement).getPropertyValue('--sem-ink').trim(),
  }));
  console.log('After click checks:', JSON.stringify(darkChecks, null, 2));
}

console.log('Console errors:', consoleErrors.length);
for (const e of consoleErrors) console.log('  -', e);

await browser.close();
