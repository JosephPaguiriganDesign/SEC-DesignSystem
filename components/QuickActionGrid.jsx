import React from 'react';
import T from './tokens';
import {
  IconTruck,
  IconOutage,
  IconDollar,
  IconHand,
  IconArrow,
} from './icons';

/**
 * QuickActionGrid
 *
 * The 4-up icon-card row sce.com places under its homepage hero:
 * Start service, Report outage, Pay bill, Payment assistance.
 *
 * Defaults match the live page; pass `items` to override the set.
 *
 * Status: draft.
 */
const DEFAULT_ITEMS = [
  { Icon: IconTruck,  label: 'Start service',      tone: '#00664f', onClick: undefined },
  { Icon: IconOutage, label: 'Report outage',      tone: '#bb0000', onClick: undefined },
  { Icon: IconDollar, label: 'Pay bill',           tone: '#00664f', onClick: undefined },
  { Icon: IconHand,   label: 'Payment assistance', tone: '#722257', onClick: undefined },
];

export default function QuickActionGrid({ items = DEFAULT_ITEMS, columns = 2 }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 12,
        fontFamily: T.font.family,
      }}
    >
      {items.map((it) => {
        const Icon = it.Icon;
        return (
          <button
            key={it.label}
            onClick={it.onClick}
            style={{
              background: T.color.white,
              border: `1px solid ${T.color.border}`,
              borderRadius: T.radius.md,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 10,
              cursor: 'pointer',
              boxShadow: T.shadow.sm,
              textAlign: 'left',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: T.radius.pill,
                background: it.tone,
                color: T.color.white,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Icon width={22} height={22} strokeWidth={2} />
            </div>
            <div
              style={{
                fontSize: T.type.bodyBold.size,
                fontWeight: T.font.weight.bold,
                color: T.color.text,
              }}
            >
              {it.label}
            </div>
            <div
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
              Get started <IconArrow width={12} height={12} stroke={T.color.textLink} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
