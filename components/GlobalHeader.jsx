import React from 'react';
import T from './tokens';
import EdisonBrand from './EdisonBrand';
import AvatarCircle from './AvatarCircle';
import { IconSearch, IconClose } from './icons';

/**
 * GlobalHeader  —  canonical SCE Navigation/Global Header (Desktop)  C04
 *
 * Five canonical variants (matching the Figma symbol set):
 *   empty           — navy gradient + brand mark only (page top, pre-scroll)
 *   default         — navy gradient + L1 nav links + search + avatar
 *   hover           — white chrome, yellow brand square, black L1 links
 *   searchOpen      — white chrome with expanded search input
 *   searchResults   — searchOpen + predictive results dropdown
 *
 * Component anatomy (from Figma):
 *   - 1440px width, 88px tall in the navy state, 80px tall in the white state
 *   - L1 page links surface a yellow-underline active state
 *   - Right action group: Search icon (24px) + Avatar (48px)
 *
 * Source: SCE Design System 1.7 Navigation/Global Header/Desktop
 * (`256:1633`); component_set `ab80fd03…` covers the mobile counterpart.
 *
 * Status: review.
 */
export default function GlobalHeader({
  variant = 'default',
  links = ['Outages & Safety', 'Billing', 'Programs', 'Account'],
  activeIndex = -1,
  notificationCount = 0,
  searchPlaceholder = 'Search SCE',
  searchResults = ['Outage map', 'Pay bill', 'Time-of-Use rates'],
  onSearchClick,
  onAvatarClick,
}) {
  const isLight = variant !== 'empty' && variant !== 'default';
  const bg = isLight ? T.color.bgPrimary : 'transparent';
  const bgImage = isLight ? 'none' : T.gradient.hero;
  const linkColor = isLight ? T.color.text : T.color.white;
  const isSearch = variant === 'searchOpen' || variant === 'searchResults';

  return (
    <div style={{ position: 'relative', overflow: 'visible', borderRadius: T.radius.sm }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          background: bg,
          backgroundImage: bgImage,
          padding: isLight ? '0 24px' : '20px 24px',
          height: isLight ? 80 : 88,
          borderBottom: isLight ? `1px solid ${T.color.border}` : 'none',
          fontFamily: T.font.family,
        }}
      >
        <EdisonBrand tone={isLight ? 'yellow' : 'navy'} size={isLight ? 64 : 56} />

        {variant === 'empty' ? (
          <div style={{ flex: 1 }} />
        ) : isSearch ? (
          <>
            <div style={{ flex: 1, position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: T.color.white,
                  height: 44,
                  padding: '0 16px',
                  borderRadius: T.radius.sm,
                  border: `1px solid ${T.color.border}`,
                }}
              >
                <IconSearch width={18} height={18} stroke={T.color.textMuted} />
                <span style={{ flex: 1, color: T.color.textSubtle, fontSize: T.type.body.size }}>
                  {searchPlaceholder}
                </span>
                <IconClose width={16} height={16} stroke={T.color.textMuted} />
              </div>
              {variant === 'searchResults' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 4px)',
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    background: T.color.white,
                    border: `1px solid ${T.color.border}`,
                    borderRadius: T.radius.sm,
                    boxShadow: T.shadow.md,
                    padding: 4,
                  }}
                >
                  {searchResults.map((r, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 12px',
                        borderRadius: T.radius.xs,
                        background: i === 1 ? T.color.heather : 'transparent',
                        fontSize: T.type.body.size,
                        color: T.color.text,
                      }}
                    >
                      <IconSearch width={14} height={14} stroke={T.color.textSubtle} />
                      {r}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <AvatarCircle tone="dark" count={notificationCount} />
          </>
        ) : (
          <>
            <nav style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 36 }}>
              {links.map((label, i) => {
                const active = i === activeIndex;
                return (
                  <a
                    key={label}
                    href="#"
                    style={{
                      color: linkColor,
                      textDecoration: 'none',
                      fontSize: T.type.bodyBold.size,
                      fontWeight: T.font.weight.bold,
                      paddingBottom: 6,
                      borderBottom: active ? `3px solid ${T.color.yellow}` : '3px solid transparent',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
            <button
              onClick={onSearchClick}
              aria-label="Search"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                width: 40,
                height: 40,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <IconSearch width={20} height={20} stroke={isLight ? T.color.text : T.color.white} />
            </button>
            <span onClick={onAvatarClick} style={{ cursor: onAvatarClick ? 'pointer' : 'default' }}>
              <AvatarCircle tone={isLight ? 'dark' : 'light'} count={notificationCount} />
            </span>
          </>
        )}
      </div>
    </div>
  );
}
