# SaaSqwatch Design System

> *"We track the best (and worst) SaaS so you can stop guessing and start building smarter."*

SaaSqwatch is a video channel + review brand that tests, compares, and breaks down SaaS and AI tools. Think late-night review show meets field guide: a watchful sasquatch in a teal spotlight, hunting down the software worth your time.

---

## Brand at a glance

- **Voice** — Confident, funny, skeptical. Plain-spoken and direct.
- **Mark** — A sasquatch silhouette with one big watchful eye, set inside a teal circle. The wordmark turns the "Q" into a magnifying glass containing that same eye.
- **Stage** — Deep navy backdrop, Qwatch teal spotlight, warm paper accents for written content.
- **Channels** — Primary is video (YouTube-shape thumbnails, title cards), plus an editorial site for reviews, comparisons, and tier lists.

## Source materials provided

- `uploads/iconSaasqwatch.png` — round teal icon, sasquatch + eye.
- `uploads/logoSaasqwatch.png` — full wordmark on deep-navy background.
- `uploads/logoSaasqwatchGreen.png` — full wordmark in teal on transparent.
- Brand palette: Qwatch Teal `#3ce5e5`, Deep Navy `#1a2235`, Mint `#5dcaa5`, Caution `#f0997b`, Paper `#f1efe8`.
- Fonts: `Space_Grotesk.zip` was referenced but **not actually uploaded** — we've substituted Google Fonts' Space Grotesk. See CAVEATS.

No Figma or codebase was supplied, so the UI kit is a high-fidelity recreation built from the logo language, palette, and brand positioning. Flag any screens that feel off and we'll iterate.

---

## Index

| File / folder | What's in it |
| --- | --- |
| `README.md` | This file — brand context, content & visual foundations, iconography. |
| `SKILL.md` | Agent Skill manifest; lets this system plug into Claude Code. |
| `colors_and_type.css` | All tokens (colors, type, spacing, radii, shadows) as CSS vars, plus semantic element styles. |
| `fonts/` | Local webfonts. *(Currently falls back to Google Fonts — pending user-supplied files.)* |
| `assets/` | Logos, icon, and brand marks. |
| `preview/` | Design System cards (typography, color, spacing, components, brand). |
| `ui_kits/site/` | Editorial / review-site UI kit — index.html + React components. |

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, plain-spoken, a little sarcastic — like a reviewer who has already tried everything so you don't have to. Never hypey, never corporate. Punchlines are welcome; filler is not.

**Point of view.** Speak in first-person plural for editorial ("*we tested, we timed, we yelled at our laptop*") and second-person for the reader ("*here's what you actually need*"). Avoid "I" unless attributing a specific host. Never "users" — say "you" or "builders."

**Casing.** Title Case for video/episode/article titles (*"The Best Notion Alternatives, Ranked"*). Sentence case for UI, buttons, and navigation. The brand name is **SaaSqwatch** — lowercase "a" between the S's, capital Q. Never "Saasqwatch" or "SaaSquatch." The wordmark art uses all-caps — that's type treatment, not copy.

**Numbers & scores.** Use digits for everything (8/10, 3 mins, $29/mo). Scores are out of 10. Tiers are S / A / B / C / D / F — never "1-5 stars."

**Punctuation.** Em dashes are fine. Oxford commas, yes. One exclamation mark per paragraph, max — usually zero. Never "..." for drama; use a period.

**Taglines & headlines** — short, specific, a little playful. Good:

- "We track the best (and worst) SaaS."
- "Stop guessing. Start building."
- "Tested on 12 real projects. Here's what broke."
- "The verdict: skip it."

