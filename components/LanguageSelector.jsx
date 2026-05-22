import React, { useState } from 'react';
import T from './tokens';

/**
 * LanguageSelector  —  canonical SCE Content/Language Selector
 *
 * Pill-style toggle group. Defaults to English / Español.
 *
 * Source: SCE Design System 1.7 component `9c3ab801…`.
 * Status: draft.
 */
const DEFAULT_LANGS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
];

export default function LanguageSelector({
  languages = DEFAULT_LANGS,
  current = 'en',
  onChange,
}) {
  const [v, setV] = useState(current);
  const select = (val) => {
    setV(val);
    onChange && onChange(val);
  };

  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: 'inline-flex',
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.pill,
        padding: 2,
        fontFamily: T.font.family,
        background: T.color.white,
      }}
    >
      {languages.map((l) => {
        const active = v === l.value;
        return (
          <button
            key={l.value}
            onClick={() => select(l.value)}
            aria-pressed={active}
            style={{
              padding: '6px 14px',
              borderRadius: T.radius.pill,
              border: 'none',
              background: active ? T.color.green : 'transparent',
              color: active ? T.color.white : T.color.textMuted,
              fontFamily: T.font.family,
              fontSize: T.type.caption.size,
              fontWeight: T.font.weight.bold,
              cursor: 'pointer',
              transition: `background ${T.motion.fast}ms, color ${T.motion.fast}ms`,
            }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
