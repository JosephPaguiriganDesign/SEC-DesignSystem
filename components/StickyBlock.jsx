import React from 'react';
import T from './tokens';
import Button from './Button';
import { IconLeaf, IconArrow } from './icons';

/**
 * StickyBlock
 *
 * Cyan-to-blue gradient ribbon used by sce.com for promotional CTAs
 * (rates, rebates, savings programs). Mirrors `--Gradients-Sticky-Block`
 * from tokens.css.
 *
 * Status: draft.
 */
export default function StickyBlock({
  icon: Icon = IconLeaf,
  label = 'Save with time-of-use',
  cta = 'See plans',
  onCtaClick,
}) {
  return (
    <div
      style={{
        background: T.gradient.sticky,
        color: T.color.white,
        padding: '14px 18px',
        borderRadius: T.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
        fontFamily: T.font.family,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon width={22} height={22} />
        <div style={{ fontSize: T.type.bodyBold.size, fontWeight: T.font.weight.bold }}>
          {label}
        </div>
      </div>
      <Button variant="primary" size="sm" icon={IconArrow} onClick={onCtaClick}>
        {cta}
      </Button>
    </div>
  );
}
