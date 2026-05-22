import React, { useState } from 'react';
import T from './tokens';

/**
 * Pagination  —  canonical SCE Pagination
 *
 * Range readout + page-jump controls + items-per-page select.
 * Default per-page options: 10 / 25 / 50 / 100.
 *
 * Source: SCE Design System 1.7 component `a38bebbd…`.
 * Status: draft.
 */
export default function Pagination({
  total = 0,
  page = 1,
  perPage = 10,
  perPageOptions = [10, 25, 50, 100],
  onChange,
}) {
  const [p, setP] = useState(page);
  const [rpp, setRpp] = useState(perPage);

  const start = total === 0 ? 0 : (p - 1) * rpp + 1;
  const end = Math.min(total, p * rpp);
  const totalPages = Math.max(1, Math.ceil(total / rpp));

  const setPage = (next) => {
    setP(next);
    onChange && onChange({ page: next, perPage: rpp });
  };
  const setRppAndReset = (n) => {
    setRpp(n);
    setP(1);
    onChange && onChange({ page: 1, perPage: n });
  };

  const navBtn = (label, target, disabled) => (
    <button
      onClick={() => !disabled && setPage(target)}
      disabled={disabled}
      style={{
        width: 32,
        height: 32,
        borderRadius: T.radius.xs,
        border: `1px solid ${T.color.border}`,
        background: T.color.white,
        color: disabled ? T.color.textDisabled : T.color.text,
        fontFamily: T.font.family,
        fontSize: T.type.caption.size,
        fontWeight: T.font.weight.bold,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        fontFamily: T.font.family,
        fontSize: T.type.caption.size,
        color: T.color.textMuted,
      }}
    >
      <div>{start}–{end} of {total}</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {navBtn('‹', p - 1, p <= 1)}
        <span style={{ padding: '0 8px', color: T.color.text, fontWeight: T.font.weight.bold }}>
          Page {p} of {totalPages}
        </span>
        {navBtn('›', p + 1, p >= totalPages)}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span>Show</span>
        <select
          value={rpp}
          onChange={(e) => setRppAndReset(+e.target.value)}
          style={{
            padding: '4px 8px',
            borderRadius: T.radius.xs,
            border: `1px solid ${T.color.border}`,
            background: T.color.white,
            fontFamily: T.font.family,
            fontSize: T.type.caption.size,
          }}
        >
          {perPageOptions.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
