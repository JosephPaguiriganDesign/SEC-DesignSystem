import React, { useState, useEffect, useRef } from 'react';
import T from './tokens';
import { IconChevron } from './icons';

/**
 * Dropdown  —  canonical SCE Dropdown
 *
 * Form-element dropdown with consistent states, scalable widths, and
 * optional leading icon. Matches `45ec7fcd11a9f65bc076b40abe852921293e532f`.
 *
 * Note: a separate `Select` component was shipped earlier as a generic
 * combobox. `Dropdown` is the canonical one. Prefer Dropdown.
 *
 * Status: review.
 */
export default function Dropdown({
  label,
  placeholder = 'Select',
  options = [],
  value: v0,
  helper,
  leadingIcon: Icon,
  onChange,
}) {
  const [v, setV] = useState(v0 || '');
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
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        fontFamily: T.font.family,
        position: 'relative',
      }}
    >
      {label && (
        <label style={{ fontSize: T.type.caption.size, fontWeight: T.font.weight.semibold, color: T.color.text }}>
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          background: T.color.white,
          padding: '10px 14px',
          border: `${T.border.md}px solid ${open ? T.color.green : T.color.border}`,
          borderRadius: T.radius.sm,
          cursor: 'pointer',
          fontFamily: T.font.family,
          fontSize: T.type.body.size,
          textAlign: 'left',
          color: current ? T.color.text : T.color.textSubtle,
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {Icon && <Icon width={18} height={18} stroke={T.color.textSubtle} />}
          {current ? current.label : placeholder}
        </span>
        <IconChevron
          width={14}
          height={14}
          stroke={T.color.text}
          style={{ transform: open ? 'rotate(-90deg)' : 'rotate(90deg)', transition: `transform ${T.motion.fast}ms` }}
        />
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 10,
            background: T.color.white,
            border: `1px solid ${T.color.border}`,
            borderRadius: T.radius.sm,
            boxShadow: T.shadow.md,
            padding: 4,
            maxHeight: 240,
            overflowY: 'auto',
          }}
        >
          {options.map((o) => (
            <div
              key={o.value}
              onClick={() => pick(o.value)}
              style={{
                padding: '10px 12px',
                borderRadius: T.radius.xs,
                cursor: 'pointer',
                fontSize: T.type.body.size,
                color: T.color.text,
                background: o.value === v ? T.color.heather : 'transparent',
              }}
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
      {helper && <span style={{ fontSize: T.type.caption.size, color: T.color.textSubtle }}>{helper}</span>}
    </div>
  );
}
