import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const url = process.argv[2];
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
page.on('pageerror', e => console.log('PAGE ERROR:', e.message));
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 3000));
const nav = await page.$('#site-nav nav');

// idle: lamp must be invisible
await nav.screenshot({ path: 'temporary screenshots/lamp2-idle.png' });

// hover Products: lamp fades in there
const h = await page.evaluateHandle(() =>
  [...document.querySelectorAll('#nav-links .nav-link')].find(a => a.textContent.trim() === 'Products'));
const b = await h.asElement().boundingBox();
await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
await new Promise(r => setTimeout(r, 800));
await nav.screenshot({ path: 'temporary screenshots/lamp2-hover.png' });

// leave: lamp fades out
await page.mouse.move(720, 500);
await new Promise(r => setTimeout(r, 800));
await nav.screenshot({ path: 'temporary screenshots/lamp2-left.png' });

await browser.close();
console.log('done');
