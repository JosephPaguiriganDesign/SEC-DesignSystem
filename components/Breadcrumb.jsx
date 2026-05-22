import React, { useState } from 'react';
import T from './tokens';

/**
 * Breadcrumb (C21) — canonical SCE breadcrumb
 *
 * Per Figma 7PryBoxyBNDkR3uS7K5vMu node 346:1119:
 *   - All items render as blue links separated by `/` slashes.
 *   - States per item:
 *       Default → blue text, no underline
 *       Hover   → blue text, underlined
 *
 * `items` shape:
 *   [{ label, href? }] OR a plain string array (treated as labels).
 */
function BreadcrumbLink({ href, children }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href || '#'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: T.color.textLink,
        textDecoration: hover ? 'underline' : 'none',
        textUnderlineOffset: '3px',
        fontWeight: 400,
      }}
    >
      {children}
    </a>
  );
}

export default function Breadcrumb({ items = [] }) {
  const normalized = items.map((it) =>
    typeof it === 'string' ? { label: it } : it
  );
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontFamily: T.font.family,
        fontSize: 14,
        lineHeight: '24px',
      }}
    >
      {normalized.map((item, i) => {
        const isFirst = i === 0;
        return (
          <React.Fragment key={i}>
            {!isFirst && (
              <span style={{ margin: '0 10px', color: T.color.textLink }}>/</span>
            )}
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
