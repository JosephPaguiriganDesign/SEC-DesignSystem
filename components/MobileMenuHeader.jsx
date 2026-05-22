import React from 'react';
import T from './tokens';
import { IconClose } from './icons';

/**
 * MobileMenuHeader  —  canonical SCE Navigation/Mobile Menu Header
 *
 * The slide-in nav top bar used on mobile when the burger menu opens.
 * Shows the section title and a close button.
 *
 * Source: SCE Design System 1.7 component `a8da20fc…`.
 * Status: draft.
 */
export default function MobileMenuHeader({ title = 'Menu', onClose }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: T.color.green,
        color: T.color.white,
        padding: '14px 18px',
        fontFamily: T.font.family,
      }}
    >
      <div
        style={{
          fontSize: T.type.h4.size,
          fontWeight: T.font.weight.bold,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </div>
      <button
        onClick={onClose}
        aria-label="Close menu"
        style={{
          background: 'rgba(255,255,255,0.12)',
          border: 'none',
          color: T.color.white,
          width: 36,
          height: 36,
          borderRadius: T.radius.pill,
          display: 'grid',
          placeItems: 'center',
          cursor: 'pointer',
        }}
      >
        <IconClose width={18} height={18} />
      </button>
    </div>
  );
}
