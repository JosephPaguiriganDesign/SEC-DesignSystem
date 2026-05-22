# Component Index

Single source of truth for what's shipped, where it lives, and which Figma node it came from.

`Status` legend: `draft` (storybook only) → `review` (in storybook + components/, awaiting visual-diff QA) → `final` (production-ready, eng can consume).

## Foundations

| Name | Storybook anchor | Source | `components/` file | Status |
|---|---|---|---|---|
| SCE Logo          | `#logo`           | placeholder mark; download `Logo-180.png` / `icon.svg` from sce.com to `assets/logos/` | `components/SCELogo.jsx` | draft |
| Tokens (T)        | `#tokens`         | sce.com tokens.css v1.5 + Figma metadata | `components/tokens.js` | review |
| Color ramps       | `#color-ramps`    | sce.com tokens.css v1.5 — 22 ramps × 10 stops (Edison Yellow/Green/Gray/Black/Pewter/Cool-Gray/Light-Gray/Heather + 10 accents + 4 semantic) | `components/tokens.js` (`colorRamps`) | review |
| Brand gradients   | `#gradients`      | sce.com tokens.css v1.5 (Component-Button-Gradient, Gradients-Sticky-Block, header overlay) | `components/tokens.js` (`gradient`) | review |
| Type ramp         | `#typography`     | sce.com EIX size + line + weight scales | `components/tokens.js` (`type`, `size`, `line`) | review |
| Spacing scale     | `#spacing-scale`  | sce.com EIX `--Spacing-Spacing-X{1..25}` | `components/tokens.js` (`space`) | review |
| Radius scale      | `#radius-scale`   | sce.com EIX `--Border-Radius-Radius-{XS..4XL}` | `components/tokens.js` (`radius`) | review |
| Shadow scale      | `#shadow-scale`   | sce.com EIX shadow attrs + card/section | `components/tokens.js` (`shadow`) | review |
| Motion timing     | `#motion-scale`   | reveal/base/easing values for storybook animation | `components/tokens.js` (`motion`) | review |
| Theme modes       | `#theme-modes`    | sce.com `[data-eix-theme=light/dark]` | `components/tokens.js` (`themes`) | review |
| Icon library      | `#icons`          | drawn in-repo to match SCE iconography | `components/icons.jsx` | draft |
| Art Direction     | `#art-direction`  | SCE.com Image Art Direction deck (image selection rules + per-area mood boards in `assets/images/art-direction/`) | docs-only | review |

## Forms

| Name | Storybook anchor | Figma componentKey | `components/` file | Status |
|---|---|---|---|---|
| TextField (Text Input)  | `#forms-textfield`  | `e025224068d17b9dc4c1959ccf2527f6f14baf75` (Text Input, Desktop) | `components/TextField.jsx`  | draft  |
| TextArea                | `#forms-textarea`   | extension (not in canonical SCE 1.7) | `components/TextArea.jsx` | draft (extension) |
| Dropdown                | `#forms-dropdown`   | `45ec7fcd11a9f65bc076b40abe852921293e532f` (Dropdown) | `components/Dropdown.jsx`   | review |
| Select (alt combobox)   | `#select`           | extension; prefer Dropdown for canonical use | `components/Select.jsx`     | draft (extension) |
| DatePicker              | `#forms-datepicker` | extension (not in canonical SCE 1.7) | `components/DatePicker.jsx` | draft (extension) |
| Checkbox                | `#forms-checkbox`   | `82160c45917c826b1ac7458bd3b2aa854d935672` (Checkbox) | `components/Checkbox.jsx`   | draft  |
| Radio                   | `#forms-radio`      | extension (not in canonical SCE 1.7) | `components/Radio.jsx`      | draft (extension) |
| Toggle                  | `#forms-toggle`     | extension (not in canonical SCE 1.7) | `components/Toggle.jsx`     | draft (extension) |
| Form composition        | `#forms-showcase`   | composite example | (storybook only) | draft |

## Components (atoms)

