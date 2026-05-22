import React from 'react';
import T from './tokens';

/**
 * EdisonBrand  —  canonical SCE brand lockup (compact, header use)
 *
 * Composes the canonical Edison starburst mark + the small/large
 * "SOUTHERN CALIFORNIA EDISON®" wordmark used inside GlobalHeader
 * and GlobalHeaderMobile.
 *
 * Two tones:
 *   navy   — white mark + white wordmark (sits over navy gradient)
 *   yellow — dark mark on yellow square (sits on white nav chrome)
 *
 * The starburst SVG path is verbatim from the canonical SCE Design
 * System reference (~/Documents/Claude/Projects/SCE Project/SCE Design
 * System/index.html, #Foundation:Logos). Same path as in SCELogo.
 *
 * Status: review.
 */
export default function EdisonBrand({ tone = 'navy', size = 88 }) {
  const isYellow = tone === 'yellow';
  const ground = isYellow ? T.color.yellow : 'transparent';
  const wordFg = isYellow ? T.color.edisonBlack : T.color.white;
  const padding = isYellow ? '6px 14px' : 0;

  // Canonical starburst mark — black square with white starburst
  // (works on both yellow and navy chrome).
  const markSize = size * 0.7;

  return (
    <span
      aria-label="Southern California Edison"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.max(8, size * 0.14),
        background: ground,
        padding,
        minHeight: size,
        borderRadius: isYellow ? 0 : T.radius.xs,
        fontFamily: T.font.family,
        boxSizing: 'content-box',
      }}
    >
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M0 0H48.0205V48.293H0V0Z" fill="#101820" />
        <mask id={`eb-mask-${tone}`} style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
          <path d="M0 0H48.0205V48.293H0V0Z" fill="white" />
        </mask>
        <g mask={`url(#eb-mask-${tone})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.80637 40.096L20.2529 35.937L1.8183 29.358L20.4766 30.95L6.79702 20.878L22.4818 26.634L7.39748 7.41899L26.4942 22.486L20.7569 6.83599L30.2829 20.133L29.4349 1.82199L35.4087 20.189L39.8605 1.80099V40.047L1.80637 40.096Z"
            fill="white"
          />
        </g>
      </svg>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontSize: Math.max(8, size * 0.11),
            fontWeight: T.font.weight.bold,
            color: wordFg,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: 3,
          }}
        >
          Southern California
        </span>
        <span
          style={{
            fontSize: Math.max(14, size * 0.26),
            fontWeight: T.font.weight.extrabold,
            color: wordFg,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Edison
          <sup style={{ fontSize: '0.5em', verticalAlign: 'super' }}>®</sup>
        </span>
      </span>
    </span>
  );
}
