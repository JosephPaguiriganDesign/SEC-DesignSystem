import React from 'react';
import T from './tokens';
import { IconArrow } from './icons';

/**
 * FeaturedCard
 *
 * Image-top + body card matching the sce.com `.card-img-top`
 * pattern (e.g. Wildfire Recovery Claims, CARE/FERA program).
 * Pass an `image` URL (relative path under assets/) to render
 * a real photo, or rely on the gradient fallback.
 *
 * Status: draft.
 */
export default function FeaturedCard({
  eyebrow = 'Wildfire safety',
  title = 'Wildfire Recovery Claims Process',
  body = 'Learn how to file a claim, what to expect, and how SCE supports affected communities.',
  image,
  bg = T.color.accentSeaglass,
  cta = 'Read more',
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        background: T.color.white,
        borderRadius: T.radius.md,
        border: `1px solid ${T.color.border}`,
        overflow: 'hidden',
        fontFamily: T.font.family,
        boxShadow: T.shadow.card,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          height: 140,
          background: image
            ? `url(${image}) center/cover no-repeat`
            : `linear-gradient(135deg, ${bg} 0%, ${T.color.accentPacific} 100%)`,
          position: 'relative',
        }}
      >
        {!image && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.18) 0%, transparent 60%)',
            }}
          />
        )}
      </div>

      <div style={{ padding: 18 }}>
        <div
          style={{
            fontSize: T.type.overline.size,
            fontWeight: 700,
            color: T.color.green,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 6,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: T.type.h4.size,
            fontWeight: T.type.h4.weight,
            color: T.color.text,
            marginBottom: 8,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: T.type.caption.size,
            color: T.color.textMuted,
            lineHeight: 1.55,
            marginBottom: 12,
          }}
        >
          {body}
        </div>
        <span
          style={{
            fontSize: T.type.overline.size,
            fontWeight: 700,
            color: T.color.textLink,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {cta} <IconArrow width={14} height={14} stroke={T.color.textLink} />
        </span>
      </div>
    </div>
  );
}
