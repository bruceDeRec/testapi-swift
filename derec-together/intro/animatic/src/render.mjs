import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const out = process.argv[2] || 'frames', only = process.argv[3] ? process.argv[3].split(',').map(Number) : null;
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto('file://' + process.cwd() + '/render.html');
await p.evaluate(async () => { await document.fonts.load("600 176px 'Fraunces'"); await document.fonts.load("600 56px 'Atkinson Hyperlegible Next'"); await document.fonts.load("400 34px 'Atkinson Hyperlegible Next'"); });
const total = await p.evaluate(() => MHTimeline.END + MHTimeline.TAIL);
const list = only || [...Array(total).keys()];
for (const f of list) {
  const url = await p.evaluate(f => window.frame(f), f);
  fs.writeFileSync(`${out}/f${String(f).padStart(4, '0')}.png`, Buffer.from(url.split(',')[1], 'base64'));
}
if (!only) { const a = await p.evaluate(() => window.renderAudio()); fs.writeFileSync(`${out}/audio.wav`, Buffer.from(a.b64, 'base64')); console.log('audio peak', a.peak.toFixed(3), 'rms', a.rms.toFixed(4)); }
await b.close(); console.log('frames', list.length, 'errors', JSON.stringify(errs));
