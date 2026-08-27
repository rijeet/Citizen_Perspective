import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import type { NewsItemView } from '@/lib/api';
import SourcePlatformIcon from './SourcePlatformIcon';

type Props = {
  item: NewsItemView;
  incidentSlug: string;
  locale: string;
  isLatest: boolean;
  latestLabel: string;
  sourceLinkLabel: string;
};

function sourceHostname(
  url: string,
  sourceType: NewsItemView['sourceType'],
): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    if (sourceType === 'YOUTUBE') return 'youtube.com';
    if (sourceType === 'FACEBOOK') return 'facebook.com';
    return 'article';
  }
}

export default function NewsItemCard({
  item,
  incidentSlug,
  locale,
  isLatest,
  latestLabel,
  sourceLinkLabel,
}: Props) {
  const href = `/incidents/${incidentSlug}/updates/${item.slug}`;
  const host = sourceHostname(item.sourceUrl, item.sourceType);

  return (
    <Link
      href={href}
      className={`group block w-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:border-archive-accent hover:shadow-md ${
        isLatest ? 'border-archive-accent ring-1 ring-archive-accent/20' : 'border-archive-border'
      }`}
    >
      <div className="flex w-full flex-col gap-4 p-4 sm:flex-row sm:items-stretch sm:gap-6 sm:p-5 md:gap-8 md:p-6 lg:p-8">
        <div
          className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl bg-archive-bg sm:aspect-auto sm:h-44 sm:w-44 md:h-52 md:w-56 lg:h-56 lg:w-72 xl:h-64 xl:w-80"
        >
          {item.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumbnailUrl}
              alt=""
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex size-full min-h-[10rem] items-center justify-center text-archive-muted sm:min-h-[11rem] md:min-h-[12rem]">
              <SourcePlatformIcon sourceType={item.sourceType} />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col sm:py-1">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {item.stage ? (
                <span className="rounded-full bg-archive-bg px-2.5 py-1 text-xs font-medium text-archive-fg md:text-sm">
                  {item.stage}
                </span>
              ) : null}
              {isLatest ? (
                <span className="rounded-full bg-archive-accent px-2.5 py-1 text-xs font-semibold text-white md:text-sm">
                  {latestLabel}
                </span>
              ) : null}
            </div>
            <SourcePlatformIcon
              sourceType={item.sourceType}
              className="shrink-0 bg-white"
            />
          </div>

          <h3 className="text-lg font-semibold leading-snug text-archive-fg group-hover:text-archive-accent md:text-xl lg:text-2xl lg:leading-snug">
            {item.headline}
          </h3>

          <time
            className="mt-3 block text-sm text-archive-muted md:mt-4 md:text-base"
            dateTime={item.publishedAt ?? item.createdAt}
          >
            {formatPublishDate(item.publishedAt ?? item.createdAt, locale)}
          </time>

          <p className="mt-auto pt-4 text-sm text-archive-muted">
            <span className="text-archive-fg">{sourceLinkLabel}</span>
            <span className="mx-1.5 text-archive-border">·</span>
            <span className="group-hover:text-archive-accent">{host}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
