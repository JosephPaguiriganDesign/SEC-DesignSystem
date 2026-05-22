import React from 'react';
import T from './tokens';
import { IconAlert, IconCheck } from './icons';

/**
 * Alert
 *
 * Inline status banner. Tones: info | success | warning | danger.
 *
 * Status: draft.
 */
export default function Alert({ tone = 'info', title, children }) {
  const tones = {
    info:    { bg: T.color.infoSoft,    fg: T.color.text, border: T.color.info,    Icon: IconAlert },
    success: { bg: T.color.successSoft, fg: '#0d4a1f',    border: T.color.success, Icon: IconCheck },
    warning: { bg: T.color.warnSoft,    fg: '#7a4a0a',    border: T.color.warn,    Icon: IconAlert },
    danger:  { bg: T.color.errorSoft,   fg: '#7d0a1d',    border: T.color.error,   Icon: IconAlert },
  };
  const t = tones[tone];
  const Icon = t.Icon;

  return (
    <div
      role="status"
      style={{
        display: 'flex',
        gap: 12,
        background: t.bg,
        color: t.fg,
        borderLeft: `4px solid ${t.border}`,
        borderRadius: T.radius.md,
        padding: '14px 16px',
        fontFamily: T.font.family,
      }}
    >
      <Icon width={20} height={20} stroke={t.border} />
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontSize: 14, fontWeight: T.font.weight.bold, marginBottom: 2 }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: 13, lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}
