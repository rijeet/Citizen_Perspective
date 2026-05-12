import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import type { ArticleView } from '@/lib/api';

type Props = {
  article: ArticleView;
  locale: string;
  readLabel: string;
};

export default function ArticleCard({ article, locale, readLabel }: Props) {
  const tags = article.tags ?? [];

  return (
    <div className="group flex flex-col overflow-hidden rounded-[12px] border border-archive-border bg-white transition-colors hover:border-archive-muted">
      <Link
        href={`/articles/${article.slug}`}
        className="block shrink-0"
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
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {article.category ? (
            <Link
              href={`/tags/${encodeURIComponent(article.category)}`}
              className="inline-flex w-fit rounded-full border border-archive-border px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {article.category}
            </Link>
          ) : null}
          {tags
            .filter(
              (tg) =>
                !article.category ||
                tg.toLowerCase() !== article.category.toLowerCase(),
            )
            .map((tg) => (
              <Link
                key={tg}
                href={`/tags/${encodeURIComponent(tg)}`}
                className="inline-flex rounded-full bg-archive-bg px-2 py-0.5 text-xs text-archive-fg ring-1 ring-archive-border transition-colors hover:ring-archive-accent"
              >
                {tg}
              </Link>
            ))}
        </div>
        <Link href={`/articles/${article.slug}`}>
          <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-archive-fg group-hover:text-archive-accent">
            {article.title}
          </h3>
        </Link>
        <Link
          href={`/articles/${article.slug}`}
          className="line-clamp-2 flex-1 text-sm leading-relaxed text-archive-muted group-hover:text-archive-fg"
        >
          {article.description ?? '\u00A0'}
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-archive-border pt-3 text-xs text-archive-muted">
          <span className="truncate">{article.source.name}</span>
          <time dateTime={article.publishedAt ?? undefined}>
            {formatPublishDate(article.publishedAt, locale)}
          </time>
        </div>
        <Link
          href={`/articles/${article.slug}`}
          className="text-xs font-semibold text-archive-accent"
        >
          {readLabel}
        </Link>
      </div>
    </div>
  );
}
