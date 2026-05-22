import React from 'react';
import T from './tokens';

/**
 * Table  —  canonical SCE Table - Column Header pattern
 *
 * Two row types: a column header and a data row, with a single
 * reusable cell. Striped data rows for clarity.
 *
 * Source: SCE Design System 1.7 component `bdcb59e7…`.
 * Status: draft.
 */
export default function Table({ columns = [], rows = [] }) {
  return (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: T.radius.sm,
        border: `1px solid ${T.color.border}`,
        fontFamily: T.font.family,
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={i}
                style={{
                  background: T.color.heather,
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: T.type.overline.size,
                  fontWeight: 700,
                  color: T.color.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderBottom: `1px solid ${T.color.border}`,
                }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{ background: ri % 2 ? T.color.bgSecondary : T.color.white }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: '12px 16px',
                    fontSize: T.type.body.size,
                    color: T.color.text,
                    borderBottom: `1px solid ${T.color.borderSoft}`,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
