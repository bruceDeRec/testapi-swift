# SHARED BRIEF — "DeRec Together" YouTube series redo
**Read this before writing anything. Every agent in this workflow shares it.**

## Who
- **Bruce Longley** (`bruce@derec.org`) — silver-blond hair, black rectangular glasses, cream/ivory bomber jacket, teal or black tee. Warm, curious, funny, the one who asks the questions a normal person would ask. Steward of the DeRec Alliance. Also runs "United We Stand / Muster Day" — a SEPARATE project, never mix them in.
- **Facundo La Rocca** — dark short hair, clean-shaven, dark-olive/green overshirt or jacket, black tee. The builder/explainer. Calm, precise, dry wit. Affectionately called "Kundo".
- They are friends and co-hosts. The show is **the two of them together** — that partnership IS the motif.

## The thing being made
A **YouTube series** for the DeRec Alliance community.
- **Episode length: 10–20 minutes.** (The previous plan said 20–30 — that is being cut down.)
- **Cadence:** a weekly rhythm with a bi-monthly (every-two-weeks) flagship. See the format doc for the exact ladder — the user said "bi monthly, weekly series", so the answer is a two-tier slate: a big episode every two weeks + a short weekly beat between them.
- **Every episode opens with the same 6–8 second animated cold open** — a music-led title bumper, mascot-driven, NO hosts in it.
- Then the day's topic, then **Bruce and Facundo talking live**, podcast-style, on camera.

## The north star (user's own words, paraphrased tightly)
> "One of my favorite YouTube videos is a three-to-five-second opening of pandas dancing, animated — it's AI Code King. It's relaxing but also inspirational, a little futuristic with tinges of an agentic positive future, but stylish at the same time. Make it more fun."
>
> "I wanted it to be classy and classic originally, and then I made it a little touch of modernity."
>
> "I want people to listen to the beginning and it gets you in a fun mood."
>
> "It could be like the AI Code King has a panda — some theme or mascot that's in different activities every time. The world's the limit for what the activity could be or what the DeRec bot could be like, or the DeRec helper, or some fanciful organizational logo. Something endearing, warm, that puts people in a good mood."

**Reference video:** AI Code King's channel intro (youtube.com/watch?v=u1dW4z5Ye90) — a very short looping animated panda bumper with a strong, warm, slightly lo-fi-futuristic music hook. The value is: (1) it is SHORT, (2) the music does the emotional work, (3) the mascot is doing a small delightful ACTION, (4) it is the same every time so it becomes a ritual, but the ACTION varies so it never gets stale.

## The design inheritance
Two visual sources, both in `assets/reference/`:

1. **`00-cover-derec-alliance.jpg` — THE KEY IMAGE. The user explicitly said "I like the first image that has the DeRec Alliance at the top."**
   Square. Bruce and Facundo centre-frame, smiling, reaching toward a glowing horizontal constellation of light that runs between them. Floating glass cards on that constellation: a finance/chart card with gold coins, an art card, a family-photo card, a health/medical card — i.e. *the things worth protecting, and most of them are not money.* Gold **DeRec shield** top-right with a "D" + return-arrow, wordmark "PROTECTED BY DeRec". Title set in gold + white: **"DeRec Alliance"** over "The community podcast". Background: a bright solarpunk near-future — terraced white architecture, greenery spilling everywhere, a waterfall, a crystalline city skyline, small friendly white-and-cyan robots serving coffee, families and a dog, air taxis, blue sky.
   **Palette read from it:** deep sky blue, gold/amber, warm cream/ivory, cyan-teal glass, leaf green, white architecture.

2. **`PRIOR-PACKAGE-index.html`** — the earlier "DeRec, Together" review package (a jade/gold/bone editorial palette: `--ink:#123e32 --jade:#1b7466 --gold:#b18c44 --paper:#f7f8f1 --mint:#dcf4e9`). That palette is the "classy and classic" half. It was quiet, print-like, restrained. Good bones, too sleepy on its own.

3. Scene stills also in `assets/reference/`: `01-observatory-night.jpg` (the two of them at a telescope at dusk over a lake, little robot on the terrace, holographic star chart), `02-kayak-lake.jpg` (kayaking an alpine lake), `03-vineyard-bikes.jpg` (gravel bikes in a vineyard, autonomous shuttle in the distance), `04-cafe-constellation.jpg` (the two of them at a café table building a constellation of glowing amber gems with light threads between them — this is the literal secret-sharing metaphor).

**The redo's job:** take the *restraint and taste* of the jade/gold package and the *joy, light and optimism* of the cover image, and fuse them. Classy and classic with a touch of modernity — not corporate, not crypto-bro, not cold sci-fi. Warm futurism. Think: a beautifully printed book about tomorrow.

## What DeRec actually is (get this right; never overclaim)
Decentralized Recovery. An open protocol, built by an alliance of 20+ Web2/Web3 companies (Algorand, Cardano, Hedera, Ripple, MultiversX, Kabila, BankSocial and others).
- Your secret (a wallet key, a password, a file — anything) is split into **shares** by Shamir's Secret Sharing.
- Shares go to **helpers** you pick — friends, family, or businesses — stored on their own devices.
- **A single share reveals nothing.** A threshold (roughly half) of helpers can restore the secret.
- Helpers don't know who the other helpers are — or even how many there are. You never reveal your helper list.
- Your device **quietly checks in with each helper's device every day** to confirm they still hold their share, and re-shares automatically when the secret changes or helpers come and go.
- Post-quantum / quantum-resistant intent, chain-agnostic.
- Roles in the spec's vocabulary: **owner/sharer** (was "sharer", renamed to "owner"), **helper**, **share**, **secret**, **vault**.

**Honesty rules — non-negotiable, these come from the hosts' own standards:**
- Recovery does NOT undo a hack, reverse a scam transaction you authorized, or replace good device and account hygiene. Say so.
- No investment advice, no price talk, no promises of absolute safety, no fear-selling.
- **DeRec ≠ Hedera ≠ any one member company.** Never conflate; never speak *for* the Alliance on someone else's letterhead.
- No "crypto visuals" clichés: no gold physical bitcoins, no green matrix rain, no candlestick charts, no hoodie hackers, no glowing padlock on a circuit board.
- The show is a **neutral education space**. Members get explained, never ranked or sold.
- Grandma test: a 70-year-old who has never heard the word "blockchain" must be able to follow every episode.

## Tone
Warm. Funny in an easy, unforced way. Curious. Unhurried but never slow. Optimistic about technology *because* people are in the loop, not in spite of it. The agentic-future tinge should feel like **helpful little machines doing small kind things in the background** — never surveillance, never menace, never a robot uprising joke.

## Deliverable conventions
- Write in Markdown, sentence-case headings, em-dashes not semicolons where possible.
- Timecodes as `0:00–0:02` or `00.0s–02.0s` for the bumper.
- Any AI-generation prompt you write must be **copy-pasteable and self-contained**, and must describe Bruce and Facundo by the wardrobe/appearance notes above (never by likeness-of-a-real-person instructions to a third party — describe the *characters*).
- Flag anything that needs Bruce's or Facundo's sign-off with `**[HOST GATE]**`.
- Never invent a DeRec technical claim. If unsure, write `**[VERIFY]**` and say what to check.
