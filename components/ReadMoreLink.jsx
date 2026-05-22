import React from 'react';
import T from './tokens';
import { IconArrow } from './icons';

/**
 * ReadMoreLink  —  canonical SCE Read More Link
 *
 * Inline arrow link in all-caps. Used at the end of cards / sections
 * for "Read more" / "Learn more" / "View all" CTAs.
 *
 * Source: SCE Design System 1.7 component `a4dfd730…`.
 * Status: draft.
 */
export default function ReadMoreLink({ children = 'Read more', href = '#', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: T.color.textLink,
        textDecoration: 'none',
        fontFamily: T.font.family,
        fontSize: T.type.overline.size,
        fontWeight: T.font.weight.bold,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      {children}
      <IconArrow width={14} height={14} stroke={T.color.textLink} />
    </a>
  );
}
