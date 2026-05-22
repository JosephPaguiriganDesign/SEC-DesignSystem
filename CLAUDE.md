# SCE.com Design System

> **Required reading before any work in this repo.**
> 1. `~/.claude/skills/design-to-code-qa/SKILL.md` — auto-loaded by Claude Code on design work
> 2. `~/.claude/memory/process_design_to_code_pipeline.md` — canonical long-form pipeline
> 3. This file (`CLAUDE.md`)
> 4. `COMPONENT-INDEX.md` — single source of truth for what each component is, where it lives, and which Figma node it came from

If any of the above is missing, install the kit first:
```bash
git clone https://github.com/jimjimjimmy/design-to-code-qa.git
cd design-to-code-qa && bash install.sh
```

---

## What this is

A component library and live storybook for SCE.com (Southern California Edison). Built Figma-first, pixel-faithful, transportable — every asset lives in this repo, no `localhost:*` or `file://` URLs are ever committed.

**Live preview:** `preview/storybook.html` (open directly in a browser; no build step).

**Source of truth:** `SCE Design System.fig` (Figma file `gS6XoukbbNIMLDOLBUaX2u`).

---

## Tech stack

- **React 18** via UMD CDN
- **Babel Standalone 7.23.9** for in-browser JSX (no build step)
- **Inter** font from Google Fonts
- **No bundler, no package.json, no Storybook framework.** All app code lives in one `<script type="text/babel">` tag in `preview/storybook.html`.
- Engineering deliverables are mirrored to `components/*.jsx` (one file per component) so a downstream app can drop them into any React project.

---

## Repo layout

```
SCE.com Design System/
├── CLAUDE.md                ← you are here
├── README.md                ← public-facing intro to the design-to-code-qa kit
├── COMPONENT-INDEX.md       ← component | file | preview | Figma node ID
├── BUILD-PLAN.md            ← roadmap, what's done, what's next
├── SCE Design System.fig    ← source of truth (binary)
├── user-prefs.md            ← personal terms for the design-to-code-qa skill
├── .gitignore
├── .git/hooks/pre-commit    ← installed by design-to-code-qa bootstrap
├── preview/
│   └── storybook.html       ← THE single storybook file
├── components/              ← extracted .jsx for the dev team
│   ├── tokens.js            ← colors, type, shadows, radii
│   ├── icons.jsx            ← all <Icon*/> SVG components
│   └── <Component>.jsx      ← one file per finalized component
├── assets/                  ← all design assets, root-level only
│   ├── icons/               ← Figma-exported UI icons (svg/png)
│   ├── logos/               ← brand marks
│   ├── images/              ← hero art, photos, illustrations
│   └── nav-icons/           ← multi-layer tab/nav icon parts
├── qa/                      ← per-task pipeline artifacts
│   └── <task-slug>/
│       ├── checklist.md
│       ├── figma-parent.png
│       ├── asset-urls.txt
│       ├── specs/
│       ├── built-<component>.png
│       └── diff-<component>.md
└── qa-reports/              ← REVIEW-mode outputs
    └── <ticket-id>.md
```

---

## Hard rules (non-negotiable)

**1. Parent-down spec pull.**
Always start from the parent frame. Call `Figma:get_metadata` on the parent, then `get_design_context` on each child you need. Never describe a component "roughly."

**2. Trace padding from the spec.**
Padding, gaps, radii, font sizes, line heights, weights — read them from the Figma response, do not guess. If a value isn't in the response, screenshot the node with `get_screenshot` and measure.

**3. Visual diff gate.**
After implementing a component, render it (open `preview/storybook.html` in a browser, screenshot it), then save a side-by-side comparison with the Figma export to `qa/<task-slug>/diff-<component>.md`. Never declare "done" without an artifact in that file.

**4. Asset URLs are local-relative only.**
Every `src=`, `href=`, `url(...)` references a path under `assets/`. The pre-commit hook blocks any commit containing `localhost:`, `127.0.0.1:`, or `file://` in non-doc files. Never `--no-verify`.

**5. One storybook file.**
`preview/storybook.html` is THE file. Never create new standalone preview HTMLs (`MyComponent-Preview.html` etc.) — they drift and rot.

**6. WCAG posture — AAA is the target.**
Body, caption, link, and subtitle copy on reading surfaces (white, gray-100, navy) ships at **WCAG 2.1 AAA (7 : 1)**. AA is the explicit escape valve, used only on brand-led surfaces — photo-overlay heroes, yellow promo blocks, marketing CTAs. UI-component criteria (focus rings 3 : 1, hit areas 44 × 44) stay at AA baseline (1.4.11 / 2.5.5). If a token only earns AA on a reading surface, derive a darker variant (`green-700`, `textLinkOnYellow`, etc.) rather than dropping the bar.

The Typography page renders a live AAA / AA / FAIL matrix; reference it before pairing a text token with a new background. Hero/photo scrim implementations target AA deliberately and call this out in their JSDoc — that's the escape valve in action, not an oversight.

---

## Storybook conventions

`preview/storybook.html` is structured top-to-bottom as:

