import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import VideoFigure from '@/components/VideoFigure';
import { Link } from '@/i18n/navigation';
import { getArticles, getMediaItems, getVideos } from '@/lib/api';

type Props = { params: Promise<{ locale: string; tag: string }> };

export default async function TagHubPage({ params }: Props) {
  const { locale, tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam).trim();
  if (!tag) {
    notFound();
  }

  const t = await getTranslations('tagHub');
  const tHome = await getTranslations('home');
  const tPlace = await getTranslations('placeholders');

  const articlesRes = await getArticles(locale, { tag });
  const all = articlesRes?.data ?? [];
  const newsArticles = all.filter(
    (a) => (a.category ?? '').toLowerCase() === 'news',
  );
  const otherArticles = all.filter(
    (a) => (a.category ?? '').toLowerCase() !== 'news',
  );

  const [videos, media] = await Promise.all([
    getVideos(locale, { tag }),
    getMediaItems(locale, { tag }),
  ]);

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="space-y-2 border-b border-archive-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-archive-fg">
          {t('title', { tag })}
        </h1>
        <p className="text-archive-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="tag-articles" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2
            id="tag-articles"
            className="text-lg font-semibold text-archive-fg"
          >
            {t('articles')}
          </h2>
          <Link
            href="/articles"
            className="text-sm text-archive-accent underline"
          >
            {t('seeArticles')}
          </Link>
        </div>
        {!otherArticles.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {otherArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                readLabel={tHome('read')}
              />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="tag-news" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="tag-news" className="text-lg font-semibold text-archive-fg">
            {t('news')}
          </h2>
          <Link
            href="/articles?category=News"
            className="text-sm text-archive-accent underline"
          >
            {t('seeNews')}
          </Link>
        </div>
        {!newsArticles.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {newsArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                readLabel={tHome('read')}
              />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="tag-videos" className="space-y-4">
        <h2 id="tag-videos" className="text-lg font-semibold text-archive-fg">
          {t('videos')}
        </h2>
        {!videos?.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {videos.map((v) => (
              <VideoFigure
                key={v.id}
                platform={v.platform}
                watchUrl={v.watchUrl}
                title={v.title}
                description={v.description}
                source={v.source}
                tags={v.tags}
                labels={{
                  source: tPlace('videoSource'),
                  tags: tPlace('videoTags'),
                  empty: tPlace('videoValueEmpty'),
                }}
              />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="tag-media" className="space-y-4">
        <h2 id="tag-media" className="text-lg font-semibold text-archive-fg">
          {t('media')}
        </h2>
        {!media?.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
            {media.map((m) => (
              <li key={m.id} className="px-4 py-3">
                <p className="font-medium text-archive-fg">{m.title}</p>
                {m.caption ? (
                  <p className="text-sm text-archive-muted">{m.caption}</p>
                ) : null}
                <a
                  href={m.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-archive-accent underline break-all"
                >
                  {m.mediaUrl}
                </a>
                {m.tags?.length ? (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {m.tags.map((tg) => (
                      <li key={tg}>
                        <Link
                          href={`/tags/${encodeURIComponent(tg)}`}
                          className="inline-block rounded-full bg-archive-bg px-2 py-0.5 text-xs text-archive-fg ring-1 ring-archive-border hover:ring-archive-accent"
                        >
                          {tg}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
