import React, { useState } from 'react';
import T from './tokens';
import Button from './Button';
import { IconCheck } from './icons';

/**
 * SurveyBlock  —  canonical SCE Survey Block
 *
 * Lightweight binary feedback prompt. Replaces itself with a thank-you
 * confirmation once the user picks Yes / No.
 *
 * Source: SCE Design System 1.7 component `ea8ca1b0…`.
 * Status: draft.
 */
export default function SurveyBlock({ question = 'Was this page helpful?', onVote }) {
  const [voted, setVoted] = useState(null);

  const vote = (v) => {
    setVoted(v);
    onVote && onVote(v);
  };

  if (voted) {
    return (
      <div
        style={{
          background: T.color.successSoft,
          color: '#0d4a1f',
          borderLeft: `4px solid ${T.color.success}`,
          borderRadius: T.radius.sm,
          padding: '14px 16px',
          fontFamily: T.font.family,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <IconCheck width={20} height={20} stroke={T.color.success} />
        <div style={{ fontSize: T.type.body.size, fontWeight: T.font.weight.semibold }}>
          Thanks for your feedback.
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: T.color.bgSecondary,
        border: `1px solid ${T.color.border}`,
        borderRadius: T.radius.md,
        padding: 18,
        fontFamily: T.font.family,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      <div style={{ fontSize: T.type.bodyBold.size, fontWeight: T.font.weight.bold, color: T.color.text }}>
        {question}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary" size="sm" onClick={() => vote('yes')}>Yes</Button>
        <Button variant="secondary" size="sm" onClick={() => vote('no')}>No</Button>
      </div>
    </div>
  );
}
