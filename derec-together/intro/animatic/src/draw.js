/* Many Hands — animatic drawing kit. Canvas 2D, logical frame 1920x1080.
   Storybook flat shapes with an ink contour: a sketch of the look, not final art. */
(function (root) {
  const C = {
    zenith: '#1B5699', sky: '#4185CB', horizon: '#CFE6F6', paper: '#F7F3E6', ink: '#123E32', jade: '#1B7466',
    gilt: '#F2C96E', filament: '#FCEBB4', amber: '#E39A35', glass: '#7BE1DA', brass: '#A8843D',
    fur: '#5A3D2B', furCore: '#3A281D', furLight: '#6E4C37', cream: '#EFE2C8', whisker: '#F7EEDC', eye: '#1C2B25',
    kelp: '#1B7466', kelpHi: '#2F8F7D', kelpFold: '#123E32', stone: '#8E948F', stoneDark: '#6F7571', stoneHi: '#A9AEA9',
    leaf: '#D9772B', leafHi: '#F2B25C', leafVein: '#F6C98A', gran: '#8C8278', granHi: '#B9B0A6', choc: '#3F2A1F', chocHi: '#58402F',
  };
  const INK = 'rgba(18,62,50,0.55)';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  // brand motion curves (cubic-bezier approximations evaluated numerically)
  function bez(x1, y1, x2, y2) {
    return function (x) {
      if (x <= 0) return 0; if (x >= 1) return 1;
      let t = x;
      for (let i = 0; i < 8; i++) {
        const cx = 3 * (1 - t) * (1 - t) * t * x1 + 3 * (1 - t) * t * t * x2 + t * t * t - x;
        const dx = 3 * (1 - t) * (1 - t) * x1 + 6 * (1 - t) * t * (x2 - x1) + 3 * t * t * (1 - x2);
        if (Math.abs(dx) < 1e-6) break; t -= cx / dx; t = clamp(t, 0, 1);
      }
      return 3 * (1 - t) * (1 - t) * t * y1 + 3 * (1 - t) * t * t * y2 + t * t * t;
    };
  }
  const E = { settle: bez(0.16, 1, 0.3, 1), tuck: bez(0.32, 0, 0.67, 0), leaf: bez(0.65, 0, 0.35, 1), draw: bez(0.55, 0, 0.1, 1), breath: bez(0.37, 0, 0.63, 1) };
  const seg = (f, a, b, ease) => { const t = clamp((f - a) / (b - a), 0, 1); return ease ? ease(t) : t; };

  function outline(ctx, w) { ctx.lineWidth = w || 3; ctx.strokeStyle = INK; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(); }
  function ell(ctx, x, y, rx, ry, rot) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, rot || 0, 0, Math.PI * 2); }

  // ---------- props ----------
  function stone(ctx, x, y, s, glow, rot, shape) {
    const SH = { egg: [34, 24], sphere: [30, 28], lozenge: [38, 20] }[shape || 'egg'];
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot == null ? -0.18 : rot); ctx.scale(s, s);
    if (glow > 0) {
      const g = ctx.createRadialGradient(0, 0, 4, 0, 0, 90);
      g.addColorStop(0, `rgba(255,214,138,${0.85 * glow})`); g.addColorStop(0.35, `rgba(242,162,58,${0.45 * glow})`); g.addColorStop(1, 'rgba(242,162,58,0)');
      ctx.fillStyle = g; ell(ctx, 0, 0, 90, 90); ctx.fill();
    }
    ell(ctx, 0, 0, SH[0], SH[1]);
    const base = ctx.createLinearGradient(0, -SH[1], 0, SH[1]);
    if (glow > 0) {
      base.addColorStop(0, mix(C.stoneHi, '#FFE3A6', glow)); base.addColorStop(1, mix(C.stoneDark, '#E39A35', glow));
    } else { base.addColorStop(0, C.stoneHi); base.addColorStop(0.55, C.stone); base.addColorStop(1, C.stoneDark); }
    ctx.fillStyle = base; ctx.fill(); outline(ctx, 2.4 / s);
    // the chip (Tuck's stone only uses rot default; friends' stones pass rot)
    if (!shape || shape === 'egg') { ctx.fillStyle = glow > 0 ? 'rgba(160,90,20,0.5)' : C.stoneDark;
    ctx.beginPath(); ctx.moveTo(28, -12); ctx.lineTo(33, -6); ctx.lineTo(25, -7); ctx.closePath(); ctx.fill(); }
    // speckles
    ctx.fillStyle = glow > 0 ? 'rgba(255,245,220,0.5)' : 'rgba(230,232,228,0.55)';
    [[-14, -6], [-4, 8], [9, -10], [16, 6], [-20, 6], [2, -2]].forEach(([a, b]) => { ell(ctx, a, b, 1.6, 1.3); ctx.fill(); });
    ctx.restore();
  }
  function mix(a, b, t) {
    const pa = [1, 3, 5].map(i => parseInt(a.slice(i, i + 2), 16)), pb = [1, 3, 5].map(i => parseInt(b.slice(i, i + 2), 16));
    return 'rgb(' + pa.map((v, i) => Math.round(lerp(v, pb[i], t))).join(',') + ')';
  }
  function mapleLeaf(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0); ctx.scale(s, s);
    ctx.beginPath();
    const pts = [];
    for (let i = 0; i <= 180; i++) {
      const a = -Math.PI / 2 + (i / 180) * Math.PI * 2;
      const k = Math.cos(a + Math.PI / 2);
      // five lobes, top lobe tallest, with small secondary points
      let r = 30 + 14 * Math.pow(Math.abs(Math.cos(2.5 * (a + Math.PI / 2))), 3) + 4 * Math.abs(Math.cos(7.5 * (a + Math.PI / 2)));
      r *= 0.78 + 0.22 * (0.5 + 0.5 * k);
      if (Math.abs(a - Math.PI / 2) < 0.28) r *= 0.5; // notch for the stem
      pts.push([Math.cos(a) * r, Math.sin(a) * r * 0.95]);
    }
    pts.forEach(([a, b], i) => (i ? ctx.lineTo(a, b) : ctx.moveTo(a, b))); ctx.closePath();
    ctx.fillStyle = C.leaf; ctx.fill(); outline(ctx, 2 / s);
    ctx.strokeStyle = C.leafVein; ctx.lineWidth = 1.6 / s;
    [[0, -38], [-30, -16], [30, -16], [-22, 18], [22, 18]].forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(a * 0.8, b * 0.8); ctx.stroke(); });
    ctx.strokeStyle = INK; ctx.lineWidth = 2.2 / s; ctx.beginPath(); ctx.moveTo(0, 12); ctx.quadraticCurveTo(2, 26, -3, 34); ctx.stroke();
    ctx.restore();
  }
  function airTaxi(ctx, x, y, s, f) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.fillStyle = '#FFFFFF'; ell(ctx, 0, 0, 34, 11); ctx.fill(); outline(ctx, 1.4 / s);
    ctx.fillStyle = C.glass; ell(ctx, 10, -3, 12, 5); ctx.fill();
    ctx.strokeStyle = 'rgba(18,62,50,0.6)'; ctx.lineWidth = 1.2 / s;
    [-22, 22].forEach(px => { ctx.beginPath(); ctx.moveTo(px, -10); ctx.lineTo(px, -15); ctx.stroke();
      const w = 12 * Math.abs(Math.sin(f * 1.7 + px)); ctx.beginPath(); ctx.moveTo(px - w, -16); ctx.lineTo(px + w, -16); ctx.stroke(); });
    ctx.restore();
  }

  // ---------- paws ----------
  function arm(ctx, x0, y0, x1, y1, w, fill) {
    ctx.save(); ctx.lineCap = 'round';
    ctx.strokeStyle = INK; ctx.lineWidth = w + 5; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.strokeStyle = fill; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.restore();
  }
  function mitten(ctx, x, y, r, rot, fill, hi) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    ell(ctx, 0, 0, r * 1.15, r); ctx.fillStyle = fill; ctx.fill(); outline(ctx, 3);
    ctx.fillStyle = hi || 'rgba(255,255,255,0.12)'; ell(ctx, -r * 0.25, -r * 0.35, r * 0.55, r * 0.35); ctx.fill();
    // toe creases
    ctx.strokeStyle = 'rgba(18,62,50,0.35)'; ctx.lineWidth = 2;
    [-0.4, 0, 0.4].forEach(k => { ctx.beginPath(); ctx.moveTo(r * 0.75, k * r * 0.8); ctx.lineTo(r * 1.05, k * r * 0.85); ctx.stroke(); });
    ctx.restore();
  }
  // a friend's paw arriving from off-frame with a stone; faces are never shown
  function forearm(ctx, x0, y0, x1, y1, w0, w1, fill, grizzle) {
    const a = Math.atan2(y1 - y0, x1 - x0), nx = -Math.sin(a), ny = Math.cos(a);
    ctx.beginPath();
    ctx.moveTo(x0 + nx * w0 / 2, y0 + ny * w0 / 2);
    ctx.quadraticCurveTo((x0 + x1) / 2 + nx * (w0 + w1) / 3.4, (y0 + y1) / 2 + ny * (w0 + w1) / 3.4, x1 + nx * w1 / 2, y1 + ny * w1 / 2);
    ctx.lineTo(x1 - nx * w1 / 2, y1 - ny * w1 / 2);
    ctx.quadraticCurveTo((x0 + x1) / 2 - nx * (w0 + w1) / 4.2, (y0 + y1) / 2 - ny * (w0 + w1) / 4.2, x0 - nx * w0 / 2, y0 - ny * w0 / 2);
    ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); outline(ctx, 3);
    // underside shade
    ctx.save(); ctx.clip(); ctx.strokeStyle = 'rgba(18,20,16,0.22)'; ctx.lineWidth = w0 * 0.35;
    ctx.beginPath(); ctx.moveTo(x0 - nx * w0 * 0.42, y0 - ny * w0 * 0.42); ctx.lineTo(x1 - nx * w1 * 0.42, y1 - ny * w1 * 0.42); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.10)'; ctx.lineWidth = 2;
    for (let i = 0; i < 14; i++) { const t = 0.08 + i * 0.065, off = ((i % 3) - 1) * lerp(w0, w1, t) * 0.22, px = lerp(x0, x1, t) + nx * off, py = lerp(y0, y1, t) + ny * off; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + Math.cos(a) * 16, py + Math.sin(a) * 16); ctx.stroke(); }
    if (grizzle) { ctx.fillStyle = 'rgba(240,236,228,0.5)'; for (let i = 0; i < 40; i++) { const t = (i * 0.618) % 1, off = (((i * 37) % 17) / 17 - 0.5) * lerp(w0, w1, t) * 0.8; ell(ctx, lerp(x0, x1, t) + nx * off, lerp(y0, y1, t) + ny * off, 3.2, 1.4, a); ctx.fill(); } }
    ctx.restore();
  }
  // a friend's paw arriving from off-frame with a stone; faces are never shown
  function friendPaw(ctx, fromX, fromY, x, y, fill, hi, glow, grizzle, scale, shape, cuff) {
    // (x, y) is where the friend's STONE sits; the paw cradles it from below
    const k = scale || 1, a = Math.atan2(y - fromY, x - fromX);
    const px = x - Math.cos(a) * 34 * k, py = y - Math.sin(a) * 34 * k + 10 * k;
    forearm(ctx, fromX, fromY, px - Math.cos(a) * 18 * k, py - Math.sin(a) * 18 * k, 112 * k, 66 * k, fill, grizzle);
    if (cuff) { // a narrow waxed-canvas work cuff in Ink with one Jade stitch: helpers can be businesses
      const cx = px - Math.cos(a) * 58 * k, cy = py - Math.sin(a) * 58 * k, nx = -Math.sin(a), ny = Math.cos(a), w = 74 * k;
      ctx.save(); ctx.lineCap = 'butt'; ctx.strokeStyle = C.ink; ctx.lineWidth = 22 * k;
      ctx.beginPath(); ctx.moveTo(cx + nx * w / 2, cy + ny * w / 2); ctx.lineTo(cx - nx * w / 2, cy - ny * w / 2); ctx.stroke();
      ctx.strokeStyle = C.jade; ctx.lineWidth = 2.2; ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.moveTo(cx + nx * w / 2 + Math.cos(a) * 4, cy + ny * w / 2 + Math.sin(a) * 4); ctx.lineTo(cx - nx * w / 2 + Math.cos(a) * 4, cy - ny * w / 2 + Math.sin(a) * 4); ctx.stroke(); ctx.restore(); }
    mitten(ctx, px, py, 36 * k, a, fill, hi);
    stone(ctx, x, y, 1.1 * k, glow, a * 0.2 + 0.3, shape || 'sphere');
    ctx.save(); ctx.translate(x - Math.cos(a) * 8 * k, y + 20 * k); ell(ctx, 0, 0, 17 * k, 10 * k, 0.2); ctx.fillStyle = fill; ctx.fill(); outline(ctx, 2.4); ctx.restore();
  }

  // ---------- Tuck, front (the pocket shot) ----------
  // st: {x,y,s, blink, pawL:[x,y], pawR:[x,y], stone:[x,y]|null, glow, leaf:bool, tilt, eyesToLens}
  function tuckFront(ctx, st) {
    ctx.save(); ctx.translate(st.x, st.y); ctx.scale(st.s, st.s); ctx.rotate(st.tilt || 0);
    // body, chest-up
    ctx.beginPath(); ctx.moveTo(-78, 70);
    ctx.bezierCurveTo(-170, 110, -220, 200, -236, 460); ctx.lineTo(236, 460);
    ctx.bezierCurveTo(220, 200, 170, 110, 78, 70); ctx.closePath();
    ctx.fillStyle = C.fur; ctx.fill(); outline(ctx);
    // bib
    ell(ctx, 0, 190, 108, 128); ctx.fillStyle = C.cream; ctx.fill();
    // pocket fold under her left forearm (viewer's right)
    ctx.strokeStyle = C.furCore; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(128, 250); ctx.quadraticCurveTo(175, 268, 196, 238); ctx.stroke();
    if (!st.stoneOut) { ctx.fillStyle = C.furLight; ell(ctx, 168, 272, 20, 12, 0.2); ctx.fill(); outline(ctx, 2); }
    // kelp scarf, tied once on her left, with the float bulb
    ctx.lineCap = 'round';
    ctx.strokeStyle = INK; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(-96, 74); ctx.quadraticCurveTo(0, 128, 96, 74); ctx.stroke();
    ctx.strokeStyle = C.kelp; ctx.lineWidth = 28; ctx.beginPath(); ctx.moveTo(-96, 74); ctx.quadraticCurveTo(0, 128, 96, 74); ctx.stroke();
    ctx.strokeStyle = C.kelpHi; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-80, 70); ctx.quadraticCurveTo(0, 114, 80, 70); ctx.stroke();
    ctx.strokeStyle = INK; ctx.lineWidth = 20; ctx.beginPath(); ctx.moveTo(74, 94); ctx.quadraticCurveTo(104, 140, 96, 186); ctx.stroke();
    ctx.strokeStyle = C.kelp; ctx.lineWidth = 15; ctx.beginPath(); ctx.moveTo(74, 94); ctx.quadraticCurveTo(104, 140, 96, 186); ctx.stroke();
    ell(ctx, 74, 96, 17, 14); ctx.fillStyle = C.kelp; ctx.fill(); outline(ctx, 2.5);
    ell(ctx, 96, 198, 14, 15); ctx.fillStyle = C.kelpHi; ctx.fill(); outline(ctx, 2.5);
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ell(ctx, 91, 192, 4, 5); ctx.fill();
    // head
    ell(ctx, -100, -52, 17, 14); ctx.fillStyle = C.fur; ctx.fill(); outline(ctx, 2.5);
    ell(ctx, 100, -52, 17, 14); ctx.fill(); outline(ctx, 2.5);
    ell(ctx, 0, 0, 114, 98); ctx.fillStyle = C.fur; ctx.fill(); outline(ctx);
    ell(ctx, 0, 16, 92, 80); ctx.fillStyle = C.cream; ctx.fill();
    // eyes (button eyes, gold catchlight), blink squashes
    const bl = 1 - (st.blink || 0), tx = st.turn || 0;
    ctx.save(); ctx.translate(tx, 0);
    [-42, 42].forEach(ex => {
      ctx.save(); ctx.translate(ex * (1 - Math.abs(tx) / 90), -4); ctx.scale(1, Math.max(0.08, bl));
      ell(ctx, 0, 0, 10.5, 11.5); ctx.fillStyle = C.eye; ctx.fill();
      if (bl > 0.4) { ctx.fillStyle = C.gilt; ell(ctx, 3.5, -4, 3, 3); ctx.fill(); }
      ctx.restore();
      if (bl < 0.4) { ctx.strokeStyle = C.eye; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(ex - 11, -3); ctx.quadraticCurveTo(ex, 3, ex + 11, -3); ctx.stroke(); }
    });
    // whisker pads, nose, mouth
    ell(ctx, -20, 46, 24, 17); ctx.fillStyle = C.whisker; ctx.fill();
    ell(ctx, 20, 46, 24, 17); ctx.fill();
    ctx.fillStyle = 'rgba(18,62,50,0.28)'; [[-30, 44], [-22, 50], [-14, 42], [30, 44], [22, 50], [14, 42]].forEach(([a, b]) => { ell(ctx, a, b, 1.6, 1.6); ctx.fill(); });
    ctx.beginPath(); ctx.moveTo(-19, 20); ctx.quadraticCurveTo(0, 14, 19, 20); ctx.quadraticCurveTo(12, 36, 0, 38); ctx.quadraticCurveTo(-12, 36, -19, 20); ctx.closePath();
    ctx.fillStyle = C.eye; ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.25)'; ell(ctx, -6, 22, 5, 2.5); ctx.fill();
    ctx.strokeStyle = C.eye; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(0, 38); ctx.lineTo(0, 50); ctx.moveTo(-12, 58); ctx.quadraticCurveTo(0, 64, 12, 58); ctx.stroke();
    ctx.restore();
    // whiskers, seven a side
    for (let i = 0; i < 7; i++) {
      const a = -0.35 + i * 0.12;
      [-1, 1].forEach(side => {
        ctx.strokeStyle = 'rgba(18,62,50,0.35)'; ctx.lineWidth = 3.2;
        const x0 = side * 30, y0 = 44 + (i - 3) * 2.5, x1 = side * (150 + i * 3), y1 = y0 + Math.sin(a) * 60 + 8;
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo(side * 95, y0 + (i - 3) * 3, x1, y1); ctx.stroke();
        ctx.strokeStyle = C.whisker; ctx.lineWidth = 1.8; ctx.stroke();
      });
    }
    // the carry-over layer: maple leaf worn like a hat
    if (st.leaf) mapleLeaf(ctx, 22, -96, 1.05, 0.22);
    // arms and paws (both mitten paws; the stone is held in both)
    const shoulderL = [-150, 170], shoulderR = [150, 170];
    const pL = st.pawL || [-40, 250], pR = st.pawR || [40, 250];
    arm(ctx, shoulderL[0], shoulderL[1], pL[0], pL[1], 62, C.fur);
    arm(ctx, shoulderR[0], shoulderR[1], pR[0], pR[1], 62, C.fur);
    mitten(ctx, pL[0], pL[1], 32, Math.atan2(pL[1] - shoulderL[1], pL[0] - shoulderL[0]), C.fur);
    mitten(ctx, pR[0], pR[1], 32, Math.atan2(pR[1] - shoulderR[1], pR[0] - shoulderR[0]), C.fur);
    if (st.stone) {
      const ss = st.stoneScale || 1.25;
      stone(ctx, st.stone[0], st.stone[1], ss, st.glow || 0);
      if (st.held !== false) [[-1, pL], [1, pR]].forEach(([sd, p]) => { if (Math.hypot(p[0] - st.stone[0], p[1] - st.stone[1]) < 80) { ell(ctx, st.stone[0] + sd * 34 * ss, st.stone[1] + 6, 13, 10, sd * 0.5); ctx.fillStyle = C.fur; ctx.fill(); outline(ctx, 2.4); } });
    }
    ctx.restore();
  }

  // ---------- Tuck, floating on her back (side view) ----------
  // st: {x,y,s, bob, pawLift, leafOnHead, blink, flipper}
  function tuckFloat(ctx, st) {
    ctx.save(); ctx.translate(st.x, st.y + (st.bob || 0)); ctx.scale(st.s, st.s);
    const fl = st.flipper || 0;
    // hind flippers up at the right end
    ctx.save(); ctx.translate(150, -30); ctx.rotate(-0.5 + fl * 0.25);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(20, -60, 70, -80, 82, -58); ctx.bezierCurveTo(90, -40, 60, -10, 20, 14); ctx.closePath();
    ctx.fillStyle = C.furCore; ctx.fill(); outline(ctx); ctx.restore();
    ctx.save(); ctx.translate(128, -34); ctx.rotate(-0.85 - fl * 0.2);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(16, -56, 62, -74, 74, -52); ctx.bezierCurveTo(80, -34, 54, -8, 18, 12); ctx.closePath();
    ctx.fillStyle = '#4A3222'; ctx.fill(); outline(ctx); ctx.restore();
    // tail paddle
    ctx.beginPath(); ctx.moveTo(170, 4); ctx.quadraticCurveTo(240, -4, 262, 14); ctx.quadraticCurveTo(236, 26, 168, 24); ctx.closePath();
    ctx.fillStyle = C.furCore; ctx.fill(); outline(ctx);
    // body (belly up)
    ctx.beginPath(); ctx.moveTo(-120, -30); ctx.bezierCurveTo(-60, -78, 110, -74, 178, -18); ctx.bezierCurveTo(196, 10, 170, 40, 120, 44);
    ctx.lineTo(-110, 44); ctx.bezierCurveTo(-150, 30, -150, -10, -120, -30); ctx.closePath();
    ctx.fillStyle = C.fur; ctx.fill(); outline(ctx);
    // pale chest and throat
    ctx.beginPath(); ctx.moveTo(-118, -26); ctx.bezierCurveTo(-70, -66, 10, -70, 40, -58); ctx.bezierCurveTo(10, -30, -60, -12, -118, -26); ctx.closePath();
    ctx.fillStyle = C.cream; ctx.fill();
    // kelp scarf: a short collar under the chin, float bulb resting on the chest
    ctx.strokeStyle = INK; ctx.lineWidth = 20; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-150, -34); ctx.quadraticCurveTo(-122, -16, -96, -30); ctx.stroke();
    ctx.strokeStyle = C.kelp; ctx.lineWidth = 15; ctx.stroke();
    ell(ctx, -92, -36, 10, 10); ctx.fillStyle = C.kelpHi; ctx.fill(); outline(ctx, 2);
    // head, raised, turned three-quarters to camera
    ctx.save(); ctx.translate(-170, -70); ctx.rotate(-0.12);
    ell(ctx, -30, -46, 12, 10); ctx.fillStyle = C.fur; ctx.fill(); outline(ctx, 2.2);
    ell(ctx, 0, 0, 70, 62); ctx.fillStyle = C.fur; ctx.fill(); outline(ctx);
    ell(ctx, -8, 10, 58, 50); ctx.fillStyle = C.cream; ctx.fill();
    const bl = 1 - (st.blink || 0);
    [[-34, -4], [16, -6]].forEach(([ex, ey]) => { ctx.save(); ctx.translate(ex, ey); ctx.scale(1, Math.max(0.1, bl)); ell(ctx, 0, 0, 7.5, 8.5); ctx.fillStyle = C.eye; ctx.fill(); ctx.fillStyle = C.gilt; ell(ctx, 2.5, -3, 2.2, 2.2); ctx.fill(); ctx.restore(); });
    ell(ctx, -20, 30, 16, 11); ctx.fillStyle = C.whisker; ctx.fill(); ell(ctx, 4, 30, 16, 11); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-22, 14); ctx.quadraticCurveTo(-9, 9, 4, 14); ctx.quadraticCurveTo(-2, 25, -9, 26); ctx.quadraticCurveTo(-16, 25, -22, 14); ctx.fillStyle = C.eye; ctx.fill();
    for (let i = 0; i < 5; i++) { ctx.strokeStyle = C.whisker; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(-30, 30 + i * 2); ctx.quadraticCurveTo(-70, 26 + i * 4, -104, 22 + i * 7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(14, 30 + i * 2); ctx.quadraticCurveTo(48, 26 + i * 4, 76, 20 + i * 7); ctx.stroke(); }
    if (st.leafOnHead) mapleLeaf(ctx, 6, -64, 0.78, 0.3);
    ctx.restore();
    // paws on the chest (they lift the leaf)
    const lift = st.pawLift || 0;
    const p1 = [lerp(-58, -150, lift), lerp(-66, -150, lift)], p2 = [lerp(-26, -120, lift), lerp(-70, -152, lift)];
    arm(ctx, -70, -30, p1[0], p1[1], 30, C.fur); arm(ctx, -34, -34, p2[0], p2[1], 30, C.fur);
    mitten(ctx, p1[0], p1[1], 17, -1.2, C.fur); mitten(ctx, p2[0], p2[1], 17, -1.3, C.fur);
    if (st.leafInPaws) mapleLeaf(ctx, lerp(p1[0], p2[0], 0.5), lerp(p1[1], p2[1], 0.5) - 22, 0.78, 0.3 + lift * 0.2);
    ctx.restore();
  }

  // ---------- scenes ----------
  function skyGrad(ctx, W, H, warm) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, C.zenith); g.addColorStop(0.45, C.sky); g.addColorStop(1, warm ? '#F4E3C3' : C.horizon);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  function cove(ctx, f) {
    const W = 1920, H = 1080, HZ = 560;
    skyGrad(ctx, W, HZ + 40, true);
    // sun and haze
    const sun = ctx.createRadialGradient(360, 210, 10, 360, 210, 420);
    sun.addColorStop(0, 'rgba(252,235,180,0.95)'); sun.addColorStop(0.18, 'rgba(252,235,180,0.45)'); sun.addColorStop(1, 'rgba(252,235,180,0)');
    ctx.fillStyle = sun; ctx.fillRect(0, 0, W, HZ);
    // soft clouds
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    [[1250, 160, 1], [1500, 120, 0.8], [880, 110, 0.7]].forEach(([x, y, s]) => { const dx = (f * 0.25) % 40; [[0, 0, 70], [60, 10, 55], [-60, 12, 50], [20, -22, 48]].forEach(([a, b, r]) => { ell(ctx, x + a * s + dx, y + b * s, r * s * 1.5, r * s * 0.7); ctx.fill(); }); });
    // distant mountains
    ctx.fillStyle = '#9DB9D6'; ctx.beginPath(); ctx.moveTo(0, HZ - 60);
    [[160, HZ - 170], [330, HZ - 110], [520, HZ - 230], [700, HZ - 120], [900, HZ - 200], [1100, HZ - 140], [1320, HZ - 250], [1520, HZ - 150], [1720, HZ - 210], [1920, HZ - 120]].forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.lineTo(1920, HZ); ctx.lineTo(0, HZ); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.7)'; [[520, HZ - 230], [1320, HZ - 250]].forEach(([x, y]) => { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 40, y + 36); ctx.lineTo(x + 38, y + 34); ctx.fill(); });
    // far shore: white terraces, greenery, autumn trees, a waterfall
    ctx.fillStyle = '#6E9A6A'; ctx.beginPath(); ctx.moveTo(0, HZ - 20); ctx.quadraticCurveTo(700, HZ - 70, 1920, HZ - 30); ctx.lineTo(1920, HZ + 4); ctx.lineTo(0, HZ + 4); ctx.fill();
    ctx.fillStyle = '#6A9565'; ctx.beginPath(); ctx.moveTo(980, HZ); ctx.bezierCurveTo(1150, HZ - 120, 1500, HZ - 190, 1920, HZ - 170); ctx.lineTo(1920, HZ); ctx.closePath(); ctx.fill();
    for (let row = 0; row < 3; row++) for (let i = 0; i < 6 - row; i++) {
      const x = 1140 + row * 90 + i * 128, w = 108, h = 30, y = HZ - 18 - row * 42 - i * (6 + row * 4);
      ctx.fillStyle = '#FBF8EF'; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y - h, w, h, 9) : ctx.rect(x, y - h, w, h); ctx.fill();
      ctx.fillStyle = 'rgba(123,225,218,0.6)'; ctx.fillRect(x + 10, y - h + 9, w - 20, 5);
      ctx.fillStyle = '#5E8F55'; ell(ctx, x + 16, y - h, 22, 9); ctx.fill(); ell(ctx, x + w - 12, y - h - 1, 16, 8); ctx.fill();
      ctx.fillStyle = '#E3A33A'; ell(ctx, x + w * 0.55, y - h - 3, 8, 6); ctx.fill();
    }
    [[140, '#D98A2B'], [240, '#E3A33A'], [360, '#C8742A'], [470, '#E0B04A'], [620, '#D98A2B'], [760, '#8FAE5A'], [900, '#E3A33A']].forEach(([x, c], i) => { ctx.fillStyle = c; ell(ctx, x, HZ - 36 - (i % 2) * 10, 42, 34); ctx.fill(); ctx.fillStyle = 'rgba(58,40,29,0.6)'; ctx.fillRect(x - 3, HZ - 14 - (i % 2) * 10, 6, 14); });
    const wf = 1100; ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillRect(wf, HZ - 96, 14, 80);
    ctx.fillStyle = 'rgba(207,230,246,0.9)'; for (let k = 0; k < 4; k++) ctx.fillRect(wf + 2, HZ - 96 + ((f * 6 + k * 20) % 80), 10, 8);
    // water: saturated turquoise, lighter at the horizon
    const wg = ctx.createLinearGradient(0, HZ, 0, H);
    wg.addColorStop(0, '#8FD3D1'); wg.addColorStop(0.35, '#3FA9B3'); wg.addColorStop(1, '#17707F');
    ctx.fillStyle = wg; ctx.fillRect(0, HZ, W, H - HZ);
    // sun path glints
    for (let i = 0; i < 38; i++) {
      const y = HZ + 10 + i * i * 0.32, x = 360 + Math.sin(i * 12.9 + f * 0.18) * (20 + i * 5), w = 12 + i * 1.6;
      ctx.fillStyle = `rgba(252,235,180,${0.55 - i * 0.012})`; ell(ctx, x, y, w, 2 + i * 0.06); ctx.fill();
    }
    // calm ripple lines
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2.5;
    for (let r = 0; r < 14; r++) { const y = HZ + 40 + r * 34 + r * r * 1.6, x = ((r * 311 + f * 1.4) % 2200) - 140; ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 40, y - 5, x + 90 + r * 4, y); ctx.stroke(); }
  }
  function ripplesAround(ctx, x, y, s, f) {
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 3;
    for (let k = 0; k < 3; k++) { const p = ((f / 36 + k / 3) % 1), rx = (220 + p * 160) * s, ry = (28 + p * 20) * s; ctx.globalAlpha = 1 - p; ell(ctx, x + 20 * s, y + 30 * s, rx, ry); ctx.stroke(); }
    ctx.restore();
  }
  function waterOver(ctx, x, y, s) {
    // translucent water across the lower body so she sits IN the water; soft at the ends
    ctx.save(); ctx.translate(x + 20 * s, y + 52 * s); ctx.scale(1, 0.16);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 360 * s);
    g.addColorStop(0, 'rgba(52,158,170,0.96)'); g.addColorStop(0.72, 'rgba(58,164,176,0.9)'); g.addColorStop(1, 'rgba(63,169,179,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 360 * s, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); for (let i = 0; i <= 24; i++) { const px = x - 250 * s + i * 22 * s, py = y + 30 * s + Math.sin(i * 0.9) * 3; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke();
    ctx.restore();
  }
  // the pocket shot: the cove, defocused into warm bokeh (graded warmer)
  function bokeh(ctx, f, warmth) {
    const W = 1920, H = 1080;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, mix('#4F86C0', '#7FA4C6', warmth)); g.addColorStop(0.5, mix('#8FC7D0', '#E8D3A8', warmth)); g.addColorStop(1, mix('#2C8F9A', '#8E9F86', warmth));
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const dots = [[260, 300, 120, '252,235,180'], [520, 180, 80, '255,255,255'], [1480, 260, 140, '242,201,110'], [1700, 520, 100, '123,225,218'], [300, 760, 150, '63,169,179'], [1320, 820, 130, '217,138,43'], [880, 140, 60, '255,255,255'], [1120, 380, 90, '252,235,180'], [140, 520, 70, '227,163,58'], [1800, 160, 60, '255,255,255']];
    dots.forEach(([x, y, r, c], i) => { const dx = Math.sin(f * 0.03 + i) * 8; const rg = ctx.createRadialGradient(x + dx, y, r * 0.2, x + dx, y, r); rg.addColorStop(0, `rgba(${c},0.34)`); rg.addColorStop(0.8, `rgba(${c},0.22)`); rg.addColorStop(1, `rgba(${c},0)`); ctx.fillStyle = rg; ell(ctx, x + dx, y, r, r); ctx.fill(); });
  }
  // the gold thread (brand: 3px Gilt, 1px Filament core, a set glow)
  function thread(ctx, pts, prog, alpha) {
    if (prog <= 0) return; ctx.save(); ctx.globalAlpha = alpha == null ? 1 : alpha; ctx.lineCap = 'round';
    const draw = () => { ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
      if (pts.length === 4) { const bez = (t) => { const u = 1 - t; return [u*u*u*pts[0][0] + 3*u*u*t*pts[1][0] + 3*u*t*t*pts[2][0] + t*t*t*pts[3][0], u*u*u*pts[0][1] + 3*u*u*t*pts[1][1] + 3*u*t*t*pts[2][1] + t*t*t*pts[3][1]]; };
        for (let i = 1; i <= 40; i++) { const p = bez((i / 40) * prog); ctx.lineTo(p[0], p[1]); } }
      else { ctx.lineTo(lerp(pts[0][0], pts[1][0], prog), lerp(pts[0][1], pts[1][1], prog)); } };
    ctx.shadowColor = 'rgba(242,201,110,0.9)'; ctx.shadowBlur = 14; ctx.strokeStyle = C.gilt; ctx.lineWidth = 4; draw(); ctx.stroke();
    ctx.shadowBlur = 0; ctx.strokeStyle = C.filament; ctx.lineWidth = 1.4; draw(); ctx.stroke(); ctx.restore();
  }
  function node(ctx, x, y, a) { if (a <= 0) return; ctx.save(); const g = ctx.createRadialGradient(x, y, 0, x, y, 26); g.addColorStop(0, `rgba(252,235,180,${a})`); g.addColorStop(0.4, `rgba(242,201,110,${a * 0.6})`); g.addColorStop(1, 'rgba(242,201,110,0)'); ctx.fillStyle = g; ell(ctx, x, y, 26, 26); ctx.fill(); ctx.restore(); }

  // title page on the sky ground (primary colourway): imprint, title, rule, descriptor; shield apart top-right
  function titlePage(ctx, f0, f, opts) {
    const W = 1920, H = 1080, T = 176, cx = 960;
    const k = (d) => E.settle(clamp((f - f0 - d) / 12, 0, 1));
    const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, C.zenith); g.addColorStop(0.62, C.sky); g.addColorStop(1, C.horizon);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const top = 360;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    // imprint: "DeRec" Gilt + "Alliance" Paper
    let a = k(0); ctx.globalAlpha = a; const iy = top + (1 - a) * 12;
    ctx.font = `600 ${Math.round(T * 0.32)}px ${opts.text}`;
    const w1 = ctx.measureText('DeRec ').width, w2 = ctx.measureText('Alliance').width, x0 = cx - (w1 + w2) / 2;
    ctx.textAlign = 'left'; ctx.fillStyle = C.gilt; ctx.fillText('DeRec', x0, iy); ctx.fillStyle = C.paper; ctx.fillText('Alliance', x0 + w1, iy);
    // title
    a = k(3); ctx.globalAlpha = a; ctx.textAlign = 'center'; ctx.fillStyle = C.paper;
    ctx.font = `600 ${T}px ${opts.display}`; const ty = top + T * 0.46 + T * 0.72 + (1 - a) * 12; ctx.fillText('Many Hands', cx, ty);
    const tw = ctx.measureText('Many Hands').width;
    // descriptor
    a = k(6); ctx.globalAlpha = a; ctx.fillStyle = C.paper; ctx.font = `600 ${Math.round(T * 0.18)}px ${opts.text}`;
    const ry = ty + T * 0.41, dy = ry + T * 0.36 + (1 - a) * 12;
    if (ctx.letterSpacing !== undefined) ctx.letterSpacing = '6px';
    ctx.fillText('THE COMMUNITY PODCAST', cx, dy);
    if (ctx.letterSpacing !== undefined) ctx.letterSpacing = '0px';
    ctx.globalAlpha = 1;
    // the rule: two threads from each end meeting in the middle, then a node lights and fades
    const rw = tw * 0.38, p = E.draw(clamp((f - f0 - 6) / 18, 0, 1));
    thread(ctx, [[cx - rw / 2, ry], [cx, ry]], p); thread(ctx, [[cx + rw / 2, ry], [cx, ry]], p);
    const n = f - f0 - 24; node(ctx, cx, ry, n < 0 ? 0 : n < 6 ? n / 6 : Math.max(0, 1 - (n - 6) / 6));
    // shield placeholder (the Alliance master file goes here; never redrawn by AI)
    ctx.save(); ctx.globalAlpha = k(0); ctx.translate(1760, 150);
    ctx.beginPath(); ctx.moveTo(-54, -62); ctx.lineTo(54, -62); ctx.quadraticCurveTo(58, 20, 0, 70); ctx.quadraticCurveTo(-58, 20, -54, -62); ctx.closePath();
    ctx.fillStyle = '#10151A'; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = C.gilt; ctx.stroke();
    ctx.fillStyle = 'rgba(242,201,110,0.8)'; ctx.font = `600 13px ${opts.text}`; ctx.textAlign = 'center'; ctx.fillText('SHIELD', 0, -4); ctx.fillText('MASTER', 0, 14);
    ctx.restore();
  }


  // ---------- Pip, Tuck's friend: a mug-sized porcelain café robot ----------
  // st: {x,y,s, bob, face:'-'|'.'|'~'|'^', tilt, mitts:[[x,y],[x,y]]}
  function pip(ctx, st) {
    ctx.save(); ctx.translate(st.x, st.y + (st.bob || 0)); ctx.scale(st.s, st.s); ctx.rotate(st.tilt || 0);
    // hover glow
    const hg = ctx.createRadialGradient(0, 128, 2, 0, 128, 70); hg.addColorStop(0, 'rgba(123,225,218,0.55)'); hg.addColorStop(1, 'rgba(123,225,218,0)');
    ctx.fillStyle = hg; ell(ctx, 0, 128, 70, 16); ctx.fill();
    // softened shield body: flat top (a tray), rounded shoulders, blunt point
    ctx.beginPath(); ctx.moveTo(-50, -86); ctx.lineTo(50, -86); ctx.quadraticCurveTo(76, -86, 77, -58);
    ctx.bezierCurveTo(78, 10, 40, 72, 0, 96); ctx.bezierCurveTo(-40, 72, -78, 10, -77, -58); ctx.quadraticCurveTo(-76, -86, -50, -86); ctx.closePath();
    const g = ctx.createLinearGradient(-60, -90, 60, 96); g.addColorStop(0, '#FFFDF6'); g.addColorStop(1, '#EDE6D6');
    ctx.fillStyle = g; ctx.fill(); ctx.lineWidth = 4; ctx.strokeStyle = C.brass; ctx.stroke();
    // iron speckle
    ctx.fillStyle = 'rgba(140,123,102,0.55)'; [[-40,-50],[22,-64],[-14,10],[36,20],[-30,40],[8,60],[50,-30],[-56,-10]].forEach(([a,b]) => { ell(ctx, a, b, 1.6, 1.3); ctx.fill(); });
    // visor with the single face-line
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(-40, -72, 80, 30, 15) : ctx.rect(-40, -72, 80, 30); ctx.fillStyle = '#12332B'; ctx.fill();
    ctx.strokeStyle = '#46E0D2'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.shadowColor = 'rgba(70,224,210,0.8)'; ctx.shadowBlur = 8; ctx.beginPath();
    const f = st.face || '-';
    if (f === '^') { ctx.moveTo(-14, -52); ctx.lineTo(0, -62); ctx.lineTo(14, -52); }
    else if (f === '.') { ctx.arc(0, -57, 2.5, 0, Math.PI * 2); }
    else if (f === '~') { ctx.moveTo(-14, -56); ctx.quadraticCurveTo(-7, -63, 0, -57); ctx.quadraticCurveTo(7, -51, 14, -58); }
    else { ctx.moveTo(-14, -57); ctx.lineTo(14, -57); }
    ctx.stroke(); ctx.shadowBlur = 0;
    // chest window: dark glass, empty (Pip never holds a stone)
    ell(ctx, 0, -6, 13, 13); ctx.fillStyle = '#12332B'; ctx.fill(); ctx.strokeStyle = C.brass; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ell(ctx, -4, -10, 4, 3); ctx.fill();
    // two floating mitts with gold cuffs
    (st.mitts || [[-104, 6], [104, 6]]).forEach(([mx, my]) => {
      ell(ctx, mx, my, 17, 14); ctx.fillStyle = '#FBF8EF'; ctx.fill(); outline(ctx, 2.5);
      ctx.strokeStyle = C.brass; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(mx, my, 15, mx < 0 ? -0.6 : Math.PI - 0.6, mx < 0 ? 0.6 : Math.PI + 0.6); ctx.stroke();
    });
    ctx.restore();
  }


  function pocketPlate(ctx, f, plateAlpha) {
    const g = ctx.createLinearGradient(0, 0, 0, 1080);
    g.addColorStop(0, C.zenith); g.addColorStop(0.52, C.zenith); g.addColorStop(0.8, C.sky); g.addColorStop(1, C.horizon);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 1080);
    if (plateAlpha <= 0) return;
    ctx.save(); ctx.globalAlpha = plateAlpha;
    const pg = ctx.createLinearGradient(0, 560, 0, 1080);
    pg.addColorStop(0, 'rgba(120,170,176,0)'); pg.addColorStop(0.18, 'rgba(104,160,160,0.85)'); pg.addColorStop(0.55, '#5E9C98'); pg.addColorStop(1, '#3F7F80');
    ctx.fillStyle = pg; ctx.fillRect(0, 560, 1920, 520);
    const dots = [[240, 760, 150, '252,235,180'], [560, 690, 70, '255,255,255'], [1500, 720, 160, '242,201,110'], [1740, 930, 110, '123,225,218'], [330, 980, 140, '63,169,179'], [1340, 990, 120, '217,138,43'], [1180, 650, 60, '255,255,255'], [120, 880, 80, '227,163,58']];
    dots.forEach(([x, y, r, c], i) => { const dx = Math.sin(f * 0.03 + i) * 6; const rg = ctx.createRadialGradient(x + dx, y, r * 0.2, x + dx, y, r); rg.addColorStop(0, `rgba(${c},0.32)`); rg.addColorStop(0.8, `rgba(${c},0.2)`); rg.addColorStop(1, `rgba(${c},0)`); ctx.fillStyle = rg; ell(ctx, x + dx, y, r, r); ctx.fill(); });
    ctx.restore();
  }
  // the title page type, at the brand kit's positions (Sky colourway); the rule is drawn separately by the threads
  function titleType(ctx, f, t0, opts, alpha) {
    const k = (d) => E.settle(clamp((f - t0 - d) / 12, 0, 1)), A = alpha == null ? 1 : alpha;
    ctx.save(); ctx.textBaseline = 'alphabetic';
    let a = k(0); ctx.globalAlpha = a * A; ctx.font = `600 56px ${opts.text}`; ctx.textAlign = 'left';
    const w1 = ctx.measureText('DeRec ').width, w2 = ctx.measureText('Alliance').width, x0 = 960 - (w1 + w2) / 2, y1 = 252 + (1 - a) * 12;
    ctx.fillStyle = C.gilt; ctx.fillText('DeRec', x0, y1); ctx.fillStyle = C.paper; ctx.fillText('Alliance', x0 + w1, y1);
    a = k(3); ctx.globalAlpha = a * A; ctx.textAlign = 'center'; ctx.fillStyle = C.paper; ctx.font = `600 176px ${opts.display}`;
    ctx.fillText('Many Hands', 960, 456 + (1 - a) * 12);
    a = k(6); ctx.globalAlpha = a * A; ctx.font = `600 32px ${opts.text}`;
    if (ctx.letterSpacing !== undefined) ctx.letterSpacing = '7px';
    ctx.fillText('THE COMMUNITY PODCAST', 963, 592 + (1 - a) * 12);
    if (ctx.letterSpacing !== undefined) ctx.letterSpacing = '0px';
    ctx.restore();
  }
  function shieldMark(ctx, alpha, opts) {
    ctx.save(); ctx.globalAlpha = alpha; ctx.translate(1824 - 77, 72 + 90);
    ctx.beginPath(); ctx.moveTo(-72, -86); ctx.lineTo(72, -86); ctx.quadraticCurveTo(78, 28, 0, 92); ctx.quadraticCurveTo(-78, 28, -72, -86); ctx.closePath();
    ctx.fillStyle = '#10151A'; ctx.fill(); ctx.lineWidth = 6; ctx.strokeStyle = C.gilt; ctx.stroke();
    ctx.fillStyle = 'rgba(242,201,110,0.85)'; ctx.font = `600 17px ${opts.text}`; ctx.textAlign = 'center'; ctx.fillText('SHIELD', 0, -8); ctx.fillText('MASTER', 0, 14);
    ctx.restore();
  }
  // a thread drawn along a polyline, 0..1 of its length
  function threadPath(ctx, pts, prog) {
    if (prog <= 0) return;
    const seg = []; let L = 0;
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
    let rem = L * clamp(prog, 0, 1);
    const path = () => { ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); let r = rem;
      for (let i = 1; i < pts.length && r > 0; i++) { const t = Math.min(1, r / seg[i - 1]); ctx.lineTo(lerp(pts[i - 1][0], pts[i][0], t), lerp(pts[i - 1][1], pts[i][1], t)); r -= seg[i - 1]; } };
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(242,201,110,0.9)'; ctx.shadowBlur = 14; ctx.strokeStyle = C.gilt; ctx.lineWidth = 4; path(); ctx.stroke();
    ctx.shadowBlur = 0; ctx.strokeStyle = C.filament; ctx.lineWidth = 1.4; path(); ctx.stroke(); ctx.restore();
  }
  // smooth a control polygon into a dense polyline (Catmull-Rom)
  function smooth(pts, n) {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      for (let j = 0; j < n; j++) { const t = j / n, t2 = t * t, t3 = t2 * t;
        out.push([0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
                  0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)]); }
    }
    out.push(pts[pts.length - 1]); return out;
  }

  root.MHDraw = { C, E, seg, lerp, clamp, mix, stone, mapleLeaf, airTaxi, friendPaw, tuckFront, tuckFloat, cove, ripplesAround, waterOver, bokeh, thread, node, titlePage, ell, pip, pocketPlate, titleType, shieldMark, threadPath, smooth };
})(typeof window !== 'undefined' ? window : globalThis);
