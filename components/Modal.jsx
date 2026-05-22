import React from 'react';
import T from './tokens';
import { IconClose } from './icons';

/**
 * Modal  —  lightweight dialog
 *
 * Click on the scrim closes; clicking the panel does not. Pass
 * `footer` for action buttons, `title` for the heading.
 *
 * Status: draft.
 */
export default function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(16, 24, 32, 0.55)',
        display: 'grid',
        placeItems: 'center',
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{
          width: '100%',
          maxWidth: 480,
          background: T.color.white,
          borderRadius: T.radius.md,
          boxShadow: T.shadow.lg,
          fontFamily: T.font.family,
          padding: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontSize: T.type.h3.size,
              fontWeight: T.type.h3.weight,
              color: T.color.text,
            }}
          >
            {title}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 4,
              color: T.color.textMuted,
            }}
          >
            <IconClose width={18} height={18} />
          </button>
        </div>

        <div
          style={{
            fontSize: T.type.body.size,
            color: T.color.textMuted,
            lineHeight: T.type.body.line + 'px',
            marginBottom: footer ? 18 : 0,
          }}
        >
          {children}
        </div>

        {footer && (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
