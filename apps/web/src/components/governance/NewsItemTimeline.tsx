import { getTranslations } from 'next-intl/server';
import type { NewsItemView } from '@/lib/api';
import NewsItemCard from './NewsItemCard';

type Props = {
  items: NewsItemView[];
  incidentSlug: string;
  locale: string;
  latestId?: string | null;
  latestLabel: string;
};

export default async function NewsItemTimeline({
  items,
  incidentSlug,
  locale,
  latestId,
  latestLabel,
}: Props) {
  const t = await getTranslations('governance');

  if (!items.length) {
    return null;
  }

  return (
    <ol className="relative w-full space-y-5 border-l-2 border-archive-border pl-6 md:space-y-6 md:pl-8 lg:pl-10">
      {items.map((item) => {
        const isLatest = item.id === latestId;
        return (
          <li key={item.id} className="relative w-full">
            <span
              className={`absolute -left-[calc(1.5rem+1px)] top-8 size-3.5 rounded-full ring-4 ring-archive-bg md:-left-[calc(2rem+1px)] md:top-10 md:size-4 lg:-left-[calc(2.5rem+1px)] ${
                isLatest ? 'bg-archive-accent' : 'bg-archive-border'
              }`}
            />
            <NewsItemCard
              item={item}
              incidentSlug={incidentSlug}
              locale={locale}
              isLatest={isLatest}
              latestLabel={latestLabel}
              sourceLinkLabel={t('sourceLink')}
            />
          </li>
        );
      })}
    </ol>
  );
}
