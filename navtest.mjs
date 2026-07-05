import puppeteer from 'puppeteer-core';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const OUT_DIR = join(process.cwd(), 'temporary screenshots');
mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

// Simulate clicking a nav link: load the page at the top, then click the link.
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 2500));

const targets = ['#family', '#trust', '#contact'];
let n = readdirSync(OUT_DIR)
  .map(f => (f.match(/^screenshot-(\d+)/) || [])[1]).filter(Boolean)
  .reduce((m, x) => Math.max(m, +x), 0);

for (const t of targets) {
  await page.click(`nav a[href="${t}"]`);
  await new Promise(r => setTimeout(r, 3000)); // smooth scroll + reveal animations
  const out = join(OUT_DIR, `screenshot-${++n}-nav${t.slice(1)}.png`);
  await page.screenshot({ path: out });
  console.log(out);
}
await browser.close();
