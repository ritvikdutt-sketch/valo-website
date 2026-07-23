import puppeteer from 'puppeteer-core';
const CHROME = 'C:/Users/ritvi/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const ORIGIN = process.argv[2] || 'http://localhost:4321/valo-website/';
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(ORIGIN + 'core.html', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 2500));
for (let i = 0; i < 4; i++) { await page.keyboard.press('Tab'); await new Promise((r) => setTimeout(r, 150)); }
await new Promise((r) => setTimeout(r, 700)); // let the lamp fade in fully
const info = await page.evaluate(() => {
  const el = document.activeElement;
  const lamp = document.getElementById('nav-lamp');
  return {
    focused: el.textContent.trim(),
    lampOpacity: getComputedStyle(lamp).opacity,
    lampActive: el.classList.contains('lamp-active'),
  };
});
console.log(JSON.stringify(info));
const nav = await page.$('#site-nav nav');
await nav.screenshot({ path: 'temporary screenshots/focus-lamp.png' });
await browser.close();
