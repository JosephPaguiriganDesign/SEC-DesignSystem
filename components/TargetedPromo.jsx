import React from 'react';
import T from './tokens';
import Button from './Button';
import { IconArrow } from './icons';

/**
 * TargetedPromo  —  canonical SCE Content/Targeted Promo
 *
 * Attention-grabbing promo block with eyebrow, title, body, and CTA.
 * Background uses a gradient from `accent` to navy-deep.
 *
 * Source: SCE Design System 1.7 component `01cfe5a0…`.
 * Status: draft.
 */
export default function TargetedPromo({
  eyebrow = 'Featured',
  title,
  body,
  ctaLabel = 'Get started',
  onCtaClick,
  accent = T.color.accentPlum,
}) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${accent} 0%, #1d3461 100%)`,
        color: T.color.white,
        borderRadius: T.radius.md,
        padding: 28,
        fontFamily: T.font.family,
      }}
    >
      <div
        style={{
          fontSize: T.type.overline.size,
          fontWeight: 700,
          color: T.color.yellow,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          fontSize: T.type.h2.size,
          fontWeight: T.type.h2.weight,
          marginBottom: 8,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: T.type.body.size,
          lineHeight: `${T.type.body.line}px`,
          marginBottom: 18,
          color: '#e8eef5',
        }}
      >
        {body}
      </div>
      <Button variant="primary" size="md" icon={IconArrow} onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}