| Name | Storybook anchor | Figma componentKey | `components/` file | Status |
|---|---|---|---|---|
| Button           | `#button`            | `6de6c87bb6046671524b4e1674f332ba21e5a41c` | `components/Button.jsx`           | review |
| Alert            | `#alert`             | `b171ddb2f2b74200ad9d823533c1409bb55b7d4b` | `components/Alert.jsx`            | draft  |
| Tabs             | `#tabs`              | `dc4731cd26545fc6e76c81d34450a8f166d8afc9` | `components/Tabs.jsx`             | draft  |
| Breadcrumb       | `#breadcrumb`        | TBD | `components/Breadcrumb.jsx`       | draft  |
| Tooltip          | `#tooltip`           | TBD | `components/Tooltip.jsx`          | draft  |
| Modal            | `#modal`             | `7f90ef0e54a74ef0afdce828ee761db99756ea80` | `components/Modal.jsx`            | draft  |
| Divider          | `#divider`           | `6ca277bfc1fd6665448d6ba6f80663788b94acd6` | `components/Divider.jsx`          | draft  |
| SectionTitle     | `#section-title`     | `7ea475eb4e0151109ddb90ee916c55cc176c0e1b` | `components/SectionTitle.jsx`     | draft  |
| Status           | `#status`            | `11d9a96f0d458134bce2c1a39f74d1fc881a21c4` | `components/Status.jsx`           | draft  |
| Accordion        | `#accordion`         | `751eb8f762a3234d1c4ce3b3a410737ea8c9e037` | `components/Accordion.jsx`        | draft  |
| StepIndicator    | `#step-indicator`    | `3a2829cb43d73d24048935fb32a1e972102be205` | `components/StepIndicator.jsx`    | draft  |
| CTAArrow         | `#cta-arrow`         | `3e4e7239284c5dd6011445b386d1ab2de153f1a8` | `components/CTAArrow.jsx`         | draft  |
| LanguageSelector | `#language-selector` | `9c3ab801ed73dee61e21a98d81779d06fdb7e6ae` | `components/LanguageSelector.jsx` | draft  |
| CopyBlock        | `#copy-block`        | `a053e176f3c313b3283c18fc4a7fc1e36312688d` | `components/CopyBlock.jsx`        | draft  |
| Table            | `#table`             | `bdcb59e72383a377bd9be612d963e651cda3666f` | `components/Table.jsx`            | draft  |
| LoginModal       | `#login-modal`       | `da7675f0f48c45703ffbe47e0dd38d7ba5b3b129` | `components/LoginModal.jsx`       | draft  |

## Patterns (composed)

| Name             | Storybook anchor    | Source                                  | `components/` file                | Status |
|---|---|---|---|---|
| Header           | `#header`           | sce.com top nav (condensed)             | `components/Header.jsx`           | draft  |
| HeroBanner       | `#hero`             | sce.com `.homepage-hero-image` + overlay| `components/HeroBanner.jsx`       | draft  |
| QuickActionGrid  | `#quick-actions`    | sce.com 4-up icon-card row              | `components/QuickActionGrid.jsx`  | draft  |
| FeaturedCard     | `#featured-card`    | sce.com `.card-img-top` pattern         | `components/FeaturedCard.jsx`     | draft  |
| StickyBlock      | `#sticky-block`     | `--Gradients-Sticky-Block` ribbon       | `components/StickyBlock.jsx`      | draft  |
| TargetedPromo    | `#targeted-promo`   | `01cfe5a075a9a752684a90eabf20205dcc7bd74f` (Content/Targeted Promo/Desktop) | `components/TargetedPromo.jsx`    | draft  |
| FAQBlock         | `#faq-block`        | `37033f9bc6de46f1856d6e599e2dc117b520bb1b` (Syndicated FAQ Block)           | `components/FAQBlock.jsx`         | draft  |
| HomepageHeroContent | `#homepage-hero` | `7ecee9ef6c01587b3faef587c6190a7fc926282b` (Content/Homepage Hero Content) | `components/HomepageHeroContent.jsx` | draft  |
| SurveyBlock      | `#survey-block`     | `ea8ca1b070e3be59c569369476457f28d33a7398` (Survey Block) | `components/SurveyBlock.jsx`      | draft  |

## Navigation

