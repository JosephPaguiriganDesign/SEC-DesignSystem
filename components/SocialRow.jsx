import React from 'react';
import T from './tokens';
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconLinkedIn,
  IconYouTube,
} from './icons';

/**
 * SocialRow
 *
 * The footer social-link strip on sce.com: Facebook, Instagram,
 * Twitter/X, LinkedIn, YouTube. Pass `links` to override the order
 * or set hrefs.
 *
 * Status: draft.
 */
const DEFAULT_LINKS = [
  { label: 'Facebook',  Icon: IconFacebook  },
  { label: 'Instagram', Icon: IconInstagram },
  { label: 'X',         Icon: IconTwitter   },
  { label: 'LinkedIn',  Icon: IconLinkedIn  },
  { label: 'YouTube',   Icon: IconYouTube   },
];

export default function SocialRow({ links = DEFAULT_LINKS, dark = true }) {
  const bg = dark ? 'rgba(255,255,255,0.08)' : T.color.heather;
  const fg = dark ? T.color.white : T.color.text;
  return (
    <div
      style={{
        display: 'flex',
        gap: 14,
        paddingTop: 18,
        marginTop: 12,
        borderTop: dark
          ? '1px solid rgba(255,255,255,0.08)'
          : `1px solid ${T.color.borderSoft}`,
      }}
    >
      {links.map(({ label, Icon, href, onClick }) => (
        <a
          key={label}
          href={href || '#'}
          onClick={onClick}
          aria-label={label}
          style={{
            width: 36,
            height: 36,
            borderRadius: T.radius.pill,
            background: bg,
            color: fg,
            display: 'grid',
            placeItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
