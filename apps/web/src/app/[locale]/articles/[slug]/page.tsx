import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import ArticleCard from '@/components/ArticleCard';
import MarkdownBody from '@/components/MarkdownBody';
import { getArticle, getArticles } from '@/lib/api';
import { formatPublishDate } from '@/lib/format-date';
import { slugifyHeading } from '@/lib/slug-heading';

type Props = { params: Promise<{ locale: string; slug: string }> };

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

function headingsFromMarkdown(md: string): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = [];
  const re = /^##\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md)) !== null) {
    const text = m[1].trim();
    out.push({ id: slugifyHeading(text), text });
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticle(slug, locale);
  const t = await getTranslations({ locale, namespace: 'article' });

  if (!article) {
    return { title: t('notFound'), metadataBase: new URL(siteUrl) };
  }

  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.description ?? undefined;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}/articles/${slug}`,
      languages: {
        bn: `/bn/articles/${slug}`,
        en: `/en/articles/${slug}`,
        'x-default': `/bn/articles/${slug}`,
      },
    },
    openGraph: { title, description },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations('article');
  const tHome = await getTranslations('home');

  const article = await getArticle(slug, locale);
  if (!article || !article.bodyMd) {
    notFound();
  }

  const toc = headingsFromMarkdown(article.bodyMd);
  const list = await getArticles(locale);
  const related =
    list?.data?.filter((a) => a.slug !== article.slug).slice(0, 4) ?? [];

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <article className="lg:col-span-8">
        {article.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverUrl}
            alt=""
            className="mb-8 w-full max-h-[420px] rounded-xl border border-archive-border object-cover"
          />
        ) : null}
        <header className="space-y-4 border-b border-archive-border pb-8">
          {article.category ? (
            <Link
              href={`/tags/${encodeURIComponent(article.category)}`}
              className="inline-flex rounded-full border border-archive-border px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {article.category}
            </Link>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-archive-fg">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-archive-muted">
            <span>
              {t('bySource')}:{' '}
              {article.source.url ? (
                <a
                  href={article.source.url}
                  className="text-archive-accent underline underline-offset-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  {article.source.name}
                </a>
              ) : (
                article.source.name
              )}
            </span>
            <span>
              {t('published')}:{' '}
              <time dateTime={article.publishedAt ?? undefined}>
                {formatPublishDate(article.publishedAt, locale)}
              </time>
            </span>
            {(article.tags?.length || article.category) && (
              <span className="flex flex-wrap items-center gap-1.5">
                <span className="shrink-0">{t('tags')}:</span>
                {article.category ? (
                  <Link
                    href={`/tags/${encodeURIComponent(article.category)}`}
                    className="rounded-full bg-archive-bg px-2 py-0.5 text-archive-fg ring-1 ring-archive-border hover:ring-archive-accent"
                  >
                    {article.category}
                  </Link>
                ) : null}
                {(article.tags ?? [])
                  .filter(
                    (tg) =>
                      !article.category ||
                      tg.toLowerCase() !== article.category.toLowerCase(),
                  )
                  .map((tg) => (
                    <Link
                      key={tg}
                      href={`/tags/${encodeURIComponent(tg)}`}
                      className="rounded-full bg-archive-bg px-2 py-0.5 text-archive-fg ring-1 ring-archive-border hover:ring-archive-accent"
                    >
                      {tg}
                    </Link>
                  ))}
              </span>
            )}
          </div>
        </header>
        <div className="mt-8 max-w-[720px]">
          <MarkdownBody markdown={article.bodyMd} />
        </div>
      </article>
      <aside className="space-y-10 lg:col-span-4">
        {toc.length ? (
          <nav
            aria-label={t('toc')}
            className="sticky top-20 hidden rounded-xl border border-archive-border bg-white p-5 lg:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-archive-muted">
              {t('toc')}
            </p>
            <ol className="mt-4 space-y-2 text-sm">
              {toc.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-archive-muted hover:text-archive-accent"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <section className="rounded-xl border border-archive-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-archive-muted">
            {t('verification')}
          </p>
          <p className="mt-2 text-sm text-archive-muted">
            {article.source.url ? (
              <a
                href={article.source.url}
                className="text-archive-accent underline underline-offset-2"
                rel="noreferrer"
                target="_blank"
              >
                {article.source.name}
              </a>
            ) : (
              article.source.name
            )}
          </p>
        </section>
        {related.length ? (
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
              {t('related')}
            </h2>
            <div className="flex flex-col gap-4">
              {related.map((a) => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  locale={locale}
                  readLabel={tHome('read')}
                />
              ))}
            </div>
          </section>
        ) : null}
      </aside>
    </div>
  );
}
