import puppeteer from 'puppeteer-core';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 950 });
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
await page.click('nav a[href="#products"]');
await new Promise(r => setTimeout(r, 5500));

// Sweep rapidly across all nodes to stress the swap, then settle on one
const btns = await page.$$('.orb-btn');
for (let round = 0; round < 2; round++) {
  for (const b of btns) {
    await b.hover();
    await new Promise(r => setTimeout(r, 80));
  }
}
await btns[5].hover(); // Marketplace
await new Promise(r => setTimeout(r, 1200));
await page.screenshot({ path: 'temporary screenshots/screenshot-22-hoverstress.png' });
await browser.close();
console.log('done');
