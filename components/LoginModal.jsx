import React from 'react';
import T from './tokens';
import Button from './Button';
import TextField from './TextField';
import Checkbox from './Checkbox';
import { IconBolt, IconClose } from './icons';

/**
 * LoginModal  —  canonical SCE Content/Log In Modal
 *
 * Authentication modal with email + password fields, Remember Me
 * checkbox, primary Sign-in CTA, and a Forgot password link.
 *
 * Note: sce.com production embeds the Okta SignIn Widget v7.26.0 instead
 * of a styled modal. This component is for SCE's own surfaces where
 * Okta is replaced with the design-system look.
 *
 * Source: SCE Design System 1.7 component `da7675f0…`.
 * Status: draft.
 */
export default function LoginModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(16,24,32,0.55)',
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
          maxWidth: 420,
          background: T.color.white,
          borderRadius: T.radius.md,
          boxShadow: T.shadow.lg,
          fontFamily: T.font.family,
          padding: 28,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: T.radius.xs,
                background: T.color.green,
                display: 'grid',
                placeItems: 'center',
                color: T.color.yellow,
              }}
            >
              <IconBolt width={18} height={18} strokeWidth={2.5} />
            </div>
            <div
              style={{
                fontSize: T.type.h3.size,
                fontWeight: T.type.h3.weight,
                color: T.color.text,
              }}
            >
              Sign in
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: T.color.textMuted,
            }}
          >
            <IconClose width={18} height={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
          <TextField label="Email" placeholder="you@example.com" />
          <TextField label="Password" placeholder="••••••••" type="password" />
          <Checkbox label="Remember me" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Button variant="primary" size="md" fullWidth onClick={onSubmit || onClose}>
            Sign in
          </Button>
          <a
            href="#"
            style={{
              color: T.color.textLink,
              textDecoration: 'none',
              fontSize: T.type.caption.size,
              fontWeight: T.font.weight.semibold,
              textAlign: 'center',
            }}
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
