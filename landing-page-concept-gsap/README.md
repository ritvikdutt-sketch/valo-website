# Valo alternative landing-page concept — GSAP edition

This folder is an isolated design concept. It is not imported by the Astro app, included in the Astro build, or linked from the current website.

## Preview

From the repository root, run:

```powershell
node serve.mjs
```

Then open `http://localhost:3000/landing-page-concept-gsap/`.

## Concept direction

- Lead with Valo's concrete job: connect social investment to outcomes.
- Explain the product through one identity → funding → outcome story.
- Focus on Core, Pay and Unify, which are in production today.
- Replace illustrative performance metrics with a clearly conceptual workflow.
- Move trust and governance closer to the buying decision.
- Keep one primary conversion action throughout the page.

The prototype uses the existing Valo SVG brand assets plus the project's vendored GSAP and ScrollTrigger builds. Motion includes:

- a spring-loaded Valo logo entrance and hover/focus response;
- a sequenced hero headline and product-interface reveal;
- subtle pointer parallax on the hero product card;
- staggered product, workflow, trust, and CTA entrances;
- an animated mobile menu; and
- a no-motion fallback for `prefers-reduced-motion` visitors.

It remains independent from the Astro build and does not modify the original landing-page concept.
