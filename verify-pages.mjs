import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push(`PAGEERROR: ${e.message}`));

for (const route of ['/', '/login', '/home']) {
  await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
  const name = route === '/' ? 'main' : route.replace('/', '');
  await page.screenshot({ path: `/tmp/ds-${name}-light.png`, fullPage: true });
  console.log(`${route} light: ${(await page.title())}, errors=${errors.length}`);
}

// Dark mode on main
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
const toggle = page.locator('button:has-text("Dark"), button:has-text("Light")').first();
await toggle.click();
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/ds-main-dark.png', fullPage: true });
console.log('Main dark mode captured');

// Dark mode on login + home
for (const route of ['/login', '/home']) {
  await page.goto(`http://localhost:3000${route}`);
  await page.waitForLoadState('networkidle');
  // toggle via top-right (smaller toggle on these pages)
  const t = page.locator('button:has-text("🌙"), button:has-text("☀️")').first();
  await t.click().catch(() => {});
  await page.waitForTimeout(300);
  const name = route.replace('/', '');
  await page.screenshot({ path: `/tmp/ds-${name}-dark.png`, fullPage: true });
  console.log(`${route} dark captured`);
}

console.log('\nTotal console errors:', errors.length);
errors.forEach(e => console.log('  -', e));
await browser.close();