1. `<head>` — Inter font, single `<style>` block with global resets
2. CDN `<script>` tags: react@18, react-dom@18, babel-standalone@7.23.9
3. One `<script type="text/babel">` containing:
   1. **`T` tokens object** — colors, fonts, shadows, radii (mirror in `components/tokens.js`)
   2. **`useReveal(duration)` RAF hook** — drives all mount animations, returns `p` 0→1
   3. **`Icon*` SVG components** — all icons inline so the page is self-contained
   4. **One `function ComponentName() {…}` per component**
   5. **`SECTIONS` registry** — array of `{id, title, render}` objects, drives sidebar nav
   6. **`ANIMATED_IDS` Set** — components that re-trigger reveal animation on focus
   7. **`ComponentCard`** — wraps each component with its 357×variable canvas + label
   8. **`App`** — sidebar + canvas layout, scroll-spy, focus highlight

When you add a component:
- Build it inside the script block first (this is the storybook source of truth)
- Register it in `SECTIONS`
- Add to `ANIMATED_IDS` only if it has a mount animation
- After it's stable, **mirror** it to `components/<Name>.jsx` for engineering

JSX style is **always** object literals for inline styles, never style strings.

---

## Layout patterns

**Two viewports only — desktop and mobile. No tablet.**
The storybook header ships a Desktop ↔ Mobile toggle (top right of the canvas). Every component renders both ways; switch the toggle to preview either viewport.

Three canvas widths in use:
- **357px** — atomic-component cards (default; small interactive widgets)
- **393px** — mobile width (iPhone 14 Pro). Set via `.canvas-mobile-narrow` when viewport is `mobile`. Some components are mobile-only (`GlobalHeaderMobile`, `MobileMenuHeader`) and ignore the toggle.
- **720px** — wide desktop stage for hero/header/full-bleed surfaces. Set via `.canvas-wide` when viewport is `desktop` and the component is in the wide list inside `ComponentCard`.

Render functions in `SECTIONS` receive `{ viewport }`. Branch on it when a component has a different desktop vs mobile treatment (smaller padding, single-column footer, swap to a mobile-only component, etc.). If a component just reflows naturally, leave the render alone — the stage width handles it.

Don't invent a tablet breakpoint. If a Figma frame implies tablet, treat it as either desktop (wider) or mobile (narrower) and pick the closest fit.

---

## Animation pattern

```js
function useReveal(duration = 600) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf, start;
    const tick = (t) => {
      if (!start) start = t;
      const k = Math.min(1, (t - start) / duration);
      setP(k);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);
  return p;
}
```

- Single source for opacity/translate/scale curves.
- Components in `ANIMATED_IDS` get re-keyed when scrolled into focus so the animation re-fires.
- **Never** use CSS `@keyframes` for component reveals — they desync from React state and produce a remount trap.

---

## Component-Index workflow

When you ship a component, append a row to `COMPONENT-INDEX.md`:

| Name | Storybook section | Figma node | components/ file | Status |
|------|-------------------|------------|------------------|--------|

`Status` is one of `draft` / `review` / `final`. Engineering only consumes `final` entries.

---

## Changelog workflow

When you ship any component, page, or notable change, prepend a matching entry to the `CHANGELOG` array in `preview/storybook.html` (search `const CHANGELOG`). This array is the single source of truth: the header version chip, the Dashboard "Current Version" tile, and the changelog panel all derive from `CHANGELOG[0]`, so a new entry keeps every version display in sync.

Entry shape: `{ version, date, entries: [{ tone, text }] }`, where `tone` is `New` / `Change` / `A11y` / `Fix` and `text` allows inline `<strong>` / `<code>`. Bump `version` for a new release (do not rewrite past entries — log removals as new changes), and use today's date. Nothing auto-detects code changes, so adding the entry is a manual step that belongs in the same unit of work as the change itself.

---

## Two-mode operation (BUILD vs REVIEW)

- **BUILD** — writing new components from a Figma frame. Run all of Phases 0→5 from the pipeline. End with a visual diff in `qa/<slug>/`.
- **REVIEW** — auditing an existing implementation against Figma. Output to `qa-reports/<ticket-id>.md` per Phase 6 of the pipeline. Never modify components in REVIEW mode.

Always declare the mode at the start of a session.

---

## What NOT to do

- Don't create per-component preview HTMLs.
- Don't paste Figma asset URLs (`http://localhost:3845/…`) directly into JSX. Always download to `assets/` first and reference the local path.
- Don't paraphrase Figma values. "Roughly 16px" is a red flag.
- Don't use em-dash characters in code or commit messages (writing convention).
- Don't run `git commit --no-verify`. If the hook fires, the hook is right.
- Don't extract a component to `components/*.jsx` until it's marked `final` in `COMPONENT-INDEX.md`.

---

## Source links

- Figma file: https://www.figma.com/design/gS6XoukbbNIMLDOLBUaX2u/SCE---Design-System-1.7
- Pipeline kit: https://github.com/jimjimjimmy/design-to-code-qa
- Reference style guide: https://github.com/jimjimjimmy/beacon
