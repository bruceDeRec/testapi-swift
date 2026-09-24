/* Many Hands — Episode 01 cold open, "The Float". Frame-accurate to intro/COLD-OPEN-STORYBOARD.md.
   24 fps; 120 frames = 5.00 s; bar one f0–f59, bar two f60–f119; the locked ritual master is f54–f119. */
(function (root) {
  const FPS = 24, END = 120, TAIL = 36;
  const HITS = [
    [0, 'Downbeat: already afloat'], [15, '“HANDS”: cut to the medium shot'], [30, 'The leaf lands. The one activity sound.'],
    [45, '“LIGHT”: the leaf becomes a hat'], [54, 'The hush: cut into the locked ritual'], [60, '“WORK”: the clap, the pat, the title settles'],
    [68, 'One stone, alone. Nothing glows.'], [75, 'Plink: Gran’s stone. Still dark.'], [82, 'Plink: the Harbourmaster’s stone. Still dark.'],
    [90, 'Home: all three light at once'], [102, 'The release: two threads rise'], [113, 'The threads meet on the rule'], [120, 'The button: cut to the hosts'],
  ];

  // Tuck's stone and the friends' stones meet just under her chin (storyboard §2, beat 7)
  const TUCK = { x: 960, y: 772, s: 1.2 };
  const STONE_REST = [0, 105];                         // local, held at the lens
  const THREAD_L = [[848, 896], [700, 866], [604, 772], [578, 644], [596, 556], [672, 530], [794, 528], [960, 528]];
  const THREAD_R = THREAD_L.map(([x, y]) => [1920 - x, y]);

  function render(ctx, f, fonts) {
    const D = root.MHDraw, s = D.seg, E = D.E, lerp = D.lerp;
    ctx.save(); ctx.clearRect(0, 0, 1920, 1080);

    if (f < 54) {
      // ---------------- bar one: the float (shot 1 wide f0–14, shot 2 medium f15–53) ----------------
      const medium = f >= 15;
      ctx.save();
      if (medium) { ctx.translate(960, 640); ctx.scale(1.85, 1.85); ctx.translate(-960, -690); }
      D.cove(ctx, f);
      D.airTaxi(ctx, lerp(1080, 1600, f / 54), 150 - f * 0.25, 1.5, f);
      const bob = Math.sin(f / 7) * 4;
      const kick = (f >= 47 && f < 51) ? Math.sin((f - 47) / 4 * Math.PI) : (f >= 52 && f < 56) ? Math.sin((f - 52) / 4 * Math.PI) : 0;
      const scull = Math.sin(f / 7.5 * Math.PI) * (f < 30 ? 1 : 0.3);
      D.ripplesAround(ctx, 960, 690 + bob, 1.2, f);
      const lift = f < 35 ? 0 : s(f, 35, 44, E.settle), onHead = f >= 45;
      const surprise = (f >= 30 && f < 35) ? 1 : 0;
      D.tuckFloat(ctx, { x: 960, y: 690, s: 1.2, bob: bob, flipper: scull + kick * 1.4, pawLift: onHead ? 0 : lift * 0.8,
        leafInPaws: f >= 30 && !onHead, leafOnHead: onHead, blink: surprise ? -0.25 : 0 });
      D.waterOver(ctx, 960, 690 + bob, 1.2);
      if (f < 30) {
        // the leaf: high top right at f0, three flat turns, lands on her chest at f30
        const t = f / 30, x = lerp(1330, 885, E.breath(t)) + Math.sin(t * Math.PI * 3) * 70 * (1 - t), y = lerp(70, 612, E.breath(t));
        D.mapleLeaf(ctx, x, y + bob * t, 0.95, 0.4 + t * 6.3);
      }
      ctx.restore();
    } else {
      // ---------------- bar two: the locked ritual master, f54–f119 ----------------
      const melt = s(f, 114, 119, E.leaf);               // plate first...
      const tuckAlpha = 1 - s(f, 116, 119, E.leaf);     // ...Tuck last
      D.pocketPlate(ctx, f, 0.6 * (1 - melt) + 0.4 * (1 - melt));
      const glow = f >= 90 ? Math.min(1, (f - 90 + 1) / 3) * (1 - s(f, 102, 105, null)) : 0;

      // Tuck's action
      const turn = f < 58 ? -18 * (1 - s(f, 54, 57, E.settle)) : 0;
      const patT = (f >= 60 && f < 63) ? Math.sin((f - 59) / 3 * Math.PI) : 0;
      const draw = s(f, 61, 65, E.settle), raise = s(f, 65, 67, E.settle);
      const down = s(f, 103, 106, E.tuck);
      const pat2 = (f >= 107 && f < 110) ? Math.sin((f - 106) / 3 * Math.PI) : (f >= 112 && f < 115) ? Math.sin((f - 111) / 3 * Math.PI) : 0;
      let pawL = [-40, 250], pawR = [40, 250], stone = null;
      if (f >= 60 && f < 61) { pawR = [150, 262]; }
      else if (f >= 61 && f < 106) {
        const out = [lerp(170, -40, draw), lerp(270, 240, draw)];
        const held = [lerp(out[0], STONE_REST[0], raise), lerp(out[1], STONE_REST[1], raise)];
        const st = [lerp(held[0], 168, down), lerp(held[1], 272, down)];
        stone = st; pawL = [st[0] - 62, st[1] + 10]; pawR = [st[0] + 62, st[1] + 10];
        if (f < 65) { pawL = [-40, 250]; pawR = [st[0] + 30, st[1] + 16]; }
      } else if (f >= 106) { pawR = [lerp(92, 150, pat2), lerp(230, 262, pat2)]; }
      else if (patT > 0) { pawR = [lerp(92, 150, patT), lerp(230, 262, patT)]; }
      const blink = f >= 112 ? (f <= 114 ? (f - 111) / 3 : f <= 116 ? 1 : Math.max(0, 1 - (f - 116) / 3)) : 0;

      // the friends: palms up, offering; from frame left low and frame right low; never touching each other
      const aIn = s(f, 68, 75, E.settle), bIn = s(f, 74, 82, E.settle), away = s(f, 102, 109, E.tuck);
      const gran = [lerp(560, 874, aIn), lerp(1200, 906, aIn) + away * 380];
      const harb = [lerp(1360, 1046, bIn), lerp(1200, 906, bIn) + away * 380];

      ctx.save(); ctx.globalAlpha = tuckAlpha;
      D.tuckFront(ctx, { x: TUCK.x, y: TUCK.y, s: TUCK.s, leaf: true, turn: turn, pawL: pawL, pawR: pawR, stone: stone, stoneOut: stone != null && down < 1, glow: glow, blink: blink });
      if (f >= 68 && away < 1) D.friendPaw(ctx, 300, 1180 + away * 380, gran[0], gran[1], '#5A3D2B', 'rgba(255,255,255,0.16)', glow, true, 1.0, 'sphere', false);
      if (f >= 74 && away < 1) D.friendPaw(ctx, 1620, 1180 + away * 380, harb[0], harb[1], '#6B5646', 'rgba(255,255,255,0.12)', glow, false, 1.0, 'lozenge', true);
      ctx.restore();

      // the title page: shield present from f54; type settles on the clap, f60–f77
      D.shieldMark(ctx, 1, fonts);
      D.titleType(ctx, f, 60, fonts, 1);
      // the release: two threads from the lit stones to the rule, meeting in the middle at f113; then the rule rests
      if (f >= 102) {
        const p = s(f, 102, 113, E.draw);
        const L = D.smooth(THREAD_L, 10), R = D.smooth(THREAD_R, 10);
        if (f < 114) { D.threadPath(ctx, L, p); D.threadPath(ctx, R, p); }
        else { const fade = 1 - s(f, 114, 118, null); ctx.save(); ctx.globalAlpha = fade; D.threadPath(ctx, L.slice(0, L.length - 12), 1); D.threadPath(ctx, R.slice(0, R.length - 12), 1); ctx.restore();
               D.thread(ctx, [[794, 528], [1126, 528]], 1); }
        const n = f - 113; D.node(ctx, 960, 528, n < 0 ? 0 : n < 3 ? (n + 1) / 3 : Math.max(0, 1 - (n - 3) / 3));
      }
    }

    if (f >= END) {
      ctx.fillStyle = '#123E32'; ctx.fillRect(0, 0, 1920, 1080);
      ctx.fillStyle = '#F7F3E6'; ctx.textAlign = 'center'; ctx.font = `600 72px ${fonts.display}`;
      ctx.fillText('Cut to the hosts', 960, 510);
      ctx.font = `400 36px ${fonts.text}`; ctx.fillStyle = '#A9C6B9';
      ctx.fillText('The wide two-shot. Bruce and Facundo, mid-smile, on the button chord.', 960, 580);
    }
    ctx.restore();
  }

  // the storyboard's hit-point table (§4), as sound
  function schedule(eng, t0, opt) {
    const sfx = !opt || opt.sfx !== false, N = root.MHAudio.N, at = (fr) => t0 + fr / FPS;
    // bar one
    eng.vibes(N.A4, at(0), 0.45); eng.vibes(N.B4, at(7.5), 0.45); eng.vibes(N.D5, at(15), 1.0);
    eng.rhodes([N.Fs3, N.A3, N.E4], at(0), 1.2);
    eng.rhodes([N.Gs3, N.B3, N.E4], at(30), 1.25);           // E/D rings through the hush to f60
    eng.bass(N.D2, at(0), 1, 1.2); eng.bass(N.D2, at(30), 0.8, 0.9); // bass stops for the hush at f54
    eng.guitar(N.B4, at(37.5), 0.8); eng.guitar(N.Gs4, at(45), 0.9);
    eng.snap(at(15)); eng.snap(at(45));
    eng.shaker(at(0), at(54));
    eng.pad([N.D3, N.A3, N.Fs4], at(0), 5.0, 500, 5000, 3.75);
    if (sfx) { eng.leaf(at(30)); eng.lap(at(47), 0.7); eng.lap(at(52), 0.6); }
    // bar two
    eng.vibes(N.A4, at(60), 2.2, 0.9); eng.guitar(N.A4, at(60), 0.9);
    eng.rhodes([N.Fs3, N.B3, N.D4], at(60), 0.62, 0.9);      // Gmaj7, no bass
    eng.clap(at(60));
    eng.rhodes([N.E3, N.Bb3, N.D4], at(75), 0.62, 0.85);     // Gm6, the borrowed iv
    eng.rhodes([N.E3, N.A3, N.D4, N.Fs4], at(90), 1.25, 1.0, 0.15); // home, bloomed
    eng.crotale(at(90), 0.8, true); eng.bass(N.D2, at(90), 0.5, 1.2);
    if (sfx) { eng.pat(at(60)); eng.setDown(at(75), -0.35); eng.setDown(at(82), 0.35); eng.pat(at(107)); eng.pat(at(112)); }
    // the button
    eng.vibes(N.Fs5, at(120), 1.8, 0.9);
    [N.D3, N.A3, N.D4, N.Fs4].forEach((n, i) => eng.guitar(n, at(120) + i * 0.02, 0.8));
    eng.rhodes([N.E3, N.A3, N.D4, N.Fs4], at(120), 1.3, 1.0); eng.bass(N.D2, at(120), 1, 1.4);
  }

  root.MHTimeline = { FPS, END, TAIL, HITS, render, schedule };
})(typeof window !== 'undefined' ? window : globalThis);
