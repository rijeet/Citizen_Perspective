import type { CategoryView, FeaturedBannerView } from '@/lib/api';

const lashkoiApiBase = (): string | null => {
  const raw =
    process.env.NEXT_PUBLIC_LASHKOI_API_URL ??
    process.env.NEXT_PUBLIC_ACCOUNTABILITY_API_URL;
  if (!raw?.trim()) return null;
  return raw.replace(/\/$/, '');
};

export function lashkoiSiteUrl(): string | null {
  const raw =
    process.env.NEXT_PUBLIC_LASHKOI_SITE_URL ??
    process.env.NEXT_PUBLIC_ACCOUNTABILITY_SITE_URL;
  return raw?.trim() ? raw.replace(/\/$/, '') : null;
}

export function isLashKoiTrackerEnabled(): boolean {
  return lashkoiApiBase() !== null;
}

export type LashKoiIncidentCard = {
  id: string;
  slug: string;
  title: string;
  detailUrl: string;
  category: { slug: string; name: string };
  updatedAt: string;
  thumbnailUrl: string | null;
  headline: string;
};

type LashKoiTrackerPayload = {
  locale: string;
  categories: CategoryView[];
  incidents: Array<{
    id: string;
    slug: string;
    title: string;
    detailUrl: string;
    category: { slug: string; name: string };
    updatedAt: string;
    latestNewsItem?: {
      headline?: string;
      thumbnailUrl?: string | null;
    } | null;
  }>;
  featuredBanners: FeaturedBannerView[];
};

type LashKoiSuccessEnvelope<T> = {
  status: 'success';
  data: T;
};

export type LashKoiTrackerBundle = {
  categories: CategoryView[];
  incidents: LashKoiIncidentCard[];
  banners: FeaturedBannerView[];
  mapHomeUrl: string;
};

export async function getLashKoiTracker(
  locale: string,
  opts?: { category?: string; limit?: number },
): Promise<LashKoiTrackerBundle | null> {
  const base = lashkoiApiBase();
  if (!base) return null;

  const lang = locale === 'bn' ? 'bn' : 'en';
  const url = new URL(`${base}/governance/tracker`);
  url.searchParams.set('locale', lang);
  url.searchParams.set('incidentLimit', String(Math.min(opts?.limit ?? 6, 50)));
  if (opts?.category?.trim()) {
    url.searchParams.set('category', opts.category.trim());
  }

  const headers: Record<string, string> = { Accept: 'application/json' };
  const partnerKey = process.env.LASHKOI_PARTNER_KEY;
  if (partnerKey) headers['X-Partner-Key'] = partnerKey;

  try {
    const res = await fetch(url.toString(), {
      headers,
      next: { revalidate: 120 },
    });
    if (!res.ok) return null;

    const json = (await res.json()) as LashKoiSuccessEnvelope<LashKoiTrackerPayload>;
    if (json.status !== 'success' || !json.data) return null;

    const site =
      lashkoiSiteUrl() ??
      (json.data.incidents[0]?.detailUrl
        ? new URL(json.data.incidents[0].detailUrl).origin
        : 'https://lash-koi.vercel.app');

    const incidents: LashKoiIncidentCard[] = json.data.incidents.map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      detailUrl: row.detailUrl,
      category: row.category,
      updatedAt: row.updatedAt,
      thumbnailUrl: row.latestNewsItem?.thumbnailUrl ?? null,
      headline: row.latestNewsItem?.headline ?? row.title,
    }));

    const banners = (json.data.featuredBanners ?? []).map((b) => ({
      ...b,
      createdAt: (b as FeaturedBannerView).createdAt ?? new Date().toISOString(),
    }));

    return {
      categories: json.data.categories ?? [],
      incidents,
      banners,
      mapHomeUrl: `${site}/${lang}`,
    };
  } catch {
    return null;
  }
}

export function lashkoiMapCategoryUrl(
  mapHomeUrl: string,
  categorySlug: string,
): string {
  const u = new URL(mapHomeUrl);
  u.searchParams.set('type', categorySlug);
  return u.toString();
}
