import React, { useState } from 'react';
import T from './tokens';
import { IconChevron, IconArrow } from './icons';

/**
 * SyndicatedContentList  —  canonical SCE Syndicated Content List
 *
 * Versatile collapsible list of related links under a common heading.
 * Used for Quick Links, support resources, and policy doc groupings.
 *
 * `items` shape: [{ label, href? }]
 *
 * Source: SCE Design System 1.7 component `a1deb8b2…`.
 * Status: draft.
 */
export default function SyndicatedContentList({
  title = 'Related links',
  items = [],
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        background: T.color.white,
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.md,
        fontFamily: T.font.family,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 18px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: T.type.bodyBold.size,
          fontWeight: T.font.weight.bold,
          color: T.color.text,
          fontFamily: T.font.family,
          textAlign: 'left',
        }}
      >
        <span>{title}</span>
        <IconChevron
          width={16}
          height={16}
          stroke={T.color.text}
          style={{
            transform: open ? 'rotate(-90deg)' : 'rotate(90deg)',
            transition: `transform ${T.motion.fast}ms`,
          }}
        />
      </button>
      {open && (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: '12px 18px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            borderTop: `1px solid ${T.color.borderSoft}`,
          }}
        >
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href || '#'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 4px',
                  color: T.color.textLink,
                  textDecoration: 'none',
                  fontSize: T.type.body.size,
                  fontWeight: T.font.weight.semibold,
                }}
              >
                <span>{it.label}</span>
                <IconArrow width={14} height={14} stroke={T.color.textLink} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
