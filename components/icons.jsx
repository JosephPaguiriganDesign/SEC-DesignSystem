import React from 'react';

/**
 * Icon set
 *
 * 24px box, currentColor stroke, 1.75 stroke-width. Mirrors the inline
 * Icon components inside preview/storybook.html so engineers can import
 * a single glyph without pulling the whole storybook.
 *
 * To add a glyph: append the function below, export it, then register it
 * in preview/storybook.html's ICONS array.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const IconBolt    = (p) => <svg {...base} {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
export const IconHome    = (p) => <svg {...base} {...p}><path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V11z" /></svg>;
export const IconBill    = (p) => <svg {...base} {...p}><path d="M5 3h14v18l-3-2-3 2-3-2-3 2-2-2V3z" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>;
export const IconAlert   = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>;
export const IconCheck   = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></svg>;
export const IconUser    = (p) => <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>;
export const IconChevron = (p) => <svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>;
export const IconArrow   = (p) => <svg {...base} {...p}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
export const IconSearch  = (p) => <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></svg>;
export const IconClose   = (p) => <svg {...base} {...p}><path d="M6 6l12 12M6 18L18 6" /></svg>;
export const IconMenu    = (p) => <svg {...base} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
export const IconOutage  = (p) => <svg {...base} {...p}><path d="M2 22h20M5 22V8l7-5 7 5v14" /><path d="M12 22v-6" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>;
export const IconLeaf    = (p) => <svg {...base} {...p}><path d="M21 3c-7 0-13 5-13 13 0 1 .1 2 .3 3 5 0 12-3 12-13 0-1 0-2-.3-3z" /><path d="M9 16c-2 1-4 3-5 5" /></svg>;
export const IconClock   = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
export const IconPhone   = (p) => <svg {...base} {...p}><path d="M5 3h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4a2 2 0 01-2 2C9 21 3 15 3 5a2 2 0 012-2z" /></svg>;
export const IconMap     = (p) => <svg {...base} {...p}><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></svg>;
export const IconChart   = (p) => <svg {...base} {...p}><path d="M3 21h18" /><path d="M7 17v-6M12 17V8M17 17v-9" /></svg>;
export const IconDollar  = (p) => <svg {...base} {...p}><path d="M12 2v20" /><path d="M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7" /></svg>;
export const IconTruck   = (p) => <svg {...base} {...p}><path d="M3 16V6h12v10" /><path d="M15 9h4l3 4v3h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
export const IconHand    = (p) => <svg {...base} {...p}><path d="M9 11V5a1.5 1.5 0 013 0v6" /><path d="M12 11V4a1.5 1.5 0 013 0v7" /><path d="M15 11V6a1.5 1.5 0 013 0v8c0 4-3 7-7 7s-6-2-7-5l-3-6 1-2 4 4" /></svg>;

/* Social glyphs (filled, 20px box) */
const social = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor' };
export const IconFacebook  = (p) => <svg {...social} {...p}><path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.6.7-1.6 1.5V12H16l-.4 3h-2.2v7A10 10 0 0022 12z" /></svg>;
export const IconTwitter   = (p) => <svg {...social} {...p}><path d="M18.9 4H22l-7.4 8.5L23 20h-6.8l-5.3-6.6L4.7 20H1.6l8-9.1L1 4h7l4.8 6 6.1-6zm-1.2 14.5h1.7L7.4 5.4H5.5l12.2 13.1z" /></svg>;
export const IconLinkedIn  = (p) => <svg {...social} {...p}><path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.1c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.1 1.7 3.1 4v4.8z" /></svg>;
export const IconYouTube   = (p) => <svg {...social} {...p}><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C16.6 3.7 12 3.7 12 3.7s-4.6 0-7.8.2c-.5 0-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S0 9.1 0 11v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 8.3.2 8.3.2s4.6 0 7.8-.2c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.5 14.7V8.3l6.1 3.2-6.1 3.2z" /></svg>;
export const IconInstagram = (p) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
