import React from 'react';
import T from './tokens';
import { IconBolt, IconSearch, IconUser, IconMenu } from './icons';

/**
 * Header  —  compact site/top-bar pattern
 *
 * Brand mark on the left, action icons on the right.
 *
 * Status: draft.
 */
function iconButtonStyle() {
  return {
    width: 36,
    height: 36,
    borderRadius: T.radius.pill,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
  };
}

export default function Header({ onSearch, onAccount, onMenu }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: T.color.white,
        padding: '14px 18px',
        borderBottom: `1px solid ${T.color.border}`,
        fontFamily: T.font.family,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: T.radius.xs,
            background: T.color.green,
            display: 'grid',
            placeItems: 'center',
            color: T.color.yellow,
          }}
        >
          <IconBolt width={20} height={20} strokeWidth={2.5} />
        </div>
        <div
          style={{
            fontWeight: T.font.weight.extrabold,
            fontSize: T.type.bodyBold.size,
            color: T.color.green,
            letterSpacing: '-0.01em',
          }}
        >
          SCE
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button onClick={onSearch} style={iconButtonStyle()} aria-label="Search">
          <IconSearch width={18} height={18} stroke={T.color.text} />
        </button>
        <button onClick={onAccount} style={iconButtonStyle()} aria-label="Account">
          <IconUser width={18} height={18} stroke={T.color.text} />
        </button>
        <button onClick={onMenu} style={iconButtonStyle()} aria-label="Menu">
          <IconMenu width={18} height={18} stroke={T.color.text} />
        </button>
      </div>
    </div>
  );
}
