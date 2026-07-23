import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const ORIGIN = process.argv[2] || 'http://localhost:4321/valo-website/';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGE ERROR:', e.message));
await page.setViewport({ width: 1440, height: 900 });

const out = [];

// 1. Every nav link from home lands correctly with aria-current set
const labels = ['Platform', 'Why Valo', 'Open APIs', 'MCP & AI', 'Security', 'About'];
for (const label of labels) {
  await page.goto(ORIGIN, { waitUntil: 'networkidle0' });
  await page.evaluate((l) => {
    [...document.querySelectorAll('#nav-links .nav-link')].find((a) => a.textContent.trim() === l).click();
  }, label);
  await page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => {});
  const info = await page.evaluate(() => ({
    h1: document.querySelector('h1')?.textContent.trim().slice(0, 40),
    current: document.querySelector('#nav-links .nav-link[aria-current="page"]')?.textContent.trim(),
  }));
  out.push(`nav "${label}" -> ${page.url().split('/').pop()} h1="${info.h1}" current=${info.current}`);
}

// 2. Platform page: orbit intro completes, card populated
await page.goto(ORIGIN + 'platform.html', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 6500));
const orbit = await page.evaluate(() => ({
  nodes: document.querySelectorAll('.orb-node').length,
  cardName: document.getElementById('eco-name')?.textContent,
  cardOpacity: getComputedStyle(document.getElementById('eco-card')).opacity,
  feats: document.querySelectorAll('#eco-feats li').length,
}));
out.push('platform orbit: ' + JSON.stringify(orbit));

// 3. Platform page family section: tabs render + switch
await page.goto(ORIGIN + 'platform.html', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 2000));
const live = await page.$$eval('#family-grid .fam-card', (c) => c.length);
await page.click('#fam-tab-road');
await new Promise((r) => setTimeout(r, 1000));
const road = await page.$$eval('#family-grid .fam-card', (c) => c.length);
out.push(`products tabs: live=${live} roadmap=${road}`);

// 4. Home teasers link correctly
await page.goto(ORIGIN, { waitUntil: 'networkidle0' });
const teasers = await page.evaluate(() => {
  const links = [...document.querySelectorAll('a.tease-card, a.tease-link, .btn[href*="platform"]')];
  return links.map((a) => a.getAttribute('href'));
});
out.push('home teaser hrefs: ' + teasers.join(' | '));

// 5. Mobile burger lists all links
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await page.goto(ORIGIN, { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 2000));
await page.click('#nav-burger');
await new Promise((r) => setTimeout(r, 800));
const menuLinks = await page.$$eval('#mobile-menu a', (as) => as.map((a) => a.textContent.trim()));
out.push('mobile menu: ' + menuLinks.join(', '));

console.log(out.join('\n'));
await browser.close();
