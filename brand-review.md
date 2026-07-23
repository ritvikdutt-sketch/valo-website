# Brand artifact review — Valo / Softriver deliverables

Review of the three artifacts (Valo.pdf, Valo R1.pdf, Valo.zip) against what the
website needs to adopt them. Short version: the logo assets are production-ready,
but the identity system isn't complete enough yet to roll out across the site.

## What's solid

- **Logo asset pack (zip)** — complete and production-ready: emblem + full lockups
  in SVG/PNG/JPEG/PDF at 1x–4x, favicons at 16/32, PSD + AI source files. Nothing
  missing here.
- **Sub-brand lockups (R1 deck)** — the ValoPay / ValoHealth / ValoCare / ValoOne
  treatments (mark tinted per product, two-tone wordmark) are a clean, scalable
  system and read well on both dark and light.

## What I'd change / what's missing

1. **Only 4 of 7 sub-brands have colours.** The R1 deck covers Pay, Health, Care
   and One. Unify, Marketplace and Engage — including Unify, which is one of the
   three products live in production — have no colour or lockup. The palette
   can't ship until all seven are specified.

2. **No hex/colour specification anywhere.** The deck shows the colours only as
   raster logo images. We need a written colour system: primary + per-sub-brand
   hex values, plus dark-background and light-background variants.

3. **The deck conflicts with the live site.** valo.io (and this rebuild) currently
   uses: Pay = red `#E0484A`, Care = violet `#8A5CF0`, Health = blue `#1C8FD1`,
   One = teal/green gradient. The deck proposes Pay = purple, Care = lime,
   Health = cyan, One = gold. Either direction is workable, but it's a decision —
   right now the brand would be inconsistent across touchpoints.

4. **Accessibility of the proposed colours.** The lime (Care) and cyan (Health)
   shades will fail WCAG 2.1 AA contrast (4.5:1) as text on white. Fine for logo
   marks; not fine for links, labels or badges. The colour spec should include a
   text-safe darker variant per sub-brand (the current site does this, e.g. teal
   `#029491` → text `#07746F`).

5. **Font licensing.** The deck specifies Neurial Grotesk, a commercial typeface.
   To use it on the web we need a webfont licence + WOFF2 files. Until then the
   site uses Plus Jakarta Sans (free, similar voice). If the licence isn't planned,
   pick a font we can actually ship.

6. **"Brand Alchemy.pdf" is not a Valo document.** It's Softriver's generic
   branding ebook (client giveaway). The pack is missing actual Valo brand
   guidelines: logo clearspace/minimum sizes, colour system, type scale, imagery
   style, do/don't examples. Worth asking Softriver for the real guidelines doc —
   every identity pack should ship with one.

## Suggested asks back to Softriver

- Full colour spec (hex) for all seven sub-brands + One, with dark/light and
  text-safe variants, WCAG AA checked.
- A proper Valo brand guidelines document (usage rules, not the ebook).
- Webfont files/licence for Neurial Grotesk, or a confirmed free alternative.
- Confirmation of whether the deck palette replaces the current site palette —
  the website will follow whichever is ratified.
