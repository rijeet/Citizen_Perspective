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

export function getArticles(locale: string, q?: string): Promise<ArticleListResponse | null> {
  const params = new URLSearchParams({
    locale,
    page: '1',
    pageSize: '24',
  });
  if (q?.trim()) {
    params.set('q', q.trim());
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
