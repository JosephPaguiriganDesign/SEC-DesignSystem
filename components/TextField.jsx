import React, { useState, useMemo } from 'react';
import T from './tokens';

/**
 * TextField
 *
 * Single-line text input with optional leading icon, helper text, and
 * error state. Mirrors the inline component in preview/storybook.html.
 *
 * Status: draft. Confirm against Figma TextField component before
 * promoting to `final` in COMPONENT-INDEX.md.
 */
export default function TextField({
  label,
  placeholder,
  value: initialValue = '',
  helper,
  error,
  type = 'text',
  icon: Icon,
  onChange,
  ...rest
}) {
  const [v, setV] = useState(initialValue);
  const [focus, setFocus] = useState(false);
  const id = useMemo(() => `tf-${Math.random().toString(36).slice(2, 8)}`, []);

  const handleChange = (e) => {
    setV(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: T.font.family }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontSize: T.type.caption.size,
            fontWeight: T.font.weight.semibold,
            color: T.color.text,
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: T.color.white,
          border: `1.5px solid ${
            error ? T.color.error : focus ? T.color.green : T.color.border
          }`,
          borderRadius: T.radius.sm,
          padding: '12px 14px',
          boxShadow: focus ? T.shadow.focus : 'none',
          transition: `border-color ${T.motion.fast}ms, box-shadow ${T.motion.fast}ms`,
        }}
      >
        {Icon && <Icon width={18} height={18} stroke={T.color.textSubtle} />}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={v}
          onChange={handleChange}
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
          {...rest}
        />
      </div>
      {(helper || error) && (
        <span
          style={{
            fontSize: T.type.caption.size,
            color: error ? T.color.error : T.color.textSubtle,
          }}
        >
          {error || helper}
        </span>
      )}
    </div>
  );
}
