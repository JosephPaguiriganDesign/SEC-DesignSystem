import React from 'react';
import T from './tokens';

/**
 * Divider  —  canonical SCE C03 Divider
 *
 * Variants: solid | dashed
 * Orientation: horizontal | vertical
 * Optional `label` renders the divider with a centered text label.
 *
 * Source: SCE Design System 1.7 component `6ca277bf…`.
 * Status: draft.
 */
export default function Divider({ variant = 'solid', orientation = 'horizontal', label }) {
  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: T.font.family }}>
        <div style={{ flex: 1, borderTop: `1px ${variant} ${T.color.lightGray}` }} />
        <span style={{
          fontSize: T.type.overline.size,
          fontWeight: 700,
          color: T.color.textMuted,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>{label}</span>
        <div style={{ flex: 1, borderTop: `1px ${variant} ${T.color.lightGray}` }} />
      </div>
    );
  }
  if (orientation === 'vertical') {
    return <div style={{ width: 1, alignSelf: 'stretch', borderLeft: `1px ${variant} ${T.color.lightGray}` }} />;
  }
  return <div style={{ height: 1, borderTop: `1px ${variant} ${T.color.lightGray}` }} />;
}