| Name | Storybook anchor | Figma componentKey | `components/` file | Status |
|---|---|---|---|---|
| Header (compact custom) | `#header`                    | extension; condensed top bar | `components/Header.jsx`                   | draft |
| **GlobalHeader**        | `#global-header-default`     | Navigation/Global Header/Desktop `256:1633` (5 variants: empty / default / hover / searchOpen / searchResults) — C04 | `components/GlobalHeader.jsx`        | review |
| **GlobalHeaderMobile**  | `#global-header-mobile`      | `ab80fd036a30ee81a4a23e069712c03fa1b61afb` Navigation/Global Header/Mobile (3 states: default / expandedSelfService / expandedContent) | `components/GlobalHeaderMobile.jsx` | review |
| **EdisonBrand**         | `#edison-brand`              | brand-mark sub-component used inside GlobalHeader (canonical wordmark structure) | `components/EdisonBrand.jsx`         | draft |
| **AvatarCircle**        | `#avatar-circle`             | `478:1362` Avatar + `253:1482` Notification Status | `components/AvatarCircle.jsx`             | draft |
| Footer                  | `#footer`                    | `3dc3f89773acfff61598001f56ea1dfe1afcb4c0` (Navigation/Global Footer) | `components/Footer.jsx`                   | draft |
| MobileMenuHeader        | `#mobile-menu-header`        | `a8da20fc10fc928d3cc855d7b4482768e1114c09` (Navigation/Mobile Menu Header) | `components/MobileMenuHeader.jsx`        | draft |
| NavAccordionMenu        | `#nav-accordion-menu`        | `223e5107b0407b0543ac5c8ed7bf2999b0ea12ef` (Navigation/Accordion Menu - 3rd Level) | `components/NavAccordionMenu.jsx`       | draft |
| QuickLinksMenu          | `#quick-links-menu`          | `0b9e2ad8e5701b6ff62458d105f585f25e3d6f92` (Navigation/Quick Links Menu) | `components/QuickLinksMenu.jsx`           | draft |
| Pagination              | `#pagination`                | `a38bebbdd372b05d9eb18ec18382cd51987e5db6` (Pagination) | `components/Pagination.jsx`               | draft |
| ReadMoreLink            | `#read-more-link`            | `a4dfd730c3ee8d515cb500dc3c2663f95161e085` (Read More Link) | `components/ReadMoreLink.jsx`             | draft |
| AlertsNotificationsMenu | `#alerts-notifications-menu` | `389b1cc946e10af6556a51ac339ca6c631825f45` (Alerts & Notifications Menu) | `components/AlertsNotificationsMenu.jsx` | draft |
| SyndicatedContentList   | `#syndicated-content-list`   | `a1deb8b27f24e5dd001a6bf1af1207131a1aebcf` (Syndicated Content List) | `components/SyndicatedContentList.jsx` | draft |
| QuickLinksHeader        | `#quick-links-header`        | `1a236286d74d396d4a8dc50f23a1da40b5433044` (Quick Links/Header) | `components/QuickLinksHeader.jsx`         | draft |
| ExternalLink            | `#external-link`             | `6326b1819cffe5c8e0d65804828502e61510bf5f` (Global Footer/External Link) | `components/ExternalLink.jsx`            | draft |
| Breadcrumb              | `#breadcrumb`                | TBD | `components/Breadcrumb.jsx`               | draft |
| SocialRow        | (inside `#footer`)  | sce.com footer social strip             | `components/SocialRow.jsx`        | draft  |
| Footer           | `#footer`           | sce.com footer (condensed)              | `components/Footer.jsx`           | draft  |

Public entry: `components/index.js` re-exports every component above plus tokens.

---

## Why so many `TBD`s on Figma node IDs

`get_design_context` and `get_variable_defs` (the tools that return canonical specs and the `T.color.*` mapping) require a layer to be **selected in Figma Desktop** — they read whatever's selected. Now that SCE Enterprise auth is in place via `joseph.paguirigan@sce.com`, the file is fully accessible; the remaining work is selection-driven from your end. See `qa/canonical-figma/README.md` for the per-component flow.

The token values are independently verified against `https://www.sce.com/themes/custom/sce_redesign/css/tokens.css` (Southern California EIX Design System v1.5), so the tokens don't need the Figma re-pull to be considered authoritative — but the per-component pixel-perfect specs do.

## Adding a row

1. Add a row above with section anchor, Figma node ID, and target file.
2. Set status to `draft` while it's storybook-only.
3. Bump to `review` after mirroring to `components/<Name>.jsx`.
4. Bump to `final` after the visual-diff gate passes (`qa/<slug>/diff-<component>.md`).

## Removing a component

Don't delete the row. Set status to `deprecated` and add a `Replaced by` note pointing at its successor.
