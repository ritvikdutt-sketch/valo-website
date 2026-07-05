import puppeteer from 'puppeteer-core';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const OUT_DIR = join(process.cwd(), 'temporary screenshots');

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

mkdirSync(OUT_DIR, { recursive: true });
const next = readdirSync(OUT_DIR)
  .map(f => (f.match(/^screenshot-(\d+)/) || [])[1])
  .filter(Boolean)
  .reduce((m, n) => Math.max(m, +n), 0) + 1;
const outPath = join(OUT_DIR, `screenshot-${next}${label}.png`);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 4500)); // let load animations settle
await page.evaluate(() => new Promise(resolve => {
  let y = 0;
  const step = () => {
    y += 700;
    window.scrollTo(0, y);
    if (y < document.body.scrollHeight) setTimeout(step, 250);
    else { window.scrollTo(0, 0); setTimeout(resolve, 800); }
  };
  step();
}));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(outPath);
