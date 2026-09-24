# Many Hands: brand kit

The visual system for the DeRec Alliance community podcast, hosted by Bruce Longley and Facundo La Rocca. It binds every team: intro, mascot, graphics, edit, thumbnails and key art. Every rule comes with its reason. **[HOST GATE]** marks something that needs Bruce's or Facundo's sign-off, and **[VERIFY]** marks a fact to check. Both are listed at the end. The show name follows `season/FORMAT.md`: it's *Many Hands*, which is itself [HOST GATE]. Every rule here also works for the runner-up name.

All sizes are for a 1920×1080 frame, with percentages of frame height (H) so they scale to 4K and 720p. Animation runs at 24 fps. Hex values are sRGB and Rec.709 code values: enter them unchanged in the edit.

---

## The idea

The brief asks for **"a beautifully printed book about tomorrow."** Taken literally, that sentence designs the whole system.

- **The book** comes from the prior package: cream paper, deep green ink, a jade cloth binding, a quiet page. It brings structure, calm and trust.
- **Tomorrow** comes from the cover: a sunlit sky and gold light. It brings joy.
- **The light thread** joins the two. On paper it's *printed*, like a gold rule in a well-made book. In the world it *glows*, like the orbit of light between the two friends on the cover. It's the same line in two states, and that one gesture is the brand.

The working rule for everyone: **classic structure, modern light, fun in the details.**
- *Structure* means the grid, the serif, the paper and a centred title page.
- *Light* means the gold threads, the sky and the glass.
- *Fun* goes in the details, never in the structure. Examples: the two threads that meet in the middle of the title card, the hanging quote mark, the thread that leaves the page on a thumbnail, the mascot's little engraving in a running head.

## The system on one page

- **Two primaries, both from the cover:** **Gilt** `#F2C96E` and **Sky** `#4185CB`. Sky always appears as a gradient with **Zenith** `#1B5699` and **Horizon** `#CFE6F6`.
- **The page, from the prior package:** **Paper** `#F7F3E6`, **Ink** `#123E32` and **Jade** `#1B7466`. Ink and Jade are kept exactly.
- **One gold with two states.** It's **Gilt** when it's light and **Brass** `#A8843D` when it's printed on paper. The prior `#B18C44` is retired, because it reaches only 2.82:1 on paper.
- **Glass** `#7BE1DA` is for machines and glass only. It's never a thread and never sits on paper.
- **No red.** No colour ever signals danger or success.
- **Type:** **Fraunces** for display, **Atkinson Hyperlegible Next** for text, and **Atkinson Hyperlegible Mono** for version strings. All three are SIL Open Font License.
- **The lockup is a title page:** the imprint "DeRec Alliance", the title "Many Hands", a gold rule, then "THE COMMUNITY PODCAST". The shield sits top right and comes only from the Alliance's master file.
- **The thread:** at most seven nodes. It's never a diagram and never carries moving light, and it never appears while the show is teaching. It meets the mascot in one place only: the ritual's release, where it lifts off the three lit stones and draws the title's rule. Tuck never touches it (§4).
- **The Curve:** teaching gets its own picture, an Ink line on Paper that wobbles until the threshold and then settles. It's furniture, never gold and never the thread (§6).
- **The characters:** Tuck, a sea otter, and her friend Pip, a porcelain café robot. Their palettes borrow this kit's tokens unchanged and add no brand colours (§1).
- **Motion:** five named curves and no bounce. The house transition is called **the Leaf**. The shield, the letters of the title and the Where It Stops band never move.
- **Furniture is paper.** Every graphic is a paper slip with a jade spine, and it sits above the **caption line** at 78% of H. Segment names sit at the top of the frame, where a book puts its running heads.
- **Grade:** paper highlights, ink shadows, warm people, cool sky.

### Where this kit departs from FORMAT.md, and why

1. **The title is set in Fraunces and the imprint in Atkinson.** FORMAT asked for both in "the same typeface". A classic title with a modern imprint puts the client's "classic, with a touch of modernity" on the page itself. It also keeps the imprint close to the clean sans the client already liked on the cover. [HOST GATE]
2. **Segment tabs sit at the top of the frame, as running heads**, not as lower thirds. The bottom 22% of the frame belongs to the human-corrected captions that FORMAT requires on every upload. Books also put chapter names at the top of the page.
3. **On the end card, the outtake plays in a framed plate beside YouTube's elements**, not full-frame underneath them. Elements laid over a full-frame outtake would cover the hosts' faces, and faces are the product.
4. **The descriptor is set in spaced capitals, as FORMAT says.** The cover actually spaces *lowercase* letters. Old typesetters' rule: letterspace capitals, never lowercase.

---

## 1. Palette

### The colours and their jobs

**Primaries: tomorrow, from the cover**

| Token | Hex | Where it comes from | Its job | Never |
|---|---|---|---|---|
| **Gilt** | `#F2C96E` | Sampled from the cover's "DeRec" lettering (core `#F0CA6F`–`#F3D47F`) and the shield's arrow (`#EDCA73`) | **Light.** Lit threads and nodes, "DeRec" in the imprint on sky or dark grounds, the edge of the Leaf, and the halo of a lit stone in the ritual | Text on Paper (1.42:1). More than 5% of any frame. Objects: no gold coins, bars or trophies. |
| **Sky** | `#4185CB` | The cover's sky behind the lettering (`#4084CA`) | **The ground of tomorrow:** title card, key-art skies, channel banner | A flat fill, because flat blue reads as fintech. A text ground at this value (Paper on Sky is only 3.48:1). |
| Zenith | `#1B5699` | The cover's sky, deepened | The top of every sky gradient, and the **only** sky value that type may sit on | – |
| Horizon | `#CFE6F6` | The haze on the cover's skyline | The bottom of every sky gradient | A ground for Paper or Gilt type |

**The page: the book, from the prior package**

| Token | Hex | Where it comes from | Its job | Never |
|---|---|---|---|---|
| **Paper** | `#F7F3E6` | Between the prior's cool `#F7F8F1` and the cover's cream jacket highlights (`#FEF7E0`), toned down a shade so it never glares on a phone | Every card, slip and page. The light-mode ground. The white point of the grade. | Pure white `#FFFFFF` anywhere in the graphics |
| **Ink** | `#123E32` | The prior package, **kept exactly** | All text on paper. The black point of the grade. The raised surface in dark mode. | Pure black |
| **Jade** | `#1B7466` | The prior package, **kept exactly** | **The binding:** the spine on every slip. Also kickers, role lines and attributions, the secondary text. | Large fills, which turn heavy and institutional. Text on sky (1.32:1 on Zenith). |
| **Brass** | `#A8843D` | The prior's `#B18C44`, deepened about 5% | **Gold printed on paper:** the printed thread, rules, the hanging quote mark, "DeRec" in the paper colourway, the mascot's engraving | Any text smaller than 56 px. Dark grounds, where Gilt does the job. |

**Accents**

| Token | Hex | Where it comes from | Its job | Never |
|---|---|---|---|---|
| **Glass** | `#7BE1DA` | The cover's glass cards (`#7BE1DA`) and its white-and-cyan robots | **Machines and glass:** glass-card edges in key art, a robot's indicator light, highlights in dark mode, and Pip's face-line and hover glow | A thread (see §4). A paper ground (1.39:1). Any frame where a limit is being stated. |
| Filament | `#FCEBB4` | The hot centre of the cover's nodes (`#FEF6C1`) | The 1 px core of a lit thread, the core of a node, the core of a lit stone, and Tuck's catchlight | Anything else |
| Amber | `#E39A35` | The café gems (`#EA9727`–`#EFB54B`) | **Props:** the tabletop tokens and Facundo's jar tokens, plus their icon in the Jargon Jar tally. **The lit stones:** the body of each stone at the ritual's threshold, always with its Filament core and Gilt halo. | Any other graphic. Text. |

**Lamplight: the dark set**

| Token | Hex | Job |
|---|---|---|
| Night | `#0B231D` | Ground |
| Ink | `#123E32` | Raised surface: cards and panels |
| Paper | `#F7F3E6` | Primary text |
| Lichen | `#A9C6B9` | Secondary text |
| Gilt | `#F2C96E` | Display and accent. Brass never appears in the dark set, because gold on dark is always lit. |
| Jade Light | `#5FC0A9` | Links and the spine |
| Glass | `#7BE1DA` | Machine highlights |
| Night Sky | `#1D3D73` | Ground for the dusk variant of the title card and end card. It's the observatory sky (`#254B8E`), deepened. |

**Where Lamplight is used:**
- the dusk variant of the title card and end card, only when that episode's bumper is set at night;
- web pages, community posts and review pages viewed in dark mode.

**Where it isn't:** furniture laid over footage is always Paper, so the show looks the same inside every episode.

**Recipes.** These are treatments made from the colours above, not extra colours.
- **Rule:** Ink at 16% opacity on Paper (it renders as `#D2D6C9`). Use it for hairlines and keylines.
- **Lift shadow:** Ink at 18%, offset 0 px across and 6 px down, 24 px blur. Use it only for paper laid over footage, so the slip sits on the picture like paper on a table.
- **Dither:** add 1.5% monochrome noise to every gradient before export. YouTube's encoder bands smooth gradients, and the noise prevents it.

### The gold decision: one gold, two states

There's one gold. It lives in two states, the way gold leaf on a book looks different in sunlight and in shade.

- **Gilt `#F2C96E` is gold when it's light.** It's the cover's gold, sampled from the lettering and the shield. It glows, and it only appears on grounds dark enough to glow against: Zenith, Night Sky, Night, Ink and footage.
- **Brass `#A8843D` is gold when it's printed.** It's the prior package's gold, deepened just enough to hold up on cream. It never glows. It appears only on Paper.

**Why not keep one flat gold?**
- The cover's gold on Paper measures **1.42:1**, so it vanishes.
- The prior `#B18C44` measures **2.82:1** on our Paper, and **2.93:1** on the prior package's own paper. It fails WCAG's 3:1 floor for large text and graphics, so the prior package's small gold labels ("01 / WORKSHOP") never actually passed.
- Brass fixes this with the smallest change that works: `#B18C44` becomes `#A8843D`, and reaches **3.14:1**.
- Brass is therefore a **display and ornament gold**. It's used for rules, the hanging quote mark and "DeRec" at 56 px or larger. It's never used for small text: on paper, small text is Ink or Jade.

**The rule the editor follows without thinking: gold on dark glows (Gilt), and gold on paper is printed (Brass). Never swap them.**

### Contrast

These are WCAG 2.x contrast ratios for every text pairing the kit recommends, computed from the hex values above.

Our house standard is stricter than WCAG's size bands, because a phone held sideways turns 1080p type into small print:
- **everything that must be read clears 4.5:1;**
- only display type at 56 px or larger may drop to 3:1, and only Brass does.

