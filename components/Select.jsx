import React, { useState, useEffect, useRef } from 'react';
import T from './tokens';
import { IconChevron } from './icons';

/**
 * Select  —  basic dropdown
 *
 * Status: draft.
 */
export default function Select({
  label,
  options = [],
  helper,
  value: initial,
  onChange,
  placeholder = 'Choose one',
}) {
  const [v, setV] = useState(initial || '');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const current = options.find((o) => o.value === v);

  const pick = (val) => {
    setV(val);
    setOpen(false);
    onChange && onChange(val);
  };

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: T.font.family, position: 'relative' }}>
      {label && (
        <label style={{ fontSize: T.type.caption.size, fontWeight: T.font.weight.semibold, color: T.color.text }}>
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
          background: T.color.white,
          border: `${T.border.md}px solid ${open ? T.color.green : T.color.border}`,
          borderRadius: T.radius.sm,
          padding: '12px 14px',
          fontFamily: T.font.family, fontSize: T.type.body.size,
          color: current ? T.color.text : T.color.textSubtle,
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span>{current ? current.label : placeholder}</span>
        <IconChevron width={16} height={16} stroke={T.color.text} style={{ transform: 'rotate(90deg)', opacity: 0.6 }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 10,
          background: T.color.white, border: `1px solid ${T.color.border}`,
          borderRadius: T.radius.sm, boxShadow: T.shadow.md,
          padding: 4, maxHeight: 220, overflowY: 'auto',
        }}>
          {options.map((o) => (
            <div
              key={o.value}
              onClick={() => pick(o.value)}
              style={{
                padding: '10px 12px', borderRadius: T.radius.xs, cursor: 'pointer',
                fontSize: T.type.body.size, color: T.color.text,
                background: o.value === v ? T.color.heather : 'transparent',
              }}
            >{o.label}</div>
          ))}
        </div>
      )}
      {helper && (
        <span style={{ fontSize: T.type.caption.size, color: T.color.textSubtle }}>{helper}</span>
      )}
    </div>
  );
}
