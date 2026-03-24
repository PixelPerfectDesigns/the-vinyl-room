# CLAUDE.md — Website Rules

## Always Do First
1. **Invoke the `ux-ui-director` skill** — brand research, visual identity,
   typography, color, layout, UX, accessibility, and motion.
2. **Invoke the `Brand Voice` plugin** — distill brand personality into
   enforceable copy guardrails before writing any copy.
3. Run the restaurant brand audit (Phase 1 of ux-ui-director) before
   any design or copy decisions.
4. Write and confirm the Brand Brief before writing any code.
   The brief must include both visual direction (ux-ui-director)
   and copy/tone direction (Brand Voice).
5. Do not write any frontend code until the Brand Brief is confirmed.

## Skill Responsibilities
`ux-ui-director` governs everything:
- Brand research and identity extraction from public sources
- Aesthetic direction, font selection, color system, layout structure
- UX rules: contrast ratios (min 4.5:1), touch targets (min 44px), spacing rhythm (8px scale)
- Animation timing (150–300ms for snappy, 800–1200ms for cinematic)
- Accessibility: WCAG compliance, ARIA patterns, focus states, reduced motion
- Mobile-first restaurant priorities: tap-to-call, hours, menu access, Maps link

Hard rule from the skill: never use `transition-all`. Only animate `transform` and `opacity`.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly.
  Swap in placeholder content (images via `https://placehold.co/`, generic copy).
  Do not improve or add to the design.
- If no reference image: design from scratch using the Brand Brief from `ux-ui-director`.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot.
  Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer`.
  Chrome cache is at `C:/Users/ajsta/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png`
  (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label`
  saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool.
- When comparing, be specific: "heading is 32px but reference shows ~24px",
  "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight, line-height, colors (exact hex),
  alignment, border-radius, shadows, image sizing

## CSS Architecture — Choose the Right Tier

Before writing any CSS, assess the project scope and choose the correct tier.
State the chosen tier explicitly before coding. Do not default to Tier 1 for multi-page projects.

### Tier 1 — Single HTML file, all styles inline
**Use when:** Single page, prototype, proof of concept, or fewer than 3 pages with no shared components.
**How:** All CSS in a `<style>` block inside `index.html`. No external files.
**Do not use:** Tailwind CDN — it conflicts with the brand token system.

### Tier 2 — HTML + dedicated `styles.css`
**Use when:** 3+ pages with shared nav, footer, or components. Any project heading toward production.
**How:** Shared styles (tokens, reset, typography, nav, footer, buttons, animations) in `styles.css`.
Page-specific styles stay in a small `<style>` block per page — only overrides and unique components.
**Benefits:** Browser caches shared CSS after first load. One file to update for global changes.
**Structure:**
```
styles.css        ← tokens, reset, typography, nav, footer, buttons, animations
index.html        ← <link rel="stylesheet" href="styles.css"> + small <style> for page-specific
menu.html         ← same pattern
[other pages]     ← same pattern
```

### Tier 3 — HTML + CSS + Tailwind (CDN or build)
**Use when:** Rapid layout prototyping where utility classes speed iteration AND no custom brand token
system is needed. Generic marketing pages, internal tools, or client-requested Tailwind projects.
**Do not use for:** Brand-driven restaurant sites. Tailwind utility classes fight a CSS variable
design token system. The two approaches are incompatible — pick one.
**If Tailwind is used:** Still apply brand colors via `tailwind.config` — never use default
indigo/blue/purple palette. Extend the config with the brand's hex values.

### Tier 4 — HTML + CSS + build tooling (Vite, PostCSS, etc.)
**Use when:** Large site (10+ pages), multiple contributors, performance budget requirements,
component reuse across projects, or client requires a maintainable handoff with hot reload.
**Do not use for:** Small restaurant sites. The complexity overhead is not worth it.

### Decision trigger
Ask these questions in order:
1. Is this 1–2 pages with no shared components? → Tier 1
2. Is this 3+ pages or heading to production? → Tier 2
3. Is the client requesting Tailwind or is speed more important than brand precision? → Tier 3
4. Is this a large multi-contributor build with performance requirements? → Tier 4

### Always
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive — build mobile layout before desktop
- CSS custom properties (variables) for all design tokens regardless of tier

## Brand Assets
- Always check the `brand_assets/` folder before designing.
  It may contain logos, color guides, style guides, or photography.
- If assets exist, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values.
  Do not invent brand colors when real ones exist.
- If `brand_assets/` is empty or absent, proceed with the full brand audit in Phase 1
  of `ux-ui-director` — build the identity from public sources.

## Design Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.).
  All colors come from the Brand Brief color system derived in `ux-ui-director`.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color
  treatment layer with `mix-blend-multiply`.
- **Depth:** Surfaces must use a layering system (base → elevated → floating).
  Nothing sits at the same z-plane.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
  No exceptions.
- **Typography:** No font-weight below 400 anywhere. No body text below 16px.
  No heading below 32px on desktop. No Inter, Roboto, or Arial as display fonts.

## Hard Rules
- Do not add sections, features, or content not in the reference or brief
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not make two restaurant projects look the same — each Brand Brief must produce
  a visually distinct output
- Do not write headlines, CTAs, menu descriptions, or any customer-facing
  copy without Brand Voice active