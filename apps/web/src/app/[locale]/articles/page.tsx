import { getTranslations } from 'next-intl/server';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/api';

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const { category } = await searchParams;
  const categoryTrim = category?.trim();
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const result = await getArticles(
    locale,
    categoryTrim ? { category: categoryTrim } : undefined,
  );

  const articles = result?.data ?? [];

  const pageTitle =
    categoryTrim === 'News'
      ? tNav('news')
      : categoryTrim
        ? categoryTrim
        : tNav('articles');

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{pageTitle}</h1>
        <p className="text-archive-muted">{t('articlesLead')}</p>
      </header>
      {!articles.length ? (
        <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
          {t('noArticles')}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              locale={locale}
              readLabel={t('read')}
            />
          ))}
        </div>
      )}
    </div>
  );
}
