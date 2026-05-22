import React from 'react';
import T from './tokens';

/**
 * AlertsNotificationsMenu  —  canonical SCE Alerts & Notifications Menu
 *
 * Dropdown panel that drops from the bell icon in the global header.
 * Lists recent notifications with a dot indicator per tone, time stamp,
 * and a footer link to the full alerts page.
 *
 * `items` shape: [{ tone: 'error'|'warn'|'success'|'info', title, time }]
 *
 * Source: SCE Design System 1.7 component `389b1cc9…`.
 * Status: draft.
 */
export default function AlertsNotificationsMenu({ items = [], width = 320 }) {
  return (
    <div
      style={{
        width,
        background: T.color.white,
        fontFamily: T.font.family,
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.md,
        boxShadow: T.shadow.lg,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          borderBottom: `1px solid ${T.color.borderSoft}`,
          background: T.color.bgSecondary,
        }}
      >
        <div style={{ fontSize: T.type.bodyBold.size, fontWeight: T.font.weight.bold, color: T.color.text }}>
          Notifications
        </div>
        <span
          style={{
            background: T.color.error,
            color: T.color.white,
            padding: '2px 8px',
            borderRadius: T.radius.pill,
            fontSize: 10,
            fontWeight: T.font.weight.bold,
          }}
        >
          {items.length}
        </span>
      </div>

      <div style={{ maxHeight: 280, overflowY: 'auto' }}>
        {items.map((it, i) => {
          const tone =
            it.tone === 'error' ? T.color.error :
            it.tone === 'success' ? T.color.success :
            it.tone === 'warn' ? T.color.warn :
            T.color.info;
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                padding: '12px 16px',
                borderBottom: i < items.length - 1 ? `1px solid ${T.color.borderSoft}` : 'none',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: T.radius.pill,
                  background: tone,
                  marginTop: 6,
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: T.type.caption.size,
                    fontWeight: T.font.weight.bold,
                    color: T.color.text,
                    marginBottom: 2,
                  }}
                >
                  {it.title}
                </div>
                <div
                  style={{
                    fontSize: T.type.overline.size,
                    color: T.color.textMuted,
                    fontWeight: 400,
                    textTransform: 'none',
                    letterSpacing: 0,
                  }}
                >
                  {it.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="#"
        style={{
          display: 'block',
          padding: '10px 16px',
          background: T.color.bgSecondary,
          color: T.color.textLink,
          textDecoration: 'none',
          fontSize: T.type.overline.size,
          fontWeight: T.font.weight.bold,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          textAlign: 'center',
          borderTop: `1px solid ${T.color.borderSoft}`,
        }}
      >
        View all alerts
      </a>
    </div>
  );
}
