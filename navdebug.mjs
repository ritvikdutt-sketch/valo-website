import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
await page.goto(process.argv[2] || 'http://localhost:4323/valo-website/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
const info = await page.evaluate(() => {
  const nav = document.querySelector('#site-nav nav');
  const cs = getComputedStyle(nav);
  return { background: cs.backgroundColor, backdrop: cs.backdropFilter, width: window.innerWidth };
});
console.log(JSON.stringify(info));
await browser.close();
