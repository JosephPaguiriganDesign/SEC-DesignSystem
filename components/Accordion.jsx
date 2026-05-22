import React, { useState } from 'react';
import T from './tokens';
import { IconChevron } from './icons';

/**
 * Accordion  —  canonical SCE Accordion (C32)
 *
 * Item states (per Figma frame 3521:102):
 *   Closed (default) — bold label, blue chevron-down, gray bottom border
 *   Open             — bold label, blue chevron-up, body text below
 *   Topic Item       — bold label, blue chevron — section heading
 *   Hover            — bg-secondary highlight on the row
 *   Selected         — 1.5px Pacific-blue outline ring around the row
 *
 * The component also accepts an optional `title` prop. When provided,
 * a canonical SCE FAQ blue header is rendered above the items with a
 * circular question-mark icon and white bold title (see live example:
 * sce.com Electric & Magnetic Fields FAQ).
 *
 * Each item accepts:
 *   { title, body, topic?, selected?, defaultOpen? }
 *
 * Source: SCE Design System 1.7 component `751eb8f7…` (Figma 3521:102).
 * Status: review.
 */
export function AccordionItem({
  title,
  body,
  topic = false,
  selected = false,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [hover, setHover] = useState(false);
  // One timing for everything in the row so chevron, height, and opacity
  // stay locked. 420ms + Material standard easing yields a softer,
  // cinematic open/close.
  const DUR = 420;                                 // ms
  const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';     // Material standard, soft ease-in-out

  return (
    <div
      style={{
        fontFamily: T.font.family,
        background: hover && !selected ? T.color.bgSecondary : T.color.white,
        // Always 1.5px border so layout never shifts when toggling Selected.
        border: `1.5px solid ${selected ? T.color.accentPacific : 'transparent'}`,
        borderBottom: `1.5px solid ${selected ? T.color.accentPacific : T.color.lightGray}`,
        transition: `background ${DUR}ms ${EASE}, border-color ${DUR}ms ${EASE}`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: T.type.bodyBold.size,
          fontWeight: T.font.weight.bold,
          color: T.color.text,
          textAlign: 'left',
          fontFamily: T.font.family,
          textDecoration: 'none',
        }}
      >
        <span>{title}</span>
        <IconChevron
          width={18}
          height={18}
          stroke={T.color.textLink}
          strokeWidth={2.25}
          style={{
            transform: open ? 'rotate(-90deg)' : 'rotate(90deg)',
            transition: `transform ${DUR}ms ${EASE}`,
            flexShrink: 0,
            willChange: 'transform',
          }}
        />
      </button>
      {body && (
        <div
          style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            opacity: open ? 1 : 0,
            transition: `grid-template-rows ${DUR}ms ${EASE}, opacity ${DUR}ms ${EASE}`,
            willChange: 'grid-template-rows, opacity',
          }}
        >
          <div style={{ minHeight: 0, overflow: 'hidden' }}>
            <div
              style={{
                padding: '0 16px 18px',
                fontSize: T.type.body.size,
                color: T.color.text,
                lineHeight: T.type.body.line + 'px',
              }}
            >
              {body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * IconQuestionCircle — circular question-mark glyph used in the canonical
 * SCE FAQ accordion header. White stroke + white "?" on a blue background.
 */
function IconQuestionCircle({ size = 26, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10.25" stroke={color} strokeWidth="1.75" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={color}
        fontFamily="Inter, system-ui, sans-serif"
      >
        ?
      </text>
    </svg>
  );
}

export default function Accordion({ items = [], title = null }) {
  // Canonical SCE FAQ blue header (sce.com EMF FAQ pattern).
  const HEADER_BLUE = '#1A76C5';
  const FRAME = '#B6D4E5';
  return (
    <div
      style={{
        fontFamily: T.font.family,
        border: title ? `1px solid ${FRAME}` : 'none',
        borderRadius: title ? 4 : 0,
        overflow: 'hidden',
      }}
    >
      {title && (
        <div
          style={{
            background: HEADER_BLUE,
            color: T.color.white,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconQuestionCircle size={26} color={T.color.white} />
          <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{title}</span>
        </div>
      )}
      {items.map((it, i) => (
        <AccordionItem
          key={i}
          title={it.title}
          body={it.body}
          topic={!!it.topic}
          selected={!!it.selected}
          defaultOpen={!!it.defaultOpen}
        />
      ))}
    </div>
  );
}
