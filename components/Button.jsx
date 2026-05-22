import React, { useState } from 'react';
import T from './tokens';

/**
 * Button  —  4-variant matrix matching SCE Design System 1.7 (C03)
 *
 * Variants align to the canonical Figma Button (C03) component set:
 *   primary  — yellow gradient pill, dark text, ALL CAPS (Variant=Primary)
 *   secondary — white pill, blue border+text (link-blue), ALL CAPS (Variant=Secondary)
 *   text     — all-caps text, no background, no underline at rest (Variant=Text)
 *   linkList — small inline link, blue, underlined (Variant=Link List)
 *
 * Each variant has Default / Hover / Pressed states. Hover collapses
 * primary to solid Sherbet (#FBB04C); secondary flips its border+text
 * to Sherbet orange. This matches the canonical Figma matrix.
 *
 * `danger` is retained as a non-canonical extension for outage flows —
 * not part of the C03 spec.
 *
 * Sources verified:
 *   - Figma 7PryBoxyBNDkR3uS7K5vMu node 267:1195 → 3396:8571 (Buttons frame)
 *   - sce.com tokens.css v1.5: --Component-Button-{Default, Hover, Pressed,
 *     Animating, Disabled, Secondary, Gradient}
 *
 * Status: review (pending get_design_context for exact paddings/font tokens).
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const sizes = {
    sm: { pad: '8px 16px',  fs: 12, gap: 6,  ic: 14, h: 36 },
    md: { pad: '12px 24px', fs: 14, gap: 8,  ic: 16, h: 44 },
    lg: { pad: '14px 32px', fs: 16, gap: 10, ic: 18, h: 48 },
  };
  const s = sizes[size];

  // Stateful color picks — `state` is one of 'default', 'hover', 'pressed'
  const state = pressed ? 'pressed' : hover ? 'hover' : 'default';

  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: state === 'default' ? undefined : T.color.accentSherbet,
          backgroundImage: state === 'default' ? T.gradient.button : 'none',
          color: T.color.edisonBlack,
          border: '1.5px solid transparent',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          boxShadow: state === 'pressed' ? T.shadow.focus : (hover ? T.shadow.md : 'none'),
        };
      case 'secondary':
        return {
          background: T.color.white,
          backgroundImage: 'none',
          color: state === 'default' ? T.color.textLink : T.color.accentSherbet,
          border: `1.5px solid ${state === 'default' ? T.color.textLink : T.color.accentSherbet}`,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          boxShadow: state === 'pressed' ? T.shadow.focus : 'none',
        };
      case 'text':
        return {
          background: 'transparent',
          backgroundImage: 'none',
          color: T.color.edisonBlack,
          border: '1.5px solid transparent',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          textDecoration: state === 'default' ? 'none' : 'underline',
          textUnderlineOffset: '4px',
        };
      case 'linkList':
        return {
          background: 'transparent',
          backgroundImage: 'none',
          color: T.color.textLink,
          border: '1.5px solid transparent',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
        };
      case 'danger':
        return {
          background: T.color.error,
          backgroundImage: 'none',
          color: T.color.white,
          border: '1.5px solid transparent',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        };
      default:
        return {};
    }
  };

  const v = getStyles();
  const isLink = variant === 'linkList' || variant === 'text';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: isLink ? '8px 4px' : s.pad,
        height: isLink ? 'auto' : s.h,
        fontSize: s.fs,
        fontWeight: T.font.weight.bold,
        fontFamily: T.font.family,
        borderRadius: isLink ? T.radius.xs : T.radius.pill,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        width: fullWidth ? '100%' : 'auto',
        transition: `box-shadow ${T.motion.fast}ms ${T.motion.easing}, background ${T.motion.fast}ms, color ${T.motion.fast}ms, border-color ${T.motion.fast}ms`,
        ...v,
      }}
      {...rest}
    >
      {Icon ? <Icon width={s.ic} height={s.ic} strokeWidth={2} /> : null}
      <span>{children}</span>
    </button>
  );
}
