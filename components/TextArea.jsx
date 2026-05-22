import React, { useState } from 'react';
import T from './tokens';

/**
 * TextArea  —  multi-line input (extension)
 *
 * Extension to the canonical SCE form set. Same chrome as TextField
 * but with vertical resize, configurable rows, and an optional
 * character counter when `maxLength` is set.
 *
 * Status: draft (extension).
 */
export default function TextArea({ label, placeholder, helper, rows = 4, maxLength, onChange }) {
  const [v, setV] = useState('');
  const [focus, setFocus] = useState(false);

  const handle = (e) => {
    setV(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: T.font.family }}>
      {label && (
        <label style={{ fontSize: T.type.caption.size, fontWeight: T.font.weight.semibold, color: T.color.text }}>
          {label}
        </label>
      )}
      <textarea
        value={v}
        onChange={handle}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        style={{
          fontFamily: T.font.family,
          fontSize: T.type.body.size,
          color: T.color.text,
          padding: '12px 14px',
          borderRadius: T.radius.sm,
          resize: 'vertical',
          background: T.color.white,
          border: `${T.border.md}px solid ${focus ? T.color.green : T.color.border}`,
          boxShadow: focus ? T.shadow.focus : 'none',
          outline: 'none',
          transition: `border-color ${T.motion.fast}ms, box-shadow ${T.motion.fast}ms`,
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: T.type.caption.size,
          color: T.color.textSubtle,
        }}
      >
        <span>{helper || ''}</span>
        {maxLength && <span>{v.length} / {maxLength}</span>}
      </div>
    </div>
  );
}
