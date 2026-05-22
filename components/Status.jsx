import React from 'react';
import T from './tokens';

/**
 * Status  —  canonical SCE Status label pill
 *
 * Tones: success | error | warn | inform | neutral. Use for state
 * indicators (active/off/enrolled/pending/etc.).
 *
 * Source: SCE Design System 1.7 component `11d9a96f…`.
 * Status: draft.
 */
export default function Status({ tone = 'inform', children }) {
  const tones = {
    success: { bg: T.color.successSoft, fg: T.color.success,   dot: T.color.success  },
    error:   { bg: T.color.errorSoft,   fg: T.color.error,     dot: T.color.error    },
    warn:    { bg: T.color.warnSoft,    fg: T.color.warn,      dot: T.color.warn     },
    inform:  { bg: T.color.infoSoft,    fg: T.color.info,      dot: T.color.info     },
    neutral: { bg: T.color.heather,     fg: T.color.textMuted, dot: T.color.coolGray },
  };
  const t = tones[tone] || tones.inform;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: t.bg,
        color: t.fg,
        padding: '3px 10px',
        borderRadius: T.radius.pill,
        fontFamily: T.font.family,
        fontSize: T.type.overline.size,
        fontWeight: T.font.weight.bold,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: T.radius.pill, background: t.dot }} />
      {children}
    </span>
  );
}
