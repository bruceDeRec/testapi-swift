# The prompt pack: how to make the cold open

*Everything needed to make the* Many Hands *cold open and its variants, by two routes side by side. Written for Bruce Longley and Facundo La Rocca, for the animation studio they hire, and for the editor-producer. It implements `DECISIONS.md` (R3, R4, R5, R9 above all), `intro/COLD-OPEN-STORYBOARD.md` (which owns every frame number and hit point), `mascot/CHARACTER-BIBLE.md` (which owns everything Tuck and Pip look like and do), `brand/BRAND-KIT.md` (colour and type) and `music/THEME-AND-SOUND.md` (sound). It sits beside `production/PLAYBOOK.md`, which owns the edit, file names, gates and delivery. Where this pack and those documents disagree, they win, except for the few departures listed and argued in "Where this pack departs". **[HOST GATE]** marks something that needs Bruce's or Facundo's sign-off. **[VERIFY]** marks a fact to check before anyone relies on it. Both are gathered at the end.*

*Frames are 0-indexed at 24 fps: f0 is 0.00s, f54 is the cut into the pocket shot, f119 is the last frame of the bumper, f120 is the cut to the hosts. Screen positions are written at 1920×1080, as in the storyboard. The masters are rendered at 3840×2160 (UHD), so every position, size and stroke doubles there. Where it matters, both numbers are given.*

---

## The pack on one page

- **Route A, hand-made, is the recommendation for everything that ships.** A small studio builds Tuck, Pip, the friends' paws and the stones by hand, animates the ritual once, renders it once and locks it. Per episode it animates bar one (f0–f53), paints one plate and renders one carry-over layer (R4, R9).
- **Route B, AI-assisted, is allowed for two things only, and only if both hosts choose it [HOST GATE]:** bar-one background plates, finished by a human matte painter, and look development that never ships (previs keyframes and motion tests). It never touches the ritual master, the paws, the stones, the threads, the carry-over or the title page. AI video never ships in any case.
- **Route B saves little money.** About $2,500–7,000 a season on plates. Its cost is a synthetic-content label on every episode that uses an AI plate. My recommendation is Route A for all shipped pixels, and Route B for look development only, if the hosts are comfortable.
- **The tools for Route B,** if chosen: Adobe Firefly's own models (Firefly Image 5 for stills, the Firefly Video Model for motion tests). They are trained on licensed content, Adobe does not train on what we upload, and they sit inside the Adobe suite the editor already uses. Every prompt says what to change for Nano Banana 2, GPT Image 2.5, Midjourney v7, Runway Gen-4.5 and Veo 3.1. **[VERIFY]** every tool's version and terms at the time of use.
- **The AI never designs Tuck.** Route B cannot start until Route A's hand-drawn turnaround is approved. The turnaround conditions the AI, never the other way round. That protects the characters' human authorship, which is what lets the Alliance own them.
- **The title page and the shield are built in a compositor from master files, once, and never generated.** The title page is rendered as a locked layer in two variants (day and dusk) and stacked on every bumper.
- **The top failure risk is the join at f53/f54.** A one-page join checklist (§A7) is signed for every bar one, at blocking and at final.
- **QC is partly scripted.** Four short scripts check what a tired eye misses: frame count, the stones staying grey until f90, the carry-over staying below y 606, and the brightness step at the join.
- **Assembly:** Adobe After Effects for the bumper and Adobe Premiere Pro for the episode (the playbook's editor). Free fallback: Blender for all 3D, DaVinci Resolve for comp, edit and delivery.
- **Money, estimated, to confirm with three quotes:** about $46,000 for the initial build including Episode 01 (range $24,000–73,000), plus 25% to hit the playbook's 28 October delivery. About $3,900 for a medium-tier episode after that. About $41,000 for Episodes 02–12.
- **Schedule:** the studio must be signed by Friday 2 October to deliver the ritual master and Episode 01 by Wednesday 28 October. The go/no-go checkpoint is Friday 9 October. If it's missed, move the Premiere two weeks rather than launch without Tuck [HOST GATE].

### Where this pack departs, and why

1. **Masters render at 3840×2160, not the storyboard's 1920×1080 (§5).** The playbook uploads UHD. The ritual is rendered once and used for years, so it should be rendered at the larger size. Stylised renders are cheap, so the cost is small. All positions stay written at 1080 and double at UHD. (The 9:16 *Light Work* stamp and 3.0-second cut don't crop the master at any size: they come from their own native 1080×1920 pass, R13.)
2. **The threads' curved legs fade over f114–f119, with the melt.** The storyboard ends on "a clean rule" but doesn't say when the legs go. Animatic frame 11 shows the rule alone. The legs fade on the brand kit's `breath` curve with the melt; only the rule stays.
3. **Two carry-overs need a fix before they're animated.** Episode 02's eyepiece ring sits next to the bible's forbidden eye zone, and Episode 06's bobble hat can't clear y 606 as written (§A6).
4. **The 15-second trailer (storyboard §7) runs from Wednesday 10 February 2027 as the head of TR03 (CHANNEL-KIT §1), with no date line** [HOST GATE]. By then Episodes 01, 02, 04 and 07 have all aired, so it previews no activity (FORMAT §7).

---

## What is made, and by which route

| Element | Route A (hand-made) | Route B (AI-assisted) | Why |
|---|---|---|---|
| Tuck, Pip, the friends' paws, the stones: design, model sheets, models, rigs | **Always** | **Never** | Character masters must be human-authored to be protectable, and the bible bans AI in any character master (R9, bible Part four). |
| The ritual master, f54–f119, and the New Stones head, f48–f53 | **Always** | **Never** | It's the show's promise that the ritual is identical every time. Generated frames drift. |
| The threads | **Always** (2D, on ones) | **Never** | A generated thread invites light running along it, which reads as data moving (brand kit §4). |
| The carry-over layer | **Always** | **Never** | It's rendered through the master camera on the exported anchors. Anything else slips. |
| The title page and the shield | **Always**, in the compositor | **Never** | See §C1. |
| Bar-one character animation (Tuck, Pip, props, 2D effects cards) | **Always** | Previs only, never shipped | A generated otter can't hold the model across 24 episodes, and can't hit f15, f30 and f45 to the frame. |
| **Bar-one plate** (the painted background) | Recommended | **Allowed** as a draft a human painter finishes [HOST GATE] | It's the one element with no character in it. Disclosed if any generated pixel survives. |
| The ritual plate (defocused, warmed, darkened) | Made in comp from the bar-one plate | Made in comp from the bar-one plate | A deterministic transform, never generated, so every episode matches. |
| Look development: previs keyframes, motion tests, plate explorations | Studio sketches | **Allowed** [HOST GATE] | Nothing ships. It speeds up decisions. |
| End-card reprise | **Always** | Plate only, as for bar one | It reuses bar one's assets. |
| Sound: the activity sound, the ritual foley | Real recordings | **Never** | THEME §4 and §7: no generated sound anywhere. |

---

# Part A: Route A, hand-made

**This is the brief to send to a small animation studio or a freelance 3D animator. It can go as it is, with the bible, the storyboard, the animatic and the brand kit attached.**

## A1. The job, the studio and the pipeline

**The job.** Build two characters (Tuck, a grown sea otter, and Pip, a mug-sized porcelain café robot), five friends' paws and eleven stones, in storybook-warm stylised 3D with a printed-book ink line. Animate one 66-frame ritual by hand, render it once and lock it. Then, every two weeks, animate 54 frames of a new activity, paint one plate, and render one carry-over detail over the locked ritual. The full spec is in the attached character bible. The timing is in the storyboard and the animatic (`intro/animatic/many-hands-ep01-cold-open-animatic.mp4`). Nothing in this job is improvised: every measurement, colour and frame is already written down.

**Who.** A small studio, three to eight people, with a named lead animator and a named backup, is the recommendation over a solo freelancer. The ritual must outlive any one artist, and 24 bar-ones a year on a fortnightly clock need someone who can cover illness and holidays. A solo freelancer is acceptable only with a named rigger and a named backup animator in the contract.

**The pipeline: Blender, frozen for the season.** Use the current Blender LTS release at kickoff [VERIFY which 5.x release is LTS] and install no major update until season two. Three reasons:
1. **The Alliance can open its own masters forever.** Blender is free and open source. A character archive that needs a paid licence to open is a hostage.
2. **One file holds the 3D and the 2D.** Grease Pencil draws the threads (on ones, R12) and the effects cards (splash, snow, flour, leaves, ripples, on twos, R4) in the same scene as the 3D characters, under the same camera.
3. **It is the free fallback anyway** (§C3), so the studio's files and the fallback are the same files.

A studio whose pipeline is Maya may bid, but it delivers Blender-native masters or USD caches plus a Blender rebuild of the rig at its own cost. Say so in the quote.

**Colour management.** The palette is display-referred sRGB/Rec.709 hex (brand kit). In Blender, set the view transform to **Standard**, not the default AgX. AgX desaturates and shifts hues, so Jade and Gilt would render as some other colour. Render scene-linear EXR; the Standard view makes the hex values land as written.

**The human-made warranty.** The same clause the composer signs (THEME §7). No generative AI may be used to design, draw, model, sculpt, texture, rig, animate, light or composite any Route A asset. That includes concept art, reference boards made by a generator, AI texture or upscaling tools, ML auto-posing, and AI in-betweening. Standard render denoisers (OpenImageDenoise, OptiX) are allowed: they clean the studio's own render and invent nothing. If the hosts choose Route B for a plate, that plate is logged and carved out by name.

## A2. Model sheets and turnarounds

