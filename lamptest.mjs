import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const url = process.argv[2] || 'http://localhost:4322/valo-website/';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 3000));
const nav = await page.$('#site-nav nav');
await nav.screenshot({ path: 'temporary screenshots/lamp-initial.png' });
// click "Why Valo" and capture the settled state
await page.evaluate(() => {
  const l = [...document.querySelectorAll('#nav-links .nav-link')].find(a => a.textContent.trim() === 'Why Valo');
  l.click();
});
await new Promise(r => setTimeout(r, 1200));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 600));
await nav.screenshot({ path: 'temporary screenshots/lamp-why-valo.png' });
await browser.close();
console.log('done');
