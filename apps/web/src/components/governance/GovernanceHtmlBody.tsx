'use client';

import { useEffect, useRef } from 'react';

type Props = {
  html: string;
  className?: string;
};

/** Strip scripts and inline event handlers; admin-authored HTML only. */
function sanitizeGovernanceHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
}

function wireElectionCards(root: HTMLElement) {
  const cards = root.querySelectorAll<HTMLElement>('.election-card');
  cards.forEach((card) => {
    if (card.dataset.govWired === '1') return;
    card.dataset.govWired = '1';
    card.style.cursor = 'pointer';

    const details = card.querySelector<HTMLElement>('.card-details');
    if (!details) return;

    const arrow = card.querySelector<HTMLElement>('.arrow-icon');

    const toggle = () => {
      const isHidden =
        details.style.display === 'none' || details.style.display === '';
      details.style.display = isHidden ? 'block' : 'none';
      if (arrow) {
        arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
      }
      card.style.background = isHidden ? '#f5f7ff' : '#ffffff';
      card.style.borderColor = isHidden ? '#1565c0' : '#e0e0e0';
    };

    card.addEventListener('click', toggle);
  });
}

export default function GovernanceHtmlBody({ html, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const safeHtml = sanitizeGovernanceHtml(html);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    wireElectionCards(root);
  }, [safeHtml]);

  return (
    <>
      <style>{`
        .governance-html-content {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          font-size: 0.9375rem;
          line-height: 1.65;
          color: var(--color-archive-fg);
        }
        .governance-html-content :where(img, video, iframe) {
          max-width: 100%;
          height: auto;
        }
        .governance-html-content :where(table) {
          display: block;
          max-width: 100%;
          overflow-x: auto;
        }
        .governance-html-content .table-row:hover {
          background: #fff9c4;
        }
      `}</style>
      <div
        ref={ref}
        className={`governance-html-content ${className}`}
        dangerouslySetInnerHTML={{ __html: safeHtml }}
      />
    </>
  );
}
