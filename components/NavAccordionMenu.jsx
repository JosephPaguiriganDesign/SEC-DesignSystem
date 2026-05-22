import React, { useState } from 'react';
import T from './tokens';
import { IconChevron, IconSearch } from './icons';

/**
 * NavAccordionMenu  —  canonical SCE Navigation/Accordion Menu (C01)
 *
 * Mobile-only nested-nav drawer with three levels (L1 / L2 / L3) and a
 * search field at the top. Per Figma node 306:3939 (and matched against
 * the live sce.com mobile drawer), the canonical behavior is:
 *
 *   - **Single-open at every level.** At most one L1 expanded; within
 *     the open L1, at most one L2 expanded. Closing or switching the
 *     open L1 collapses any open L2.
 *   - **Open rows render dark-charcoal** (#3F3F3F) with white text and
 *     white chevrons. Closed rows render light-gray (#F5F5F5) with bold
 *     dark text and a dark chevron-down.
 *   - **Yellow vertical stripe** on the far left of the *current
 *     sub-section* row — sce.com's `is-active` cue. Drawn on the L2
 *     when `currentSubsection` matches; falls back to the L1 when only
 *     `currentSection` is supplied.
 *   - **L3 leaf items** render normal-weight on a light-gray background,
 *     hairline-separated, no chevron, indented under the L2 text.
 *   - **Search field** lives at the very top of the drawer.
 *
 * `items` shape:
 *   [{
 *     label, href?, children?: [{
 *       label, href?, children?: [{ label, href? }]
 *     }]
 *   }]
 *
 * Source: SCE Design System 1.7 component `223e5107…` (Figma 306:3939).
 * Status: review — single-open behavior + 3-level hierarchy + search.
 */
