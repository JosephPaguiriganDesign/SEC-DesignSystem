import React, { useState } from 'react';
import T from './tokens';

/**
 * Checkbox  —  controlled or uncontrolled
 *
 * Status: draft.
 */
export default function Checkbox({ label, checked, onChange, disabled }) {
  const [on, setOn] = useState(!!checked);
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    setOn(v);
    onChange && onChange(v);
  };
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: T.font.family, fontSize: T.type.body.size, color: T.color.text,
    }}>
      <span
        onClick={toggle}
        style={{
          width: 20, height: 20, borderRadius: T.radius.xs,
          border: `${T.border.md}px solid ${on ? T.color.green : T.color.border}`,
          background: on ? T.color.green : T.color.white,
          display: 'grid', placeItems: 'center', flexShrink: 0,
          transition: `background ${T.motion.fast}ms, border-color ${T.motion.fast}ms`,
        }}
      >
        {on && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5l2.5 2.5 5.5-6" stroke={T.color.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
