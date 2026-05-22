import React, { useState } from 'react';
import T from './tokens';

/**
 * Toggle  —  on/off switch
 *
 * Status: draft.
 */
export default function Toggle({ label, checked, onChange, disabled }) {
  const [on, setOn] = useState(!!checked);
  const flip = () => {
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
        onClick={flip}
        style={{
          width: 40, height: 22, borderRadius: T.radius.pill, position: 'relative',
          background: on ? T.color.green : T.color.lightGray,
          transition: `background ${T.motion.base}ms ${T.motion.easing}`,
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: on ? 20 : 2,
          width: 18, height: 18, borderRadius: T.radius.pill,
          background: T.color.white, boxShadow: T.shadow.sm,
          transition: `left ${T.motion.base}ms ${T.motion.easing}`,
        }} />
      </span>
      {label}
    </label>
  );
}
