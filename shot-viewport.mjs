import puppeteer from 'puppeteer-core';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const OUT_DIR = join(process.cwd(), 'temporary screenshots');

const url = process.argv[2];
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const width = parseInt(process.argv[4] || '1440', 10);
const height = parseInt(process.argv[5] || '900', 10);
const scrollY = parseInt(process.argv[6] || '0', 10);

mkdirSync(OUT_DIR, { recursive: true });
const next = readdirSync(OUT_DIR)
  .map(f => (f.match(/^screenshot-(\d+)/) || [])[1])
  .filter(Boolean)
  .reduce((m, n) => Math.max(m, +n), 0) + 1;
const outPath = join(OUT_DIR, `screenshot-${next}${label}.png`);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
const mobile = width < 700;
await page.setViewport({ width, height, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 4500));
if (scrollY > 0) {
  await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
  await new Promise(r => setTimeout(r, parseInt(process.argv[7] || '4500', 10)));
}
await page.screenshot({ path: outPath });
await browser.close();
console.log(outPath);
