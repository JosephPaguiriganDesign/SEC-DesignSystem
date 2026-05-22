import React from 'react';
import T from './tokens';

/**
 * StepIndicator  —  canonical SCE Step Indicators (Desktop)
 *
 * Multi-step progress with Done / Active / Pending states.
 *
 * Source: SCE Design System 1.7 component `3a2829cb…`.
 * Status: draft.
 */
export default function StepIndicator({ steps = [], current = 0 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, fontFamily: T.font.family }}>
      {steps.map((label, i) => {
        const status = i < current ? 'done' : i === current ? 'active' : 'pending';
        const dotBg = status === 'done'
          ? T.color.green
          : status === 'active'
            ? T.color.yellow
            : T.color.lightGray;
        const dotFg = status === 'active' ? T.color.edisonBlack : T.color.white;
        const labelColor = status === 'pending' ? T.color.textSubtle : T.color.text;
        const lineBg = i < current ? T.color.green : T.color.lightGray;

        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: T.radius.pill,
                  background: dotBg,
                  color: dotFg,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: T.type.caption.size,
                  fontWeight: T.font.weight.bold,
                  border: status === 'active' ? `2px solid ${T.color.green}` : 'none',
                }}
              >
                {status === 'done' ? (
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5l2.5 2.5 5.5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <div style={{
                fontSize: T.type.overline.size,
                fontWeight: 700,
                color: labelColor,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}>
                {label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 2, background: lineBg, margin: '0 8px', alignSelf: 'flex-start', marginTop: 13 }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
