import React, { useState } from 'react';
import T from './tokens';

/**
 * Tabs  —  underlined tab strip + optional panels
 *
 * Pass `tabs` (array of strings) and optionally `panels` (array of nodes
 * matching tabs by index).
 *
 * Status: draft.
 */
export default function Tabs({ tabs = [], initial = 0, panels, onChange }) {
  const [i, setI] = useState(initial);
  const select = (idx) => {
    setI(idx);
    onChange && onChange(idx);
  };
  return (
    <div style={{ fontFamily: T.font.family }}>
      <div role="tablist" style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${T.color.border}` }}>
        {tabs.map((t, idx) => (
          <button
            key={t}
            role="tab"
            aria-selected={idx === i}
            onClick={() => select(idx)}
            style={{
              padding: '10px 16px',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              fontFamily: T.font.family,
              fontSize: T.type.bodyBold.size,
              fontWeight: idx === i ? T.font.weight.bold : T.font.weight.semibold,
              color: idx === i ? T.color.green : T.color.textMuted,
              borderBottom: `3px solid ${idx === i ? T.color.green : 'transparent'}`,
              marginBottom: -1,
              transition: `color ${T.motion.fast}ms, border-color ${T.motion.fast}ms`,
            }}
          >
            {t}
          </button>
        ))}
      </div>
      {panels && (
        <div
          role="tabpanel"
          style={{
            padding: '16px 4px',
            fontSize: T.type.body.size,
            color: T.color.textMuted,
            lineHeight: T.type.body.line + 'px',
          }}
        >
          {panels[i]}
        </div>
      )}
    </div>
  );
}
