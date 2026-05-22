# Build Plan

Roadmap for the SCE.com Design System repo.

## Done

- [x] Repo scaffold (folders, CLAUDE.md, COMPONENT-INDEX.md)
- [x] Pre-commit hook (blocks `localhost:`/`file://` URLs in non-doc files)
- [x] `preview/storybook.html` shell with `T` tokens, `useReveal`, sidebar nav
- [x] First-pass token set (Edison Green + Edison Yellow primary)
- [x] **sce.com live-site analysis** — confirmed tokens against `tokens.css` v1.5
- [x] Tokens corrected: primary brand is Edison-Green + Edison-Yellow (not navy + yellow)
- [x] Font switched to Open Sans 300-800 (matches sce.com import)
- [x] Spacing scale aligned to SCE EIX (4/8/16/24/32/40/48/56/64/72/80/100)
- [x] Radius scale aligned to SCE EIX (4/8/16/24/32/40/48/56)
- [x] Button updated to use `--Component-Button-Gradient` at rest, solid hover
- [x] Accent palette added (10 colors: Goldenrod, Kiwi, Leaf, Margarita, Pacific, Peacock, Plum, Sage, Seaglass, Sherbet)
- [x] Semantic colors aligned to SCE (Error #BB0000, Success #107E3E, Info #0057D2, Warn #DF6E0C)
- [x] Components: Button, TextField, Alert, Header, Footer
- [x] **New components from sce.com analysis**: HeroBanner, QuickActionGrid, FeaturedCard, StickyBlock, SocialRow
- [x] **Art Direction foundation page** - image selection guidelines + per-content-area mood boards from the SCE.com Image Art Direction deck (`assets/images/art-direction/`, 26 reference slides)

## In progress

- [ ] Resolve Figma access (file `N546ZD8jN1DrQ997ZNb4FO`) at higher rate-limit tier so MCP `get_design_context` works against the canonical source for component-level pixel checks
- [ ] Map every component to actual Figma node IDs in `COMPONENT-INDEX.md`
- [ ] Visual-diff gate per component (`qa/<slug>/diff-*.md`) — needed to bump statuses from `draft` → `review` → `final`

## Backlog

- [ ] Asset download — pull SCE logo SVGs (Logo-120/152/167/180.png + icon.svg) into `assets/logos/`
- [ ] Asset download — pull menu-icon SVGs (Delivery, Outage, PayBill, PaymentAssistance, Facebook, Instagram, Twitter, LinkedIn, YouTube) into `assets/nav-icons/` and `assets/icons/`
- [ ] Replace HeroBanner gradient fallback with a real image once a usable hero asset is in `assets/images/`
- [ ] Form components: Select, Checkbox, RadioGroup, Toggle, FileInput
- [ ] Feedback components: Toast, Modal, Drawer, Tooltip
- [ ] Layout components: SectionHeader, Breadcrumb, Tabs, Pagination
- [ ] Data display: Table, EmptyState, Skeleton, UsageChart
- [ ] Marketing patterns: FeatureGrid, CTASection, NewsCard
- [ ] Account patterns: PaymentCard, ServiceAddress, RatePlanCard
- [ ] Dark theme — sce.com tokens.css supports `[data-eix-theme=dark]`. Mirror it into `T.themes.dark` in tokens.js
- [ ] Outage map / locator (sce.com loads it on `/outages-safety/outage-center` — out of scope until that page is ready to QA)

## Phasing

**Phase 1 — Foundations + atoms (current).** Tokens, icons, primitive form + display components, plus the small handful of SCE-specific patterns visible on the homepage.

**Phase 2 — Account flows.** Bill summary, payment card, service address picker, rate-plan card, usage chart.

**Phase 3 — Full screens.** 393×852 mobile screens that compose Phase 1 + 2 components into actual app surfaces. Used for end-to-end visual diff against Figma.

**Phase 4 — Theme variants.** Dark mode (data-eix-theme=dark from sce.com), accessibility-mode (high contrast), Spanish-language token overrides if applicable.

## Open questions

- **Header chrome.** sce.com's header uses a navy translucent overlay only on the hero, not on the chrome itself. Confirm whether the Figma file follows the same pattern or uses a solid navy chrome on internal pages.
- **Hero image breakpoints.** sce.com swaps `_header_large` / `_header` / `_header_mobile` at 1440 / 1024 / <1024. Decide whether HeroBanner ships with a built-in `<picture>` or stays single-image.
- **Sign-in widget.** sce.com uses the stock Okta SignIn Widget 7.26.0 — not styled with SCE tokens. Confirm whether the design system should provide a styled wrapper or treat Okta as out of scope.
- **Bootstrap fall-through.** sce.com mixes Bootstrap 5.1.3 utilities with EIX tokens. Decide whether downstream apps consuming this design system should bring Bootstrap or be fully token-driven.
