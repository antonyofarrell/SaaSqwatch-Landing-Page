---
name: saasqwatch-design
description: Use this skill to generate well-branded interfaces and assets for SaaSqwatch, a video review channel covering SaaS and AI tools, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (colors_and_type.css, assets/, ui_kits/, preview/).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** SaaSqwatch — video channel tracking the best and worst SaaS / AI tools.
- **Voice:** confident, funny, skeptical. Plain-spoken, never hypey.
- **Primary palette:** Qwatch Teal `#3ce5e5` · Deep Navy `#1a2235` · Mint `#5dcaa5` · Caution `#f0997b` · Paper `#f1efe8`.
- **Fonts:** Space Grotesk (display/UI), Inter (body), JetBrains Mono (spec).
- **Mark:** sasquatch-in-a-teal-circle. Wordmark turns "Q" into a magnifying glass with an eye inside.
- **Key tokens live in:** `colors_and_type.css` — import it and use semantic CSS vars (`--fg-1`, `--accent`, `--bg-panel`, etc).
- **Icon system:** Lucide, 1.75px stroke.
