import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
mkdirSync('temporary screenshots', { recursive: true });

const url = process.argv[2] || 'http://localhost:4322/valo-website/';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
await page.goto(url, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2500));
// scroll the orbit stage into view to fire the intro
await page.evaluate(() => document.getElementById('orbit-stage').scrollIntoView({ block: 'center', behavior: 'instant' }));
// capture frames through the intro timeline
for (const t of [800, 1600, 2400, 3000, 3600, 4400, 5400]) {
  await new Promise(r => setTimeout(r, t === 800 ? 800 : 800));
  await page.screenshot({ path: `temporary screenshots/frame-m-${t}.png` });
}
await browser.close();
console.log('frames done');
