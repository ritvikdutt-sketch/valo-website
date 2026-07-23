import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const ORIGIN = process.argv[2] || 'http://localhost:4321/valo-website/';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGE ERROR:', e.message));
await page.setViewport({ width: 1440, height: 900 });

const results = [];

// 1. Footer links from home land on the new pages
await page.goto(ORIGIN, { waitUntil: 'networkidle0' });
for (const label of ['Open APIs', 'MCP & AI', 'Security']) {
  await page.goto(ORIGIN, { waitUntil: 'networkidle0' });
  await page.evaluate((l) => {
    const a = [...document.querySelectorAll('footer a')].find((x) => x.textContent.trim() === l);
    a.click();
  }, label);
  await page.waitForNavigation({ waitUntil: 'networkidle0' }).catch(() => {});
  results.push(`footer "${label}" -> ${page.url()} h1="${await page.$eval('h1', (h) => h.textContent.trim())}"`);
}

// 2. Connectivity cards
await page.goto(ORIGIN, { waitUntil: 'networkidle0' });
const conn = await page.$$eval('#how-l3 a.how-card', (as) => as.map((a) => a.getAttribute('href')));
results.push('connectivity hrefs: ' + conn.join(' | '));

// 3. Family "Learn more" links (rendered by JS)
await new Promise((r) => setTimeout(r, 2500));
const more = await page.$$eval('#family-grid .fam-more', (as) => as.map((a) => a.getAttribute('href')));
results.push('family learn-more hrefs: ' + more.join(' | '));

// 4. Product cross-links from core page
await page.goto(ORIGIN + 'core.html', { waitUntil: 'networkidle0' });
const cross = await page.$$eval('a.prod-link', (as) => as.map((a) => a.getAttribute('href')));
results.push('core cross-links: ' + cross.join(' | '));

// 5. Keyboard pass on core page: tab through nav, confirm focus visible + lamp reacts
await page.goto(ORIGIN + 'core.html', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 2000));
for (let i = 0; i < 4; i++) await page.keyboard.press('Tab'); // skip-link, logo, then nav links
const focusInfo = await page.evaluate(() => {
  const el = document.activeElement;
  const lamp = document.getElementById('nav-lamp');
  return {
    focused: el.textContent.trim() || el.getAttribute('aria-label'),
    lampOpacity: getComputedStyle(lamp).opacity,
    outlineVisible: getComputedStyle(el).boxShadow !== 'none',
  };
});
results.push('keyboard: ' + JSON.stringify(focusInfo));

// 6. Single h1 + landmarks on each new page
for (const p of ['core.html', 'pay.html', 'unify.html', 'open-apis.html', 'mcp.html', 'security.html']) {
  await page.goto(ORIGIN + p, { waitUntil: 'networkidle0' });
  const a11y = await page.evaluate(() => ({
    h1s: document.querySelectorAll('h1').length,
    main: !!document.querySelector('main#main'),
    skip: !!document.querySelector('.skip-link'),
    title: document.title,
  }));
  results.push(`${p}: ${JSON.stringify(a11y)}`);
}

console.log(results.join('\n'));
await browser.close();
