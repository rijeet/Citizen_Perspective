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
  tags: string[];
  title: string;
  description: string | null;
  bodyMd?: string;
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