| Text | Ground | Ratio | Result | Used for |
|---|---|---|---|---|
| Ink | Paper | **10.74:1** | AAA | All text on slips and cards, the Where It Stops line |
| Jade | Paper | **5.06:1** | AA | Kickers, role lines, attributions |
| Brass | Paper | **3.14:1** | AA large only | "DeRec" at 56 px or larger on paper, the hanging quote mark, rules. **Never small text.** |
| Paper | Zenith | **6.67:1** | AA | Title, "Alliance" and descriptor on the title card |
| Gilt | Zenith | **4.71:1** | AA | "DeRec" in the title-card imprint |
| Paper | Ink | **10.74:1** | AAA | Text on a dark raised surface (Lamplight) |
| Gilt | Ink | **7.58:1** | AAA | Gold display type on dark surfaces |
| Glass | Ink | **7.74:1** | AAA | Dark-mode highlights |
| Paper | Night | **14.87:1** | AAA | Dark-mode body text |
| Lichen | Night | **9.01:1** | AAA | Dark-mode secondary text |
| Gilt | Night | **10.50:1** | AAA | Dark-mode display |
| Jade Light | Night | **7.54:1** | AAA | Dark-mode links |
| Glass | Night | **10.71:1** | AAA | Dark-mode highlights |
| Lichen | Ink | **6.51:1** | AA | Secondary text on a dark raised surface |
| Jade Light | Ink | **5.45:1** | AA | Links on a dark raised surface |
| Paper | Night Sky | **9.62:1** | AAA | Dusk title card |
| Gilt | Night Sky | **6.79:1** | AA | "DeRec" on the dusk title card |
| Lichen | Night Sky | **5.83:1** | AA | Descriptor on the dusk title card |

**Pairings that are banned, with the numbers:**
- Gilt on Paper, 1.42:1.
- Glass on Paper, 1.39:1.
- Amber on Paper, 2.12:1. As an icon it needs a 2 px Ink ring.
- Gilt on Sky, 2.45:1.
- Paper on Sky, 3.48:1.
- Jade on Zenith, 1.32:1.
- The prior gold on Paper, 2.82:1.

**The title-card gradient is built around these numbers** (full spec in §6). It holds flat Zenith down to 52% of H, which is where the lockup lives. At the descriptor's baseline (55% of H), Paper measures 6.57:1 and Gilt 4.64:1. By 60% of H, Gilt has dropped to 4.14:1, so no gold type goes below 56% of H on a day sky.

### Proportion

- **Gold never covers more than 5% of a frame.** It's foil: the rarer it is, the more it glows.
- **Title card:** about 85% sky, about 10% Paper type, at most 5% Gilt.
- **Inside an episode:** the picture is the hosts. Furniture is Paper and Ink with a Jade spine. Gilt appears only on the edge of the Leaf as it passes.

### What the palette doesn't have

- **No red, no warning amber, no success green.** A limit, a "Not true" verdict or a demo that fails is told apart by its **words**, never by its colour. There are no red/green pairs, so the system works for colour-blind viewers by construction.
- **No pure white and no pure black,** in graphics or in the grade.
- **No gradients** except the sky and the glow around a thread.
- **Retired from the prior package:**
  - `#B18C44`, which fails contrast (see above);
  - Mint `#DCF4E9`, which cooled the page (Glass now does the fresh job, and only on glass);
  - Muted `#516A60`, whose job Jade now does.

### The characters: Tuck and Pip

The mascot is **Tuck**, a grown sea otter. Her friend is **Pip**, a mug-sized porcelain café robot (DECISIONS R1). Wherever this kit says "the mascot", it means Tuck. Pip appears only where the bible's "Where Pip appears" list allows. The full palettes, materials, measured contrasts and rules are in `mascot/CHARACTER-BIBLE.md`. The bible takes its tokens from this kit, so a token change here is a change there.

| | Their own colours | Tokens borrowed from this kit, unchanged |
|---|---|---|
| **Tuck** | Fur cocoa `#5A3D2B` (shadow `#3A281D`, rim fuzz `#E3BE8F`). Mask and bib cream `#EFE2C8`. Eyes and nose `#1C2B25`. Kelp float bulb olive `#6E8B3D`. Stone slate `#8E948F` at rest. | Jade kelp scarf with Ink folds. Ink contour line, 50% on Tuck and 70% on the stone. Filament catchlight. The lit stone: Amber body, Filament core, Gilt halo. |
| **Pip** | Glaze `#FBF8EF`, satin, with iron speckle `#8C7B66` | Brass seam and mitt cuffs with a Gilt highlight. Ink visor. **Glass face-line and hover glow.** |

**How they sit in the system:**
- **They add no brand colours.** Their own colours never appear in type, furniture, the grade or the web tokens.
- **The animal is warm and the machine is cool.** Glass belongs to machines, so Pip's face-line and hover glow are Glass, set on the Ink visor at 7.74:1. On the white glaze Glass would drop to 1.45:1, which is why the line lives on the visor. Tuck never wears Glass. Pip never shows amber, because amber on a robot reads as a robot holding a share (R1).
- **Gold on Tuck is light, and only in the ritual:** the lit stones and the threads. Amber on slate is only 1.32:1, so a lit stone reads by its Filament core and Gilt halo and never ships without them. Pip's Brass seam is a glaze detail rendered in 3D. The rule "gold on dark glows, gold on paper is printed" governs graphics, not a character's materials.
- **No blue on Tuck,** including Sky, Zenith and Horizon. The house sky sits above her in the pocket shot, never on her body, props or carry-over. Otter.ai uses an otter identity (R9).
- **"No red" still holds.** Episode 01's maple leaf (`#C8502A`) is scenery on her head. It's not a brand colour and it never signals anything.
- **One robot per frame.** When Pip is placed in key art or the banner, it replaces §7's background robot. Pip never shares a frame with the shield, a stone or a thread, and neither character is ever labelled with a spec word (R7).

### Tokens for web and HTML graphics

```css
:root {
  /* primaries */
  --mh-gilt: #F2C96E;  --mh-sky: #4185CB;  --mh-zenith: #1B5699;  --mh-horizon: #CFE6F6;
  /* the page */
  --mh-paper: #F7F3E6; --mh-ink: #123E32;  --mh-jade: #1B7466;    --mh-brass: #A8843D;
  /* accents */
  --mh-glass: #7BE1DA; --mh-filament: #FCEBB4; --mh-amber: #E39A35;
  /* lamplight */
  --mh-night: #0B231D; --mh-lichen: #A9C6B9; --mh-jade-light: #5FC0A9; --mh-night-sky: #1D3D73;
  /* recipes */
  --mh-rule: rgb(18 62 50 / 0.16);
  --mh-lift: 0 6px 24px rgb(18 62 50 / 0.18);
  /* type */
  --mh-display: "Fraunces", "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
  --mh-text: "Atkinson Hyperlegible Next", "Atkinson Hyperlegible", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --mh-mono: "Atkinson Hyperlegible Mono", ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  /* motion */
  --mh-settle: cubic-bezier(0.16, 1, 0.3, 1);
  --mh-tuck: cubic-bezier(0.32, 0, 0.67, 0);
  --mh-leaf: cubic-bezier(0.65, 0, 0.35, 1);
  --mh-draw: cubic-bezier(0.55, 0, 0.1, 1);
  --mh-breath: cubic-bezier(0.37, 0, 0.63, 1);
}
```

---

## 2. Typography

### The faces

