import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 2040, height: 1420 } });
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto('file://' + process.cwd() + '/board.html');
await p.evaluate(async () => { await document.fonts.load("600 44px 'Fraunces'"); await document.fonts.load("600 26px 'Atkinson Hyperlegible Next'"); await document.fonts.load("400 20px 'Atkinson Hyperlegible Next'"); });
const url = await p.evaluate(() => window.drawBoard());
fs.writeFileSync('storyboard-frames.png', Buffer.from(url.split(',')[1], 'base64'));
await b.close(); console.log('ok', errs);
