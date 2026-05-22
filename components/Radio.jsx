import React, { useState } from 'react';
import T from './tokens';

/**
 * Radio  —  radio group (extension)
 *
 * SCE 1.7 doesn't expose a canonical Radio in the library; this is
 * a design-system extension styled to match the Checkbox / Toggle
 * idiom (Edison-green check, soft border, accessible label).
 *
 * Status: draft (extension).
 */
export default function Radio({ name, options = [], value: v0, onChange, disabled }) {
  const [v, setV] = useState(v0 || (options[0] && options[0].value));
  return (
    <div
      role="radiogroup"
      aria-disabled={disabled}
      style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: T.font.family }}
    >
      {options.map((o) => {
        const checked = v === o.value;
        return (
          <label
            key={o.value}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.5 : 1,
            }}
          >
            <span
              onClick={() => {
                if (!disabled) {
                  setV(o.value);
                  onChange && onChange(o.value);
                }
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: T.radius.pill,
                border: `${T.border.md}px solid ${checked ? T.color.green : T.color.border}`,
                background: T.color.white,
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
                transition: `border-color ${T.motion.fast}ms`,
              }}
            >
              {checked && (
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: T.radius.pill,
                    background: T.color.green,
                  }}
                />
              )}
            </span>
            <span style={{ fontSize: T.type.body.size, color: T.color.text }}>{o.label}</span>
          </label>
        );
      })}
    </div>
  );
}
