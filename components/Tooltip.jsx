import React, { useState } from 'react';
import T from './tokens';

/**
 * Tooltip  —  hover-only inline tooltip
 *
 * Wrap any focusable element. `side` is one of top | bottom | left | right.
 *
 * Status: draft.
 */
export default function Tooltip({ children, label, side = 'top' }) {
  const [show, setShow] = useState(false);
  const offset = 8;

  const positions = {
    top:    { bottom: '100%', left: '50%', transform: `translate(-50%, -${offset}px)` },
    bottom: { top: '100%',    left: '50%', transform: `translate(-50%, ${offset}px)` },
    left:   { right: '100%',  top: '50%',  transform: `translate(-${offset}px, -50%)` },
    right:  { left: '100%',   top: '50%',  transform: `translate(${offset}px, -50%)` },
  };

  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          style={{
            position: 'absolute',
            ...positions[side],
            background: T.color.edisonBlack,
            color: T.color.white,
            padding: '6px 10px',
            borderRadius: T.radius.xs,
            fontSize: T.type.overline.size,
            fontWeight: T.font.weight.semibold,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 20,
            fontFamily: T.font.family,
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
