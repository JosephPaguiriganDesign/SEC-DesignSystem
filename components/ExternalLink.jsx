import React from 'react';
import T from './tokens';

/**
 * ExternalLink  —  canonical SCE Global Footer/External Link
 *
 * Inline link with a trailing external-arrow glyph indicating the
 * destination opens in a new tab. Used in the footer and policy lists.
 *
 * Source: SCE Design System 1.7 component `6326b181…`.
 * Status: draft.
 */
export default function ExternalLink({ children, href = '#', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: T.color.textLink,
        textDecoration: 'none',
        fontFamily: T.font.family,
        fontSize: T.type.caption.size,
        fontWeight: T.font.weight.semibold,
      }}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 3h7v7" />
        <path d="M21 3l-9 9" />
        <path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
      </svg>
    </a>
  );
}
