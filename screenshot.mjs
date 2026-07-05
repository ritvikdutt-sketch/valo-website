import puppeteer from 'puppeteer-core';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const OUT_DIR = join(process.cwd(), 'temporary screenshots');

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const selector = process.argv[4] || null; // optional: capture just this element

mkdirSync(OUT_DIR, { recursive: true });
const next = readdirSync(OUT_DIR)
  .map(f => (f.match(/^screenshot-(\d+)/) || [])[1])
  .filter(Boolean)
  .reduce((m, n) => Math.max(m, +n), 0) + 1;
const outPath = join(OUT_DIR, `screenshot-${next}${label}.png`);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 4500)); // let load animations settle
await page.evaluate(() => new Promise(resolve => {
  // scroll through the page so scroll-triggered reveals fire, then back to top
  let y = 0;
  const step = () => {
    y += 700;
    window.scrollTo(0, y);
    if (y < document.body.scrollHeight) setTimeout(step, 250);
    else { window.scrollTo(0, 0); setTimeout(resolve, 800); }
  };
  step();
}));
if (selector) {
  await page.evaluate(sel => document.querySelector(sel)?.scrollIntoView({ block: 'start' }), selector);
  await new Promise(r => setTimeout(r, 3500)); // let section animations finish
  const el = await page.$(selector);
  if (el) await el.screenshot({ path: outPath });
  else await page.screenshot({ path: outPath });
} else {
  await page.screenshot({ path: outPath, fullPage: true });
}
await browser.close();
console.log(outPath);
