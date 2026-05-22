import React from 'react';
import T from './tokens';
import { IconChevron } from './icons';

/**
 * CTAArrow  —  canonical SCE CTA Arrow
 *
 * Small open/closed indicator used on navigational cards. Rotates
 * 90deg when `open`. Color defaults to the SCE link blue.
 *
 * Source: SCE Design System 1.7 component `3e4e7239…`.
 * Status: draft.
 */
export default function CTAArrow({ open = false, color = T.color.textLink, size = 24 }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: T.radius.pill,
        background: 'rgba(26, 118, 197, 0.08)',
        color,
        transition: `transform ${T.motion.fast}ms`,
        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      }}
    >
      <IconChevron width={size * 0.6} height={size * 0.6} stroke={color} />
    </span>
  );
}
