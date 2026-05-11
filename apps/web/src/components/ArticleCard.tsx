import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import type { ArticleView } from '@/lib/api';

type Props = {
  article: ArticleView;
  locale: string;
  readLabel: string;
};

export default function ArticleCard({ article, locale, readLabel }: Props) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-[12px] border border-archive-border bg-white transition-colors hover:border-archive-muted"
    >
      <div className="flex aspect-video items-center justify-center bg-archive-bg text-xs text-archive-muted">
      {article.coverUrl ? (
        // eslint-disable-next-line @next/next/no-img-element -- remote URLs from archive; no fixed dimensions
        <img
            src={article.coverUrl}
            alt=""
            className="size-full object-cover"
          />
        ) : (
          <span aria-hidden>{article.category ?? 'Article'}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {article.category && (
          <span className="inline-flex w-fit rounded-full border border-archive-border px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-archive-muted">
            {article.category}
          </span>
        )}
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-archive-fg group-hover:text-archive-accent">
          {article.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-archive-muted">
          {article.description ?? '\u00A0'}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-archive-border pt-3 text-xs text-archive-muted">
          <span className="truncate">{article.source.name}</span>
          <time dateTime={article.publishedAt ?? undefined}>
            {formatPublishDate(article.publishedAt, locale)}
          </time>
        </div>
        <span className="text-xs font-semibold text-archive-accent">{readLabel}</span>
      </div>
    </Link>
  );
}
