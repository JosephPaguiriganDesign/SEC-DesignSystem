import React from 'react';
import T from './tokens';
import Button from './Button';
import { IconArrow } from './icons';

/**
 * HeroBanner
 *
 * Full-bleed hero with a translucent navy gradient overlay matching
 * sce.com homepage. The actual hero on sce.com is a `<picture>`
 * element with three breakpoints (large >= 1440, default >= 1024,
 * mobile < 1024). When wiring into a host app, swap `bg` for the
 * `<img>`/picture markup and keep the overlay div as is.
 *
 * Status: draft.
 */
export default function HeroBanner({
  eyebrow = 'Powering communities',
  title = 'Reliable energy. Cleaner future.',
  body = 'See how SCE is investing in grid resilience, EV infrastructure, and clean power.',
  cta = 'Learn more',
  onCtaClick,
  height = 360,
  background,
}) {
  const fallback =
    'radial-gradient(120% 80% at 75% 30%, #6dc9c9 0%, #00a9e0 40%, #0d305b 100%)';

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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: T.gradient.hero,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: T.color.white,
          padding: '32px 28px',
          maxWidth: 460,
        }}
      >
        <div
          style={{
            fontSize: T.type.overline.size,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: T.color.yellow,
            marginBottom: 8,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: T.font.weight.extrabold,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: 12,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: T.type.body.size,
            lineHeight: 1.55,
            marginBottom: 18,
            color: '#e8eef5',
          }}
        >
          {body}
        </div>
        <Button variant="primary" size="md" icon={IconArrow} onClick={onCtaClick}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
