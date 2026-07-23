import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const url = process.argv[2] || 'http://localhost:4323/valo-website/';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 450)); // mid load animation
await page.screenshot({ path: 'temporary screenshots/frost-during-load.png', clip: { x: 0, y: 0, width: 1440, height: 120 } });
await new Promise(r => setTimeout(r, 3000));
// park the nav over the family section heading text
await page.evaluate(() => window.scrollTo({ top: 2680, behavior: 'instant' }));
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'temporary screenshots/frost-over-text.png', clip: { x: 0, y: 0, width: 1440, height: 140 } });
await browser.close();
console.log('done');
