import React from 'react';
import T from './tokens';

/**
 * CopyBlock  —  canonical SCE Content/Copy Block
 *
 * Plain-text paragraph with width constraints. min 375, max 1120
 * matching the canonical Figma component description.
 *
 * Source: SCE Design System 1.7 component `a053e176…`.
 * Status: draft.
 */
export default function CopyBlock({ children, maxWidth = 1120, minWidth = 375 }) {
  return (
    <p
      style={{
        maxWidth,
        minWidth,
        fontFamily: T.font.family,
        fontSize: T.type.body.size,
        lineHeight: `${T.type.body.line}px`,
        color: T.color.textMuted,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}
