# The brief — a DeRec Alliance YouTube series, redone

*Shared by every agent on this project. Binding. Read it all, then look at every image in `assets/reference/` with the Read tool before you decide anything visual.*

---

## 1. What we are making

A YouTube series for the DeRec Alliance community, hosted by **Bruce Longley** and **Facundo La Rocca**.

Each episode has three parts:

1. **A short cold open, 4 to 6 seconds, driven by music and a mascot.** The hosts are not in it. The ritual stays the same every time. Only one thing changes: the mascot is doing a different activity each episode.
2. **The day's topic.** One question, set up in under a minute.
3. **Bruce and Facundo talking live**, podcast-style, on camera. This is the heart of the show.

**Length:** 10–20 minutes. The earlier plan said 20–30, and the client has cut that down.
**Cadence:** the client said "bi-monthly, weekly." Read that as two tiers: a flagship conversation every two weeks, plus a short weekly beat so the channel stays alive between flagships. The two-week rhythm is not arbitrary. The DeRec contributors call has met every two weeks since 21 October 2024, so the show can pulse with the project.

## 2. The north star, in the client's words

> "One of my favorite YouTube videos is a three-to-five-second opening of pandas dancing, animated — it's AI Code King. It's relaxing but also inspirational, a little futuristic with tinges of an agentic positive future, but stylish at the same time. **Make it more fun.**"
>
> "I wanted it to be classy and classic originally, and then I made it a little touch of modernity."
>
> "I want people to listen to the beginning and it gets you in a fun mood."
>
> "Some theme or mascot that's in different activities every time. The world's the limit for what the activity could be, or what the DeRec bot could be like, or the DeRec helper, or some fanciful organizational logo. Endearing, warm, and puts people in a good mood."

**What AI Code King's bumper teaches** (a daily AI-coding channel whose intro is a few seconds of animated dancing pandas over a strong musical hook):
- **Brevity is the whole trick.** It is over before you could skip it.
- **The music does the emotional work.** The picture confirms the feeling.
- **The mascot does one small, delightful action.** It doesn't tell a story.
- **Repetition makes a ritual.** Regulars feel it as "the show is starting," like a theme tune on the radio.
- Our improvement: **vary the activity** every episode, so the ritual never goes stale and regulars look forward to seeing what the mascot is up to this time.

## 3. The hosts

| | **Bruce Longley** | **Facundo La Rocca** ("Kundo") |
|---|---|---|
| Looks | Silver-blond swept hair, black rectangular glasses, cream/ivory bomber or zip jacket, teal or black tee, watch on the left wrist | Short dark hair, clean-shaven, dark olive/forest-green overshirt or hooded jacket, black tee, smartwatch |
| Role on the show | Asks the questions a normal person would ask. Warm, funny, curious, the audience's stand-in. Steward and community lead of the DeRec Alliance. | The builder. He published the first `lib-derec` Rust crates (`derec-library`, `derec-cryptography`, `derec-proto`, v0.0.1-alpha.3) and the GitBook docs. Precise, calm, with a dry wit. Explains without jargon. |
| Energy | The spark | The steady hand |

They are friends. **The warmth between them is the product.** Their partnership is the show's visual motif, and in every reference image they are side by side, sharing something.

**Attribution guardrail:** the DeRec protocol was invented by **Dr. Leemon Baird**. Never call Bruce or Facundo its inventor or co-inventor. Bruce's credit is unconfirmed and marked "don't say yet" in his own notes.

## 4. Visual inheritance

Everything is in `assets/reference/`.

**`00-cover-derec-alliance.jpg`: the key image. The client said: "I like the first image that has the DeRec Alliance at the top."**
It's square. At the top, "DeRec Alliance" is set in gold (DeRec) and white (Alliance), over "The community podcast" in thin spaced caps. Top right is a gold-rimmed black shield with a return-arrow "D" and "PROTECTED BY DeRec". Bruce and Facundo stand centre-frame wearing jackets with a small gold shield patch. They reach toward a glowing orbit of light that threads between them, carrying glass cards: finances with gold coins, a painting, a family photo, a medical/health record. Most of what's worth protecting is not money. Behind them is a sunlit solarpunk city: white terraces overflowing with greenery and flowers, waterfalls, a crystalline skyline, air taxis, families with a golden retriever, and small white-and-cyan robots serving coffee.

