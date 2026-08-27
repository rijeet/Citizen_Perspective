'use client';

import { useTranslations } from 'next-intl';

export type MetadataFetchResponse = {
  sourceType: 'YOUTUBE' | 'ARTICLE' | 'FACEBOOK';
  headline: string | null;
  description: string | null;
  imageUrl: string | null;
  publishedDate: string | null;
  fetchStatus: 'ok' | 'partial' | 'failed';
  hints: string[];
};

const HINT_KEYS = [
  'manual_fallback',
  'facebook_best_effort',
  'newspaper_blocked',
  'youtube_no_date',
  'fetch_error',
] as const;

type HintKey = (typeof HINT_KEYS)[number];

function isHintKey(value: string): value is HintKey {
  return (HINT_KEYS as readonly string[]).includes(value);
}

type Props = {
  hints: string[];
  fetchStatus?: MetadataFetchResponse['fetchStatus'];
  alwaysShowManual?: boolean;
};

export default function MetadataFetchNotice({
  hints,
  fetchStatus,
  alwaysShowManual = true,
}: Props) {
  const t = useTranslations('admin');

  const uniqueHints = [...new Set(hints.filter(isHintKey))];
  const showManual =
    alwaysShowManual ||
    uniqueHints.includes('manual_fallback') ||
    fetchStatus === 'failed' ||
    fetchStatus === 'partial';

  if (!showManual && !uniqueHints.length) return null;

  return (
    <div className="space-y-2 text-sm">
      {showManual ? (
        <p className="rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-archive-muted">
          {t('metadataManualFallbackHint')}
        </p>
      ) : null}
      {uniqueHints.map((hint) => (
        <p
          key={hint}
          className={`rounded-md border px-3 py-2 ${
            hint === 'facebook_best_effort' || hint === 'newspaper_blocked'
              ? 'border-amber-200 bg-amber-50 text-amber-950'
              : 'border-archive-border bg-white text-archive-muted'
          }`}
        >
          {t(`metadataHint.${hint}`)}
        </p>
      ))}
    </div>
  );
}

export function applyMetadataToForm(
  data: MetadataFetchResponse,
  setters: {
    setSourceType: (v: MetadataFetchResponse['sourceType']) => void;
    setHeadlineBn: (v: string) => void;
    setHeadlineEn: (v: string) => void;
    setDescriptionBn?: (v: string) => void;
    setDescriptionEn?: (v: string) => void;
    setThumbnailUrl: (v: string) => void;
    setPublishedAt: (v: string) => void;
  },
  currentHeadlineEn: string,
  currentDescriptionEn?: string,
) {
  setters.setSourceType(data.sourceType);
  if (data.headline) {
    setters.setHeadlineBn(data.headline);
    if (!currentHeadlineEn.trim()) {
      setters.setHeadlineEn(data.headline);
    }
  }
  if (data.description && setters.setDescriptionBn) {
    setters.setDescriptionBn(data.description);
    if (setters.setDescriptionEn && !currentDescriptionEn?.trim()) {
      setters.setDescriptionEn(data.description);
    }
  }
  if (data.imageUrl) setters.setThumbnailUrl(data.imageUrl);
  if (data.publishedDate) {
    setters.setPublishedAt(data.publishedDate.slice(0, 16));
  }
}
