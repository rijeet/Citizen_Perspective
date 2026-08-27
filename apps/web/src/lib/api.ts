export type ArticleListResponse = {
  data: ArticleView[];
  meta: { page: number; pageSize: number; total: number };
};

export type ArticleView = {
  id: string;
  slug: string;
  publishedAt: string | null;
  coverUrl: string | null;
  category: string | null;
  contentType?: 'MARKDOWN' | 'HTML';
  tags: string[];
  title: string;
  description: string | null;
  bodyMd?: string | null;
  bodyHtml?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  locale: string;
  source: {
    name: string;
    url: string | null;
  };
};

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';

async function safeFetch<T>(
  url: string,
  init?: RequestInit,
): Promise<T | null> {
  try {
    const res = await fetch(url, {
      ...init,
      next: { revalidate: 120 },
      headers: { Accept: 'application/json', ...(init?.headers ?? {}) },
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function getArticles(
  locale: string,
  opts?: { q?: string; category?: string; tag?: string; pageSize?: number },
): Promise<ArticleListResponse | null> {
  const pageSize = Math.min(Math.max(opts?.pageSize ?? 24, 1), 48);
  const params = new URLSearchParams({
    locale,
    page: '1',
    pageSize: String(pageSize),
  });
  if (opts?.q?.trim()) {
    params.set('q', opts.q.trim());
  }
  if (opts?.category?.trim()) {
    params.set('category', opts.category.trim());
  }
  if (opts?.tag?.trim()) {
    params.set('tag', opts.tag.trim());
  }
  const url = `${baseUrl}/articles?${params.toString()}`;
  return safeFetch<ArticleListResponse>(url);
}

export function getArticle(
  slug: string,
  locale: string,
): Promise<ArticleView | null> {
  const params = new URLSearchParams({ locale });
  const url = `${baseUrl}/articles/${encodeURIComponent(slug)}?${params.toString()}`;
  return safeFetch<ArticleView>(url);
}

export type ExternalVideoView = {
  id: string;
  platform: 'YOUTUBE' | 'FACEBOOK';
  watchUrl: string;
  publishedAt: string | null;
  title: string;
  description: string | null;
  locale: string;
  source: { name: string; url: string | null } | null;
  tags: string[];
};

export type MediaItemView = {
  id: string;
  mediaUrl: string;
  publishedAt: string | null;
  title: string;
  caption: string | null;
  locale: string;
  tags: string[];
};

export type TimelineEventView = {
  id: string;
  eventAt: string;
  title: string;
  bodyMd: string;
  locale: string;
};

export function getVideos(
  locale: string,
  opts?: { tag?: string },
): Promise<ExternalVideoView[] | null> {
  const params = new URLSearchParams({ locale });
  if (opts?.tag?.trim()) {
    params.set('tag', opts.tag.trim());
  }
  return safeFetch<ExternalVideoView[]>(
    `${baseUrl}/videos?${params.toString()}`,
  );
}

export function getMediaItems(
  locale: string,
  opts?: { tag?: string },
): Promise<MediaItemView[] | null> {
  const params = new URLSearchParams({ locale });
  if (opts?.tag?.trim()) {
    params.set('tag', opts.tag.trim());
  }
  return safeFetch<MediaItemView[]>(
    `${baseUrl}/media-items?${params.toString()}`,
  );
}

export function getTimelineEvents(
  locale: string,
): Promise<TimelineEventView[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<TimelineEventView[]>(
    `${baseUrl}/timeline-events?${params.toString()}`,
  );
}

export type BreakingNewsTickerItem = {
  id: string;
  title: string;
  href: string | null;
};

export function getBreakingNews(
  locale: string,
): Promise<BreakingNewsTickerItem[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<BreakingNewsTickerItem[]>(
    `${baseUrl}/breaking-news?${params.toString()}`,
  );
}

export type CategoryView = {
  id: string;
  slug: string;
  name: string;
  incidentCount: number;
  subcategories: { id: string; slug: string; name: string }[];
};

export type NewsItemView = {
  id: string;
  slug: string;
  sourceUrl: string;
  sourceType: 'YOUTUBE' | 'ARTICLE' | 'FACEBOOK';
  headline: string;
  description: string | null;
  descriptionContentType: 'MARKDOWN' | 'HTML';
  thumbnailUrl: string | null;
  publishedAt: string | null;
  stage: string;
  status: string | null;
  createdAt: string;
};

export type IncidentView = {
  id: string;
  slug: string;
  title: string;
  category: { slug: string; name: string };
  subcategory: { slug: string; name: string } | null;
  currentStage: string;
  currentStatus: string | null;
  updatedAt: string;
  latestNewsItem: NewsItemView | null;
};

export type IncidentDetailView = IncidentView & {
  createdAt: string;
  newsItems: NewsItemView[];
  latestNewsItemId: string | null;
};

export type GovInvestigationView = {
  id: string;
  title: string;
  currentStage: string;
  currentStatus: string;
  updatedAt: string;
  daysSinceLastUpdate: number;
  incident: { slug: string; title: string } | null;
  latestUpdate: NewsItemView | null;
};

export type GovInvestigationDetailView = GovInvestigationView & {
  createdAt: string;
  updates: (NewsItemView & { stage: string; status: string })[];
  latestUpdateId: string | null;
};

export type FeaturedBannerView = {
  id: string;
  imageUrl: string;
  caption: string;
  sectionType: string;
  createdAt: string;
};

export function getCategories(locale: string): Promise<CategoryView[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<CategoryView[]>(`${baseUrl}/categories?${params.toString()}`);
}

export function getIncidents(
  locale: string,
  opts?: { category?: string; q?: string },
): Promise<IncidentView[] | null> {
  const params = new URLSearchParams({ locale });
  if (opts?.category?.trim()) params.set('category', opts.category.trim());
  if (opts?.q?.trim()) params.set('q', opts.q.trim());
  return safeFetch<IncidentView[]>(`${baseUrl}/incidents?${params.toString()}`);
}

export type NewsItemDetailView = NewsItemView & {
  incident: {
    slug: string;
    title: string;
    category: { slug: string; name: string };
    currentStage: string;
    currentStatus: string | null;
  };
};

export function getIncident(
  slug: string,
  locale: string,
): Promise<IncidentDetailView | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<IncidentDetailView>(
    `${baseUrl}/incidents/${encodeURIComponent(slug)}?${params.toString()}`,
  );
}

export function getNewsItem(
  incidentSlug: string,
  newsSlug: string,
  locale: string,
): Promise<NewsItemDetailView | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<NewsItemDetailView>(
    `${baseUrl}/incidents/${encodeURIComponent(incidentSlug)}/updates/${encodeURIComponent(newsSlug)}?${params.toString()}`,
  );
}

export function getGovInvestigations(
  locale: string,
): Promise<GovInvestigationView[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<GovInvestigationView[]>(
    `${baseUrl}/gov-investigations?${params.toString()}`,
  );
}

export function getGovInvestigation(
  id: string,
  locale: string,
): Promise<GovInvestigationDetailView | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<GovInvestigationDetailView>(
    `${baseUrl}/gov-investigations/${encodeURIComponent(id)}?${params.toString()}`,
  );
}

export function getFeaturedBanners(
  locale: string,
): Promise<FeaturedBannerView[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<FeaturedBannerView[]>(
    `${baseUrl}/featured-banners?${params.toString()}`,
  );
}
