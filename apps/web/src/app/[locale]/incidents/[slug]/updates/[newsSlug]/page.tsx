import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link, redirect } from '@/i18n/navigation';
import NewsItemDescription from '@/components/governance/NewsItemDescription';
import SourcePlatformIcon from '@/components/governance/SourcePlatformIcon';
import { getNewsItem } from '@/lib/api';
import { formatPublishDate } from '@/lib/format-date';
import { metaDescriptionFromHtml } from '@/lib/meta-description';

type Props = {
  params: Promise<{ locale: string; slug: string; newsSlug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const siteName = 'Citizen Perspective';

function canonicalNewsPath(
  locale: string,
  incidentSlug: string,
  newsSlug: string,
) {
  return `/${locale}/incidents/${incidentSlug}/updates/${newsSlug}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, newsSlug } = await params;
  const item = await getNewsItem(slug, newsSlug, locale);
  const t = await getTranslations({ locale, namespace: 'governance' });

  if (!item) {
    return { title: t('newsItemNotFound'), metadataBase: new URL(siteUrl) };
  }

  const canonicalSlug = item.slug;
  const path = canonicalNewsPath(locale, slug, canonicalSlug);
  const url = `${siteUrl}${path}`;
  const title = item.headline;
  const description =
    metaDescriptionFromHtml(item.description) ??
    `${item.headline} — ${item.incident.title}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
      languages: {
        bn: canonicalNewsPath('bn', slug, canonicalSlug),
        en: canonicalNewsPath('en', slug, canonicalSlug),
        'x-default': canonicalNewsPath('bn', slug, canonicalSlug),
      },
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName,
      publishedTime: item.publishedAt ?? item.createdAt,
      images: item.thumbnailUrl ? [{ url: item.thumbnailUrl, alt: title }] : [],
    },
    twitter: {
      card: item.thumbnailUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      images: item.thumbnailUrl ? [item.thumbnailUrl] : undefined,
    },
  };
}

export default async function NewsItemDetailPage({ params }: Props) {
  const { locale, slug, newsSlug } = await params;
  const t = await getTranslations('governance');
  const item = await getNewsItem(slug, newsSlug, locale);

  if (!item) notFound();

  if (item.slug !== newsSlug) {
    redirect({
      href: `/incidents/${slug}/updates/${item.slug}`,
      locale,
    });
  }

  const canonicalPath = canonicalNewsPath(locale, slug, item.slug);
  const pageUrl = `${siteUrl}${canonicalPath}`;
  const published = item.publishedAt ?? item.createdAt;
  const descriptionPlain =
    metaDescriptionFromHtml(item.description) ?? item.headline;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: item.headline,
    description: descriptionPlain,
    image: item.thumbnailUrl ? [item.thumbnailUrl] : undefined,
    datePublished: published,
    dateModified: item.createdAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    url: pageUrl,
    isBasedOn: item.sourceUrl,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    articleSection: item.incident.category.name,
  };

  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-3">
        <Link
          href={`/incidents/${item.incident.slug}`}
          className="text-sm text-archive-accent underline"
        >
          ← {t('backToIncident')}
        </Link>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-archive-border px-2 py-0.5 text-xs text-archive-muted">
            {item.incident.category.name}
          </span>
          <span className="rounded-full bg-archive-bg px-2 py-0.5 text-xs text-archive-fg">
            {item.incident.currentStage}
          </span>
          {item.stage ? (
            <span className="rounded-full bg-archive-accent/10 px-2 py-0.5 text-xs font-medium text-archive-accent">
              {item.stage}
            </span>
          ) : null}
          {item.status ? (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-900">
              {item.status}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-archive-muted">{item.incident.title}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-archive-fg">
          {item.headline}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-archive-muted">
          <SourcePlatformIcon sourceType={item.sourceType} />
          <time dateTime={published}>
            {formatPublishDate(published, locale)}
          </time>
        </div>
      </div>

      {item.thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.thumbnailUrl}
          alt={item.headline}
          className="w-full max-h-[420px] rounded-xl object-cover"
        />
      ) : null}

      {item.description ? (
        <div className="w-full min-w-0">
          <NewsItemDescription
            description={item.description}
            contentType={item.descriptionContentType ?? 'MARKDOWN'}
          />
        </div>
      ) : null}

      <p>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-archive-accent underline"
        >
          {t('sourceLink')}
        </a>
      </p>
    </article>
  );
}