| Role | Face | Licence | Source |
|---|---|---|---|
| **Display:** the title, names, questions, the limit line, running heads | **Fraunces** (Undercase Type) | SIL OFL 1.1 | [fonts.google.com/specimen/Fraunces](https://fonts.google.com/specimen/Fraunces) · [github.com/undercasetype/Fraunces](https://github.com/undercasetype/Fraunces) |
| **Text:** roles, kickers, attributions, labels, burned-in captions | **Atkinson Hyperlegible Next** (Braille Institute) | SIL OFL 1.1 | [fonts.google.com/specimen/Atkinson+Hyperlegible+Next](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next) · [github.com/googlefonts/atkinson-hyperlegible-next](https://github.com/googlefonts/atkinson-hyperlegible-next) |
| **Mono:** version strings in Hands On, and nothing else | **Atkinson Hyperlegible Mono** | SIL OFL 1.1 | [fonts.google.com/specimen/Atkinson+Hyperlegible+Mono](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Mono) · [github.com/googlefonts/atkinson-hyperlegible-next-mono](https://github.com/googlefonts/atkinson-hyperlegible-next-mono) |

There are two families and three styles, and nothing else. No third family is ever added "for fun": the fun lives in how these two are used.

### Why a classic display face with a modern text face

- **It's the client's own sentence, set in type.** He said: *"I wanted it to be classy and classic originally, and then I made it a little touch of modernity."* The serif is the classic. The sans is the touch of modernity. The proportion matters too: the serif speaks only in large, rare moments (the title, a name, a question, the limit line), and the sans does all the small, working talk. That's "classic, with a touch".
- **It's the book.** Title pages set titles in a serif. The show's name is a proverb older than anyone watching, and it deserves a face with the memory of metal type.
- **Why Fraunces in particular:**
  - It's a warm "Old Style soft" design, drawn from early-20th-century faces such as Windsor, Souvenir and Cooper. Its soft, rounded ends make it friendly rather than corporate, which gives warm futurism rather than cold sci-fi.
  - It has an **optical-size axis**: at smaller sizes its thin strokes thicken automatically, so they survive YouTube's compression and a phone screen. That's the reason to reject high-contrast display faces like Playfair and the Didones, whose hairlines fall apart at 720p.
  - Its italic is lively. **The show's questions are set in italic**, because italic is the voice of speech. Thumbnails are the one exception (see the type rules below).
- **Why Atkinson Hyperlegible Next in particular:**
  - The Braille Institute designed it so that low-vision readers can tell every letter apart. That's the Grandma test turned into a typeface.
  - Its distinct `I`/`l`/`1` and `0`/`O` matter on this show: in names, and in a version string like `v0.0.1-alpha.3`.
  - It's a humanist grotesque, not a geometric sans. The round geometric sans on the cover (AI's default choice) is the house style of fintech and crypto landing pages, which is exactly the look we're leaving. Its round `a`, `e`, `o` and `c` also blur together at small sizes.
  - A matching Mono means a version string never needs a third family.
- **Serif against sans makes the hierarchy readable at a glance,** so size doesn't have to do all the work.

### Settings

**Fraunces axes:**

| Axis | Setting | Why |
|---|---|---|
| `opsz` | Matches the pixel size, up to 144. Browsers do this automatically. | Keeps thin strokes sturdy at small sizes |
| `wght` | Per the scale below: 500 or 600 for most type, 700 for the verdict stamp and the hanging quote mark, 720 on thumbnails | – |
| `SOFT` | **50** everywhere, and **100** on thumbnails | Warm but still crisp. Fully soft shapes survive heavy JPEG compression at 168 px wide. |
| `WONK` | **0, always** | The leaning `n`, `m` and `h` read as a mistake at 176 px |

**Static instances.** Editing and compositing apps don't all expose every variable axis, so generate fixed instances once and use only those. Rename each instance's family, in name IDs 1, 4, 6 and 16, so it can never be mixed up with the variable font.

```sh
fonttools varLib.instancer "Fraunces[SOFT,WONK,opsz,wght].ttf" opsz=144 wght=600 SOFT=50 WONK=0 -o "MH Display Title.ttf"
fonttools varLib.instancer "Fraunces[SOFT,WONK,opsz,wght].ttf" opsz=72  wght=600 SOFT=50 WONK=0 -o "MH Display Card.ttf"
fonttools varLib.instancer "Fraunces[SOFT,WONK,opsz,wght].ttf" opsz=72  wght=500 SOFT=50 WONK=0 -o "MH Display Card Book.ttf"
fonttools varLib.instancer "Fraunces[SOFT,WONK,opsz,wght].ttf" opsz=72  wght=700 SOFT=50 WONK=0 -o "MH Display Stamp.ttf"
fonttools varLib.instancer "Fraunces[SOFT,WONK,opsz,wght].ttf" opsz=48  wght=600 SOFT=50 WONK=0 -o "MH Display Head.ttf"
fonttools varLib.instancer "Fraunces[SOFT,WONK,opsz,wght].ttf" opsz=144 wght=720 SOFT=100 WONK=0 -o "MH Display Thumb.ttf"
fonttools varLib.instancer "Fraunces-Italic[SOFT,WONK,opsz,wght].ttf" opsz=72 wght=500 SOFT=50 WONK=0 -o "MH Display Italic.ttf"
```

Which instance goes where:
- **Title:** T1 and T2.
- **Card:** T3 roman, names, Percent Right.
- **Card Book:** the Where It Stops line.
- **Stamp:** verdicts and the hanging quote mark.
- **Head:** running heads.
- **Italic:** every italic size.
- **Thumb:** thumbnails only.

Atkinson Hyperlegible Next and Mono are used as shipped, at weights 500, 600 and 700.

**Fallback stacks** (for the web, community posts and any graphics rendered as HTML; baked video never falls back):
- **Display:** `"Fraunces", "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif`. These are old-style serifs with similar warmth and x-height. Georgia comes last because every machine has it.
- **Text:** `"Atkinson Hyperlegible Next", "Atkinson Hyperlegible", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Mono:** `"Atkinson Hyperlegible Mono", ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

### The scale

Seven sizes, no others. "px" means the em size at 1080p.

| Step | px | % of H | Face | Tracking (1/1000 em) | Leading | Used for |
|---|---|---|---|---|---|---|
| **T1** | 176 | 16.3% | Fraunces 600 | −15 | 1.0 | The title on the title card |
| **T2** | 104 | 9.6% | Fraunces 600 | −10 | 1.0 | The title in the end-card colophon |
| **T3** | 72 | 6.7% | Fraunces 500 italic (questions), 600 roman (One Small Thing), 700 roman (verdicts) | −5 | 1.17 | Card headlines: the question card, One Small Thing, the verdict stamp |
| **T4** | 56 | 5.2% | Fraunces 600, 500 italic or 500 roman; Atkinson 600 for the imprint | −5 (imprint +10) | 1.18 | Slip headlines: names, the episode question, the Where It Stops line |
| **T5** | 48 | 4.4% | Fraunces 600 | −5 | 1.0 | Running heads (segment tabs) |
| **S1** | 40 | 3.7% | Atkinson Next 500 | 0 | 1.25 | Role lines, attributions, the tally. **The floor for lowercase.** |
| **S2** | 32 | 3.0% | Atkinson Next 600 caps | +160 (descriptor +220) | – | Kickers, labels, the descriptor. **The floor for capitals.** |
| **M** | 32 | 3.0% | Atkinson Mono 500 | 0 | – | Version strings |

**Why these floors.**
- On a 6.7-inch phone held sideways, the video is about 70 mm tall. A 40 px line of Atkinson has an x-height of about **1.3 mm** there, roughly 7-point print. That's the smallest text we'll ask Grandma to read, and only for secondary lines.
- Everything essential is set at T4 or larger, where the x-height is about **1.75 mm**.
- Capitals have no x-height to lose, so 32 px caps read as well as 40 px lowercase.

### Specifications by use

**The title card** (the title page in the sky above Tuck for the whole ritual, f54–f119, and the bumper's final frame once she melts away; the ground is the sky gradient in §6; centred on x = 960; positions as in `intro/COLD-OPEN-STORYBOARD.md` §3)

| Element | Face and settings | Size | Tracking | Colour | Position |
|---|---|---|---|---|---|
| Imprint "DeRec Alliance" | Atkinson Next 600 | T4, 56 px (5.2% H) | +10 | "DeRec" Gilt, "Alliance" Paper | Baseline y 252 |
| Title "Many Hands" | Fraunces, opsz 144, wght 600, SOFT 50, WONK 0 | T1, 176 px (16.3% H), sets about 876 px wide | −15 | Paper | Baseline y 456 |
| Rule (a thread at rest) | Lit thread, 3 px (§4). It doesn't exist until the release threads draw it, meeting at f113. | 38% of the title's width, about 333 px | – | Gilt, lit | Centred on y 528 |
| Descriptor "THE COMMUNITY PODCAST" | Atkinson Next 600, capitals | S2, 32 px (3.0% H) | +220 | Paper | Baseline y 592 |
| Shield | The Alliance's master file only (§3) | 180 px tall (16.7% H) | – | As supplied | Right edge x 1824, top y 72 |

The lockup runs from y 215 (the imprint's cap top) to y 592, so its optical centre sits at 37% of H. That leaves the lower 45% of the frame (y 594–1008) for Tuck through the ritual. She melts away over f114–f119, so the bumper's last frame is sky and type alone.

The descriptor is set at 600, as in the storyboard and the animatic. It's the lowest type on the gradient and the smallest, and at 32 px the heavier weight keeps its strokes through YouTube's compression.

**Lower thirds**

| Element | Face and settings | Size | Tracking | Colour |
|---|---|---|---|---|
| Name ("Bruce Longley") | Fraunces, opsz 56, wght 600, SOFT 50 | T4, 56 px | −5 | Ink |
| Role ("Community lead, DeRec Alliance") | Atkinson Next 500 | S1, 40 px | 0 | Jade |
| Kicker ("MANY HANDS 07", "RAISED HANDS") | Atkinson Next 600, capitals | S2, 32 px | +160 | Jade |
| Episode question | Fraunces Italic, opsz 56, wght 500, SOFT 50 | T4, 56 px, leading 66 px | −5 | Ink |
| Hands On label | Atkinson Next 600 caps, plus Atkinson Mono 500 for the version | S2 / M, 32 px | +160 caps / 0 mono | Ink / Jade |

**Chapter cards (segment tabs)**

| Element | Face and settings | Size | Tracking | Colour |
|---|---|---|---|---|
| Segment name ("Where It Stops") | Fraunces, opsz 48, wght 600, SOFT 50 | T5, 48 px (4.4% H) | −5 | Ink |
| Mascot ornament (four lighter segments only) | A single-colour engraving, never type | 60 px tall | – | Brass |

**Thumbnails** (1280×720; sizes are given as a percentage of thumbnail height, so they hold at any size)

| Element | Face and settings | Size | Tracking | Colour | Rules |
|---|---|---|---|---|---|
| Question shorthand ("Phone in the lake?") | Fraunces **roman** (the one place a question isn't italic), opsz 144, wght 720, SOFT 100, WONK 0 | **15.6% of H** (112 px at 720). Range 14.4–17.2% (104–124 px) depending on length. | −20 | Ink on Paper | 2–4 words, 2–3 lines, at most 10 characters per line |

**Type rules**
- **Centre only on the title page:** the title card, the cover and the banner. Everything else is set flush left, or flush right on Facundo's side.
- **Italic means a voice asking.** Questions, myths and quotes are italic. Statements, including the limit line, are roman. **The one exception is thumbnails:** at 168 px wide, the heavy roman reads better than any italic.
- **"Many Hands" is always Fraunces, in title case, in Paper or Ink.** It's never Gilt, because gold belongs to "DeRec" and to light.
- **"DeRec" is always spelled exactly that way:** never "Derec", "DEREC" or "De-Rec", and never split across two colours. On air and on screen the version string is `lib-derec`, in lowercase, set in Mono.
- **No faux bold, faux italic or fake small caps.** Real weights and real capitals only.
- **Real quotation marks and apostrophes** (“ ” ’), a real em dash (—) and a real ellipsis (…).

---

## 3. Lockups

### Anatomy of the title page

Top to bottom:
1. **Imprint:** "DeRec Alliance", the publisher.
2. **Title:** "Many Hands".
3. **Rule:** a thread at rest.
4. **Descriptor:** "THE COMMUNITY PODCAST".

The **shield** is not part of the lockup. It stands apart in the top-right corner of the frame, as a publisher's seal does on a book jacket (the cover already puts it there).

Proportions, where **T** is the title's size:

| Element | Size | Space above |
|---|---|---|
| Imprint | 0.32 T | – |
| Title | T | Imprint baseline to title cap top: 0.46 T |
| Rule | 3 px at T = 176, 38% of the title's width | Title baseline to rule: 0.41 T (this clears the descender of the "y") |
| Descriptor | 0.18 T | Rule to descriptor baseline: 0.36 T |

**Why the rule is there:** title pages traditionally carry a rule. Ours is the light thread at rest: straight, calm and gold. In the bumper, it's drawn by the two threads that lift off the ritual's lit stones and meet in the middle (§4 and §5).

### Variants

| Variant | Contents | Alignment | Where it's used |
|---|---|---|---|
| **Title page** (primary) | Imprint, title, rule, descriptor; shield in the frame's top-right corner | Centred | Title card, podcast cover, channel banner, key art |
| **Colophon** | Imprint and title, with the rule above the imprint. No descriptor, no shield. | Flush left | End card |
| **Title only** | "Many Hands" and the rule | Either | Merchandise, small web uses, Light Work end frame |

**The square cover (podcast art at 3000×3000; S = the side):**
- the title is 11.5% of S, centred on a vertical axis at 45% of S, which is the middle of the space left of the shield;
- the imprint's cap top sits at 6% of S;
- the shield is 16.5% of S tall, with its top and right edges 3.5% of S from the frame;
- the hosts and the orbit fill the lower 70%.

Podcast apps show cover art as small as about 55 px. At that size only the title can be read, which is why the title, not the imprint, is the big element. [HOST GATE, per FORMAT's sign-off item 10]

### Colourways

| Ground | "DeRec" | "Alliance" | Title | Rule | Descriptor |
|---|---|---|---|---|---|
| **Sky** (the Zenith zone). This is the primary colourway. | Gilt | Paper | Paper | Gilt, lit | Paper |
| **Paper** | Brass (text at 56 px or larger only) | Ink | Ink | Brass, printed | Jade |
| **Night or Night Sky** (Lamplight) | Gilt | Paper | Paper | Gilt, lit | Lichen |
| **A photograph** | Only over an area of the image as dark as Zenith, measured at its lightest pixel under the lockup (Gilt must still reach 4.5:1). Add the lift shadow. | | | | |

### The shield [HOST GATE]

- **Only the Alliance's master artwork may be used.** Never trace it from the cover, redraw it, vectorise a screenshot of it, or have an image generator produce it. The prior package pointed to a file called `derec-shield-official.svg`, but that file isn't in this workspace. Ask the Alliance for the master and for any usage rules. **If the Alliance has its own guidelines, they override this section.** [VERIFY]
- **Use the plain mark, without "PROTECTED BY DeRec" (DECISIONS R9).**
  - On the cover of an education show, "PROTECTED BY" reads as a product seal promising protection. FORMAT flagged this against non-negotiable 2.
  - The line is also unreadable below about 200 px tall, and a claim nobody can read is the worst kind of claim.
  - If the Alliance can't supply a plain master, or declines its use in motion, the shield position stays empty. Nobody redraws the mark to remove the line. The title page works without it (storyboard §9).
- **Where the shield appears:** the title card, the podcast cover, the channel banner and key art.
- **Where it never appears:**
  - episode furniture;
  - thumbnails, where it would read as a product seal on the first thing a stranger sees;
  - the end card, where the imprint already signs off and YouTube's elements need the room;
  - Light Work Shorts;
  - anywhere near a member organisation's name or logo.
- **Patches on jackets:** the cover shows a small shield patch on each host's jacket. Use them in key art only. The live wardrobe carries no logos. [HOST GATE]

### Clear space

- **X** is the cap height of the title's "M", which is 0.70 T (123 px on the title card).
- Keep **1 X** clear on every side of the lockup's bounding box, measured from the imprint's cap top to the descriptor's baseline and across its widest line.
- On the square cover alone, the edge of the frame may come as close as 0.5 X.
- Keep **0.25 × the shield's height** clear around the shield, and never less than 1 X between the shield and the lockup.
- **Tuck shares the title page with the lockup for the whole ritual,** and there the storyboard's clearance replaces 1 X. She and her carry-over stay below y 606, at least 14 px under the descriptor's baseline (storyboard §3). A full 1 X would push her stones down to about y 1000, into the band YouTube's controls cover. She never touches the lockup, sits on the rule or leans on a letter. Only the release threads enter the lockup, to draw its rule (§4).

### Minimum sizes

| Item | Minimum at 1080p | Why |
|---|---|---|
| Title-page lockup | Title of 176 px or more | The descriptor is 0.18 T, so any smaller title drops it under the 32 px floor for capitals |
| Colophon | Title of 104 px or more; imprint at 56 px (Brass "DeRec" must stay at 56 px or larger) | Contrast floor for Brass |
| Title only (video) | 56 px | T4: below this, the title stops reading as a title |
| Title only (print and web) | Cap height of 6 mm in print, or 24 px on screen | – |
| Square cover | Title at 11.5% of S | Readable down to about 55 px app thumbnails |
| Shield | 72 px tall on video, plain mark only (R9) | The inner line and the rim fill in below this size [VERIFY against the Alliance's rules] |

### Forbidden treatments

1. **Regenerating, redrawing or tracing the shield,** or letting any AI tool render it. [HOST GATE]
2. **Recolouring the shield,** or adding a glow, bevel, gradient, shadow, outline or animation to it.
3. **Using the cover's AI-rendered "DeRec Alliance" lettering as artwork.** It isn't a master. If the Alliance has an official wordmark, it replaces our Atkinson imprint. [VERIFY]
4. **Setting "Many Hands" in any other face,** or in capitals, italic, condensed, stretched, outlined, in a gradient, in Gilt or in chrome.
5. **Swapping the imprint's colours** (gold "Alliance" and white "DeRec"), or splitting "DeRec" into two colours.
6. **Bevels, embossing, 3D extrusion, metallic gradients or "gold texture" fills** on anything. Our gold is a flat colour, and light supplies the shine.
7. **Rotating, skewing or perspective-warping any part of the lockup,** including laying it onto a surface inside a generated scene.
8. **Letting an image generator render any letters, logos, badges or numbers.** All type and every mark is composited in post from master files. Generators misspell, and a misspelt "DeRec" on a trust show is fatal.
9. **Adding an episode number, a date, "Season 1" or a guest name** inside the lockup.
10. **Co-branding.** Never "Many Hands × [member]", and never a lockup placed in a row of member logos. The show is a neutral space (non-negotiable 4).
11. **Putting the shield on a thread or inside the orbit,** or making it a node. The shield is a seal, not part of the light.
12. **Putting the mascot inside the lockup,** or making the mascot hold, wear or replace any part of it.

---

## 4. The light thread

### What it is, and what it means

The fine gold lines that run between the two hosts and the things they care about: the orbit on the cover, and the constellation they build by hand in the café image.

**It means one thing: people connected by care.** It's the picture of *many hands*, not a picture of the protocol. It lives where the show's rituals live and stays out of the teaching.

### Three states

| State | Where | How it's drawn |
|---|---|---|
| **Lit** | On footage, sky, Night and Ink | Gilt stroke with a 1 px Filament core and two glow layers. Glows use the Add (linear dodge) blend. |
| **Printed** | On Paper | Brass stroke. No core, no glow. |
| **At rest** | The lockup rule, and page edges | A straight line, lit or printed depending on the ground. Once a thread is at rest it carries no nodes. |

A thread can pass from printed to lit as it leaves a page. On thumbnails it does exactly that (§6): printed on the card, glowing in the photograph. That's the book about tomorrow in one line.

### Forms

- **Constellation.** Taken from the café image: a loose, sparse figure of three to seven nodes, laid on a surface between two people's hands. It's the main form in key art. It never appears in Tuck's world: in the bumper the thread appears only in the release (below), and loose glowing nodes near her would read as extra stones, which the bible bans.
- **Orbit.** Taken from the cover:
  - an ellipse tilted no more than 12° from horizontal;
  - it passes in front of both hosts' bodies at chest height, and behind their hands;
  - it may have up to two companion strands and carry up to four glass cards;
  - it's used in key art and on the podcast cover only.

### Specifications (at 1080p; double every value at 4K)

| Property | Value | % of H |
|---|---|---|
| Main stroke | 3 px, round caps | 0.28% |
| Companion strand (orbit only) | 2 px, Gilt at 70% | 0.19% |
| Filament core (lit threads only) | 1 px | – |
| Inner glow | Gaussian, 8 px radius, Gilt at 60% | 0.74% |
| Outer glow | Gaussian, 28 px radius, Gilt at 22% | 2.6% |
| Node disc | 12 px across, Gilt | 1.1% |
| Node core | 5 px across, Filament | 0.46% |
| Node halo | 36 px radius, Gilt at 35%, rising to 55% at the peak of a breath | 3.3% |
| Printed thread | 3 px Brass. Printed node: 10 px across, Brass, no halo. | 0.28% / 0.93% |
| Maximum stroke anywhere | 4 px | 0.37% |
| Curvature | A gentle arc that sags 4–10% of its length, like real thread. Only the rest rule is straight. | – |

**Why 3 px and never 1 px:** YouTube stores colour at a quarter of the picture's resolution (4:2:0 chroma subsampling). A 1 px gold line turns into a grey smear.

### How threads behave

- **Forming.**
  - A thread always starts somewhere that makes sense: a hand, a person or an object someone cares about. It's never born in empty space.
  - It draws toward its end over **18 frames** on the `draw` curve.
  - While it draws, its tip is an 8 px Filament point. The tip goes out once the thread arrives.
  - Each following thread starts **5 frames** after the one before.
  - When a thread arrives, its node lights over **6 frames** on `settle`.
  - **Speed limit:** a tip never travels faster than 48 px per frame (4.4% of H). A thread is drawn by a hand, not fired.
- **Breathing.**
  - Lit nodes breathe on a **72-frame (3 s)** cycle on `breath`: they scale from 100% to 115% and back, while the halo rises from 35% to 55% and back.
  - Each node starts at a random point in the cycle, so no two breathe together and **nothing ever pulses in sequence.** A sequence reads as data moving.
- **Leaving.** All threads fade together over **12 frames** on `breath`.
- **Never:**
  - light running along a finished thread;
  - a thread that snaps, breaks, is cut, retracts or shatters;
  - flicker or strobing;
  - a change of colour.
- **Hands and faces.** Threads pass behind hands, because hands hold the light, and in front of bodies. **A thread never crosses a face,** or comes within 10% of a face's height of one.

### The release: the one place the thread meets the mascot

DECISIONS R3 and the storyboard (§2 beat 9, §3) sanction exactly one meeting between the thread and a character. At f90 Tuck's stone and two friends' stones light amber together. At f102 the light lifts off the three lit stones as two gold threads. They loop wide around Tuck, rise past the ends of the descriptor and draw the title's rule from both ends, meeting in its middle at f113. **Tuck never touches a thread after it forms,** and never looks at one. Nowhere else does a thread touch, leave or circle Tuck or Pip.

**The routed path** (storyboard §3, in 1920×1080 screen coordinates). Each thread is one continuous curve.
- **Left thread:** from the left stone's rim (about x 845, y 885), out and up at a 40° lean to x 640, y 760. It rises to x 660, y 560, clear of the descriptor's left end, then curves in to the rule's left end at x 794, y 528 and runs along the rule to the centre, x 960.
- **Right thread:** the mirror image about x 960. It starts at about x 1075, y 885, passes x 1280, y 760 and x 1260, y 560, and meets the rule's right end at x 1126, y 528.
- **Clearance:** neither thread comes closer to Tuck's face than 10% of its height, and neither crosses the descriptor.
- **State:** lit Gilt all the way. The defocused plate and the Zenith sky are both lit grounds, so the threads never print into Brass here.
- **Medium:** hand-drawn 2D on twos, as the bible specifies. The shape may wobble by 1 px or less between drawings, and the brightness never changes.

**Where the release departs from the rules above, and why:**

| Rule elsewhere | In the release | Why |
|---|---|---|
| Each thread draws over 18 frames, 5 frames after the one before | Both draw together over f102–f113 (12 frames) on `draw`, as mirror images | The music is the clock (R5) and the ritual is 66 frames forever. Two lines setting off from opposite sides at once is the point of the move. |
| A tip travels 48 px a frame at most | The path is about 760 px, so the tip averages 69 px a frame and peaks near 230 px a frame around f105 | The storyboard fixes the frames and never lengthens the ritual (§9). The slow start of `draw` (about 8 px, then 34 px, in the first two frames) shows the light leaving the stones before it travels, and the threads are silent. The limit stays in force everywhere else. |
| A gentle arc that sags 4–10% | The routed loop above | It has to clear her face and the descriptor, and a sagging arc can't do both. |
| A node lights over 6 frames, then breathes | One node at x 960, y 528. It lights at f113, is full by f115 and fades over f116–f119. It never breathes. | It has seven frames to live before the cut. |
| All threads leave together over 12 frames | The two loop arms fade with the melt over f114–f119. The rule stays, at rest, to the cut. | The last frame has to be the clean title card (§5). |

### Limits

- **No more than 7 nodes in a frame, and no more than 8 threads.**
  - People can take in a handful of points at a glance and count up to about seven.
  - Beyond that, the eye stops seeing people and starts seeing a *network*: the stock "plexus" background this show bans.
- **Each node carries one to three threads.** There are no hubs (no node with four or more), and never a complete web where everything connects to everything.
- **No regular shapes:** no perfect polygons, stars, grids or hexagons. Two threads cross each other at most once.
- **Gilt only.** Never cyan, never several colours, never a rainbow. Cyan belongs to glass and machines, and **machines don't hold threads**.

### Where it appears

- Key art and the podcast cover (orbit or constellation).
- The bumper's ritual: the release (f102–f119), and the rest rule it leaves on the title card, which is the bumper's final frame.
- The Light Work end stamp, a crop of the ritual in which the threads have only begun to rise (storyboard §7).
- The edge of the Leaf as it crosses footage.
- Thumbnails (printed, then lit).
- The end card (the colophon's printed rule).
- The channel banner.

### Where it never appears

- **During the teaching:** The Short Answer, The Table, Hands On, Where It Stops, Raised Hands answers and Say It Back. Teaching uses the Curve instead (§6).
- **Over the tabletop tokens or any screen recording.** A graphic laid on the demo would turn decoration into a diagram (see below).
- **On the mascot, or coming from it, except in the release** (above). There the light comes off the three lit stones together, never from Tuck's body, and she never touches it once it forms. She never spins, holds or cuts a thread (FORMAT §7: she never plays the protocol). Pip is never in a frame with a thread.
- **Next to money, prices, charts or member logos.**
- **As a physical object on set.** No LED strings or fairy lights. Real light threads on a real table would make the metaphor literal.

### What the thread must never imply

1. **It is not a diagram of DeRec.** Nodes are not helpers, the number of nodes is not a threshold, and a line is not a connection.
   - **This is the reason the rule exists: in DeRec, helpers don't know who the other helpers are.** A thread drawn between two helper tokens would teach the exact opposite.
   - Use the café image for what it is, two friends placing pieces by hand. **Never caption or narrate its threads as "how the shares connect".**
2. **It is not data moving.** No light travels along it, it carries no packets or arrows, and it has no direction.
3. **It is not protection.** The orbit never closes into a sphere, dome, force field or bubble around anything, because absolute safety is never promised (non-negotiable 2).
4. **It is not a blockchain.** No chain links, blocks, hexagons or ledgers.
5. **It is not money.** Nothing flows toward a coin, a wallet or a price.
6. **It is not machine agency.** Robots never make, hold or break threads, and neither does Tuck: in the release the light comes from three stones together, at the threshold, not from her. People choose their helpers.
7. **It is never fragile on screen.** A thread that snaps is fear-selling.

---

## 5. Motion grammar

### Easing curves

| Name | cubic-bezier | What it's for |
|---|---|---|
| **Settle** | `(0.16, 1, 0.3, 1)` | Everything **arriving:** slips, card content, the lockup, nodes lighting. It starts quickly and lands softly, like a page coming to rest. |
| **Tuck** | `(0.32, 0, 0.67, 0)` | Everything **leaving:** slips and tabs tuck back toward their spine. A quiet ease-in, done in fewer frames than the entrance. |
| **Leaf** | `(0.65, 0, 0.35, 1)` | The house transition, and anything that travels across the frame. Symmetrical, like a turning page. |
| **Draw** | `(0.55, 0, 0.1, 1)` | Threads forming. A slow start (the hand decides), a confident middle and a soft arrival. |
| **Breath** | `(0.37, 0, 0.63, 1)` | Node breathing, all fades (including the Where It Stops band) and cross-fades. |

**No curve's values go outside 0 to 1.** That means no overshoot, no bounce and no elastic. **Bounce belongs to the mascot. The book doesn't bounce.**

### Standard durations (24 fps)

| Move | Frames | Seconds | Curve and behaviour |
|---|---|---|---|
| Slip in (lower third, label) | 12 | 0.50 | Settle. Slides 24 px out from its spine while fading in. |
| Slip out | 8 | 0.33 | Tuck. 12 px back toward its spine while fading out. |
| Segment tab | 10 in / 28 hold / 10 out = **48** | 2.00 | Settle, then Tuck. Drops 16 px from above. |
| Stagger between elements in one slip or card | 4 | 0.17 | Kicker, then headline, then attribution |
| The Leaf | 14 in / 12 out | 0.58 / 0.50 | Leaf |
| Where It Stops band | 12 in / 12 out | 0.50 / 0.50 | Breath, **opacity only** |
| Verdict stamp | 8 | 0.33 | Settle. Scales from 104% to 100% (a press, not a bounce). |
| Thread draw (each) | 18 | 0.75 | Draw |
| Thread stagger | 5 | 0.21 | – |
| Node lights | 6 | 0.25 | Settle |
| Node breath | 72 | 3.00 | Breath, looping |
| Threads leave | 12 | 0.50 | Breath |
| Tally ticks up (end card) | 6 | 0.25 | Settle |
| Title-page type settles (imprint, title, descriptor) | 18 (f60–f77) | 0.75 | Settle, 3-frame stagger. See below. |
| The release draws the rule | 12 (f102–f113) | 0.50 | Draw. See §4. |

**Minimum hold for any text:** 24 frames, plus 10 frames per word (about 2.4 words a second). Everything on screen is also said aloud (FORMAT §3), so holds usually follow the speech. This number is the floor.

### The title-card sequence

The title page is never a separate card and never a cut. It lives in the top 55% of the ritual's locked pocket shot, in the sky above Tuck, from the f54 cut to the f120 cut (storyboard §3). Frames are the storyboard's: 0-indexed, 24 fps.

| Frames | Time | What happens | Curve |
|---|---|---|---|
| f54 | `2.25s` | Hard cut into the pocket shot. The house sky is already painted above y 594, with the shield in its corner. No type yet. | – |
| f60–f71 | `2.50s–2.96s` | On the downbeat of bar two, with the clap and the pocket pat, the imprint fades up and rises 12 px. | Settle |
| f63–f74 | `2.63s–3.08s` | The title makes the same move, 3 frames later. | Settle |
| f66–f77 | `2.75s–3.21s` | The descriptor makes the same move, 3 frames after the title. All type is set by f77 and reads for 42 frames (1.75 s) before the cut. | Settle |
| f102–f113 | `4.25s–4.71s` | **The release** (§4). Two threads lift off the three lit stones, loop wide around Tuck and draw the rule from both ends. They meet at x 960 on f113. | Draw |
| f113–f119 | `4.71s–4.96s` | A single node lights where they meet, full by f115, and fades over f116–f119, leaving a clean rule. | Settle, then Breath |
| f114–f119 | `4.75s–4.96s` | **The melt.** The cove plate goes first and Tuck last, and the threads' loop arms fade with them. It ends on this kit's own title card on sky (§6): imprint, title, lit rule, descriptor and shield. | Breath |
| f120 | `5.00s` | Hard cut to the two-shot on the button (FORMAT §5). | – |

**Why this is the detail:** two lines set off from opposite sides and meet in the middle. It's two friends, and it's the show's name, stated once, in 12 frames, without a word. The rule is drawn with the three stones' own light, so the show's name is written by enough hands.

### The house transition: the Leaf

The Leaf is used only to enter and leave full-frame cards: the question card, One Small Thing and the end card.

- **In (14 frames, `leaf`):**
  - a Paper panel travels in from the right edge and covers the frame, moving right to left the way a page turns forward;
  - its leading edge carries a lit Gilt thread running the full height of the frame and bowed by 1.5%, like a page edge in motion;
  - when the panel lands, the edge-thread fades over 6 frames;
  - the card's content settles in from frame 10, with 4-frame staggers.
- **Out (12 frames, `leaf`):** the page keeps travelling left and off the frame, carrying its content with it, and reveals the footage behind. The lit thread now rides the page's trailing edge, the one over the footage.
- **Sound:** one soft paper-brush sound, 0.3 s or shorter, taken from the theme's palette. Never a whoosh.
- **It is never used for:** cuts between cameras, which are always straight cuts; the cut from the bumper to the landing, which is a hard cut; slips and tabs, which slide; the Where It Stops band, which fades.
- **Forbidden:** 3D page curls, flips, cubes, glitches and light leaks. The Leaf is flat on purpose: this book is printed, not a gimmick.

### What never moves

1. **The shield.** It never spins, flips, glints, pulses, draws itself on or "locks". It appears and disappears only with the frame it sits in.
2. **The letters of the title.** No per-letter animation and no kinetic type. The lockup settles in as a whole and is still from then on. Type is set, not performed.
3. **The Where It Stops band, and the picture under it.** No slide, no zoom, no camera move, no thread, no glow. It fades in, holds and fades out. The room goes still (FORMAT §6).
4. **Any text while it's being read.** No drifting, slow zooms or Ken Burns moves on held text.
5. **The hosts' faces.** No crash zooms, shakes, speed ramps or comic punch-ins. The only reframe allowed is a slow, invisible correction of 110% or less, and only from a 4K source.

---

## 6. On-screen furniture

### The frame grid

| Zone | Value at 1080p | Why |
|---|---|---|
| Grid unit | **u = 12 px** (H ÷ 90). Every position snaps to it; type sizes don't. | One rhythm for every template |
| Side margins | **96 px** (8 u, 5% of the width) | Classic title-safe |
| Running-head zone | **y 72–156**, top-left for segment tabs and top-right for labels | Books put chapter names at the top of the page. It's also clear of captions. |
| **Caption line** | **y 840 (78% of H). No baseline sits below it** on any card, slip or page. | YouTube's captions (human-corrected on every upload) and its player controls occupy the bottom 22%. Grandma must never have to choose between a caption and a graphic. |
| Host sides | Bruce on camera-left, Facundo on camera-right, always | Every reference image has them this way. Slips and stamps sit on their person's side. |

### The material: the paper slip

Every piece of furniture is made of the same material:
- a Paper panel with a 6 px corner radius (a trimmed page, not an app button);
- an **8 px Jade spine** on its outer edge: the left edge for slips on the left, the right edge for slips on the right;
- the lift shadow when it sits over footage;
- Ink text.

There's no texture, because paper grain costs bitrate and turns to mush on YouTube.

### Title card (the ritual's sky, and the bumper's final frame)

The type positions are in §2, the lockup rules in §3 and the animation in §5. This is the ground the lockup sits on. It's the top 55% of the ritual's pocket shot from f54, and the whole frame at f119, once Tuck has melted away.

| Part | Spec |
|---|---|
| Day sky (default) | A vertical gradient: Zenith `#1B5699` from 0% to **52% of H**, easing (cosine) into Sky `#4185CB` at 80%, then Horizon `#CFE6F6` at 100%. Add 1.5% monochrome dither. In the ritual it's painted onto the pocket-shot plate above y 594, and it isn't warmed with the rest of the plate, so Paper keeps 6.67:1 and Gilt 4.71:1. |
| Dusk sky (night bumpers only) | Night Sky `#1D3D73` from 0% to 52%, easing into Zenith `#1B5699` at 100%: the last light on the horizon. Lamplight colourway: Paper 9.62:1, Gilt 6.79:1 and the Lichen descriptor 5.83:1 at their positions. |
| The world's own sky | Never replaces the house sky. The camera never tilts and nothing dissolves in: the house sky is on the pocket-shot plate from the f54 cut. Every bar-one plate paints its upper sky deep, in the Zenith family (Night Sky for night episodes), so the cut doesn't jump in brightness (storyboard §5). |
| Lockup | Centred, occupying y 215–592 (§2) |
| Shield | Top-right, right edge x 1824, top y 72, 180 px tall. Present from f54 and never animated. Plain mark only; if there is none, the position stays empty (§3). |
| Tuck | In the lower 45% of the frame (y 594–1008) from f54, with her carry-over below y 606 (§3). She melts away over f114–f119, plate first and Tuck last, so f119 is the title card alone on sky. She never overlaps the lockup or the shield. |
| Hold | Imprint, title and descriptor are fully set by f77 and read for 1.75 s before the hard cut. The rule completes at f113 (§5). |

### Lower thirds

**Name caption** (episodes 1–3 only, `0:17–0:22`, per FORMAT §5)

| Part | Spec |
|---|---|
| Slip | Bruce: outer edge x 96. Facundo: outer edge x 1824 (mirrored, spine on the right). **y 684–840**, 156 px tall (13 u). Width is the 8 px spine, then 40 px, then the text, then 48 px. |
| Name | T4 Fraunces 600, 56 px, Ink, baseline **y 756** |
| Role | S1 Atkinson Next 500, 40 px, Jade, baseline **y 810** |
| Role lines | "Community lead, DeRec Alliance" and "Engineer, lib-derec" [HOST GATE on both]. Never "inventor" or "co-inventor" (the protocol was invented by Dr. Leemon Baird). |
| Timing | Bruce's slip arrives on "I'm Bruce—" and Facundo's on "I'm Facundo—", about 1 s later. Both leave together at `0:22`. In: 12 frames, Settle. Out: 8 frames, Tuck. |

**Episode question** (`0:08–0:12`)

| Part | Spec |
|---|---|
| Slip | Outer edge x 96, bottom y 840. One line: 156 px tall (top y 684). Two lines: 222 px (top y 618). Maximum width 1200 px. |
| Kicker | "MANY HANDS 07". S2 Atkinson 600 caps, 32 px, +160, Jade, baseline at the slip's top + 52 |
| Question | The title's exact words. T4 Fraunces Italic 500, 56 px, Ink. First baseline at the kicker + 72, then every 66 px. At most 2 lines within 1104 px. |

**Hands On label** (on screen for the whole demo, FORMAT §6, except while the Curve page is up; its kicker does the labelling there)

| Part | Spec |
|---|---|
| Slip | Top-right: outer edge x 1824, **y 72–132**, 60 px tall, spine on the right |
| Text | "TABLETOP MODEL", or "REAL SOFTWARE" followed by `lib-derec v0.0.1-alpha.3` [VERIFY the version at each recording]. Caps in S2 Atkinson 600, Ink; version in M Atkinson Mono 500, Jade. Baseline y 114. |
| Why | A viewer who joins halfway through the demo must know which kind of demo they're watching. The two are never mixed. |

### Chapter card: the segment tab

There's **no full-screen chapter card inside an episode**. FORMAT §4 rules it out because it feels like an ad break. The chapter card is the segment tab, set as a running head.

| Part | Spec |
|---|---|
| Slip | Top-left: x 96, **y 72–156**, 84 px tall (7 u), Jade spine on the left |
| Name | T5 Fraunces 600, 48 px, −5, Ink, baseline **y 128**, text starting at x 144 |
| Ornament | For Heard It Somewhere, Raised Hands, Say It Back and One Small Thing only. The mascot as a **single-colour Brass engraving**, like a printer's flourish, 60 px tall, vertically centred, 24 px after the name, with 32 px padding on its right. Never animated. |
| Timing | 48 frames: 10 in (Settle, dropping 16 px), 28 hold, 10 out (Tuck). It arrives on the first note of the sting and stays silent for Where It Stops (FORMAT §4). |
| Where It Stops | **The same tab, with no ornament.** The limit is a chapter like any other, not an alert. |

**Note for the mascot team:** deliver Tuck in the home float pose as a one-colour line engraving for these ornaments, drawn to survive at 60 px tall (bible, Part four, rung 3). Pip is never an ornament.

### Question card

This full-frame paper page is used for Raised Hands (the community question, read out word for word), Heard It Somewhere (the myth) and Next Time (the question for the audience). It's set like an **epigraph in a book**.

| Part | Spec |
|---|---|
| Ground | Paper, full-bleed. Enters and leaves with the Leaf. |
| Page margins | Left and right 240 px (20 u), top 144 px. No baseline below 840. |
| Kicker | "RAISED HANDS", "HEARD IT SOMEWHERE" or "OUR QUESTION FOR YOU". S2 Atkinson 600 caps, Jade, baseline y 216. |
| Quote mark | “ in Fraunces 700 at 240 px, Brass, **hanging in the left margin**: its right edge at x 216, its top aligned with the first line's cap height. It's the classic typesetter's touch. |
| Question | T3 Fraunces Italic 500, 72 px, leading 84 px, −5, Ink, measure 1320 px (about 40 characters a line), **at most 4 lines**. If it's longer, drop to T4 56/66 px with at most 6 lines. If it's longer still, show an excerpt ending in "…", and Bruce reads the whole question and says it was shortened (FORMAT §6). |
| Attribution | "— Maria, from the comments", "— from the contributors call" or "— a common one online". S1 Atkinson 500, 40 px, Jade, baseline 72 px below the last line. Next Time uses "Answer under this video · first names only". |
| Vertical placement | Centre the block, from the kicker to the attribution, between y 144 and y 840, then raise it 24 px to the optical centre. |
| Hold | For as long as Bruce is reading, plus 24 frames. Then the Leaf takes us back to the two-shot for the answer. |

### The Curve (teaching diagram)

This is the show's one picture for teaching the threshold (DECISIONS R6). It takes the retired Loop concept's best idea and makes it an honest diagram. It's an Ink line on Paper that sways through every curve its dots allow while there are fewer dots than the threshold, and settles into exactly one curve when the threshold dot lands. Facundo can defend it line by line. It first runs in Episode 01's Hands On (`scripts/EP01-SCRIPT.md` §5). It may return in The Short Answer, The Table or Hands On whenever the threshold is the point.

**It's furniture, not light.** It's the thread's opposite in every property that could confuse the two:

| | The light thread (§4) | The Curve |
|---|---|---|
| Means | People connected by care | How a threshold works |
| Colour and ground | Gilt, lit, on sky and footage; Brass, printed, on Paper | Ink on Paper, only |
| Light | A Filament core and a glow | None |
| Shape | Fixed once drawn | Sways through real curves until the threshold, then holds |
| Points | Up to seven nodes that breathe | 14 px Ink dots that don't |
| Where | The ritual, key art, the title card, thumbnails, the banner | Teaching segments only |

| Part | Spec |
|---|---|
| Ground | Paper, full-frame. In and out on a 12-frame cross-dissolve on `breath`, because the Leaf belongs to the full-frame cards. In Hands On it's framed to match camera D's board, so the dissolve reads as the same page. |
| Kicker | "THE CLASSROOM PICTURE". S2 Atkinson 600 caps, +160, Jade, x 240, baseline y 216. It labels the drawing honestly, the way the Hands On label labels the table, and it states R6's third limit. |
| Edge scale | The only axis: a 2 px Ink line at x 240 from y 264 to y 720, with 12 px ticks every 10. Labels at 0, 50 and 100 in S1 Atkinson 500, Ink, hang in the left margin. No other axis and no grid. The secret is where the curve meets this edge. |
| Drawing area | x 240–1680, y 264–720. It stops at y 720 so the caption has its own band above the caption line. Frame camera D's board to this area at rehearsal. |
| Curve | 3 px Ink, round caps, clipped to the drawing area. The settled curve is a gentle arch, never a rising line, so it can't read as a growth chart. |
| Dots | 14 px Ink discs. Each fades in over 6 frames on `settle`, with no scale change and no glow. They're values on a graph, never people: no faces, names, avatars, amber or tokens. |
| The wobble | **Every frame is a real curve through every dot on screen.** It's computed from the numbers, never keyed by hand. Below the threshold the curve sways through the curves its dots allow, and its crossing sweeps the whole edge scale once every 48 frames (2 s) on `breath`. That's slow enough to read as freedom, not as a glitch. There's one curve at a time and no ghost trails, because a fan of curves reads as a mesh. |
| The settle | When the threshold dot lands, the curve settles into the one curve through all the dots over 6 frames on `settle`, with no bounce or overshoot, and holds. The recovered value then sets beside the edge in T4 Fraunces 600, Ink ("47" in Episode 01). |
| Caption | On the page from the first frame of the dissolve: "The secret is one number, not the whole curve." / "Real shares live in modular arithmetic, so there's no smooth line to look at." S1 Atkinson 500, 40 px, Ink, roman, flush left at x 240, measure 1440 px. Two lines, broken after "curve.", with baselines at y 790 and y 840. The longer line sets at about 1,360 px. [VERIFY] |
| Sound | S01 as each dot lands, identical every time and panned to the dot. S03 in the hold after the settle (THEME §4). Both sit in gaps in the talk, never under a word. |
| Never | Gold, amber, Glass, a glow or a Filament core. The light thread, a node, or straight lines joining the dots. Tuck, Pip or a stone. Laid over the tabletop tokens or a screen recording. A tick, a cross or a colour change at the settle. Any frame of Where It Stops. |

**Why the caption lives on the page.** R6 has Facundo state these limits on camera, and he does. The caption makes the page carry them as well, so a screenshot or a clip never travels without them. Episode 01's Light Work clip (8:09–8:49) includes the Curve but ends before he speaks the limits. The kicker carries the third limit, "the smooth curve is the classroom picture". In a vertical Short the page is re-set for 9:16 with the caption kept, never cropped from the horizontal page.

### Where It Stops band (the "what this doesn't do" card)

This is the most restrained object in the show. Paper and Ink, as FORMAT §6 specifies, with **no gold anywhere and no motion except a fade.**

| Part | Spec |
|---|---|
| Band | Paper, **x 96–1824** (the full measure, 1728 px), bottom y 840. One line: 156 px tall (top y 684). Two lines: 222 px (top y 618). Jade spine on the left, lift shadow. |
| Kicker | "WHERE IT STOPS". S2 Atkinson 600 caps, +160, Jade, baseline at the band's top + 52. It's there so the frame still makes sense when someone screenshots it and shares it. |
| Key line | Facundo's sentence of scope, e.g. *"It gets your secret back. It doesn't reverse a payment you approved."* T4 **Fraunces roman** 500, 56 px, leading 66 px, −5, Ink. At most 2 lines within 1616 px, about 16 words. Roman, not italic: this is a statement, not a question. |
| Timing | Fades in (12 frames, Breath, opacity only) as Facundo starts the key sentence. Holds until 2 s after "…and that's where it stops." Fades out over 12 frames. |
| The frame | The two-shot holds. No cutaways, no B-roll, no reframe, no thread, no mascot, no music (FORMAT §6–7). |
| Never | Red, warning triangles, padlocks, icons, an exclamation mark, or a different colour or shape from every other slip. **The limit wears the same paper as everything else.** That's what makes it sound confident. |

### End card (the last 20 seconds)

This is a Paper page: the book's last page. It's entered with the Leaf. The layout reserves YouTube's end-screen areas and keeps the outtake's faces uncovered.

| Part | Spec |
|---|---|
| Ground | Paper, full-bleed. In the dusk variant it's Night Sky, and every element takes the Lamplight colourway (Paper for Ink, Gilt for Brass, Lichen for Jade). |
| **Outtake plate** | x 96–1056, y 96–636 (960×540, 16:9), 6 px radius, 2 px keyline in the rule colour. A real 20-second outtake of both hosts (FORMAT §4). Under the mascot's reprise, the outtake carries laughter and room tone only, never words you'd need to hear: FORMAT allows no music under talk. |
| Rule | A printed Brass thread at rest, 3 px, from x 96, 38% of the colophon title's width, at y 672 |
| Colophon | Imprint at T4 56 px Atkinson 600 ("DeRec" in Brass, "Alliance" in Ink), baseline y 740. Title at T2 Fraunces 600, 104 px, Ink, baseline **y 840**. |
| Jargon Jar tally | A block right-aligned to x 1056, about 260 px wide, so it stays clear of the colophon title (which ends near x 622). Kicker "JARGON JAR" (S2, Jade), baseline y 740, level with the imprint. Then one line per host in S1 Atkinson 600, 40 px, Ink: "Bruce", a clear-token icon (Paper disc, 2 px Ink ring, 32 px) and his count, baseline y 790; "Facundo", an amber-token icon (Amber disc, 2 px Ink ring) and his count, baseline y 840. A count that goes up this episode ticks up over 6 frames. |
| **Next-episode element area** | x 1152–1824, y 96–474 (672×378). Printed underneath it: "NEXT TIME" (S2 Jade) and the next question in T5 Fraunces Italic, Ink, at most 3 lines within 624 px. YouTube's element covers it on YouTube. On Spotify and other embeds, where there are no elements, the page still makes sense. |
| **Subscribe element area** | A circle 168 px across at x 1152–1320, y 522–690. Plain Paper underneath. |
| **Mascot reprise area** | x 1368–1824, y 522–1008. The mascot's resolved activity, full colour, clear of both element areas. It may go below the caption line only because it sits outside the width that centred captions cover. |
| Shield | None (see §3). |
| [VERIFY] | YouTube's end-screen editor sets the element sizes and snap positions. Before the template is locked, fit these areas to the editor, not the other way round. |

### Thumbnails (1280×720)

The formula: **the two hosts, and the question on a page.** FORMAT §7 says the hosts' faces are the product and the mascot never appears. On a feed of shouting thumbnails, a calm paper page stands out by being quiet, and it reads on both of YouTube's themes: framed by the photo on white, glowing on dark.

| Part | Spec (px at 720; % of thumbnail height H) |
|---|---|
| Photograph | **A real frame or still from that recording session.** Never an AI likeness. Bruce on the left, Facundo on the right, both inside x 40–100%, each face at least 22% of H tall. A genuine mid-conversation reaction, never a staged shocked face. Graded with the show LUT. |
| Page | A Paper slip at x 32, y 32 (4.4% of H margins), **40% of the width (512 px)**, height set by its content but never less than 50% of H. Jade spine 8 px (1.1% of H) on the left, 6 px radius, lift shadow. It never touches the thumbnail's edge, so it doesn't melt into YouTube's white theme. |
| Question | Per §2: Fraunces roman 720, SOFT 100, 15.6% of H, −20 tracking, Ink, 48 px inner padding. 2–4 words, 2–3 lines. |
| Thread | Starts as a **printed** Brass line (3 px) under the last line of the question with a printed node at its start. It leaves the page's right edge and turns **lit** (Gilt, 3 px, with glow) over the photograph, ending in one lit node at the hosts' hands or the object they share. It never crosses a face. It's a detail for large sizes, and it's fine if it disappears at 168 px. |
| Keep clear | Bottom-right 230×100 px, where YouTube shows the duration. Top-right 120×120 px, where the hover icons sit. No face or type goes there. |
| Never | Logos, the shield, the mascot, an episode number, arrows, circles, emoji, all-caps or a second line of smaller text. |
| Test | Check it at 168×94 and 246×138 px before publishing. The question must read at 168 px wide. (This spec was checked at both sizes.) |

### Also built from the same kit

- **One Small Thing card** (full-frame, enters with the Leaf):
  - kicker "ONE SMALL THING" (S2 Jade) at x 240, baseline y 216;
  - the action in T3 **Fraunces roman 600**, 72 px, Ink, measure 1200 px, at most 3 lines;
  - "Free · under ten minutes · tonight" in S1 Jade, 48 px below the action;
  - a credit line, "Many Hands 07 · DeRec Alliance", in S2 Jade, baseline y 792, so a screenshot carries its own credit;
  - Tuck may gesture toward the action with both paws together from an area at x 1440–1824, y 360–840. She never points with one digit (bible). This is the one card where she may encourage (FORMAT §7).
- **Verdict stamp** (Heard It Somewhere):
  - "True." / "Not true." / "True, but…" in T3 Fraunces 700, 72 px, Ink;
  - on a Paper slip on **Facundo's side** (outer edge x 1824, y 684–840), framed by a 3 px Ink double rule inset 8 px, like a library stamp;
  - arrives with the 8-frame press;
  - **all three verdicts look identical.** They differ only in their words.
- **Percent Right** (Say It Back and the running joke):
  - the verdict stamp's slip position on Facundo's side (outer edge x 1824, y 684–840), without the double rule: "40%" in T4 Fraunces 600 Ink, followed by "right" in S1 Jade;
  - 12-frame Settle in, gone after 3 s.
- **Light Work Shorts (1080×1920)** [VERIFY the Shorts app's overlay areas before locking]:
  - keep text inside x 72–900 and y 288–1440. The action buttons take the right edge, and the title and channel take the bottom;
  - sizes stay on the kit's scale, measured against the Short's 1080 px width;
  - the first-second question is T3 Fraunces Italic, 72 px, on a Paper slip at the top of the safe area;
  - burned-in captions are Atkinson Next 700 at 56 px (the T4 size), Ink on Paper slips (6 px radius, 16/24 px padding), at most 2 lines of 22 characters, with baselines at y 1280–1440;
  - the mascot appears only as the one-second end stamp at the loop point: 24 frames of the ritual master, f88–f111, cropped to 9:16 around x 960 (storyboard §7). The stamp shows no title page; the Light Work wordmark sits in the top safe zone as a still.

---

## 7. Photography and generation

### The live set (real cameras: the heart of the show)

**Light: "warm people, cool sky."**
- **Keys.** Two large soft sources, 120 cm or larger and diffused. Each host is keyed from the **far side**: Bruce from camera-right, Facundo from camera-left. Each face is lit from the direction of the other person, so the conversation literally lights the faces.
  - Colour: 5000 K, with the camera balanced at 5600 K, so skin reads slightly sunlit.
- **Sun.** One warm rim at 3800 K, high behind camera-left, half a stop over the key, catching hair and shoulders. It's the cover's backlit sun.
- **Sky.** Soft, cool ambient light from above (a 6500 K bounce), with fill 1.5 stops under the key. Soft, never moody.
- **Practicals.** One or two warm 2700 K lamps in the background, dim and out of focus.
- **The window.** Real daylight or a large backdrop of sky and greenery, out of focus. Never an LED video wall with moving content.

**Lens and camera**
- **Two-shot, the show's home:**
  - 35 mm full-frame equivalent at f/4, at the seated hosts' eye level;
  - centred on the middle of the table;
  - both hosts framed from mid-chest up, with the table edge in the lower quarter so the jar, tokens and IOU card read;
  - keep the top 12% calm (no bright window edges), because that's where the running head goes.
- **Singles:** 75–85 mm at f/2.8, shot slightly off-axis from the partner's side, so each host looks across toward his friend.
- **Overhead for Hands On:** 35 mm pointing straight down at f/5.6, with the table filling the frame.
- **Recording:** 23.976 fps with a 180° shutter (1/48), 10-bit log, delivered in Rec.709.
- **Never** wider than 28 mm (faces distort), and never shallower than f/2.8 on the two-shot (one host goes soft).

**The grade: "printed on our paper with our ink."** One show look, built once and locked as `MH_Daylight_709_v1`. Episode grading is matching to that look, never restyling it.
- **White point:** highlights roll off to Paper (`#F7F3E6`). Nothing clips to pure white, except tiny sparkles on glass.
- **Black point:** shadows land on a green-black of about RGB 12/20/18. The eye reads it as black, but it prints like our Ink.
- **Skin** sits on the skin-tone line, a touch warm, never pushed orange.
- **Greens** lean toward Jade's hue, about 170°, never neon lime.
- **Blues** lean toward Sky, never teal.
- **Contrast and saturation:** a gentle S-curve, and saturation at about 95% of the camera's normal.
- **Never:** teal-and-orange, bleach bypass, bloom or diffusion filters (glow belongs to the threads alone), or a vignette stronger than 10%.

**The set**
- A real table with a pale stone or marble-effect top. On camera it reads as paper, and it echoes the café image.
- Living plants at two depths: a solarpunk room, not a studio.
- **Props:**
  - the amber-glass tokens (tabletop model);
  - the Jargon Jar in clear glass, on Bruce's side;
  - the IOU card, on Paper-coloured card stock, printed in the show's type, with entries written by hand in an Ink-coloured pen;
  - plain stoneware mugs.
- **Never in shot during the conversation:** screens, logos, LED strips, RGB lighting, neon signs, member logos, or a shelf of crypto books.

**Wardrobe** (from the brief; it's already on palette)
- Bruce: a cream or ivory jacket with a teal or black tee (Paper with Jade or Ink).
- Facundo: a dark olive overshirt with a black tee (Ink with olive).
- No logos, including the shield patch. No fine stripes or small checks, which cause moiré. No pure white, which clips. No saturated red or orange tops, which fight the gold.

### Key art (the cover, season art, the banner)

**The routes. Always offer the human-made or hybrid route next to the AI one (brief §6).**

1. **Hybrid (recommended).**
   - Photograph the real hosts, lit to match the key-art light below, at 50 mm and f/5.6 against grey.
   - Composite them into a generated or painted environment.
   - Add the threads in post, following §4.
   - *Why:* the faces are real, which matters on a trust show whose protocol's inventor is wary of AI. The world is imagined, which is honest, because tomorrow doesn't exist yet.
2. **Human-made.** A commissioned illustrator or matte painter paints the environment from the style block below, with the real photographs composited in.
3. **Fully generated, including likenesses.** Only with both hosts' written sign-off [HOST GATE], and always disclosed with YouTube's altered or synthetic content label and a line in the description.

**Light, lens and grade**
- **Light:** late-morning sun about 30° above the horizon, behind camera-left. A warm rim on hair and shoulders, a soft warm key bounced off white terraces, and cool fill from the open sky.
- **Lens:** 50 mm for the two-shot, 35 mm for wide environments, at eye level. An f/2.8 look: the city stays readable but soft.
- **Grade:** the live-set grade, with saturation 10–15% *below* the reference images, and with their HDR look removed (halos, crunchy leaves, plastic skin). **The references show the right world at the wrong volume.** Aim for a painted plate in a book, not a game trailer. This is for key art only. The bumper's plates stay as lush and saturated as the references, with only their HDR faults removed (DECISIONS R4).

**Composition**
- The top third is kept calm for the title.
- The hosts are side by side, centred, sharing one thing, with their hands busy.
- The thread appears as an orbit or a constellation, following §4.
- At most **one** small robot, doing one small kind thing (pouring coffee, watering a plant). It stands in the background, no taller than a sixth of the frame, never faces camera and is never near a face. At most three air taxis, small and high in the sky.

**The things worth protecting** (the glass cards):
- a family photograph;
- a painting or other creative work;
- a health record;
- **a handwritten recipe card**, which ties into the running joke;
- a household document.

**No coins.** Replace the cover's coin stack: most of what's worth protecting isn't money.

**House prompt blocks.** These are copy-pasteable and self-contained. Paste the style block after any scene. They describe characters, never real people.

> **STYLE BLOCK:** Warm solarpunk future in late-morning light. The sun is low, behind the camera on the left, putting a warm golden rim light on hair and shoulders, with a soft cool fill from a clear cerulean sky. White stone terraces overflow with greenery and flowers; there is calm water and a small waterfall, and a hazy crystalline skyline far in the distance with two or three small air taxis high in the sky. Shot on a 50mm lens at eye level, f/2.8, background soft but readable. Cream highlights, deep green-black shadows, natural skin tones, clear blue sky, gentle contrast, moderate saturation. No HDR look, no oversharpening, no lens flares, no neon. The top third of the frame is calm open sky. Absolutely no text, letters, numbers, logos, badges or signage anywhere in the image.

> **CHARACTER BLOCK (only for the fully generated route, and only after [HOST GATE] approval):** Two friends side by side, sharing one thing between them. On the left, a man with silver-blond swept-back hair and black rectangular glasses, wearing a cream ivory zip jacket over a teal t-shirt, a watch on his left wrist, with a warm, open, delighted smile. On the right, a man with short dark hair, clean-shaven, wearing a dark olive-green overshirt over a black t-shirt, with a smartwatch and a calm, dry half-smile. Both look at what their hands are doing, not at the camera.

> **THREAD BLOCK:** Between their hands, three to five small glowing amber beads rest on a pale stone surface, joined by a few fine, softly glowing threads of warm golden light in gentle curves. Their hands are in front of the light. No thread crosses a face. No other glowing lines anywhere in the image.

> **ENVIRONMENT PLATE (hybrid route: no people):** [STYLE BLOCK], an empty sunlit terrace café with a pale marble table in the foreground centre at seated eye height, space for two people side by side, one small white robot with soft cyan lights watering plants far in the background.

**Negative list to add to any generator:** coins, cash, gold bars, padlocks, shields, keys, vaults, screens with code, holograms with text, HUD overlays, neon, rain, night city, robots in the foreground, robots near faces, drones pointing at people, text, watermark.

### Is this frame on brand?

The frame passes only if every answer is yes.

1. **Are both people there, sharing one thing?** (Or, in the bumper world, is the mascot doing one small, delightful thing?)
2. **Are hands doing something?**
3. **Warm people, cool sky?** Is there a warm light on skin and a cool sky or cool daylight somewhere in the frame?
4. **Paper highlights, ink shadows?** No pure white and no pure black.
5. **Is gold rare, and is it light rather than objects?** It covers 5% of the frame or less.
6. **Are the machines small, kind and in the background?**
7. **Is there nothing to read that a generator drew?**
8. **Would it sit comfortably as a plate in a well-printed book?**

---

## 8. The banned list

This extends the brief's rule on clichés (non-negotiable 6). If it's on this list, it doesn't ship. The editor needs no second opinion.

**Money and crypto**
- The brief's list: gold coins with ₿ on them, matrix rain, candlestick charts, hooded hackers, a glowing padlock on a circuit board, rocket emojis.
- Also coins of any kind, with or without a symbol. That includes the cover's coin stack.
- Cash, gold bars, dollar or currency signs, price tickers, wallets full of money, "to the moon", laser eyes, diamond hands, Lambos.
- Charts of any kind with prices or growth, and red and green arrows.

**Security theatre**
- Padlocks, vaults, safe doors, force fields, domes, bubbles.
- Green "secure" ticks, fingerprints, iris scans, facial-recognition grids, scan lines.
- Any shield other than the Alliance's master mark.

**Teaching the wrong idea**
- **A key or password broken into pieces:** shards, puzzle pieces, pie slices, halves of a key. It teaches the myth FORMAT's Heard It Somewhere debunks ("each helper holds a piece of my password": not true).
- Threads or lines drawn between helper tokens (§4).
- A mascot or robot playing a helper, a share or the secret.
- Arrows showing data flowing.

**The network cliché**
- Plexus and connected-dot mesh backgrounds, hexagon grids and honeycombs.
- Spinning globes with arcs, chains of blocks.
- Binary digits or hex strings as texture, scrolling code as decoration. Real code appears only in Hands On, with its version on screen.

**Cold sci-fi**
- Holographic blue interfaces laid across the frame, heads-up displays.
- Cyberpunk neon, rain-soaked night cities, chrome.
- Lens-flare storms, swarms of particles.

**Menace and fear**
- Red alerts, warning triangles, glitch effects, "HACKED" screens, skulls.
- Robots with red eyes, robots bigger than people, crowds of robots, robot-uprising jokes.
- Surveillance cameras or drones pointed at people, anyone alone in the dark.
- Anything that makes loss feel like a threat instead of a problem with a plan.

**Stock-photo tropes**
- Handshakes over a glowing globe, a finger touching a floating interface, "diverse team fist-bump", a businessman with a tablet.

**YouTube bait**
- Shocked faces, red arrows and circles, clickbait in capitals, emoji on thumbnails.
- Crash zooms, the "vine boom" sound, a whoosh on every cut, animated subscribe-and-bell graphics, meme inserts.
- The mascot on a thumbnail (FORMAT §7).

**Type**
- Letterspaced lowercase.
- Faux bold, faux italic, fake small caps, outlined type, neon-glow type, 3D-extruded titles, gradient-filled text.
- More than two type families.
- Type set straight onto a busy photograph with no paper under it (the title card on Zenith is the one exception).

**Motion**
- Bounce, elastic, overshoot (except the mascot's own performance).
- Spinning or flipping marks.
- Glitch, light-leak and 3D page-curl transitions.
- Light travelling along threads, and threads that snap.

**Brand misuse**
- A regenerated or recoloured shield.
- A row of member logos ("logo soup"), co-branded lockups, ranking members on screen.
- Anything that suggests DeRec is Hedera or any other single member (non-negotiable 3).

**Sound, since it touches the frame**
- Music under talk (FORMAT §2).
- Any sting under Where It Stops.

---

## Sign-off list

### [HOST GATE]

1. **The shield master:** the Alliance supplies the only artwork, and the show uses the plain mark without "PROTECTED BY DeRec". If no plain master exists, the shield position stays empty.
2. **The imprint set in Atkinson,** replacing the cover's AI-rendered lettering, unless the Alliance has an official wordmark.
3. **The title set in Fraunces** and the imprint in Atkinson, a departure from FORMAT's "same typeface" note.
4. **The square cover lockup:** imprint, title, descriptor and shield placement (FORMAT's sign-off item 10).
5. **Role lines on the name captions:** "Community lead, DeRec Alliance" and "Engineer, lib-derec".
6. **Shield patches** on jackets in key art only, and no logos in the live wardrobe.
7. **Key-art route:** hybrid recommended. Any AI-generated likeness needs both hosts' written approval and disclosure.

### [VERIFY]

1. **Alliance brand rules** for the shield (minimum size, clear space, colour) and any official "DeRec" wordmark. Theirs override §3.
2. **The areas of YouTube's end-screen elements** in the Studio editor, before the end-card template is locked.
3. **The areas the Shorts app overlays,** before the Light Work template is locked.
4. **The `lib-derec` version** shown on the Hands On label at every recording.
5. **The Curve's caption,** with Facundo, before Episode 01 records. Check how `derec-cryptography` actually splits a secret (as one number, byte by byte, or as a shared key for an encrypted secret), and that "the secret is one number" stays true for it. If it doesn't, Facundo rewords the first line; the two-line layout holds either way. Check the wording together with the script's phrasing of R6's three limits (`scripts/EP01-SCRIPT.md`, [VERIFY] item 11).

---

## Changes after the concept phase

Edited in the build phase to agree with `DECISIONS.md`, `intro/COLD-OPEN-STORYBOARD.md` and `mascot/CHARACTER-BIBLE.md`. Sections that already agreed were left alone.

1. **The characters (§1).** Added Tuck's and Pip's palettes and how they sit in the system. Gilt, Glass, Filament and Amber now list their character jobs: the lit stone, Tuck's catchlight and Pip's Glass face-line.
2. **The release (§4 and the one-page summary).** The thread now meets the mascot in one sanctioned place, R3's release, on the storyboard's routed path. The kit states the release's exceptions to the draw, speed, curvature, node and leaving rules. The constellation no longer appears in the bumper world.
3. **The title page (§2, §5, §6).** It sits in the sky above Tuck for the whole ritual. The §5 sequence now runs on the storyboard's frames: the type settles over f60–f77, the release draws the rule over f102–f113, the node fades over f116–f119, and the melt (f114–f119) ends on this kit's title card on sky. The world's own sky no longer stands in for the house sky, and the camera never tilts. The positions already matched. The descriptor moves from weight 500 to 600, as in the storyboard.
4. **Clear space (§3).** On the title page Tuck works to the storyboard's clearance (below y 606), not 1 X.
5. **The shield (§3, §6).** Plain mark only (R9). With no plain master the position stays empty, and the "PROTECTED BY" fallback is gone.
6. **The Curve (§6).** Added as ink-on-paper teaching furniture with its honest-limits caption (R6), built on the Episode 01 script's Curve page. The Hands On label steps off while it's up.
7. **The Light Work stamp (§6).** Now the storyboard's 24-frame crop of the ritual (f88–f111), not a still.
8. **Smaller agreements.** Tuck gestures with both paws on the One Small Thing card. The tab engraving is Tuck, never Pip. Key art's "10–15% below the references" grade doesn't apply to the bumper's plates (R4).
