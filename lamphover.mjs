import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const url = process.argv[2];
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 3000));
const nav = await page.$('#site-nav nav');

const linkBox = async (name) => {
  const h = await page.evaluateHandle(n =>
    [...document.querySelectorAll('#nav-links .nav-link')].find(a => a.textContent.trim() === n), name);
  return (await h.asElement().boundingBox());
};

// 1. hover "Products" (no click) — lamp should travel there
const b = await linkBox('Products');
await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
await new Promise(r => setTimeout(r, 900));
await nav.screenshot({ path: 'temporary screenshots/lamp-hover-products.png' });

// 2. move the mouse off the nav — lamp should spring back to Platform
await page.mouse.move(720, 500);
await new Promise(r => setTimeout(r, 900));
await nav.screenshot({ path: 'temporary screenshots/lamp-hover-back.png' });

// 3. click "Why Valo", then hover "About", then leave — lamp should return to Why Valo
const w = await linkBox('Why Valo');
await page.mouse.click(w.x + w.width / 2, w.y + w.height / 2);
await new Promise(r => setTimeout(r, 700));
const a = await linkBox('About');
await page.mouse.move(a.x + a.width / 2, a.y + a.height / 2);
await new Promise(r => setTimeout(r, 900));
await nav.screenshot({ path: 'temporary screenshots/lamp-hover-about.png' });
await page.mouse.move(720, 500);
await new Promise(r => setTimeout(r, 900));
await nav.screenshot({ path: 'temporary screenshots/lamp-back-whyvalo.png' });

await browser.close();
console.log('done');