**`04-cafe-constellation.jpg`**: the two at a marble café table building a constellation of amber gems joined by threads of light. **This is secret-sharing performed with hands.** It's the single most useful image for the metaphor.
**`01-observatory-night.jpg`**: dusk terrace, a telescope, a crescent moon, a holographic star chart, and a small robot in the background.
**`02-kayak-lake.jpg`**: alpine lake, a green kayak and an orange kayak, splash, waterfall, a glass marina.
**`03-vineyard-bikes.jpg`**: gravel bikes, a vineyard, lavender, a lake and mountains, an autonomous shuttle in the distance.

**`PRIOR-PACKAGE-index.html`**: the earlier "DeRec, Together" review package. It uses a quiet editorial palette (`--ink #123e32`, `--jade #1b7466`, `--gold #b18c44`, `--paper #f7f8f1`, `--mint #dcf4e9`), a restrained serif-free layout, and a 20-second still-image concept. That is the "classy and classic" half: good taste, too sleepy on its own.

**The redo:** fuse the restraint of the prior package with the light and joy of the cover. The target is **a beautifully printed book about tomorrow.** Classic structure, modern light, and fun in the details. Warm futurism, never cold sci-fi.

## 5. What DeRec is. Get it right, never overclaim.

DeRec stands for Decentralized Recovery. It's an open protocol built by an alliance of 20+ Web2 and Web3 organisations. Public materials name members including Algorand, Cardano, Hedera, Ripple, MultiversX, Kabila and BankSocial.

- Your **secret** can be a wallet key, a password or any other secret. It's split into **shares** using Shamir's Secret Sharing.
- Shares go to **helpers** you choose: friends, family, or businesses. Each helper keeps their share on their own device.
- **A single share reveals nothing.** A threshold, roughly half of the helpers, can restore the secret. Fewer than that learn nothing, even if they collude.
- **Helpers don't know who the other helpers are, or how many there are.** Only the owner's app knows.
- The owner's device **quietly checks in with each helper's device every day** to confirm they still hold their share. It **re-shares automatically** when the secret changes or helpers come and go.
- It's designed to be chain-agnostic, and quantum-resistance is a stated goal. **[VERIFY]** the exact wording before stating it on camera.
- Spec vocabulary: **owner** (renamed from "sharer"), **helper**, **share**, **secret**.
- The reference implementation is a Rust library, with other languages generated from it.

**Non-negotiables. These are the hosts' own standards.**
1. **Recovery is not a cure-all.** It doesn't undo a hack, reverse a transaction you authorised, stop a scam, or replace device and account hygiene. Say so on camera, with confidence.
2. **No investment advice, no prices, no promises of absolute safety, no fear-selling.**
3. **DeRec ≠ Hedera ≠ any single member company.** Never conflate them. Never pitch another venture under the DeRec name, and never speak for a member.
4. **Neutral education space.** Members are explained, never ranked or sold.
5. **The Grandma test.** A 70-year-old who has never heard the word "blockchain" must be able to follow every episode.
6. **No crypto-visual clichés:** no physical gold coins with ₿ on them, no matrix rain, no candlestick charts, no hooded hackers, no glowing padlock on a circuit board, no rocket emojis.
7. **Don't invent technical claims.** If you're unsure, write **[VERIFY]** and say what to check.

## 6. Treat AI in the production carefully. It's a trust show.

The reference stills are AI-generated, and much of the production may be too. But the protocol's inventor is known to be **wary of AI**, and the show is about trust. So:
- AI-generated host likenesses and AI-generated music are **[HOST GATE]** decisions. Always offer a human-made or hybrid route next to any AI route.
- Any AI use that ships must be **disclosed** plainly (YouTube's altered/synthetic content label, plus a line in the description).
- The live conversation is always real: two people on camera, unscripted where it counts.

## 7. Tone

Warm. Easily funny. Curious. Unhurried, but never slow. Optimistic about technology **because people stay in the loop**. The agentic future should feel like **helpful little machines doing small, kind things in the background**. Never surveillance, never menace, no robot-uprising jokes.

## 8. House conventions

- Markdown, sentence-case headings.
- Bumper timecodes as `0.00s–1.25s`. Episode timecodes as `0:00–1:30`. Animation timings at **24 fps** unless stated.
- Generation prompts must be copy-pasteable and self-contained. Describe the hosts by the appearance notes above, as characters. Never write "make it look like [real person]".
- Mark anything needing Bruce's or Facundo's sign-off with **[HOST GATE]**. Mark any factual claim needing a check with **[VERIFY]**.
- Be specific. Write like a senior creative director who has shipped title sequences and podcasts. No filler, no "consider adding", no hedging lists of options without a recommendation.
