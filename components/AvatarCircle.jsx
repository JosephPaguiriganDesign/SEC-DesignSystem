import React from 'react';
import T from './tokens';
import { IconUser } from './icons';

/**
 * AvatarCircle  —  canonical SCE Global Header user avatar
 *
 * Two tones (light = white circle on dark headers, dark = black
 * circle on light headers). Optional notification badge with count.
 *
 * Source: composes Avatar (`478:1362`) + Notification Status
 * (`253:1482`) from the Global Header (C04, C14) page.
 *
 * Status: draft.
 */
export default function AvatarCircle({ tone = 'light', count = 0, size = 40 }) {
  const isDark = tone === 'dark';
  const bg = isDark ? T.color.edisonBlack : T.color.white;
  const fg = isDark ? T.color.white : T.color.edisonBlack;

  return (
    <span
      style={{ position: 'relative', display: 'inline-block', width: size, height: size }}
    >
      <span
        style={{
          width: size,
          height: size,
          borderRadius: T.radius.pill,
          background: bg,
          color: fg,
          border: isDark ? 'none' : `1px solid ${T.color.border}`,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <IconUser width={size * 0.5} height={size * 0.5} stroke={fg} />
      </span>
      {count > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -2,
            right: -2,
            background: T.color.error,
            color: T.color.white,
            fontSize: 10,
            fontWeight: T.font.weight.bold,
            width: 18,
            height: 18,
            borderRadius: T.radius.pill,
            display: 'grid',
            placeItems: 'center',
            border: `2px solid ${T.color.white}`,
            fontFamily: T.font.family,
          }}
        >
          {count}
        </span>
      )}
    </span>
  );
}
