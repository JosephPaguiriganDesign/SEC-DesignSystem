import React, { useState } from 'react';
import T from './tokens';
import { IconClock } from './icons';

/**
 * DatePicker  —  native date input (extension)
 *
 * Wraps `<input type="date">` with SCE form chrome. Browser-native
 * date popover; not a custom calendar.
 *
 * Status: draft (extension).
 */
export default function DatePicker({ label, helper, value, onChange }) {
  const [v, setV] = useState(value || '');
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: T.color.white,
          padding: '12px 14px',
          borderRadius: T.radius.sm,
          border: `${T.border.md}px solid ${focus ? T.color.green : T.color.border}`,
          boxShadow: focus ? T.shadow.focus : 'none',
        }}
      >
        <IconClock width={18} height={18} stroke={T.color.textSubtle} />
        <input
          type="date"
          value={v}
          onChange={handle}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            fontSize: T.type.body.size,
            fontFamily: T.font.family,
            color: T.color.text,
            background: 'transparent',
          }}
        />
      </div>
      {helper && <span style={{ fontSize: T.type.caption.size, color: T.color.textSubtle }}>{helper}</span>}
    </div>
  );
}
