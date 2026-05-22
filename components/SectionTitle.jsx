import React from 'react';
import T from './tokens';

/**
 * SectionTitle  —  canonical SCE Content/Section Title
 *
 * Used as a label before a content section. Optional eyebrow,
 * required title, optional right-aligned action slot.
 *
 * Source: SCE Design System 1.7 component `7ea475eb…`.
 * Status: draft.
 */
export default function SectionTitle({ eyebrow, title, action }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      fontFamily: T.font.family,
      paddingBottom: 12,
      borderBottom: `1px solid ${T.color.lightGray}`,
    }}>
      <div>
        {eyebrow && (
          <div style={{
            fontSize: T.type.overline.size,
            fontWeight: 700,
            color: T.color.green,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 4,
          }}>
            {eyebrow}
          </div>
        )}
        <div style={{
          fontSize: T.type.h3.size,
          fontWeight: T.type.h3.weight,
          color: T.color.text,
          letterSpacing: '-0.01em',
        }}>{title}</div>
      </div>
      {action}
    </div>
  );
}
