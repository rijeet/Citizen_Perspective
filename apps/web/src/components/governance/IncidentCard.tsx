import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import type { IncidentView } from '@/lib/api';
import SourcePlatformIcon from './SourcePlatformIcon';

type Props = {
  incident: IncidentView;
  locale: string;
};

export default function IncidentCard({ incident, locale }: Props) {
  const thumb = incident.latestNewsItem?.thumbnailUrl;
  const headline = incident.latestNewsItem?.headline ?? incident.title;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[12px] border border-archive-border bg-white transition-colors hover:border-archive-muted">
      <Link href={`/incidents/${incident.slug}`} className="block shrink-0">
        <div className="relative flex aspect-video items-center justify-center bg-archive-bg text-xs text-archive-muted">
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt="" className="size-full object-cover" />
          ) : (
            <span>{incident.category.name}</span>
          )}
          {incident.latestNewsItem ? (
            <span className="absolute bottom-2 right-2">
              <SourcePlatformIcon sourceType={incident.latestNewsItem.sourceType} />
            </span>
          ) : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          <Link
            href={`/incidents?category=${encodeURIComponent(incident.category.slug)}`}
            className="inline-flex rounded-full border border-archive-border px-2 py-0.5 text-xs text-archive-muted hover:border-archive-accent hover:text-archive-accent"
          >
            {incident.category.name}
          </Link>
          {incident.currentStage ? (
            <span className="inline-flex rounded-full bg-archive-bg px-2 py-0.5 text-xs font-medium text-archive-fg ring-1 ring-archive-border">
              {incident.currentStage}
            </span>
          ) : null}
          {incident.currentStatus ? (
            <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-900 ring-1 ring-amber-200">
              {incident.currentStatus}
            </span>
          ) : null}
        </div>
        <Link href={`/incidents/${incident.slug}`}>
          <h3 className="line-clamp-2 text-lg font-semibold text-archive-fg group-hover:text-archive-accent">
            {headline}
          </h3>
        </Link>
        <p className="line-clamp-1 text-sm text-archive-muted">{incident.title}</p>
        <time
          className="mt-auto text-xs text-archive-muted"
          dateTime={incident.updatedAt}
        >
          {formatPublishDate(incident.updatedAt, locale)}
        </time>
      </div>
    </article>
  );
}
