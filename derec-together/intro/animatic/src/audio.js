/* Many Hands — animatic sound engine.
   A synthesized SKETCH of the theme in music/THEME-AND-SOUND.md, for timing review only.
   The real theme is a commissioned human recording (DECISIONS R9). */
(function (root) {
  const N = { D2: 73.42, G2: 98.0, E3: 164.81, Fs3: 185.0, Gs3: 207.65, A3: 220.0, Bb3: 233.08, B3: 246.94,
    D3: 146.83, D4: 293.66, E4: 329.63, Fs4: 369.99, Gs4: 415.3, A4: 440.0, B4: 493.88, D5: 587.33, Fs5: 739.99, A5: 880.0, A6: 1760.0 };

  function noiseBuffer(ac, secs) {
    const b = ac.createBuffer(1, Math.ceil(ac.sampleRate * secs), ac.sampleRate);
    const d = b.getChannelData(0);
    let s = 1234567;
    for (let i = 0; i < d.length; i++) { s = (s * 1103515245 + 12345) & 0x7fffffff; d[i] = (s / 0x3fffffff) - 1; }
    return b;
  }

  function impulse(ac, secs, decay) {
    const len = Math.ceil(ac.sampleRate * secs), b = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c); let s = 99 + c * 7;
      for (let i = 0; i < len; i++) { s = (s * 1103515245 + 12345) & 0x7fffffff; d[i] = ((s / 0x3fffffff) - 1) * Math.pow(1 - i / len, decay); }
    }
    return b;
  }

  // Karplus–Strong pluck rendered into a buffer (nylon guitar, upright bass)
  function pluckBuffer(ac, freq, secs, bright, damp) {
    const sr = ac.sampleRate, len = Math.ceil(sr * secs), b = ac.createBuffer(1, len, sr), out = b.getChannelData(0);
    const period = Math.max(2, Math.round(sr / freq)), line = new Float32Array(period);
    let s = Math.round(freq * 1000);
    for (let i = 0; i < period; i++) { s = (s * 1103515245 + 12345) & 0x7fffffff; line[i] = ((s / 0x3fffffff) - 1) * 0.5; }
    // soften the initial burst (finger, not pick)
    for (let k = 0; k < (bright ? 1 : 3); k++) for (let i = 1; i < period; i++) line[i] = 0.5 * (line[i] + line[i - 1]);
    let idx = 0;
    for (let i = 0; i < len; i++) {
      const cur = line[idx], nxt = line[(idx + 1) % period];
      out[i] = cur;
      line[idx] = damp * 0.5 * (cur + nxt);
      idx = (idx + 1) % period;
    }
    return b;
  }

  function Engine(ac, destination) {
    this.ac = ac;
    const master = ac.createGain(); master.gain.value = 0.9;
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 8; comp.ratio.value = 3; comp.attack.value = 0.004; comp.release.value = 0.25;
    master.connect(comp); comp.connect(destination || ac.destination);
    const verb = ac.createConvolver(); verb.buffer = impulse(ac, 2.2, 3.2);
    const wet = ac.createGain(); wet.gain.value = 0.22; verb.connect(wet); wet.connect(master);
    this.dry = master; this.verb = verb;
    this.noise = noiseBuffer(ac, 2);
    this.cache = {};
  }
  Engine.prototype.bus = function (gain, pan, send) {
    const ac = this.ac, g = ac.createGain(); g.gain.value = gain;
    let node = g;
    if (pan && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = pan; g.connect(p); node = p; }
    node.connect(this.dry);
    if (send) { const s = ac.createGain(); s.gain.value = send; node.connect(s); s.connect(this.verb); }
    return g;
  };
  Engine.prototype.env = function (param, t, a, peak, d, floor) {
    param.setValueAtTime(0.0001, t);
    param.linearRampToValueAtTime(peak, t + a);
    param.exponentialRampToValueAtTime(Math.max(floor || 0.0001, 0.0001), t + a + d);
  };

  // Vibraphone: strong fundamental + 4th partial, slow motor tremolo
  Engine.prototype.vibes = function (f, t, dur, vel, motor, pan) {
    const ac = this.ac, out = this.bus(0.34 * (vel || 1), pan || -0.15, 0.55);
    const trem = ac.createGain(); trem.gain.value = 1; trem.connect(out);
    if (motor !== false) {
      const lfo = ac.createOscillator(), depth = ac.createGain();
      lfo.frequency.value = 3.4; depth.gain.value = 0.22; lfo.connect(depth); depth.connect(trem.gain);
      lfo.start(t); lfo.stop(t + dur + 0.1);
    }
    [[1, 1, dur], [4, 0.18, dur * 0.35], [10.2, 0.05, 0.25]].forEach(([m, g, d]) => {
      const o = ac.createOscillator(), e = ac.createGain();
      o.type = 'sine'; o.frequency.value = f * m; o.connect(e); e.connect(trem);
      this.env(e.gain, t, 0.004, g, d);
      o.start(t); o.stop(t + d + 0.05);
    });
  };

  Engine.prototype.pluck = function (f, t, vel, pan, secs, lp, damp) {
    const ac = this.ac, key = f + ':' + (secs || 2.5) + ':' + (damp || 0.996);
    if (!this.cache[key]) this.cache[key] = pluckBuffer(ac, f, secs || 2.5, false, damp || 0.996);
    const src = ac.createBufferSource(); src.buffer = this.cache[key];
    const filt = ac.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = lp || 3200;
    const out = this.bus(0.5 * (vel || 1), pan || 0.2, 0.35);
    src.connect(filt); filt.connect(out); src.start(t);
  };
  Engine.prototype.guitar = function (f, t, vel) { this.pluck(f, t, vel, 0.22, 2.6, 3000, 0.9965); };
  Engine.prototype.bass = function (f, t, vel, dur) {
    const ac = this.ac, out = this.bus(0.55 * (vel || 1), 0, 0.08);
    const o = ac.createOscillator(), o2 = ac.createOscillator(), e = ac.createGain(), lp = ac.createBiquadFilter();
    o.type = 'triangle'; o.frequency.value = f; o2.type = 'sine'; o2.frequency.value = f * 2;
    const g2 = ac.createGain(); g2.gain.value = 0.35;
    lp.type = 'lowpass'; lp.frequency.value = 900;
    o.connect(e); o2.connect(g2); g2.connect(e); e.connect(lp); lp.connect(out);
    const d = dur || 1.4; this.env(e.gain, t, 0.008, 0.9, d);
    o.start(t); o2.start(t); o.stop(t + d + 0.2); o2.stop(t + d + 0.2);
  };

  // Rhodes: sine tine with a fast bell partial, stereo tremolo
  Engine.prototype.rhodes = function (freqs, t, dur, vel, fadeIn) {
    const ac = this.ac, out = this.bus(0.16 * (vel || 1), 0, 0.4);
    const trem = ac.createGain(); trem.gain.value = 1; trem.connect(out);
    const lfo = ac.createOscillator(), depth = ac.createGain();
    lfo.frequency.value = 4.2; depth.gain.value = 0.12; lfo.connect(depth); depth.connect(trem.gain);
    lfo.start(t); lfo.stop(t + dur + 1.6);
    freqs.forEach((f, i) => {
      const o = ac.createOscillator(), bell = ac.createOscillator(), e = ac.createGain(), eb = ac.createGain();
      o.type = 'sine'; o.frequency.value = f; bell.type = 'sine'; bell.frequency.value = f * 7.1;
      o.connect(e); bell.connect(eb); e.connect(trem); eb.connect(trem);
      const tt = t + i * 0.006;
      e.gain.setValueAtTime(0.0001, tt);
      e.gain.linearRampToValueAtTime(0.8, tt + (fadeIn || 0.006));
      e.gain.setTargetAtTime(0.5, tt + 0.05, 0.4);
      e.gain.setTargetAtTime(0.0001, tt + dur, 0.35);
      this.env(eb.gain, tt, 0.002, fadeIn ? 0.02 : 0.08, 0.18);
      o.start(tt); bell.start(tt); o.stop(tt + dur + 1.6); bell.stop(tt + 0.3);
    });
  };

  // Juno-style pad: two detuned saws per note through an opening low-pass
  Engine.prototype.pad = function (freqs, t, dur, filterFrom, filterTo, openBy, vel) {
    const ac = this.ac, out = this.bus(0.03 * (vel || 1), 0, 0.6);
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 0.7;
    lp.frequency.setValueAtTime(filterFrom, t);
    lp.frequency.exponentialRampToValueAtTime(filterTo, t + openBy);
    const e = ac.createGain(); lp.connect(e); e.connect(out);
    e.gain.setValueAtTime(0.0001, t); e.gain.linearRampToValueAtTime(1, t + 0.35);
    e.gain.setValueAtTime(1, t + dur); e.gain.linearRampToValueAtTime(0.0001, t + dur + 0.8);
    freqs.forEach(f => [-7, 7].forEach(c => {
      const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = c;
      o.connect(lp); o.start(t); o.stop(t + dur + 0.9);
    }));
  };

  Engine.prototype.noiseHit = function (t, dur, type, freq, q, gain, pan, send) {
    const ac = this.ac, src = ac.createBufferSource(); src.buffer = this.noise;
    const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q || 1;
    const e = ac.createGain(); src.connect(f); f.connect(e); e.connect(this.bus(1, pan || 0, send || 0.2));
    this.env(e.gain, t, 0.002, gain, dur);
    src.start(t, Math.random() * 1.5, dur + 0.05);
  };
  Engine.prototype.snap = function (t) { this.noiseHit(t, 0.05, 'bandpass', 2600, 1.4, 0.35, 0.1, 0.3); this.noiseHit(t, 0.012, 'highpass', 5000, 0.7, 0.2, 0.1, 0.1); };
  Engine.prototype.shaker = function (t0, t1) {
    const beat = 0.625, sixteenth = beat / 4;
    for (let b = t0; b < t1 - 0.01; b += beat / 2) {
      // swung 56%: the off-sixteenth lands late
      [0, sixteenth * 2 * 0.56].forEach((o, i) => { const tt = b + o; if (tt < t1) this.noiseHit(tt, 0.045, 'highpass', 6500, 0.8, i ? 0.05 : 0.07, 0.3, 0.1); });
    }
  };
  // one group clap: 9 people, a few ms apart
  Engine.prototype.clap = function (t) {
    const offs = [0, 0.004, 0.007, 0.011, 0.013, 0.017, 0.02, 0.024, 0.027];
    offs.forEach((o, i) => this.noiseHit(t + o, 0.06 + (i % 3) * 0.01, 'bandpass', 1100 + (i * 173) % 700, 1.1, 0.16, ((i % 5) - 2) * 0.18, 0.55));
  };
  // Crotale A6: long bell with inharmonic partials; optional reversed swell before it
  Engine.prototype.crotale = function (t, vel, swell) {
    const ac = this.ac, out = this.bus(0.12 * (vel || 1), 0.1, 0.7);
    [[1, 1, 3.2], [2.76, 0.35, 1.4], [5.4, 0.12, 0.6], [8.93, 0.05, 0.3]].forEach(([m, g, d]) => {
      const o = ac.createOscillator(), e = ac.createGain(); o.type = 'sine'; o.frequency.value = N.A6 * m;
      o.connect(e); e.connect(out); this.env(e.gain, t, 0.002, g, d); o.start(t); o.stop(t + d + 0.1);
    });
    if (swell) {
      const len = 0.3125, s = t - len;
      const o = ac.createOscillator(), e = ac.createGain(); o.type = 'sine'; o.frequency.value = N.A6;
      const o2 = ac.createOscillator(); o2.type = 'sine'; o2.frequency.value = N.A6 * 2.76; const e2 = ac.createGain();
      o.connect(e); o2.connect(e2); e.connect(out); e2.connect(out);
      e.gain.setValueAtTime(0.0001, s); e.gain.exponentialRampToValueAtTime(0.5, t - 0.005); e.gain.linearRampToValueAtTime(0.0001, t);
      e2.gain.setValueAtTime(0.0001, s); e2.gain.exponentialRampToValueAtTime(0.18, t - 0.005); e2.gain.linearRampToValueAtTime(0.0001, t);
      o.start(s); o2.start(s); o.stop(t + 0.01); o2.stop(t + 0.01);
    }
  };
  // S01 "set down": glass meets stone, then a faint vibraphone A5 — identical every time; only pan changes
  Engine.prototype.setDown = function (t, pan) {
    this.noiseHit(t - 0.1, 0.1, 'highpass', 2400, 0.6, 0.025, pan, 0.1);       // slide
    this.noiseHit(t, 0.018, 'bandpass', 3800, 2.5, 0.22, pan, 0.25);           // "tk"
    const ac = this.ac, o = ac.createOscillator(), e = ac.createGain(), out = this.bus(0.09, pan, 0.5);
    o.type = 'sine'; o.frequency.value = N.A5; o.connect(e); e.connect(out);
    e.gain.setValueAtTime(0.0001, t); e.gain.linearRampToValueAtTime(1, t + 0.004);
    e.gain.setTargetAtTime(0.35, t + 0.02, 0.12); e.gain.setTargetAtTime(0.0001, t + 0.28, 0.03);
    o.start(t); o.stop(t + 0.45);
  };
  // S03 "home": the whole home chord at once, faded in, plus the crotale glint
  Engine.prototype.bloom = function (t) {
    this.rhodes([N.E3, N.A3, N.D4, N.Fs4], t, 1.6, 1.15, 0.15);
    this.vibes(N.Fs5, t + 0.02, 2.2, 0.55, true, 0);
    this.pad([N.D3, N.A3, N.Fs4], t, 1.4, 2400, 5200, 0.2, 1.1);
    this.crotale(t + 0.03, 0.9, false);
  };
  // friendly foley for Episode 01's activity: a leaf landing on fur, and a gentle water lap
  Engine.prototype.leaf = function (t) { this.noiseHit(t, 0.12, 'bandpass', 1800, 0.8, 0.08, -0.1, 0.2); this.noiseHit(t + 0.03, 0.08, 'bandpass', 3200, 1, 0.04, -0.1, 0.1); };
  Engine.prototype.lap = function (t, g) { this.noiseHit(t, 0.5, 'lowpass', 700, 0.5, 0.05 * (g || 1), -0.3, 0.3); };
  Engine.prototype.pat = function (t) { this.noiseHit(t, 0.07, 'lowpass', 420, 0.7, 0.35, 0.05, 0.05); this.noiseHit(t, 0.03, 'bandpass', 1400, 1, 0.05, 0.05, 0.05); };

  // S02 "knock, and 'here'": two soft knocks, then one identical Rhodes D5 reply per helper, each a little farther away
  Engine.prototype.checkIn = function (t, helpers) {
    this.noiseHit(t, 0.06, 'lowpass', 380, 0.8, 0.4, 0, 0.1); this.noiseHit(t + 0.14, 0.06, 'lowpass', 380, 0.8, 0.34, 0, 0.1);
    const pans = [-0.5, 0.45, -0.15, 0.3, 0];
    for (let i = 0; i < (helpers || 3); i++) {
      const ac = this.ac, tt = t + 0.4 + i * 0.12, o = ac.createOscillator(), e = ac.createGain(), out = this.bus(0.1 * Math.pow(0.89, i), pans[i], 0.35 + i * 0.1);
      o.type = 'sine'; o.frequency.value = 587.33; o.connect(e); e.connect(out); this.env(e.gain, tt, 0.006, 1, 0.5); o.start(tt); o.stop(tt + 0.6);
    }
  };

  root.MHAudio = { Engine: Engine, N: N };
})(typeof window !== 'undefined' ? window : globalThis);
