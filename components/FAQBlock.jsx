import React from 'react';
import T from './tokens';
import Accordion from './Accordion';

/**
 * FAQBlock  —  canonical SCE Syndicated FAQ Block
 *
 * Collapsible Q&A list inside a titled card. `items` matches the
 * Accordion shape: { title, body, defaultOpen? }.
 *
 * Source: SCE Design System 1.7 component `37033f9b…`.
 * Status: draft.
 */
export default function FAQBlock({ title = 'Frequently Asked Questions', items = [] }) {
  return (
    <div
      style={{
        fontFamily: T.font.family,
        background: T.color.white,
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.md,
        padding: 24,
        boxShadow: T.shadow.card,
      }}
    >
      <div
        style={{
          fontSize: T.type.h3.size,
          fontWeight: T.type.h3.weight,
          color: T.color.text,
          marginBottom: 12,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </div>
      <Accordion items={items} />
    </div>
  );
}
