import React from 'react';
import T from './tokens';
import Status from './Status';

/**
 * QuickLinksMenu  —  canonical SCE Navigation/Quick Links Menu
 *
 * Vertically stacked list of actionable nav items, each with an
 * optional Status pill on the right reflecting real-time conditions.
 *
 * `items` shape: [{ label, href?, status?: { tone, label } }]
 *
 * Source: SCE Design System 1.7 component `0b9e2ad8…`.
 * Status: draft.
 */
export default function QuickLinksMenu({ title = 'Quick links', items = [] }) {
  return (
    <div
      style={{
        background: T.color.white,
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.md,
        padding: 18,
        fontFamily: T.font.family,
        boxShadow: T.shadow.card,
      }}
    >
      <div
        style={{
          fontSize: T.type.overline.size,
          fontWeight: 700,
          color: T.color.green,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href || '#'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                padding: '10px 8px',
                borderRadius: T.radius.xs,
                color: T.color.textLink,
                textDecoration: 'none',
                fontSize: T.type.body.size,
                fontWeight: T.font.weight.semibold,
              }}
            >
              <span>{it.label}</span>
              {it.status && <Status tone={it.status.tone}>{it.status.label}</Status>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
