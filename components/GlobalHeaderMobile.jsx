import React from 'react';
import T from './tokens';
import EdisonBrand from './EdisonBrand';
import AvatarCircle from './AvatarCircle';
import { IconClose, IconMenu } from './icons';

/**
 * GlobalHeaderMobile  —  canonical SCE Navigation/Global Header (Mobile)
 *
 * Three states (matching the Figma symbol set):
 *   default              — burger menu (left), white wordmark (center), avatar (right)
 *   expandedSelfService  — burger (left), yellow brand square (center), close X (right)
 *   expandedContent      — close X (left), yellow brand square (center), avatar w/ badge (right)
 *
 * Source: SCE Design System 1.7 Navigation/Global Header/Mobile
 * (`482:937`, library componentKey `ab80fd036a30ee81a4a23e069712c03fa1b61afb`).
 *
 * Status: review.
 */
export default function GlobalHeaderMobile({
  state = 'default',
  onMenuClick,
  onCloseClick,
  /* Set transparent={true} when the header sits on top of a hero photo so
   * the photo shows through the navy gradient (canonical sce.com behavior). */
  transparent = false,
}) {
  const isExpanded = state !== 'default';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '8px 12px',
        height: 56,
        background: transparent ? 'transparent' : '#0d305b',
        backgroundImage: T.gradient.hero,
        fontFamily: T.font.family,
      }}
    >
      {state === 'expandedContent' ? (
        <button
          onClick={onCloseClick}
          aria-label="Close"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: 40,
            height: 40,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <IconClose width={20} height={20} stroke={T.color.white} strokeWidth={2.25} />
        </button>
      ) : (
        <button
          onClick={onMenuClick}
          aria-label="Menu"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: 40,
            height: 40,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <IconMenu width={20} height={20} stroke={T.color.white} strokeWidth={2.25} />
        </button>
      )}

      <EdisonBrand tone={isExpanded ? 'yellow' : 'navy'} size={36} />

      {state === 'expandedSelfService' ? (
        <button
          onClick={onCloseClick}
          aria-label="Close"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: 40,
            height: 40,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <IconClose width={20} height={20} stroke={T.color.white} strokeWidth={2.25} />
        </button>
      ) : (
        <AvatarCircle tone="light" count={state === 'expandedContent' ? 2 : 0} size={36} />
      )}
    </div>
  );
}
