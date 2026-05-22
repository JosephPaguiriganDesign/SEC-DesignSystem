import React from 'react';
import T from './tokens';
import Button from './Button';
import { IconArrow } from './icons';

/**
 * HomepageHeroContent  —  canonical SCE Content/Homepage Hero Content
 *
 * Most prominent visual + messaging block at the top of the homepage.
 * Larger than the generic HeroBanner pattern.
 *
 * Source: SCE Design System 1.7 component `7ecee9ef…`.
 * Status: draft.
 */
export default function HomepageHeroContent({
  eyebrow = 'Powering Southern California',
  title = 'Energy you can count on',
  body = 'A safer, smarter, cleaner grid for the communities we serve.',
  ctaLabel = 'Explore programs',
  onCtaClick,
  height = 420,
  background,
}) {
  const fallback =
    'radial-gradient(110% 80% at 65% 35%, #6dc9c9 0%, #00a9e0 35%, #0d305b 100%)';

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: T.radius.md,
        height,
        fontFamily: T.font.family,
        background: background || fallback,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: T.gradient.hero }} />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: T.color.white,
          padding: '48px 36px',
          maxWidth: 540,
        }}
      >
        <div
          style={{
            fontSize: T.type.overline.size,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: T.color.yellow,
            marginBottom: 12,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: T.font.weight.extrabold,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 14,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: T.type.body.size,
            lineHeight: 1.55,
            marginBottom: 22,
            color: '#e8eef5',
          }}
        >
          {body}
        </div>
        <Button variant="primary" size="md" icon={IconArrow} onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