Drawn by the studio's character designer, by hand, from the bible's construction sheet. Every sheet carries the H grid (H = Tuck's head height, crown to chin), the bible's palette swatches with hex values, and the date. Keep every dated sketch: it is the human-authorship record (bible, clearance step 3).

**Tuck**

| Sheet | Contents | It must show |
|---|---|---|
| **Turnaround, standing** | Front, three-quarter front, side, three-quarter back, back, at 2.6H tall | Head 1.0H tall × 1.1H wide (wider than tall, never a ball). Muzzle 0.25H forward, 0.6H wide. Torso 1.3H, chest 1.25H wide. No visible neck. Forelimb 0.8H. Hind flipper 0.75H × 0.45H, with four grooves. Tail 0.9H × 0.28H × 0.08H. |
| **Turnaround, the home float** | Side, top and three-quarter views, 3.3H nose to tail | Head up, paws together on the chest, hind flippers up at the far end. The logo pose. |
| **The pocket shot** | Front view, chest-up, lens at eye height, stone held at the chin | The three-shape stack: head, jade band, stone. Stone in both mittens, chip at two o'clock, ends showing past the paws. |
| **Face construction** | Front and side, with callouts | Eyes 0.085H, centres 0.5H apart, eye line 0.48H below the crown. Nose 0.2H × 0.13H, tip 0.62H below the crown. Mouth a closed 0.12H line. Seven whiskers a side, 0.5–0.6H. Ear nubs 0.08H, 0.35H below the crown. The cream mask edge is colour, not line. |
| **Expression sheet** | The bible's eight expressions, each with its control values | Home, absorbed focus, curious, mild surprise, quiet delight, not quite, pride, the content blink. Eyes never change size. Mouth never opens. |
| **Hands and pocket** | Mittens from four angles; the pat; the stone drawn out; the stone held; the tuck | Mittens 0.28H × 0.22H with **no visible digits**. The pocket crease 0.35H under the **left** forearm; the bump 0.15H proud with the stone in; 10% compression on the pat. |
| **Scarf** | Front, side, back | Band 0.12H between the cream face and cream bib. Tied once on **her left** (camera right when she faces us). Tail 0.5H, olive float bulb 0.1H. |
| **Silhouette sheet** | The home float and the pocket stack as solid black, at full size and at 48 px | Both read as an otter at 48 px (bible silhouette rules 2 and 7). |
| **Size line-up** | Tuck, Pip, the stone, each friend's paw | Pip 0.9H tall. Gran's paw 1.1× Tuck's, Kip's 0.9×. |

**Pip**

| Sheet | Contents | It must show |
|---|---|---|
| **Turnaround** | Front, three-quarter, side, back, top | A softened shield: flat top 0.62P wide with 0.12P corner radii, shoulders 0.86P, blunt point of radius 0.18P. One piece: no head, neck or legs. Hover gap 0.15P. |
| **Face-line sheet** | The visor (0.52P × 0.20P capsule, top edge 0.12P below the top) with the four shapes: — · ~ ^ | One stroke, 0.025P thick, 0.24P long, centred. It bends and never moves sideways. |
| **Mitts** | Four poses | 0.20P long, 0.10P off the body, 0.03P brass cuffs |
| **Material callout** | Glaze `#FBF8EF` satin, iron speckle about 3%, hairline Brass seam, Ink visor, Glass face-line and hover glow | **The chest is plain glaze:** no window, no bead, no compartment, no light. Nothing amber, red or blue-violet. |

**Friends' paws and stones**

- **One paw sculpt, five fur texture sets:** Gran (cocoa with silver tips, 1.1×), Kip (dark chocolate, 0.9×), Sandy (sandy blond with a cream wrist patch), the Harbourmaster (cocoa-grey, Ink waxed-canvas cuff with one Jade stitch line, no text or logo), Fern (cocoa with russet tips, slender). Palm up, the stone resting on the pads: an offering, not a grip.
- **Eleven stones:** Tuck's season-one stone (chip at two o'clock) and season-two stone (chip at ten o'clock); the old stone for New Stones (sand `#CDBF9F`); four season-one friends' stones (Gran's near-sphere, Kip's long bean, Sandy's rounded wedge, the Harbourmaster's thick lozenge); four season-two friends' stones (Gran's long bean, Kip's thick lozenge, the Harbourmaster's near-sphere, Fern's fat teardrop). Every stone's thickness is at least 50% of its width. None is coin-shaped, faceted, stamped, patterned or jigsaw-edged. Tuck's 14 speckles are painted once and locked.
- **Lit state:** Amber body, Filament core, Gilt halo, no facets. The chip still notches the outline.

**Approval.** Both hosts sign Tuck's turnaround, pocket-shot sheet and expression sheet [HOST GATE]. The Alliance signs Pip's outline before Pip is animated, because it echoes the shield (bible Part two) [HOST GATE]. Then the studio makes a 48-frame turntable of each model, and the hosts approve the model against its sheet.

## A3. The rig spec

**Rules for every rig:**
- **Deterministic.** No simulation anywhere (no cloth, fur, hair or rigid-body sim). Rendering the same frame twice gives the same pixels. That is what "locked" means.
- **Limits built in, not left to the animator's memory.** Where the bible says "never", the rig makes it impossible.
- **A pose library ships with each rig.**

**Tuck**

| Area | Controls | Limits and notes |
|---|---|---|
| Body | Root, hips, a 5-joint spine (FK with an IK option), chest | Volume-preserving squash of ±5% for the settle (sink 0.03H, recover over 4 frames). No stretch. |
| Head | Head aim, tilt, turn | Tilt range covers the curious 12°. Whiskers follow the head 2 frames behind. |
| Forelimbs | IK/FK switch, shoulder, elbow, wrist, one mitten curl control | **Reach capped at 0.8H: stretch disabled** (silhouette rule 4). **No digit controls:** the mitten has no fingers to pose. |
| Hind flippers | IK, ankle, toe spread, toe curl (one control for the four grooves) | Always oversized. |
| Tail | 4-joint chain, FK, optional spring | The spring is hand-baked, never simulated at render. |
| Face: six controls (bible, expression sheet) | **Lids** (upper and lower, percent closed); **brow mounds** (L/R raise and pinch); **cheek mounds** (L/R lift, closing the lower lid); **whisker angle** (L/R, 0° relaxed, forward, back, fan); **head tilt**; **hind flippers** as the sixth, driven from the body rig | **No jaw control.** The mouth has corner controls only (turn up, flatten), so it cannot open. Eyes have an aim control and a fixed size. The catchlight is fixed upper-outer. A nose-puff shape for expression 6. |
| Whiskers | 7 per side, on a chain that lags the head by 2 frames | Keyable override on every whisker. |
| Pocket | Corrective shapes: stone in (bump 0.15H), stone out (flat), pat (compress 10%) | Always the left. |
| Scarf | Tail and float bulb on a spring chain with 3–4 frames of drag | Hand-keyable override. No cloth sim. |
| The stone | A prop with a parent switch: pocket, right mitten, both mittens | The chip's orientation is locked to two o'clock (ten o'clock for season two) when held to the lens. |
| Carry-over anchors | Nine named empties: crown, forehead, left ear, right ear, brow, left cheek, right cheek, nose, scarf knot | Parented to the deforming surface, so an item on them rides the master exactly. Exported per frame. |
| **Pose library** | Home float; pocket-shot neutral; the eight expressions; the grooming tell; the settle | Plus two cycles built once and reused: the **waddle** (one step per eighth note, 7–8 frames, 6° roll) and the **float bob** (1.5% of body length over 30 frames). |

**Pip**

| Area | Controls | Limits |
|---|---|---|
| Body | Root, hover height, tilt | Rigid: no squash, no stretch. Height from a 0.05P gap up to 0.3P above rest. Tilt capped at 12°. |
| Mitts | Two free-floating controls with cuffs | They lead the body by 2–3 frames and settle 2–3 frames after. |
| Face-line | One curve with four shape presets (— · ~ ^) blended by one control | **Lateral translation locked.** It bends, it never sweeps. |
| Glow | Face-line and hover glow intensity | The only two things on Pip that glow. |
| Cycles | Idle bob: 2% of height over 60 frames | It slows when Pip concentrates and stops when Pip sits. |

**Friends' paws:** one rig for all five. A short 3-joint forearm and the mitten, palm up, with the stone parented to the pads; the forearm stays short so it reads as a paw, not a pole (R11). A scale control (Gran 1.1, Kip 0.9, others 1.0), a cuff toggle for the Harbourmaster, a texture-set switch. Each paw rises from a fixed point on the bottom edge: x 700 for the left side, x 1220 for the right (R11, bible "Staging"). The entry and exit animation is authored once per side and reused, so choosing a friend is a texture swap, never an animation job.

**The threads** are Grease Pencil drawings on ones, in the master scene: 12 drawings over f102–f113 (R12). Each tip travels at a near-constant speed of about 79 px a frame along storyboard §3's path (158 px at UHD), with a 2-frame ease at each end, not the brand kit's `draw` curve. Their shape may wobble by 1 px or less between drawings (2 px at UHD). Their brightness never changes.

## A4. The pocket-shot framing

These are storyboard §3's values. The storyboard owns them, and the studio builds to them as written:
- **Tuck's crown** sits at y 670 (y 1340 UHD), and her **head centre** at y 788 (y 1576 UHD).
- **A crown item** may rise at most 64 px, to y 606 (y 1212 UHD). The Episode 01 leaf tops out at y 618 and passes.
- **The stones meet** at about y 912 (y 1824 UHD; left stone rim x 848, y 912). The threads follow storyboard §3's path unchanged.
- **The sky seam** sits at y 640 (y 1280 UHD), feathered over y 616–664 (y 1232–1328 UHD), so the descriptor's baseline at y 592 sits on clean sky (R13). Above the seam is the house sky (day or dusk); below it, the ritual plate (§C3, layer 3).

## A5. The locked ritual master: what is rendered, once

**The bible's table, exactly.** Everything below is rendered in the initial build, so nothing in the ritual is ever re-rendered, including for season two and the New Stones variant.

| Pass | Versions |
|---|---|
| Tuck beauty (f54–f119) | One |
| Tuck's stone: slate and lit states | Two stones: season one (chip at two o'clock) and season two (chip at ten o'clock, see New Stones) |
| Glow interaction (the stones' light on Tuck) | One per stone set |
| Friend paws, each with its stone, per edge | Season one: 4 friends × 2 edges = 8. Season two: 4 friends × 2 edges = 8. |
| Holdout mattes | Tuck's paws, the stone, the forelimbs |
| **Anchor locators** for the carry-over layer (exported 3D nulls, per frame) | Crown, forehead, left ear, right ear, brow, left cheek, right cheek, nose, scarf knot |
| The New Stones head (f48–f53) | One |
| The threads | Drawn once in 2D, on ones (12 drawings, f102–f113), as a separate layer |

**How each pass is delivered.** Frame numbers in file names are the f-numbers, four digits (`.0054` is f54), per the playbook's naming pattern.

| Pass | File (season one shown; season two uses `MasterS2`) | Frames | Format |
|---|---|---|---|
| Tuck beauty | `MH_RIT_MasterS1_v01_BEAUTY.0054.exr` … `.0119` | f54–f119 | Multi-layer EXR (below), RGBA premultiplied |
| Tuck's stone | `MH_RIT_MasterS1_v01_STONE.####.exr`; `MH_RIT_MasterS2_v01_STONE.####.exr` | f61–f119 | Slate until f89; the lit ramp over f90–f92; slate again from f102–f105 |
| Glow interaction | `MH_RIT_MasterS1_v01_GLOW.####.exr`; `…MasterS2_v01_GLOW…` | f90–f105 | RGB, composited Add |
| Friend paws | `MH_RIT_MasterS1_v01_PAW-GRAN-L.####.exr`, `PAW-GRAN-R`, `PAW-KIP-L`, `PAW-KIP-R`, `PAW-SANDY-L`, `PAW-SANDY-R`, `PAW-HARBOUR-L`, `PAW-HARBOUR-R`. Season two: `GRAN`, `KIP`, `HARBOUR`, `FERN` | f68–f109 | RGBA, each with its own stone lit on f90 |
| Holdout mattes | `MH_RIT_MasterS1_v01_MATTE-PAWS`, `MATTE-STONE`, `MATTE-FORELIMBS` | f54–f119 | Single-channel EXR |
| Anchor locators | `MH_RIT_MasterS1_v01_LOCATORS.abc`, `.fbx` and `.csv` | f48–f119 | The nine empties plus the master camera. The CSV gives each anchor's screen x, y (UHD), rotation and scale per frame, for 2D tools. |
| New Stones head | `MH_RIT_MasterS2_v01_NEWSTONES-HEAD.0048.exr` … `.0053` | f48–f53 | Includes the old stone and its drop |
| The threads | `MH_RIT_MasterS1_v01_THREADS.0102.exr` … `.0119` | f102–f119 | Drawn on ones over f102–f113, then held. RGBA line only: the 6 px Gilt stroke with its 2 px Filament core (UHD). **No glow in the render:** the glow is built in comp to the brand kit's exact values (§C3). The curved legs fade over f114–f119 on `breath`; the rule stays. |

**Also delivered with the master** (additions to the bible's list, needed for QC, comp and the archive):
- `MH_RIT_MasterS1_v01_MATTE-STONES-ALL`: one matte covering all three stones, f61–f109. The stone QC script (§C2) reads it.
- **Reference stills** as PNG at f54, f60, f75, f82, f90, f101, f113 and f119, with the Episode 01 comp, for QC comparisons.
- **The locked title page**, built once in the compositor (§C1): `MH_RIT_TitlePage_v01_DAY` and `_DUSK`, each as an RGBA pass and an Add pass.
- **The skies:** `MH_BR_SkyDay_v01.png` and `MH_BR_SkyDusk_v01.png`, made by the script in §C3.
- **The ritual-plate LUT:** `MH_BR_RitPlate-Warm300K_v01.cube`, a chromatic adaptation that renders a plate as if lit 300 K warmer, made once so both comp routes warm every plate identically.
- **The comp templates:** an After Effects project and a DaVinci Resolve (Fusion) composition that stack the passes as in §C3.
- **The `RIT` foley stem** is not the studio's: it comes from the sound designer (bible, "Sound").
- **The archive:** every Blender scene, rig, sculpt, texture, Grease Pencil file and comp project; the turntables; the dated WIP record; and the signed assignment of rights. It goes into `03_ANIMATION/RIT_MasterS1/` and `RIT_MasterS2/`, read-only (playbook §6).

## A6. Per-episode bar-one deliverables

The swap system (storyboard §5): bar one (f0–f53) changes every episode; the ritual (f54–f119) never does. Per episode the studio delivers:

| File | Spec |
|---|---|
| **Bar one** `MH_E01_BarOne_v01_BEAUTY.0000.exr` … `.0053` | **54 frames exactly.** f53 is a hard cut: no tail handle. UHD, multi-layer EXR as in §A8. |
| **Head handles** `MH_E01_BarOne_v01_HEAD.0000.exr` … `.0011` | 12 frames before f0, for the editor. `.0011` is the frame before f0. |
| **The plate** `MH_E01_PLATE_v01.psd` | Layered 2.5D matte painting (sky, far, middle, near, water or floor, and the "tomorrow" detail on its own layer so it can move). At least 5760×3240, so the medium shot can reframe it. |
| **The carry-over layer** `MH_E01_CARRYOVER_v01_RGBA.0054.exr` … `.0119`, plus `MH_E01_CARRYOVER_v01.mov` | Rendered through the master camera, lit by the master's lights, on its one anchor. ProRes 4444 with alpha for the mov. |
| **The bumper** `MH_E01_BUMPER_v01.mov` | ProRes 422 HQ, 3840×2160, 120 frames, flagged 23.976 (playbook §4), Rec.709, no audio |
| **A review copy** `MH_E01_REVIEW-BUMPER_v01.mp4` | H.264 with M01 laid in at sample 0, for the hosts' phones |
| **The reprise** `MH_E01_REPRISE_v01.mov` | ProRes 4444 with alpha, sized for the end card's reprise area (x 1368–1824, y 522–1008) |
| **The activity sound** `MH_A01_ActivityLeaf_0s50_v01_MIX.wav` | A real or library recording, never generated (THEME §2) |
| **The join sheet** `MH_E01_JOIN_v01.pdf` | f53 and f54 side by side, with the §A7 checklist signed |

**The rules the animation keeps** (storyboard §5, bible Part three):
- Cuts inside bar one land only on f15, f30 or f45. Never more than two.
- The activity sound lands on f15, f30 or f45, at most 0.50s, with up to two soft foley touches. No voice.
- Any prop in her paws is set down by f53.
- The button has a double beat that foreshadows pat-pat.
- The carry-over is on screen, on its anchor, by f45, and never moves relative to it after that.
- Exactly one "tomorrow" detail per plate: an air taxi, an autonomous shuttle or the crystalline skyline. Never a robot other than Pip.
- The key light comes from camera left in every plate. Night plates are lamplit or lantern-lit, never cold moonlight.
- The top of every plate is deep sky: the Zenith family by day, the Night Sky family at dusk.
- No stone, pebble, bead, marble or gem anywhere in bar one.
- Tuck is always modelled dry. Water is 2D sheen and ripple cards.

**Season one, per episode.** Air dates, activities, casts, tiers, carry-overs and paws are the bible's. The anchor, the sky and the delivery date are this pack's.

| Ep | Air | Activity | Cast | Tier | Carry-over, and its anchor | Paws (left / right) | Sky | Activity sound | Studio delivers |
|---|---|---|---|---|---|---|---|---|---|
| 01 | 11 Nov | The float | Solo | Medium | Maple leaf, **crown** (top at y 606 or lower) | Gran / Harbourmaster | Day | f30 | **Wed 28 Oct** |
| 02 | 25 Nov | Stargazing | Solo | Cheap | Eyepiece ring round the left eye, **brow** (see below) | Kip / Sandy | Dusk | f30 | Wed 4 Nov |
| 03 | 9 Dec | Tray sledding | Solo | Medium | Snow dusting, **crown** | Sandy / Gran | Day | f45 | Fri 20 Nov |
| 04 | 23 Dec | The bell choir | **Pip** | Medium | Fir sprig, **right ear** | Harbourmaster / Kip | Dusk | f15–f30 | Fri 20 Nov |
| 05 | 6 Jan | Baking | Solo | Cheap | Flour, **nose** | Gran / Kip | Day | f45 | Fri 18 Dec |
| 06 | 20 Jan | Ice skating | Solo | Medium | Knitted hat, **crown** (see below) | Sandy / Harbourmaster | Day | f45 | Fri 18 Dec |
| 07 | 3 Feb | Café chess | **Pip** | Cheap | The captured pawn, **scarf knot** | Kip / Gran | Day | f30 | Fri 20 Nov |
| 08 | 17 Feb | Pottery | Solo | Medium | Terracotta clay, **brow** | Harbourmaster / Sandy | Day | f45 | Fri 18 Dec |
| 09 | 3 Mar | Kite flying | Solo | Medium | Daisy, **scarf knot** | Gran / Sandy | Day | f30 | Fri 12 Feb |
| 10 | 17 Mar | Repotting | **Pip** | Medium | Potting soil, **right cheek** | Kip / Harbourmaster | Day | f45 | Fri 12 Feb |
| 11 | 31 Mar | Painting | Solo | Cheap | Jade paint, **left cheek** | Sandy / Kip | Day | f30 | Fri 12 Feb |
| 12 | 14 Apr | The lantern dance | **Pip** | Expensive | Lantern tassel, **scarf knot** | Harbourmaster / Gran | Dusk | f45 | Fri 12 Feb |

**Two carry-overs to fix before they're animated:**
- **Episode 02's eyepiece ring** sits beside the eyes, which the bible forbids as a zone. Keep it only as a faint ring on the fur that stays clear of the lids, on the brow anchor, and check it against the master's blink (f112–f119). If it touches a lid, swap it for a sprig of cypress from the terrace planter behind her right ear.
- **Episode 06's bobble hat** can't clear y 606 with a bobble on top. Make it a flat oatmeal knitted beanie with one jade stripe and no bobble, sat back on the crown. If it still fails the carry-over script (§C2), swap it for a dusting of ice spray on her brow.

**Batches.** Batch 1: the ritual master, Episode 01 (28 October) and Episode 02 (4 November). Batch 2: Episodes 03, 04 and 07, so Episode 04 is delivered before its 14 December lock. Batch 3: 05, 06, 08. Batch 4: 09 to 12. Batching lets the studio paint plates and set up scenes together, which is where most of the saving comes from. The Alliance's sign-off on Pip's outline is needed by **Friday 30 October**, before batch 2 starts [HOST GATE].

## A7. The f53/f54 join checklist

**One page, signed for every bar one, twice:** once at blocking and once at final. The studio's lead animator fills it in; the editor-producer approves it; nothing is rendered final until it passes. Watch the join at full speed on a phone before signing. Storyboard §9 names this join as the most likely failure.

| # | Check | How to check it | Pass |
|---|---|---|---|
| 1 | **Eyeline left** | Scrub f45–f53. Her eyes, then her head, resolve toward frame left. Compare f53 with the master's f54. | At f53 she looks frame left, and her head angle is within about 15° of the master's three-quarter-left start at f54. |
| 2 | **Paws free** | Look at f53. | Nothing in her paws. Every prop set down. Paws on or near her chest. |
| 3 | **Key from camera left** | Compare the lit side, the rim and the cast shadows in f53 and f54. | Light falls from high camera left in both. Shadows fall to frame right. The key is golden in both. |
| 4 | **Carry-over on its anchor by f45** | Step f45–f53 frame by frame, then crop the item at f53 and f54 at 200%. | It arrives by f45 and doesn't move against its anchor after that. Same item, size, orientation and colour on both sides of the cut. |
| 5 | **Deep sky at the top of frame** | Run `qc_topsky.py` (§C2) on f53 and f54. | The top 15% of f53 is no brighter than Sky `#4185CB` (luma 0.48 or less) and within 0.12 of f54's luma. Night episodes: both frames in the Night Sky family. |
| 6 | **Eye trace** | Where is her head at f53? | In the centre third of the frame (x 640–1280), so the eye finds her at once in the pocket shot. |
| 7 | **A locked camera** | Scrub the last shot of bar one. | No camera move in the frames before the cut. |
| 8 | **Continuity** | Compare f53 and f54. | The scarf is knotted on her left (camera right when she faces us). Her fur is dry. Her palette matches. No stone in sight. |
| 9 | **The sound's clearance** | Play f40–f60 with M01. | The activity sound and any foley have ended by f54, so the hush starts clean. |
| 10 | **Exactly 54 frames** | Count the bar-one sequence. | f0–f53, no tail frames. |

Signed: lead animator ______ date ______ · editor-producer ______ date ______

## A8. File formats

| Item | Format | Why |
|---|---|---|
| All 3D renders (ritual and bar one) | OpenEXR, multi-layer, 16-bit half float, **ZIP** compression (lossless), scene-linear Rec.709 primaries, rendered with the Standard view transform | Lossless, because the ritual master is kept forever. Half float keeps the glow's headroom. |
| Layers inside each EXR | RGBA (premultiplied), plus the passes the studio's comp template uses | The template, not the editor, decides the stack. |
| Plates | Layered PSD, 16-bit, sRGB, at least 5760×3240 | Every paint tool opens it. Layers make it 2.5D. |
| Carry-over, reprise | EXR sequence plus ProRes 4444 with alpha | EXR for the archive; ProRes for the edit |
| Final bumper | ProRes 422 HQ, 3840×2160, 120 frames, flagged 23.976, Rec.709, no audio | The playbook's spec. M01 is placed by the editor from the master file, so the studio's guide audio never ships. |
| Anchors and camera | Alembic and FBX, plus CSV | Any 3D or 2D tool can read one of them. |
| Sheets and turnarounds | Layered PSD or Krita file, plus PDF and 4K PNG | Source, print and quick viewing |
| Scenes and rigs | Blender `.blend`, with textures packed or relative | The archive must open on a fresh machine. |

**Frame rate.** Animate, count and render at 24 fps: 120 frames, 15 frames a beat. The delivered file is flagged 23.976 to match the camera footage (playbook §4). At that rate f120 falls 5 ms after M01's button at sample 240,000. That is a tenth of a frame and inaudible. Never retime the music or the picture to "fix" it.

## A9. Fees and schedule (estimates to confirm)

**All figures are market estimates, not quotes.** Blended studio day rates for stylised 3D run from about $300 (Eastern Europe, Latin America, South-East Asia) to about $650 (UK, Western Europe, North America) [VERIFY with three quotes]. The planning figures use $475.

**The initial build** (the ritual master, every asset in §A5, Episode 01, the segment-tab engraving and the Light Work stamp):

| Work | Artist-days |
|---|---|
| Design: model sheets, turnarounds, expression sheet, paws, stones, Pip | 10–14 |
| Tuck: model, sculpted fur, hand-painted textures | 10–14 |
| Tuck: rig and pose library | 8–12 |
| Pip: model, textures, rig | 4–6 |
| Friends' paws (one sculpt, one rig, five fur sets) and eleven stones | 5–7 |
| Look development: NPR ink line, shaders, light rig, the lit-stone shader | 5–8 |
| The ritual animation, f54–f119, both paw entries, and the New Stones head | 10–14 |
| The threads, in 2D | 2–3 |
| Rendering every pass, mattes and locators | 4–6 |
| The comp templates, the locked title page, the skies, QC | 4–6 |
| Episode 01: bar one, plate, carry-over, reprise | 7–10 |
| The segment-tab engraving and the Light Work still | 1–2 |
| Direction, production and two rounds of revisions (about 15%) | 11–16 |
| **Total** | **81–113 days: about $24,000–73,000. Plan on $46,000.** |

**The rush premium.** The playbook needs the ritual master and Episode 01 by Wednesday 28 October. That is four weeks of production, so the studio has to run design, modelling, rigging and layout in parallel with four or more artists. Expect 20–30% on top: **plan on about $57,500 for the build** [VERIFY].

**Per episode, after the build:**

| Tier | Animation | Plate | Carry-over, comp, render | Reprise | Revisions | Days | At $300–650 a day | Plan |
|---|---|---|---|---|---|---|---|---|
| **Cheap** | 2–3 | 1–1.5 | 1 | 0.5–1 | 0.5 | 5–7 | $1,500–4,550 | $2,850 |
| **Medium** | 3–5 | 1.5–2 | 1 | 1 | 0.5 | 7–9.5 | $2,100–6,175 | $3,900 |
| **Expensive** | 6–9 | 2 | 1.5 | 1 | 1 | 11.5–14.5 | $3,450–9,425 | $6,175 |

The animation days are the bible's own tiers (bible Part three).

**Season one after Episode 01** (Episodes 02–12: four cheap, six medium, one expensive): **about $41,000**, range $29,000–60,000. Batching should take 10–15% off that.

**Plainly:** a hand-made 3D character on a fortnightly show costs about twice the editor per episode. That is the price of the concept that won the panel on charm (R1). The levers, in order of effect: a studio in a lower-cost region; no rush on the build; batching; and choosing the cheap-tier activity when a month allows it. The studio budget is [HOST GATE].

**Payment terms.** The build: 30% on signing, 40% on approval of the model, rig and ritual blocking, 30% on final delivery of the archive and the rights assignment. Per episode: a fixed price by tier, invoiced on delivery of the signed join sheet.

**The schedule to 28 October:**

| Date | Milestone |
|---|---|
| **Fri 25 Sep** | This brief goes to five studios, with the bible, storyboard, animatic and brand kit |
| **Mon 28 Sep–Wed 30 Sep** | Paid tests from three of them (§A10) |
| **Thu 1 Oct** | Hosts choose the studio, and 3D or 2D (§A10) [HOST GATE] |
| **Fri 2 Oct** | **Studio signed.** Contract, warranty and rights assignment in place [VERIFY the signing entity] |
| **Fri 9 Oct** | **Go/no-go.** Tuck's turnaround, pocket-shot sheet and expression sheet signed by both hosts [HOST GATE]. Modelling has started in parallel from the construction sheet. |
| **Wed 14 Oct** | Tuck's model and turntable approved. Rigging under way. The ritual is blocked on a proxy rig. |
| **Fri 16 Oct** | Tuck rigged and posed from the library; the ritual blocked f54–f119 against the animatic's timing; Episode 01's bar one laid out. |
| **Mon 26 Oct** | M01 arrives from the composer (playbook §9). The studio re-checks every hit against the real music. |
| **Wed 28 Oct** | **The ritual master, Episode 01's bumper and reprise delivered,** QC passed |
| **Fri 30 Oct** | The Alliance's sign-off on Pip [HOST GATE] |
| **Wed 4 Nov** | Episode 02 delivered |

**If the 9 October checkpoint is missed** [HOST GATE]: move Episode 01's Premiere two weeks to **Wednesday 25 November**, keep THE FLOAT as its cold open (late November is still autumn, and R8 wants the float first), and give every later episode the activity for its own air date from Tuck's Year. Stargazing moves to the season-two reserve. **Don't launch without Tuck.** Episode 01 has Bruce and Facundo talking about "the otter at the top of the show" at 5:15, and it carries the one R7 line. That conversation needs the ritual on screen first. The decision is made on 9 October, before anything public is announced on 4 November.

## A10. Finding and vetting the studio

**Where to look.**
- **ArtStation:** its jobs board, and a search for "stylized 3D animation", "NPR" and "character animation"; read the credits on the work you like.
- **Behance:** 3D character animation, filtered for studios.
- **Vimeo:** stylised or NPR animated shorts and commercials; the credits lead to the studios.
- **Blender Artists** (the community forum's finished-projects section) and the Blender Conference talk archive: small studios that show their pipeline.
- **Festival short programmes** (Annecy and its MIFA market directory): small studios with a finished short to their name.

**What a good reel shows:** stylised 3D with a drawn line, a recurring character kept on-model across several pieces, restrained acting (holds, small moves, dry timing), and at least one series or campaign delivered on a schedule.

**The paid test.** Shortlist five from reels and rates; pay three of them for a two-day test, about $600–1,000 each [VERIFY]. The test is:
1. A front and three-quarter sketch of Tuck, drawn by hand from the bible's construction sheet alone, with the H grid.
2. A 14-frame blocking of f54–f67 (the hush, the turn to the lens, the pocket pat on f60, the stone drawn out) on any proxy otter, timed to the animatic.

Every studio quotes Route A twice, in stylised 3D as written and in hand-drawn 2D matching the animatic, with the same deliverables and schedule. Choosing 2D would also amend the bible's stylised 3D and R4's sculpted fur [HOST GATE].

**How to judge it:**
- Does the sketch hit the numbers (head wider than tall, eyes 0.5H apart, mittens with no digits, scarf on her left)?
- Does the pat land on f60, and does the head turn trail its whiskers by 2 frames?
- Is it restrained? Any mugging, wink or open mouth fails.
- Did they send dated work in progress without being asked?
- Were the questions they asked good ones?

**Red flags:** a reel that looks generated; refusing the human-made warranty or the copyright assignment; no EXR multi-layer output; a one-person shop with no named backup for a 24-episode commitment; a quote far below the range, which usually means the work is outsourced or sampled.

**References.** Call two past clients. Ask one question: did they deliver on the date, every time?

**Contract terms to include:**
- **Work for hire, or a full assignment of copyright,** to the Alliance entity [VERIFY the entity], signed before any work is delivered (bible clearance step 2).
- **The human-made warranty** (§A1), with Route B plates carved out by name if the hosts choose them.
- **Confidentiality.** The activities are never announced before an episode (FORMAT §7).
- **The archive** delivered with the build and updated each batch, so the Alliance never depends on one studio's servers.
- **Two rounds of revisions per stage,** with extra rounds at the day rate.
- **A kill fee** of the current stage's value if either side ends the contract.

---

# Part B: Route B, AI-assisted

## B1. What it may make, and the rule for disclosure

**The hosts decide whether Route B is used at all, and then decide per episode for plates [HOST GATE].** If they choose it:

| Use | Ships? | Disclosure |
|---|---|---|
| **A bar-one plate draft** that a matte painter repaints (§B10) | **Yes**, if any generated pixel survives in the final plate | YouTube's altered or synthetic content label, plus the description line in §C4, case C |
| **Look development:** previs keyframes of Tuck, motion tests, plate explorations the painter only looks at | **No** | The standing "How we make this" line, per the playbook (§C4, case B) |

**The test is simple: if a generated pixel is in the video, it's disclosed as synthetic.** That includes a generated underpainting, a photobash from generated images, and a trace. If the painter only looked at a generated image and painted from scratch, it's look development.

**What it saves.** An AI draft cuts a plate from about 1.5–2 painter-days to about 0.5–1. That's about $200–600 an episode, or **$2,500–7,000 a season**. Look development can save three to five concept days in the build. Set that against a synthetic-content label on every episode with an AI plate, on a show about trust whose protocol's inventor is wary of AI. That's why the recommendation is Route A for all shipped pixels.

**What it never makes.** See §B3.

## B2. The tools

**Written for Adobe Firefly, using Firefly's own models, in the Firefly web app** [VERIFY versions and plan features at the time of use]:

| Job | Tool | Why this one |
|---|---|---|
| Plates and keyframes | **Firefly Image 5** | Trained on licensed Adobe Stock and public-domain content. Adobe says it doesn't train on customer uploads, which matters because we upload the studio's turnaround. Adobe offers IP indemnity to enterprise customers [VERIFY our plan]. Outputs carry Content Credentials. It lives in the suite the editor already pays for. |
| Keeping Tuck on-model | **Firefly Custom Models** (the "characters" type), trained on the studio's renders | A model trained on 10–30 of our own images holds the character better than any text description [VERIFY availability on our plan]. |
| Motion tests | **The Firefly Video Model** (image to video, first and last frame, 1080p) | Same licensing and data terms. Clips are about 5 seconds [VERIFY]. |

**Two traps in Firefly.** The Firefly app also offers partner models (Google's, OpenAI's, Runway's and others). Those aren't Adobe's models, and Adobe's training-data and indemnity statements don't cover them [VERIFY]. Pick a Firefly model in the model menu every time. And Firefly generates sound with some video models: discard it, always. No generated sound ships (THEME §7).

**Alternatives,** with what to change in §B9: Google's **Nano Banana 2** (up to 14 reference images; the strongest reference-following for keyframes), OpenAI's **GPT Image 2.5**, **Midjourney v7**, **Runway Gen-4.5** and Google's **Veo 3.1** for motion. Use only paid or enterprise tiers whose terms say uploads aren't used for training [VERIFY each]. **Don't use Sora:** OpenAI shut its app in April 2026 and its API closes today, 24 September 2026.

**The AI log.** Every generation is logged in the episode's `MH_E01_AILOG_v01.md` (playbook §10): the tool and model version, the date, the prompt ID from this pack (for example P01), the reference images used, the output file name, who reviewed it, the QC result, and whether any pixel ships. Bruce signs it at Gate 4. Generated files are named `MH_E01_LOOKDEV-K3_v01.png` or `MH_E01_PLATE-AIDRAFT_v01.png`, so nobody can mistake one for a master.

## B3. Never prompt for these

- **The ritual master** or any frame of the pocket shot (f54–f119)
- **The friends' paws**
- **Any stone, pebble, gem, bead or marble,** lit or unlit, anywhere
- **The threads,** or any glowing line
- **The carry-over layer** (it's rendered on the master's anchors)
- **The title page:** any lettering, the imprint, the title, the rule, the descriptor
- **The shield,** or any badge, crest or logo
- **The hosts,** or any real person
- **Pip in the same frame as a stone** (and Pip never appears in a plate)

**Why.** These are the parts that carry the meaning, and the meaning depends on their never varying. A generated stone glows too early or looks like a coin. A generated paw grows fingers. A generated thread carries a travelling light and becomes data. A generated title misspells "DeRec". Each one would teach something false on a show whose job is to be exact.

## B4. The shared style suffix

Every prompt in this pack ends with this suffix. It restates the bible's rendering notes (storybook-warm stylised 3D, the printed-book ink line, a golden key from camera left, jade shadows, a cool sky fill and a rim light) in words an image model follows. The prompts below include it in full, so each one is copy-pasteable on its own.

**Day version:**

```
Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**Dusk version** (Episodes 02, 04 and 12): the same, with the light and sky sentences replaced:

```
Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden lamplight key from camera left, a soft cream bounce, shadows tinted deep jade green, a faint cool fill from the dusk sky, and a warm rim light along every edge that faces the lamp. Colour is rich and warm against the cool dusk, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep navy-blue dusk sky with the first few stars, lightening slightly toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**Why no film or studio names.** The brief's touchstones (painterly 3D lit like a watercolour) are described, never named. Naming a film or an artist in a prompt asks a model to imitate someone else's work, and a trust show doesn't do that.

**The avoid lists.** Paste into Firefly's exclude field if the app shows one [VERIFY]; otherwise add them as a final "Avoid:" sentence.

- **For plates:** `text, lettering, numbers, signage, logo, badge, shield, watermark, people, animals, otters, characters, robots, drones, more than one aircraft or vehicle, coins, money, gold objects, padlocks, keys, stones, pebbles, gems, beads, neon, holograms, screens, photorealism, HDR, lens flare`
- **For Tuck keyframes:** `text, lettering, logo, watermark, open mouth, teeth, tongue, fingers, claws, extra limbs, extra paws, extra tails, large eyes, eyelashes, eyebrows, blush, blue on the otter, gold on the otter, stones, pebbles, gems, beads, coins, people, robots, wet or spiky fur, photorealistic fur, flat 2D cartoon`

## B5. Keeping Tuck on-model

The order is fixed: **the human-drawn turnaround first, then reference conditioning.** The AI is never asked to invent Tuck.

1. **No Tuck keyframe until the studio's turnaround and model are approved** (§A2). Before that, Route B makes plates only.
2. **Build the reference pack from the studio's work:** front, three-quarter and side frames from the approved turntable; the home float from its sheet; three expressions (home, curious, mild surprise); the scarf sheet. 20 images at 1024 px or larger, on a plain mid-grey background, lit by the look-development light rig.
3. **Train a Firefly Custom Model** (characters type) on those 20 images, named "Tuck S1" [VERIFY availability]. Use it for every keyframe.
4. **Per keyframe, add two references:** the studio's approved look-development frame as the **style reference**, and the matching animatic frame from `intro/animatic/storyboard-frames.png` as the **composition reference**. The animatic fixes the layout, so the model only has to fill it.
5. **Paste the Tuck block into every keyframe prompt** (it's written into each prompt below). The reference holds her likeness; the words hold what the reference can't show, such as "mouth closed" and "no fingers".
6. **Check every output against the turnaround,** overlaid at 50% in Photoshop, before it's kept. Head wider than tall; eyes small and 0.5H apart; cream mask and bib; the jade scarf knotted on her left; mittens with no digits; seven whiskers a side; big hind flippers; no blue, no gold.
7. **Reject, don't repair.** A small paint-over (a stray whisker) is fine. Anything structural is regenerated. Three failures in a row means the session has drifted: start a new session with the references re-attached.
8. **Pip** gets the same treatment for his four episodes, with his own custom model, and is generated in a separate image from Tuck, then placed beside her in Photoshop for previs. Two conditioned characters in one generation drift twice as fast.

**The Tuck block** (already inside each keyframe prompt):

> An adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. She is calm, grown-up and quietly delighted.

## B6. Episode 01 keyframes (look development only)

Six keyframes cover the storyboard's four bar-one beats. **They never ship.** They show the hosts the episode's bar one before the studio spends animation days, and they give the animator a lighting and staging target. Each is written for Firefly Image 5 with the Tuck S1 custom model, the style reference and the composition reference from §B5, at 16:9. Use the Tuck keyframe avoid list.

**K1 · Beat 1 · f7 (0.29s): already afloat.** Composition reference: animatic frame 1.

```
Wide shot from just above the water, locked camera. A sunlit autumn cove: calm painted turquoise water, red and gold maple trees on the near shore at the left, white stone terraces overflowing with greenery and flowers climbing a hillside on the right, a thin waterfall, and two distant snow-capped peaks. The horizon sits on the upper third of the frame. Small in the middle ground, centred, about a fifth of the frame height: an adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. She is calm, grown-up and quietly delighted. She floats on her back, head up, both mittens resting together on her chest, her big hind flippers raised at the far end, sculling lazily. A soft painted ripple ring spreads around her. High in the top right of the sky, a single red maple leaf spins in the air. Above the terraces, one small white air taxi glides from left to right. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**K2 · Beat 2 · f22 (0.92s): a leaf comes down.** Composition reference: animatic frame 2.

```
Medium shot, locked camera, just above the water. Lying on her back across the lower centre of the frame, filling about 40% of the frame height, head at the left and hind flippers raised at the right: an adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. She is calm, grown-up and quietly delighted. Her paws rest together on her chest. Her eyes look up and to the right, following a single red maple leaf that spirals down toward her chest, a short way above her. The leaf's soft shadow falls across her fur and the water. Behind her, softly out of focus: turquoise water with a sun glint along the ripples, maple trees and white terraces in the distance. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**K3 · Beat 3 · f31 (1.29s): the leaf lands.** Composition reference: animatic frame 3.

```
Medium shot, locked camera, just above the water, the same framing as before. Lying on her back across the lower centre of the frame, head at the left and hind flippers raised at the right: an adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. A red maple leaf has just landed flat on her chest. A flash of mild surprise, never fear: her whiskers flare forward, her eyes are fully open but stay small, and her head draws back very slightly. Her mouth stays closed. Behind her, softly out of focus: turquoise water with a sun glint, maple trees and white terraces in the distance. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**K4 · Beat 3 · f40 (1.67s): she inspects it.** Composition reference: animatic frame 3.

```
Medium shot, locked camera, just above the water, the same framing as before. Lying on her back across the lower centre of the frame, head at the left and hind flippers raised at the right: an adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. She holds a red maple leaf up above her chest by its edges, in both mittens, and looks at it with quiet curiosity: her head tilted a little to one side, her whiskers forward, her mouth closed. Behind her, softly out of focus: turquoise water with a sun glint, maple trees and white terraces in the distance. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**K5 · Beat 4 · f46 (1.92s): a new hat.** Composition reference: animatic frame 4.

```
Medium shot, locked camera, just above the water, the same framing as before. Lying on her back across the lower centre of the frame, head at the left and hind flippers raised at the right: an adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. She has just set a red maple leaf on the top of her head like a small hat, stem up, tipped back so the face of the leaf shows, sitting low and close to her head. Her mittens are coming back down to her chest. Her hind flippers kick lazily. Quietly pleased, mouth closed. Behind her, softly out of focus: turquoise water with a sun glint, maple trees and white terraces in the distance. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**K6 · Beat 4 · f53 (2.21s): the join frame.** Composition reference: animatic frame 4. This is the frame the §A7 checklist is written for, so check it against every line.

```
Medium shot, locked camera, just above the water, the same framing as before. Lying on her back across the lower centre of the frame, head at the left and hind flippers raised at the right, her head in the middle third of the frame: an adult female sea otter named Tuck, in stylised storybook 3D. A dense, round, bean-shaped body. A round head slightly wider than it is tall, with no visible neck. A broad, blunt cream-coloured muzzle and face mask that spills down onto her throat and chest. Warm cocoa-brown fur sculpted in soft clumps, with a peach-coloured rim glow. Small, glossy, dark button eyes set wide apart, each with one tiny warm catchlight. A broad, rounded dark nose. Her mouth is closed: a short, soft line. Seven thick cream whiskers on each side. Tiny low ear nubs. Short forelimbs ending in rounded mittens with no visible fingers. Oversized webbed hind flippers and a flat paddle tail. A knotted jade-green kelp scarf at her neck, tied on her left side, with a short hanging tail that ends in a small olive-green float bulb. Her fur is dry. A red maple leaf sits on the top of her head like a small hat, stem up, tipped back, low and close to her head. Both mittens rest together on her chest, empty. Her head and eyes are turned toward the left edge of the frame, content and relaxed. Behind her, softly out of focus: turquoise water with a sun glint, maple trees and white terraces in the distance, and deep blue sky at the very top of the frame. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

## B7. Episode 01 image-to-video (motion tests only)

**These never ship.** A generated clip can't hold Tuck's model for 24 episodes, drifts against a locked 3D character, and can't hit f15, f30 and f45 to the frame. These tests exist to show the hosts the motion early and to give the animator a reference. The editor cuts them to the storyboard's frame counts over M01 for a previs animatic; speed changes are fine in previs and nowhere else.

Written for **the Firefly Video Model**, image to video, 16:9, 1080p, 24 fps, 5 seconds, camera motion set to none or static [VERIFY the menu names]. Discard any generated audio.

**V1 · Shot 1 · f0–f14.** First frame: K1. The storyboard needs 15 frames (0.63s); use the first 15.

```
Locked-off shot on a tripod. The camera does not move at all: no pan, no tilt, no zoom, no dolly, no drift, no shake. Keep the otter's face, colours, proportions and scarf exactly as in the first frame. The otter floats on her back in the middle distance and sculls lazily with her hind flippers, one slow stroke about every 0.6 seconds, bobbing very gently on calm water. A soft ripple ring spreads slowly outward from her. High at the top right, a red maple leaf turns slowly in the air as it drifts down. A small white air taxi glides steadily from left to right above the terraces. The water glints softly in the golden light. Everything is calm and unhurried. Stylised 3D animation in a warm storybook style with a fine dark green ink outline, golden light from the left. No text, no people, no other vehicles, no stones.
```

**V2 · Shot 2, first half · f15–f44.** First frame: K2. Last frame: K4. The storyboard needs 30 frames (1.25s): the leaf lands on the clip's frame 15, and she holds it up by frame 29.

```
Locked-off shot on a tripod. The camera does not move at all: no pan, no tilt, no zoom, no dolly, no drift, no shake. Keep the otter's face, colours, proportions and scarf exactly as in the first frame. A red maple leaf spirals down in three slow, flat turns and lands flat on the chest of the otter floating on her back. Her eyes follow it down, and her whiskers trail slightly behind her head's movement. As it lands she shows mild surprise, not fear: her whiskers flare forward and her eyes open fully for a moment, but stay small, then she relaxes. She lifts the leaf by its edges in both mittens and holds it up to look at it, tilting her head a little, curious. Her mouth stays closed the whole time. Her hind flippers slow their paddling. Soft ripples, a sun glint on the water. Stylised 3D animation in a warm storybook style with a fine dark green ink outline, golden light from the left. No text, no people, no stones.
```

**V3 · Shot 2, second half · f45–f53.** First frame: K4. Last frame: K6. The storyboard needs 9 frames (0.38s): the leaf is on her head on the clip's first frame, the kicks fall on its frames 2 and 7, and her eyes are left by frame 8.

```
Locked-off shot on a tripod. The camera does not move at all: no pan, no tilt, no zoom, no dolly, no drift, no shake. Keep the otter's face, colours, proportions and scarf exactly as in the first frame. The otter floating on her back sets the red maple leaf on the top of her head like a small hat, stem up, tipped back. She gives two lazy kicks of her big hind flippers, a little apart, making two soft ripples. Her eyes roll up to admire her hat, then drift to the left edge of the frame and stay there. Her empty mittens come to rest together on her chest. She is content and still at the end. Mouth closed throughout. Stylised 3D animation in a warm storybook style with a fine dark green ink outline, golden light from the left. No text, no people, no stones.
```

## B8. The twelve plates

**These may ship, finished by a painter (§B10), if the hosts choose it for that episode [HOST GATE].** Each is environment only: no characters, no animals, no robots. Props that Tuck or Pip touch are left out, because the studio models them in 3D. Each plate has exactly one "tomorrow" detail and deep sky at the top. Each leaves the space the character will need.

Written for **Firefly Image 5**, 16:9, the Firefly model selected, no custom model, no composition reference. Use the plate avoid list. Once the Episode 01 plate is approved, attach it as the style reference for every later plate, so the season reads as one book.

**P01 · The float (11 Nov, day).** Leave out: the leaf (a 2D card).

```
An empty sunlit autumn cove seen from just above the water. Calm painted turquoise water fills the lower half of the frame, with an open, uncluttered stretch of water in the centre. Red and gold maple trees line the near shore at the left. On the right, white stone terraces overflowing with greenery and flowers climb a hillside, with a thin waterfall running down between them. Two distant snow-capped peaks. The horizon sits on the upper third. Exactly one futuristic detail: a single small white air taxi high above the terraces, in open sky. No other aircraft or vehicles. No people, no animals, no characters. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P02 · Stargazing (25 Nov, dusk).** Leave out: the telescope, the shooting star (a 2D card).

```
An empty terrace high above a bay at dusk. Warm wooden deck boards in the foreground, with open space in the centre of the frame. A low glass balustrade, potted cypress trees and planters of herbs. A warm lantern stands at the far left edge of the frame, lighting the scene. Beyond, a range of mountains with snow on the peaks, and across the dark bay, exactly one futuristic detail: a crystalline skyline of tall, faceted glass towers with warm lit windows. A thin crescent moon high in the sky. No aircraft, no vehicles, no people, no animals, no characters. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden lamplight key from camera left, a soft cream bounce, shadows tinted deep jade green, a faint cool fill from the dusk sky, and a warm rim light along every edge that faces the lamp. Colour is rich and warm against the cool dusk, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep navy-blue dusk sky with the first few stars, lightening slightly toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P03 · Tray sledding (9 Dec, day).** Leave out: the tin tray. The snowman may stay in the plate as a still card.

```
An empty snowy terrace lawn on a gentle slope that runs down from the upper left to the lower right of the frame, its surface smooth and untouched. At the lower right, at the foot of the slope, a plain round snowman made of three snowballs, with two small twig arms and no hat. Snow-dusted evergreen shrubs and low white stone terrace walls. Far below in the valley, exactly one futuristic detail: a single small, rounded autonomous shuttle crossing a slender bridge over a river. No other vehicles, no aircraft. No people, no animals, no characters. Low winter sun. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P04 · The bell choir (23 Dec, dusk).** Leave out: the handbells, the table they stand on, Pip.

```
The empty interior of a lamplit glasshouse at dusk: a Victorian-style iron-and-glass conservatory with slender white-painted iron ribs. Potted citrus trees, ferns and trailing greenery on tiered wooden staging along the sides, leaving an open wooden floor in the centre of the frame. A warm brass floor lamp stands at the far left edge, lighting the scene. Through the glass roof and the far wall, exactly one futuristic detail: a crystalline skyline of tall, faceted glass towers with warm lit windows, far away. No aircraft, no vehicles, no people, no animals, no characters, no robots. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden lamplight key from camera left, a soft cream bounce, shadows tinted deep jade green, a faint cool fill from the dusk sky, and a warm rim light along every edge that faces the lamp. Colour is rich and warm against the cool dusk, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep navy-blue dusk sky with the first few stars, seen through the glass roof, lightening slightly toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P05 · Baking (6 Jan, day).** Leave out: the tray of biscuits, the oven mitts. The top of the frame is a wide window of deep sky, so the join holds indoors.

```
An empty, warm country kitchen by day. On the left, an old cream enamel range with its oven door open and a warm golden glow inside, lighting the room from the left. A scrubbed wooden table runs across the lower middle of the frame with its top clear. Cream tiles, a shelf of plain stoneware bowls with no markings, a sprig of dried herbs. Across the top of the frame, a wide window of small panes showing deep blue winter sky. Through the window, exactly one futuristic detail: a single small white air taxi passing in the distance. No other aircraft or vehicles. No people, no animals, no characters, no robots. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P06 · Ice skating (20 Jan, day).** Leave out: the skates, the ice spray (a 2D card).

```
An empty frozen alpine lake by day, its smooth, pale blue-grey ice filling the lower half of the frame with a wide open stretch in the centre. Snow-laden pine trees along the near shore at the left, snowy mountains beyond. Along the far lakeshore, exactly one futuristic detail: a single small, rounded autonomous shuttle gliding along a lakeside road. No other vehicles, no aircraft. No people, no animals, no characters. Low winter sun. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P07 · Café chess (3 Feb, day).** Leave out: the chessboard and pieces, any cups or mugs, Pip.

```
An empty terrace café by day, seen from seated eye height. A round pale marble café table in the lower centre of the frame, its top clear. Behind it, a large window lightly misted with steam at its lower edge, and beyond the glass a sunlit bay with white terraces and greenery. Potted plants on the sill. Across the top of the frame, clear deep blue sky through the window. Outside, exactly one futuristic detail: a single small white air taxi in the distance. No other aircraft or vehicles. No people, no animals, no characters, no robots, no cups, no screens. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P08 · Pottery (17 Feb, day).** Leave out: the potter's wheel and the clay.

```
An empty pottery studio by day. A clay-dusted wooden workbench across the lower part of the frame, with open floor space in the centre. Wooden shelves along the right wall holding plain, unglazed and cream-glazed bowls and jugs with no markings. A tall window on the left letting in warm sunlight. Across the top of the frame, a high window of deep blue sky, and through it, exactly one futuristic detail: a crystalline skyline of tall, faceted glass towers in the far distance. No aircraft, no vehicles, no people, no animals, no characters, no robots. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P09 · Kite flying (3 Mar, day).** Leave out: the kite and its string.

```
An empty rounded green hilltop in early spring, covered with white daisies, its crest running across the lower third of the frame with open grass in the centre. A few soft white clouds, a breezy feeling in the grass. Far below in a green valley, exactly one futuristic detail: a single small, rounded autonomous shuttle on a winding valley road. No other vehicles, no aircraft. No people, no animals, no characters. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P10 · Repotting (17 Mar, day).** Leave out: the sapling, the pots in use, the watering can, Pip.

```
The empty interior of a sunlit glasshouse in spring. A long wooden potting bench across the lower middle of the frame with its centre clear, a few empty terracotta pots stacked at its far right end, trays of green seedlings on shelves behind. Slender white-painted iron ribs and glass panes. Across the top of the frame, the glass roof shows deep blue sky, and through it, exactly one futuristic detail: a single small white air taxi passing overhead in the distance. No other aircraft or vehicles. No people, no animals, no characters, no robots. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P11 · Painting (31 Mar, day, late afternoon).** Leave out: the easel, the canvas, the brushes.

```
An empty stone terrace in spring in the late afternoon, edged with blossoming almond trees in soft pink and white. Pale stone paving in the lower part of the frame with open space in the centre. A low balustrade, and beyond it calm water turning gold in the low sun. Across the water, exactly one futuristic detail: a crystalline skyline of tall, faceted glass towers catching the warm light. No aircraft, no vehicles, no people, no animals, no characters. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden key light from high camera left, a soft cream bounce, shadows tinted deep jade green, a cool pale-blue fill from the open sky, and a warm rim light along every edge that faces the sun. Colour is lush and saturated but soft, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep, clear cobalt-blue sky, lightening toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

**P12 · The lantern dance (14 Apr, dusk).** Leave out: Pip. The lanterns stay in the plate as scenery. **Check every lantern for painted characters:** generators love to write on paper lanterns.

```
An empty wooden terrace at dusk in spring, with open boards in the centre of the frame for dancing. Strings of plain round cream paper lanterns, glowing warmly, are strung overhead from the left side of the frame across the upper middle. The lanterns are completely plain: no writing, no characters, no patterns. A low balustrade with potted greenery, and beyond it hills fading into the dusk. A warm lantern at the far left edge lights the scene. In the dusk sky, exactly one futuristic detail: a single small air taxi with a warm lit cabin crossing high above the lanterns. No other aircraft or vehicles. No people, no animals, no characters, no robots. Rendered as a still from a stylised 3D animated film in a warm storybook style, like a painted plate in a beautifully printed picture book. Soft, simplified, sculpted forms with hand-painted textures; nothing photographic. A fine dark green-black ink outline traces the silhouettes and major form edges, a little heavier on the shadow side, with no outlines on colour boundaries. Light: a warm golden lamplight key from camera left, a soft cream bounce, shadows tinted deep jade green, a faint cool fill from the dusk sky, and a warm rim light along every edge that faces the lamp. Colour is rich and warm against the cool dusk, never neon. Highlights roll off to warm cream and the darkest shadows are deep green-black; nothing is pure white or pure black. The top of the frame is deep navy-blue dusk sky with the first few stars, lightening slightly toward the horizon. Matte surfaces, no plastic sheen, no HDR halos, no over-sharpening, no lens flare, no bloom, no film grain, no vignette. Wide 16:9 frame, eye-level camera, calm composition. There is no text, lettering, numbers, signage, logo, badge, symbol or watermark anywhere in the image.
```

## B9. Using another tool

The prompts are plain descriptive English, so the words move between tools unchanged. What changes is how references, negatives, size and camera are passed.

| Tool | For | What to change |
|---|---|---|
| **Nano Banana 2** (Google, in the Gemini API or Gemini app) | Keyframes, plates | Attach the references in a fixed order and name them in a first line: "Image 1 is the character turnaround; keep her identical. Image 2 is the lighting style. Image 3 is the layout." It takes up to 14 references, so attach all the turnaround views instead of training a model. Ask for 16:9 at the highest resolution. Put the avoid list as a final "Do not include:" sentence. Use a paid tier whose terms exclude training on uploads [VERIFY]. |
| **GPT Image 2.5** (OpenAI) | Keyframes, plates | Attach references the same way. It tends toward crisp, glossy rendering: add "soft, matte, painterly edges" after the style sentence. Set a landscape size. Put the avoid list in words. |
| **Midjourney v7** | Plates only | Append `--ar 16:9 --style raw --no text, letters, signage, logo, people, animals, robots, stones`. After the first approved plate, add `--sref <url of the approved Episode 01 plate>` so the season matches. Use its character reference (`--oref`) only for look development, never for anything that ships [VERIFY the parameter names]. |
| **Runway Gen-4.5** | Motion tests | Use image to video with the first frame, and a keyframe for the last. Set the duration to 5 seconds and the camera control to static. Paste the prompt from "The otter…" onward; its camera sentence is redundant but harmless. |
| **Veo 3.1** (Google, API or Vertex) | Motion tests | Use first and last frame; clips are 8 seconds, so trim. Choose 16:9, 1080p. **Turn off or discard the generated audio.** You can't combine first/last frame with reference images in one request, so the first frame carries the likeness. Inside Google's Flow app, Gemini Omni Flash has replaced Veo [VERIFY]. |
| **Any tool** | All | Log it. Never prompt for §B3. Never paste the hosts' names or photos. |

## B10. Finishing an AI plate

A generated plate is a draft. The matte painter turns it into a plate that can sit behind a locked 3D character for 66 frames. Budget 0.5–1 day.

1. **Repaint at size.** Rebuild it at 5760×3240 or larger by painting, not by an AI upscaler.
2. **Split it into 2.5D layers:** sky, far, middle, near, water or floor. Put the tomorrow detail on its own layer so the studio can move it (the air taxi glides).
3. **Remove every artefact:** text-like marks on signs, hulls, awnings and lanterns; extra aircraft; stray creatures; melted railings; mismatched windows.
4. **Correct the light** so the key is golden and from high camera left in every layer, with shadows falling to frame right.
5. **Paint the sky:** the top of the frame in the Zenith family by day or the Night Sky family at dusk, so the f54 cut holds (§A7, check 5).
6. **Check the palette** against brand kit §8: no coins, locks, logos, holograms, neon or robots.
7. **Save the original generation** with its Content Credentials in `03_ANIMATION/E01/` next to the finished plate, and record both in the AI log.

The **ritual plate** is never generated. It's made in comp from the finished bar-one plate (§C3).

---

# Part C: Both routes

## C1. The title page and the shield: built in the compositor, never generated

**Why.**
1. **Generators misspell.** A misspelt "DeRec" on a trust show is fatal (brand kit §3, forbidden treatment 8).
2. **The page is measured.** Paper on Zenith at 6.67:1, Gilt on Zenith at 4.71:1, the title at 176 px on a baseline at y 456, the descriptor 14 px above the carry-over line. A generator can't hit a hex value or a pixel row. A compositor hits both every time.
3. **It must be identical in every episode.** Regulars read it hundreds of times. A generated page would change a little every time it was made.
4. **The rule is drawn by the threads,** meeting at x 960 on f113. That's a timed, positioned event, not a picture.
5. **The shield is the Alliance's mark.** Only the master file may be used. Redrawing, tracing or generating it is a brand-governance breach, and on this show it would also be the worst possible look (brand kit §3) [HOST GATE].
6. **Ownership.** Generated lettering and marks can't be protected, and would muddy the Alliance's rights in its own title page [VERIFY with counsel].

**How it's built: once, by the studio's compositor, as a locked layer.** It's rendered in two variants (day and dusk) and stacked on every bumper, so no episode ever re-sets the type. At UHD:

| Element | Face | Size (UHD) | Colour | Position (UHD) | In |
|---|---|---|---|---|---|
| Imprint "DeRec Alliance" | Atkinson Hyperlegible Next 600, tracking +10 | 112 px | "DeRec" Gilt `#F2C96E`, "Alliance" Paper `#F7F3E6` | Baseline y 504, centred on x 1920 | f60–f71: fades up and rises 24 px on `settle` |
| Title "Many Hands" | Fraunces, the brand kit's "MH Display Title" instance (opsz 144, wght 600, SOFT 50, WONK 0), tracking −15 | 352 px | Paper | Baseline y 912 | f63–f74, the same move |
| Descriptor "THE COMMUNITY PODCAST" | Atkinson Hyperlegible Next 600 capitals, tracking +220 | 64 px | Paper (day), Lichen `#A9C6B9` (dusk) | Baseline y 1184 | f66–f77, the same move |
| Rule | The threads' horizontal runs: a 6 px Gilt stroke with a 2 px Filament core | 666 px wide, x 1587–2253 | Gilt, lit | Centred on y 1056 | Drawn by the threads, meeting at f113 |
| Node | A 24 px Gilt disc with a 10 px Filament core and a 72 px halo at 35% | – | – | x 1920, y 1056 | Lights at f113, fades f116–f119 |
| Thread glow | Inner Gaussian 16 px, Gilt at 60%; outer Gaussian 56 px, Gilt at 22%; both Add | – | – | On the threads' line layer | Follows the line |
| Shield | **The plain mark, from the Alliance master file only** [HOST GATE] | 360 px tall | As supplied. No glow, shadow or animation. | Right edge x 3648, top y 144 | Present from f54, still |

- Delivered as `MH_RIT_TitlePage_v01_DAY` and `_DUSK`, each as an RGBA pass (type, rule, node, thread cores, shield) and an Add pass (glows), f54–f119.
- **If the Alliance doesn't supply a plain shield master,** or declines its use in motion, the shield position stays empty. Nobody redraws it (storyboard §9) [HOST GATE].
- **If the Alliance has an official "DeRec" wordmark,** it replaces the Atkinson imprint [VERIFY].
- **The `settle` curve in After Effects,** exactly: put this expression on the layer's Opacity (and the matching one on Position), changing `a` and `b` to the layer's first and last frame.

```js
// settle: cubic-bezier(0.16, 1, 0.3, 1), from frame a to frame b (brand kit §5)
function bez(x1, y1, x2, y2, t) {
  var u = t;
  for (var i = 0; i < 8; i++) {
    var x = 3*(1-u)*(1-u)*u*x1 + 3*(1-u)*u*u*x2 + u*u*u - t;
    var dx = 3*(1-u)*(1-u)*x1 + 6*(1-u)*u*(x2-x1) + 3*u*u*(1-x2);
    if (Math.abs(dx) < 1e-6) break;
    u = Math.min(Math.max(u - x/dx, 0), 1);
  }
  return 3*(1-u)*(1-u)*u*y1 + 3*(1-u)*u*u*y2 + u*u*u;
}
var a = 60, b = 71;
var t = Math.min(Math.max((timeToFrames(time) - a) / (b - a), 0), 1);
bez(0.16, 1, 0.3, 1, t) * 100;
```

On Position, replace the last line with `var e = bez(0.16, 1, 0.3, 1, t); [value[0], value[1] + 24 * (1 - e)];`.

## C2. QC: the checklist that rejects bad frames

Run on every bar one, every plate, every bumper and every Route B output that anyone might keep. **Any "no" sends it back.** The editor-producer runs it and records it in the episode's QC notes (playbook §7).

**On-model**
1. Tuck matches her turnaround: head wider than tall; small button eyes 0.5H apart; cream mask and bib; broad blunt muzzle; seven whiskers a side; tiny ear nubs; big hind flippers; flat paddle tail.
2. The scarf is jade, knotted once **on her left**, with its tail and one olive float bulb.
3. Her mouth is closed. No teeth, tongue, wink, blush, sweat drop, sparkle or heart eyes.
4. She passes the silhouette test: her outline alone reads as an otter.
5. Pip, when present: flat top, one face-line on the dark visor in one of the four shapes, plain glaze chest, two mitts, no legs, no amber.

**Counts**
6. Tuck has **two forepaws, two hind flippers, one tail, two eyes, one nose.** No visible fingers or claws on any mitten. In the ritual, exactly **two** friends' paws, one per edge, with no face, never touching each other or Tuck.
7. Pip has **two mitts** and no other limbs.
8. **Exactly one** carry-over item from f45 onward, and **exactly one** tomorrow detail in the plate. No robot in any plate.

**Palette**
9. **No blue, Glass cyan, red or gold on Tuck.** (The Episode 01 leaf is scenery on her head.) Gold appears only in the lit stones and the threads.
10. Nothing pure white or pure black beyond tiny specular sparkles (`qc_clip.py`, below).
11. Nothing from brand kit §8: no coins, padlocks, keys, shields, holograms, screens, neon, logos, plexus lines.
12. Key light golden and from camera left; a rim light on Tuck; shadows jade-tinted.

**The ritual**
13. **The stones stay grey until f90.** One stone dull for 7 frames (f68–f74), two dull for 7 frames (f75–f81), three dull through the held breath (f83–f89), then all three light **at once** on f90 and hold 12 frames without pulsing (`qc_stones.py`, below).
14. Nothing moves from f90 to f101 except the glow settling.
15. The pat lands on f60; pat-pat on f107 and f112; the blink closes f112–f114, holds f115–f116, opens f117–f119.
16. Tuck never looks at a stone, a paw or a thread from f58 until the blink. She never touches a thread.
17. The threads meet at x 960, y 528 (1920, 1056 at UHD) on f113, never cross her face or come within 10% of its height, and carry no travelling light.
18. **The carry-over clears y 606** (y 1212 at UHD) on every frame from f54 to f119, and never moves against its anchor (`qc_carryover.py`, below).
19. No stone, pebble, bead, marble or gem anywhere in bar one.

**Text**
20. **No text artefacts.** Zoom to 200% on every sign, awning, hull, window, lantern, book spine and bowl. Anything that looks like a letter, number or glyph fails, even if it's gibberish.
21. The title page is the locked layer, unaltered. The shield is the master or absent.

**Legibility**
22. **The 48 px squint test.** Shrink the frame until Tuck's head is 48 px tall and view it in greyscale. The pocket shot must still show four shapes: a cream disc, two dark dots and a nose, a jade band, a grey oval at the chin. A bar-one frame must still read as an otter doing one thing, with the carry-over visible. In the UHD pocket shot her head is about 472 px tall (2 × 236, from storyboard §3's crown at y 670 and head centre at y 788), so the shrink is about 10%:

```sh
magick qc/MH_E01_BUMPER_v01.0070.png -resize 10.2% -colorspace Gray qc/squint_0070.png
```

For any other frame, the percentage is 48 ÷ (Tuck's head height in pixels) × 100.

**The join**
23. The §A7 checklist is signed.

**Technical**
24. 120 frames, 3840×2160, 23.976, no audio in the studio's bumper:

```sh
ffprobe -v error -select_streams v:0 -count_frames \
  -show_entries stream=nb_read_frames,width,height,r_frame_rate \
  -of default=nw=1 MH_E01_BUMPER_v01.mov
# expect: width=3840, height=2160, r_frame_rate=24000/1001, nb_read_frames=120
```

25. The Harding flash test passes on the final master, and the report is filed (storyboard §8).

**The scripts.** Export the bumper as numbered PNGs first, so file numbers match f-numbers:

```sh
mkdir -p qc && ffmpeg -i MH_E01_BUMPER_v01.mov -pix_fmt rgb24 -start_number 0 qc/MH_E01_BUMPER_v01.%04d.png
```

They need Python 3 with `numpy` and `pillow`.

```python
# qc_stones.py: the stones stay grey until f90, then light together.
# Needs the comp frames and the master's all-stones matte, exported as PNGs.
import numpy as np
from PIL import Image

for f in range(61, 102):
    if 90 <= f <= 92:
        continue  # the 3-frame glow ramp
    rgb = np.asarray(Image.open(f"qc/MH_E01_BUMPER_v01.{f:04d}.png").convert("RGB"), dtype=float) / 255
    matte = np.asarray(Image.open(f"matte/MH_RIT_MasterS1_v01_MATTE-STONES-ALL.{f:04d}.png").convert("L")) > 127
    if not matte.any():
        continue
    px = rgb[matte]
    hi, lo = px.max(axis=1), px.min(axis=1)
    sat = float(np.mean((hi - lo) / np.maximum(hi, 1e-6)))
    ok = sat < 0.15 if f < 90 else sat > 0.45
    print(f"f{f}: stone saturation {sat:.2f}  {'ok' if ok else 'FAIL'}")
```

Slate `#8E948F` measures about 0.04; lit Amber about 0.77. Tune the two thresholds once on the approved master and write them into the script.

```python
# qc_carryover.py: the carry-over never rises above y 606 (y 1212 at UHD).
import glob
import numpy as np
from PIL import Image

LIMIT = 1212  # UHD. Use 606 for a 1080p file.
highest = None
for path in sorted(glob.glob("carryover/MH_E01_CARRYOVER_v01_RGBA.*.png")):
    alpha = np.asarray(Image.open(path).convert("RGBA"))[:, :, 3] > 8
    rows = np.flatnonzero(alpha.any(axis=1))
    if rows.size:
        highest = rows[0] if highest is None else min(highest, rows[0])
if highest is None:
    print("FAIL: no carry-over pixels found")
else:
    print(f"highest carry-over pixel at y {highest}:", "PASS" if highest >= LIMIT else "FAIL")
```

```python
# qc_topsky.py f53.png f54.png: the cut into the pocket shot doesn't jump in brightness.
import sys
import numpy as np
from PIL import Image

def top_luma(path):
    a = np.asarray(Image.open(path).convert("RGB"), dtype=float) / 255
    band = a[: a.shape[0] * 15 // 100]
    return float((band @ np.array([0.2126, 0.7152, 0.0722])).mean())

bar_one, ritual = top_luma(sys.argv[1]), top_luma(sys.argv[2])
ok = bar_one <= 0.50 and abs(bar_one - ritual) <= 0.12
print(f"top 15%: bar one {bar_one:.2f}, pocket shot {ritual:.2f}", "PASS" if ok else "FAIL")
```

Zenith measures about 0.31 on this scale, Sky 0.48 and Night Sky 0.23.

```python
# qc_clip.py frames...: nothing pure white or pure black beyond sparkles (0.1%).
import sys
import numpy as np
from PIL import Image

for path in sys.argv[1:]:
    a = np.asarray(Image.open(path).convert("RGB"))
    white = float((a >= 254).all(axis=2).mean())
    black = float((a <= 1).all(axis=2).mean())
    ok = white < 0.001 and black < 0.001
    print(f"{path}: white {white:.3%}, black {black:.3%}", "PASS" if ok else "FAIL")
```

## C3. Assembly

**Who assembles.** The studio builds every bumper (playbook §4). This recipe is written so the editor, or another studio, can rebuild any bumper from the archive if they ever need to.

### The recipe in Adobe After Effects (the named route)

Use the After Effects release installed with Premiere for E00 (the 2026 release, v26.x), frozen for the season like Premiere (playbook §5).

**Project settings:** 32 bits per channel; working space Rec.709 Gamma 2.4; **linearize working space on**, so the Add-blended glows behave as the brand kit's values expect. Import EXRs as linear.

**The composition:** `MH_E01_BUMPER`, 3840×2160, 24 fps, 120 frames (f0–f119). Stack, bottom to top:

| # | Layer | Frames | Settings |
|---|---|---|---|
| 1 | Bar one: `MH_E01_BarOne_v01_BEAUTY` | f0–f53 | As rendered. Hard out on f53. |
| 2 | The sky: `MH_BR_SkyDay_v01.png` (or `SkyDusk` for Episodes 02, 04 and 12) | f54–f119 | Full frame, Normal |
| 3 | The ritual plate, built from `MH_E01_PLATE_v01.psd` | f54–f119 | Flatten the plate. Apply **Camera Lens Blur** (start at a 60 px radius, hexagonal iris, and match the season's first approved ritual plate). Then **Apply Color LUT** `MH_BR_RitPlate-Warm300K_v01.cube`. Then **Exposure −0.74 stop** (60% in linear light). Mask it to below y 1280 with a 96 px feather, so the seam blends over y 1232–1328 (y 640, feathered over y 616–664, at 1080; R13). **Opacity** 100% to 0% over f114–f117 on `breath`. |
| 4 | Tuck, her stone, the glow and the paws | f54–f119 | The studio's locked precomp, `RIT_S1_Core`, which stacks Tuck's beauty, her stone, the glow interaction (Add) and the holdout-matted paws in the order the master scene rendered them. Inside it, a switchboard of the eight paw layers: turn on **one left and one right** (Episode 01: `PAW-GRAN-L` and `PAW-HARBOUR-R`). **Opacity** 100% to 0% over f116–f119 on `breath`. |
| 5 | The carry-over: `MH_E01_CARRYOVER_v01_RGBA` | f54–f119 | Normal. The same opacity keys as layer 4, so it leaves with her. |
| 6 | Title page glows: `MH_RIT_TitlePage_v01_DAY` Add pass | f54–f119 | **Add** blend |
| 7 | Title page: `MH_RIT_TitlePage_v01_DAY` RGBA pass | f54–f119 | Normal |

**Render:** ProRes 422 HQ, 3840×2160, 120 frames, Rec.709, no audio. Flag the file 23.976 by interpreting the render at 23.976 in Premiere or with the render template's frame-rate setting (playbook §4). Then run §C2.

### Placing it in Adobe Premiere Pro

As the playbook sets out (§4): the bumper at 0:00 on V1; `MH_M01_Bumper_5s00_v<NN>_MIX.wav` at sample 0 on A5 from `02_MUSIC`, unchanged; the `RIT` foley stem and the episode's activity sound on A6, the activity sound on its beat (f30 for Episode 01); a hard cut to the two-shot on frame 120. The adjustment layer carrying `MH_Daylight_709_v1` never covers the bumper, which is already display-ready.

### The free route: Blender and DaVinci Resolve

- **Blender** renders every 3D and Grease Pencil element, exactly as in Route A. Nothing changes.
- **DaVinci Resolve** (the free version) does the comp, the edit and the delivery.

**In Resolve:** a project at 3840×2160, 23.976 timeline frame rate, colour science DaVinci YRGB with Rec.709 Gamma 2.4 output. Import every image sequence at 23.976. On the **Fusion** page, build the same stack as the After Effects table with nodes:

| After Effects layer | Fusion |
|---|---|
| Bar one | `MediaIn` on the timeline, f0–f53 |
| Sky | `Loader` for the sky PNG |
| Ritual plate | `Loader` for the flattened plate → `Defocus` (lens mode) → `FileLUT` with the warm LUT → `BrightnessContrast` with Gain 0.6 on linearized data (a `Gamut` node to linear before, back to Rec.709 after) → a `Rectangle` mask below y 1280 with a 96 px soft edge (y 1232–1328) → `Merge` over the sky |
| Tuck, stone, glow, paws | `Loader` nodes for each pass, merged in the studio's order; the glow merge set to Apply Mode **Add** |
| Carry-over | `Loader` → `Merge` Normal |
| Title page | The Add pass merged with Apply Mode **Add**, then the RGBA pass merged Normal |
| The melts | Keyframe each `Merge` node's Blend: plate 1.0 to 0.0 over f114–f117; Tuck, paws and carry-over over f116–f119. Shape the curves in the Spline editor to an ease-in-out matching the brand kit's `breath` curve. |

**Deliver:** ProRes 422 HQ, 3840×2160. Resolve's free version renders ProRes on macOS; on Windows and Linux, check whether the installed version does [VERIFY]. If it doesn't, render **DNxHR HQX** (10-bit) in a QuickTime wrapper, which Premiere reads.

### The house skies: made once, by script

The brand kit's day and dusk gradients, built exactly (Zenith to 52%, cosine ease to Sky at 80%, then to Horizon; dusk holds Night Sky to 52% and eases to Zenith), with the 1.5% monochrome dither baked in as static noise, so every bumper uses the identical sky and YouTube can't band it. Static noise costs the encoder less than moving grain.

```python
# make_sky.py: writes MH_BR_SkyDay_v01.png and MH_BR_SkyDusk_v01.png (16-bit, UHD).
# pip install numpy opencv-python
import numpy as np
import cv2

W, H = 3840, 2160

def rgb(hexstr):
    return np.array([int(hexstr[i:i + 2], 16) for i in (1, 3, 5)], dtype=np.float64) / 255

def ease(t):
    return (1 - np.cos(np.pi * np.clip(t, 0, 1))) / 2  # cosine

def sky(top, mid, bottom, hold=0.52, mid_at=0.80, seed=1):
    y = (np.arange(H) + 0.5) / H
    col = np.empty((H, 3))
    for i, v in enumerate(y):
        if v <= hold:
            col[i] = top
        elif v <= mid_at:
            col[i] = top + (mid - top) * ease((v - hold) / (mid_at - hold))
        else:
            col[i] = mid + (bottom - mid) * ease((v - mid_at) / (1 - mid_at))
    img = np.repeat(col[:, None, :], W, axis=1)
    # 1.5% monochrome dither: Gaussian, standard deviation 0.5%, so about ±1.5% at three sigma
    img += np.random.default_rng(seed).normal(0, 0.005, (H, W, 1))
    img = np.round(np.clip(img, 0, 1) * 65535).astype(np.uint16)
    return img[:, :, ::-1]  # OpenCV writes BGR

cv2.imwrite("MH_BR_SkyDay_v01.png", sky(rgb("#1B5699"), rgb("#4185CB"), rgb("#CFE6F6")))
cv2.imwrite("MH_BR_SkyDusk_v01.png", sky(rgb("#1D3D73"), rgb("#1B5699"), rgb("#1B5699"), mid_at=1.0))
```

Check the result with an eyedropper: `#1B5699` from the top to y 1123 (52%) on the day sky, and `#4185CB` at y 1728 (80%), give or take the dither.

## C4. Disclosure

**YouTube's setting.** In YouTube Studio, on the upload's Details page, the "Altered content" question asks whether the video contains realistic altered or synthetic content [VERIFY the current wording and location]. Answering yes adds a label in the expanded description: "Altered or synthetic content: sound or visuals were significantly edited or digitally generated." For some sensitive topics YouTube also shows the label on the player itself; a show about recovering wallet keys and accounts may count as one [VERIFY].

YouTube doesn't require the label for clearly unrealistic content such as animation. **This show ticks it anyway whenever a generated pixel ships,** because the brief requires disclosure of any AI use that ships (brief §6) and a trust show discloses more than the minimum. The description line then says exactly what was generated, so nobody mistakes the label for a comment on the hosts.

**The three cases.** Bruce chooses the case at Gate 4 from the AI log (playbook §8). The wording is [HOST GATE].

**Case A: no AI anywhere in the cold open.** YouTube label: **No.** In the "How we make this" paragraph of the description:

> Tuck is animated and painted by hand at [studio]. No generative AI was used to make her, her world or the opening.

**Case B: AI used for look development only; nothing generated is in the video.** YouTube label: **No**, because nothing synthetic ships (playbook §10). In the "How we make this" paragraph:

> Tuck is animated and painted by hand at [studio]. We used AI image tools to sketch ideas early on; none of those images appear in the video.

**Case C: an AI-assisted bar-one plate ships.** YouTube label: **Yes.** In the "How we make this" paragraph:

> The painted background in this episode's opening was drafted with Adobe Firefly and repainted by [painter]. Tuck, her friends' paws, the stones and the ritual are animated by hand at [studio]. The title and the DeRec Alliance shield are set from master files. The conversation is real and unscripted.

**The channel's About section** carries the standing line in all cases:

> How we make this: the conversation is real and unscripted. The theme is played by musicians, and the clap is the DeRec community. Tuck is animated by hand. When an AI tool helps make anything you see or hear, the description of that episode says so.

**If a disclosure is missed,** fix it within 24 hours: tick the label, add the line, and pin a comment saying what changed and why (playbook §10).

---

## Open questions

1. **Episode 02's eyepiece ring and Episode 06's hat (§A6).** Confirm the fixes, or pick the swaps, before batch 1 and batch 3 are laid out.
2. **The studio's budget and region.** The difference between a $300 and a $650 day rate is about $30,000 in season one.
3. **Whether Route B is used at all,** and if so, only for look development or also for plates.

## Sign-off list

### [HOST GATE]

1. Route A for everything that ships; Route B, if at all, for look development and, per episode, for plates.
2. The studio, and 3D or 2D, chosen on 1 October, and the budget: about $57,500 for the build with the rush premium, and about $41,000 for Episodes 02–12.
3. Tuck's turnaround, pocket-shot sheet and expression sheet, by 9 October.
4. Pip's shield-echo outline, signed by the Alliance by 30 October.
5. The fallback if the 9 October checkpoint is missed: move Episode 01 to 25 November with THE FLOAT, rather than launch without Tuck.
6. Any AI-assisted plate, episode by episode, with disclosure.
7. The disclosure wording for all three cases and the channel's standing line.
8. The plain shield without "PROTECTED BY", from the Alliance master only, or an empty corner.
9. The 15-second trailer held until 10 February 2027 (TR03).

### [VERIFY]

1. Studio day rates, the build estimate and the per-tier episode estimates, with three quotes; the rush premium; the paid-test fee.
2. The legal entity that signs the studio contract and receives the copyright assignment.
3. The current Blender LTS release at kickoff.
4. Adobe Firefly: the Image 5 and Video Model versions, clip length and frame rate, the camera and exclude controls, Custom Models on our plan, the indemnity on our plan, and that partner models fall outside Adobe's statements.
5. Nano Banana 2, GPT Image 2.5, Midjourney v7 (`--sref`, `--oref`), Runway Gen-4.5 and Veo 3.1: current features, and terms that exclude training on uploads. Gemini Omni Flash replacing Veo inside Flow.
6. Whether Resolve's free version renders ProRes on Windows and Linux.
7. YouTube's "Altered content" wording and location, and whether this show's topic triggers the on-player label.
8. The Alliance's shield master and brand rules, and any official "DeRec" wordmark.
9. Counsel's view on the copyright status of AI-assisted plates and generated lettering.

### Sources checked (September 2026)

- AI image tools and reference features: [Google, Nano Banana 2](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/), [Gemini API image generation](https://ai.google.dev/gemini-api/docs/image-generation), [Magic Hour, character consistency 2026](https://magichour.ai/blog/best-ai-image-generators-for-character-consistency)
- Adobe Firefly: [Firefly](https://www.adobe.com/products/firefly.html), [Firefly custom models](https://helpx.adobe.com/firefly/web/firefly-custom-models-in-creative-cloud/train-firefly-custom-models.html), [Firefly API](https://developer.adobe.com/firefly-services/docs/firefly-api/api/)
- Video tools: [Runway Gen-4.5](https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5), [Veo 3.1 prompting guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1), [AI video in 2026, including Sora's shutdown](https://ocdevel.com/mlg/mla-26)
- YouTube disclosure: [YouTube Blog, disclosing altered or synthetic content](https://blog.youtube/news-and-events/disclosing-ai-generated-content/), [Engadget on YouTube's rules for realistic AI content](https://www.engadget.com/youtube-lays-out-new-rules-for-realistic-ai-generated-videos-154248008.html)
