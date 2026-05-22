import React, { useState } from 'react';
import T from './tokens';
import CTAArrow from './CTAArrow';
import { IconBolt } from './icons';

/**
 * QuickLinksHeader  —  canonical SCE Quick Links/Header
 *
 * Collapsible header used inside footers, sidebars, or support areas
 * to organize and reveal groups of related navigation links. Leading
 * icon, bold title, trailing rotating chevron via CTAArrow.
 *
 * Source: SCE Design System 1.7 component `1a236286…`.
 * Status: draft.
 */
export default function QuickLinksHeader({
  title,
  Icon = IconBolt,
  open: controlled,
  onToggle,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlled !== undefined ? controlled : internalOpen;

  const toggle = () => {
    if (onToggle) onToggle(!open);
    if (controlled === undefined) setInternalOpen(!open);
  };

  return (
    <button
      onClick={toggle}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 18px',
        background: T.color.bgSecondary,
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.sm,
        cursor: 'pointer',
        fontFamily: T.font.family,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon width={20} height={20} stroke={T.color.green} />
        <span style={{
          fontSize: T.type.bodyBold.size,
          fontWeight: T.font.weight.bold,
          color: T.color.text,
        }}>
          {title}
        </span>
      </div>
      <CTAArrow open={open} />
    </button>
  );
}
