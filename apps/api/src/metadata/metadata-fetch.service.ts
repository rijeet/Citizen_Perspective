import { Injectable } from '@nestjs/common';
import { NewsSourceType } from '@prisma/client';

export type FetchMetadataResult = {
  sourceType: NewsSourceType;
  headline: string | null;
  description: string | null;
  imageUrl: string | null;
  publishedDate: string | null;
  fetchStatus: 'ok' | 'partial' | 'failed';
  hints: string[];
};

function detectSourceType(url: string): NewsSourceType {
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (host.includes('youtube.com') || host.includes('youtu.be')) {
      return NewsSourceType.YOUTUBE;
    }
    if (host.includes('facebook.com') || host.includes('fb.watch')) {
      return NewsSourceType.FACEBOOK;
    }
  } catch {
    /* fall through */
  }
  return NewsSourceType.ARTICLE;
}

function metaContent(html: string, property: string): string | null {
  const patterns = [
    new RegExp(
      `<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`,
      'i',
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${property}["']`,
      'i',
    ),
    new RegExp(
      `<meta[^>]+name=["']${property}["'][^>]+content=["']([^"']+)["']`,
      'i',
    ),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return m[1].trim();
  }
  return null;
}

function finalize(
  sourceType: NewsSourceType,
  headline: string | null,
  description: string | null,
  imageUrl: string | null,
  publishedDate: string | null,
  extraHints: string[] = [],
): FetchMetadataResult {
  const hints = [...extraHints];
  const hasHeadline = Boolean(headline?.trim());
  const hasImage = Boolean(imageUrl?.trim());
  const hasDate = Boolean(publishedDate?.trim());
  const filled = [hasHeadline, hasImage, hasDate].filter(Boolean).length;

  if (sourceType === NewsSourceType.FACEBOOK && !hints.includes('facebook_best_effort')) {
    hints.push('facebook_best_effort');
  }
  if (sourceType === NewsSourceType.YOUTUBE && hasHeadline && !hasDate) {
    hints.push('youtube_no_date');
  }
  if (!hasHeadline && !hasImage && !hasDate) {
    if (sourceType === NewsSourceType.ARTICLE) {
      hints.push('newspaper_blocked');
    }
    hints.push('manual_fallback');
    return {
      sourceType,
      headline,
      description,
      imageUrl,
      publishedDate,
      fetchStatus: 'failed',
      hints: [...new Set(hints)],
    };
  }
  if (filled < 3 || hints.includes('newspaper_blocked')) {
    hints.push('manual_fallback');
    return {
      sourceType,
      headline,
      description,
      imageUrl,
      publishedDate,
      fetchStatus: 'partial',
      hints: [...new Set(hints)],
    };
  }
  return {
    sourceType,
    headline,
    description,
    imageUrl,
    publishedDate,
    fetchStatus: 'ok',
    hints: [...new Set(hints)],
  };
}

@Injectable()
export class MetadataFetchService {
  async fetch(url: string): Promise<FetchMetadataResult> {
    const sourceType = detectSourceType(url);

    if (sourceType === NewsSourceType.YOUTUBE) {
      return this.fetchYouTube(url, sourceType);
    }
    if (sourceType === NewsSourceType.FACEBOOK) {
      return this.fetchFacebook(url, sourceType);
    }
    return this.fetchArticle(url, sourceType);
  }

  private async fetchYouTube(
    url: string,
    sourceType: NewsSourceType,
  ): Promise<FetchMetadataResult> {
    try {
      const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
      const res = await fetch(oembedUrl, {
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) {
        return finalize(sourceType, null, null, null, null, ['fetch_error']);
      }
      const data = (await res.json()) as {
        title?: string;
        thumbnail_url?: string;
      };
      return finalize(
        sourceType,
        data.title ?? null,
        null,
        data.thumbnail_url ?? null,
        null,
      );
    } catch {
      return finalize(sourceType, null, null, null, null, ['fetch_error']);
    }
  }

  private async fetchFacebook(
    url: string,
    sourceType: NewsSourceType,
  ): Promise<FetchMetadataResult> {
    try {
      const oembedUrl = `https://www.facebook.com/plugins/post/oembed.json/?url=${encodeURIComponent(url)}`;
      const res = await fetch(oembedUrl, {
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) {
        return finalize(sourceType, null, null, null, null, [
          'facebook_best_effort',
          'fetch_error',
        ]);
      }
      const data = (await res.json()) as { author_name?: string; html?: string };
      const imgMatch = data.html?.match(/src=["']([^"']+)["']/i);
      return finalize(
        sourceType,
        data.author_name ?? null,
        null,
        imgMatch?.[1] ?? null,
        null,
        ['facebook_best_effort'],
      );
    } catch {
      return finalize(sourceType, null, null, null, null, [
        'facebook_best_effort',
        'fetch_error',
      ]);
    }
  }

  private async fetchArticle(
    url: string,
    sourceType: NewsSourceType,
  ): Promise<FetchMetadataResult> {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(12_000),
        headers: {
          'User-Agent':
            'Mozilla/5.0 (compatible; JanDrishthiBot/1.0; +https://citizen-perspective.vercel.app)',
          Accept: 'text/html',
        },
        redirect: 'follow',
      });
      if (!res.ok) {
        return finalize(sourceType, null, null, null, null, ['newspaper_blocked']);
      }
      const html = await res.text();
      const headline =
        metaContent(html, 'og:title') ??
        metaContent(html, 'twitter:title') ??
        html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() ??
        null;
      const description =
        metaContent(html, 'og:description') ??
        metaContent(html, 'twitter:description') ??
        null;
      const imageUrl =
        metaContent(html, 'og:image') ??
        metaContent(html, 'twitter:image') ??
        null;
      const publishedDate =
        metaContent(html, 'article:published_time') ??
        metaContent(html, 'og:updated_time') ??
        null;
      const hints = !headline && !imageUrl ? ['newspaper_blocked'] : [];
      return finalize(sourceType, headline, description, imageUrl, publishedDate, hints);
    } catch {
      return finalize(sourceType, null, null, null, null, ['newspaper_blocked']);
    }
  }
}