export default function NavAccordionMenu({
  items = [],
  currentSection,        // optional initial selection (L1)
  currentSubsection,     // optional initial selection (L2)
  defaultOpen = null,    // optional L1 to start open
  defaultOpenL2 = null,  // optional L2 to start open
}) {
  // Selection (yellow stripe) is driven by user clicks. On first render
  // nothing is selected and no stripe is drawn. Host apps may pre-seed
  // the selection via currentSection / currentSubsection (e.g. to mark
  // the current page).
  const initial = Array.isArray(defaultOpen) ? defaultOpen[0] : defaultOpen;
  const [openL1, setOpenL1] = useState(initial || null);
  const [openL2, setOpenL2] = useState(defaultOpenL2 || null);
  const [selectedL1, setSelectedL1] = useState(currentSection || null);
  const [selectedL2, setSelectedL2] = useState(currentSubsection || null);

  const toggleL1 = (label) => {
    setOpenL1((prev) => (prev === label ? null : label));
    setOpenL2(null);
    setSelectedL1(label);
    setSelectedL2(null);
  };
  const toggleL2 = (label, parentLabel) => {
    setOpenL2((prev) => (prev === label ? null : label));
    setSelectedL1(parentLabel);
    setSelectedL2(label);
  };

  const DARK = '#3F3F3F';
  const LIGHT = '#F5F5F5';
  // Hairline color must be visibly darker than LIGHT (#F5F5F5) so the
  // separator rules show up between closed rows. (T.color.borderSoft
  // is #F5F5F5 — same as LIGHT — so it would render invisible.)
  const HAIR = '#D8D8D8';
  // SINGLE timing budget for the entire row so chevron, height, opacity,
  // background, and color all land at the same moment. Mismatched
  // durations are what make the row look like it "jumps" mid-animation.
  const DUR = 360;
  const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const TR_GRID =
    `grid-template-rows ${DUR}ms ${EASE}, opacity ${DUR}ms ${EASE}`;
  const TR_ROW = `background ${DUR}ms ${EASE}, color ${DUR}ms ${EASE}`;
  const TR_CHEV = `transform ${DUR}ms ${EASE}`;

  return (
    <nav
      aria-label="Site navigation"
      style={{
        background: T.color.white,
        fontFamily: T.font.family,
        border: `1px solid ${T.color.border}`,
        overflow: 'hidden',
      }}
    >
      {/* Search field — canonical top-of-drawer per Figma 3rd-Level */}
      <div
        style={{
          padding: 12,
          background: T.color.white,
          borderBottom: `1px solid ${HAIR}`,
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${T.color.border}`,
            borderRadius: 4,
            background: T.color.white,
          }}
        >
          <input
            type="search"
            placeholder="Search sce.com"
            aria-label="Search sce.com"
            style={{
              flex: 1,
              padding: '14px',
              fontSize: 16,
              fontFamily: T.font.family,
              color: T.color.text,
              background: 'transparent',
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            aria-label="Search"
            style={{
              padding: '14px',
              background: 'transparent',
              border: 'none',
              borderLeft: `1px solid ${HAIR}`,
              cursor: 'pointer',
              color: T.color.text,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconSearch width={18} height={18} stroke={T.color.text} />
          </button>
        </div>
      </div>

      {items.map((it, i) => {
        const l1Open = openL1 === it.label;
        // Yellow stripe falls to the L1 when:
        //   - selection landed on the L1 itself (no L2 click yet), OR
        //   - the L1 contains the selected L2 but is now collapsed
        //     (so the L2 stripe wouldn't be visible).
        // Once the L1 is open, the L2 row owns the stripe.
        const l1Current =
          selectedL1 === it.label && (!selectedL2 || !l1Open);
        return (
          <div
            key={it.label}
            style={{
              borderTop: `1px solid ${HAIR}`,
              borderBottom: i === items.length - 1 ? `1px solid ${HAIR}` : 'none',
            }}
          >
            <button
              onClick={() => toggleL1(it.label)}
              aria-expanded={l1Open}
              aria-current={l1Current ? 'page' : undefined}
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 16px 16px 20px',
                background: l1Open ? DARK : LIGHT,
                border: 'none',
                cursor: 'pointer',
                color: l1Open ? T.color.white : T.color.text,
                fontFamily: T.font.family,
                textAlign: 'left',
                transition: TR_ROW,
              }}
            >
              {l1Current && (
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: T.color.yellow,
                  }}
                />
              )}
              <span style={{ fontSize: T.type.bodyBold.size, fontWeight: 700 }}>
                {it.label}
              </span>
              <IconChevron
                width={18}
                height={18}
                stroke={l1Open ? T.color.white : T.color.text}
                strokeWidth={2}
                style={{
                  transform: l1Open ? 'rotate(-90deg)' : 'rotate(90deg)',
                  transition: TR_CHEV,
                  flexShrink: 0,
                }}
              />
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: l1Open ? '1fr' : '0fr',
                opacity: l1Open ? 1 : 0,
                transition: TR_GRID,
                willChange: 'grid-template-rows, opacity',
              }}
            >
              <div style={{ minHeight: 0, overflow: 'hidden' }}>
                {it.children &&
                  it.children.map((l2) => {
                    const l2Open = openL2 === l2.label;
                    const l2Current = selectedL2 === l2.label;
                    return (
                      <div
                        key={l2.label}
                        style={{ borderTop: `1px solid ${HAIR}` }}
                      >
                        <button
                          onClick={() => toggleL2(l2.label, it.label)}
                          aria-expanded={l2Open}
                          aria-current={l2Current ? 'page' : undefined}
                          style={{
                            position: 'relative',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 16px 14px 32px',
                            background: l2Open ? DARK : LIGHT,
                            border: 'none',
                            cursor: 'pointer',
                            color: l2Open ? T.color.white : T.color.text,
                            fontFamily: T.font.family,
                            textAlign: 'left',
                            transition: TR_ROW,
                          }}
                        >
                          {l2Current && (
                            <span
                              aria-hidden
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: 4,
                                background: T.color.yellow,
                              }}
                            />
                          )}
                          <span style={{ fontSize: 15, fontWeight: 700 }}>
                            {l2.label}
                          </span>
                          <IconChevron
                            width={16}
                            height={16}
                            stroke={l2Open ? T.color.white : T.color.text}
                            strokeWidth={2}
                            style={{
                              transform: l2Open ? 'rotate(-90deg)' : 'rotate(90deg)',
                              transition: TR_CHEV,
                              flexShrink: 0,
                            }}
                          />
                        </button>

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateRows: l2Open ? '1fr' : '0fr',
                            opacity: l2Open ? 1 : 0,
                            transition: TR_GRID,
                            willChange: 'grid-template-rows, opacity',
                          }}
                        >
                          <div style={{ minHeight: 0, overflow: 'hidden' }}>
                            {l2.children &&
                              l2.children.map((l3) => (
                                <a
                                  key={l3.label}
                                  href={l3.href || '#'}
                                  style={{
                                    display: 'block',
                                    padding: '14px 16px 14px 56px',
                                    background: LIGHT,
                                    color: T.color.text,
                                    textDecoration: 'none',
                                    fontSize: 15,
                                    fontWeight: 400,
                                    borderTop: `1px solid ${HAIR}`,
                                  }}
                                >
                                  {l3.label}
                                </a>
                              ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
