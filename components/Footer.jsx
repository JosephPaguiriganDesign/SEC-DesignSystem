import React from 'react';
import T from './tokens';
import { IconBolt } from './icons';
import SocialRow from './SocialRow';

/**
 * Footer  —  compact site footer
 *
 * Brand mark + two-column link list + social row, on the
 * Edison-Black surface. Mirrors the structure of sce.com's
 * footer (without the full Drupal nav tree).
 *
 * Status: draft.
 */
export default function Footer({
  columns = [
    { label: 'Account', items: ['Sign in', 'Pay bill', 'Outage map', 'Service request'] },
    { label: 'Help',    items: ['Contact', 'Forms', 'Accessibility'] },
  ],
  copyright = '© Southern California Edison',
}) {
  return (
    <div
      style={{
        background: T.color.edisonBlack,
        color: T.color.textWhite,
        padding: 24,
        fontFamily: T.font.family,
        borderRadius: T.radius.md,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: T.radius.xs,
            background: T.color.yellow,
            display: 'grid',
            placeItems: 'center',
            color: T.color.green,
          }}
        >
          <IconBolt width={18} height={18} strokeWidth={2.5} />
        </div>
        <div style={{ fontWeight: T.font.weight.extrabold, fontSize: T.type.bodyBold.size }}>
          SCE
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {columns.map((c) => (
          <div key={c.label}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.color.yellow,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 8,
              }}
            >
              {c.label}
            </div>
            {c.items.map((x) => (
              <div key={x} style={{ fontSize: 12, color: T.color.lightGray, padding: '4px 0' }}>
                {x}
              </div>
            ))}
          </div>
        ))}
      </div>

      <SocialRow dark />

      <div
        style={{
          marginTop: 18,
          paddingTop: 14,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          fontSize: 11,
          color: T.color.coolGray,
        }}
      >
        {copyright}
      </div>
    </div>
  );
}
