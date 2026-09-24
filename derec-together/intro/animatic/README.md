# The Episode 01 animatic

A timing sketch of the cold open in `../COLD-OPEN-STORYBOARD.md`, drawn and scored in code. **It is not final art.** The locked ritual is hand-animated by a studio (DECISIONS R9), and the theme is a commissioned human recording. This exists so the hosts can judge the five seconds, beat by beat, before anyone is paid to animate them.

| File | What it is |
|---|---|
| `many-hands-ep01-cold-open-animatic.mp4` | 1920×1080, 24 fps, 6.5 s: the 5.00 s bumper, then a slate for the cut to the hosts while the button chord rings. H.264 and AAC, normalised to about −14 LUFS. |
| `storyboard-frames.png` | The storyboard's twelve beats as labelled animatic frames on one board |
| `src/` | The source: `draw.js` (characters and plates), `timeline.js` (every beat and hit point, frame-accurate to the storyboard), `audio.js` (a Web Audio sketch of the theme and the three sound signatures), plus the renderers |

The same scripts drive the playable animatic on the review page (`../../index.html`), so the page, this MP4 and the storyboard can't drift apart.

## Re-rendering

You need Node with Playwright and Chromium, Python 3, and an ffmpeg with libx264 (`pip install imageio-ffmpeg` provides one).

```bash
cd src
./fetch-fonts.sh                     # Fraunces + Atkinson Hyperlegible Next (OFL) into ./fonts
node render.mjs full                 # 156 PNG frames + audio.wav into ./full
FF=$(python3 -c "import imageio_ffmpeg as f; print(f.get_ffmpeg_exe())")
$FF -y -i full/audio.wav -af loudnorm=I=-14:TP=-1.5:LRA=7 -ar 48000 full/audio-14.wav
$FF -y -framerate 24 -i full/f%04d.png -i full/audio-14.wav -c:v libx264 -pix_fmt yuv420p -crf 17 -preset slow -tune animation \
    -c:a aac -b:a 192k -shortest -movflags +faststart ../many-hands-ep01-cold-open-animatic.mp4
node board.mjs                       # writes storyboard-frames.png here; move it up one level
```

`render.mjs` and `board.mjs` import Playwright from `/opt/node22/lib/node_modules/playwright/index.mjs`. Change that line to `import { chromium } from 'playwright';` if Playwright is installed in the project.

## What was checked

- **Frames:** all 156 render with no script errors.
- **Audio sync:** the measured onsets land on the storyboard's hit frames: f15, f30, f45, f60, f90 and f120.
- **Panning:** the two plinks measure on the left channel at f75 and the right channel at f82, as specified.
- **Loudness:** −13.6 LUFS integrated, −2.4 dBFS peak.
