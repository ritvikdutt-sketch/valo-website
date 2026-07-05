import puppeteer from 'puppeteer-core';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 950 });
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
await page.click('nav a[href="#products"]');
await new Promise(r => setTimeout(r, 5000));
await page.screenshot({ path: 'temporary screenshots/screenshot-19-orbit.png' });

// hover a roadmap node (Valo Care) to test the side-card swap
const btns = await page.$$('.orb-btn');
await btns[3].hover();
await new Promise(r => setTimeout(r, 1200));
await page.screenshot({ path: 'temporary screenshots/screenshot-20-orbit-hover.png' });
await browser.close();
console.log('done');