Bad (don't do this):

- "Unlock your team's potential with the next-gen platform."
- "Revolutionary AI-powered productivity."
- Anything with "supercharge," "seamless," or "game-changing."

**Emoji.** Sparingly, and never decoratively. The two that earn their keep are 👁️ (the Qwatch eye, used as a tiny brand wink) and ⚠️ (warnings). No 🚀, 🎯, 💯, or skin-tone variants. Prefer custom icons / badges over emoji for UI.

**Tone examples from the brand.** (short form — longer copy should match the rhythm)

- Review subheads: *"The good," "The bad," "Skip if…" "Worth it if…"*
- Verdict chips: `PRO` (mint), `CON` (caution), `MEH` (neutral), `WATCH` (teal — our flag for "keep an eye on this").
- Episode CTAs: *"Watch the teardown"* · *"See the scorecard"* · *"Read the tier list"*

---

## VISUAL FOUNDATIONS

**Stage.** The default surface is Deep Navy (`#1a2235`) — this is "the studio." Cards and panels step up in lightness (`navy-700`, `navy-600`) instead of using borders. The Paper (`#f1efe8`) surface is reserved for long-form written reviews — think "field notes." Never mix paper and navy in the same layout without clear intent; pick a stage per surface.

**Color use.**
- Teal is a **spotlight**, not a background. Use it for the primary CTA, one accent per card, the logo mark, focus rings, and the "watching" indicator. Don't teal-tint large surfaces.
- Mint (`#5dcaa5`) = positive verdict (pros, "recommended", scores ≥ 8).
- Caution (`#f0997b`) = negative verdict (cons, "skip", scores ≤ 4). Warm, not alarming red.
- Neutrals carry ~80% of the pixel budget. Accents carry the last 20%.

**Typography.**
- Display / UI — **Space Grotesk**, tightly tracked (`-0.02em`) at large sizes. Matches the rounded geometry of the wordmark.
- Body — **Inter** for long review copy.
- Mono — **JetBrains Mono** for spec chips, timestamps, version tags, scoring breakdowns.
- Eyebrows are ALL CAPS, Space Grotesk 600, `0.14em` tracked, teal. They are the brand's "chapter marker."

**Spacing.** 4px base grid. Prefer generous outer padding (24–48px on cards) and tight inner rhythm (8–12px between related items). Never cram; the brand earns trust through clarity.

**Corners.** Medium-round. Cards = 12–20px. Buttons = 999px pill (matches the logo). Small chips/tags = 8px. Avoid sharp 0px corners and avoid super-squishy 32px+ corners on anything other than the hero pill CTA.

**Borders.** On navy, borders are low-contrast `rgba(255,255,255,0.08–0.14)` — they separate, they don't divide. On paper, borders are warm-neutral `#cfcbba`. Use 1px borders + elevation, never thick borders.

**Shadows.** Three tiers. `sm` for resting cards, `md` for hovered cards, `lg` for modals/popovers. A fourth — `glow` — is teal-tinted and reserved for the "live / watching" state (e.g. a currently-streaming episode).

**Backgrounds & motifs.**
- The round **teal sasquatch icon** is the primary brand moment. Use it at large scale as a watermark, partially cropped off an edge, or as a repeated quiet motif at low opacity.
- Subtle **film grain** overlay (opacity ~0.04) on the navy stage — optional but on-brand. Keeps it from feeling flat and digital.
- A faint **concentric-ring** motif (like a radar or a pupil) can be used behind hero content. Never as decoration for its own sake.
- No bluish-purple gradients. No emoji cards. No rainbow accents.
- Imagery tone: cool, slightly desaturated, moody — screenshots of SaaS apps get framed on navy with a soft inset shadow and a teal corner tag.

**Animation.**
- Durations 120–240ms for UI; 400–600ms for hero moments.
- Easing: `cubic-bezier(.2,.8,.2,1)` — a gentle overshoot-free spring. No bounces.
- Fades + small-translate (4–8px) for entries. No swoops.
- The teal "eye" icon can do a slow 6s blink loop on idle — used sparingly, once per screen max.

**States.**
- **Hover** — lighten surface by ~6% (step up one navy shade), or shift accent to `teal-400`. Never grow/scale cards on hover.
- **Press** — 80ms darken + 1px inset translate. Accent elements use `teal-600`.
- **Focus** — 3px teal ring at 45% opacity (`--focus-ring`). Never remove focus; it's brand-consistent.
- **Disabled** — 40% opacity, `not-allowed` cursor.

**Transparency & blur.** Reserved for two cases: (1) modal scrims (navy at 60%, `backdrop-filter: blur(8px)`), (2) bottom-of-card protection gradients under title overlays on thumbnails. Don't use frosted glass as a decorative surface.

**Layout rules.**
- Fixed top nav, 72px tall, semi-transparent navy with blur when scrolled.
- Content max-width 1200px for editorial, 1440px for app-style UIs.
- Cards never touch — 24px min gutter.
- One spotlight per view: one teal CTA, one featured hero. Competing accents dilute the brand.

**Cards.** Deep navy `navy-700` surface, 16–20px radius, `shadow-md` on hover, 1px hairline border `rgba(255,255,255,0.08)`. Thumbnails sit flush to the top edge with no padding. Title + meta get 20–24px of interior padding. A small teal corner chip ("NEW," "WATCH," "S-TIER") sits top-right, ~12px inset.

---

## ICONOGRAPHY

**Primary brand mark.** The sasquatch-in-a-circle icon (`assets/icon.png`) is the hero. Use it at 40px+ so the face reads. Below 32px, use only the eye motif.

**Icon library.** We use **Lucide** (`lucide.dev`) as the line-icon system — 1.75px stroke, rounded joins, matches Space Grotesk's geometry. Loaded from CDN (`https://unpkg.com/lucide@latest`) in the UI kit. Substitution flagged: no code was provided, so this is our recommended pairing; swap freely if the team already standardizes on another set.

**Sizing & color.**
- 16px — inline with body text.
- 20px — standard UI (nav, buttons).
- 24px — card actions, section headers.
- 32–48px — feature callouts.
- Stroke color inherits from text color. Teal fill only for active / selected states.

**Fill vs. stroke.** Default is stroke (Lucide). Filled icons are reserved for verdict badges (pro/con), the play button on video thumbnails, and active nav items. Never mix fill and stroke weights in the same row.

**Emoji as icons.** No. The only permitted emoji is 👁️ as a brand wink in social copy — not in UI.

**Unicode as icons.** No. Use Lucide or custom SVG.

**Custom marks we maintain.**
- `icon.png` — circular sasquatch mark.
- `logo-teal.png` / `logo-dark-bg.png` — wordmarks.
- *(Future)* verdict badges (S/A/B/C/D/F tier), the "watching" pupil indicator, and episode-number roundels live in `assets/` as PNG/SVG when they ship.

---

## CAVEATS

- **Space Grotesk zip was referenced but not uploaded** — we're loading Space Grotesk from Google Fonts. If the team has a specific licensed file or an adjusted variable, drop it in `fonts/` and update `colors_and_type.css`.
- **No Figma / codebase was provided.** The UI kit is a high-fidelity interpretation, not a recreation of existing production screens. Expect friction vs. whatever exists; flag anything off-brand and we'll adjust.
- **Icon library substitution** — Lucide chosen to match the wordmark geometry; swap if the team uses a different set.
- **No real editorial content or video thumbnails** were provided. The UI kit uses plausible placeholder reviews. Swap in real copy whenever it's available.
