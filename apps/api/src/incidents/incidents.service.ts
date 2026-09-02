import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleContentType, NewsSourceType, Prisma, ReviewStatus } from '@prisma/client';
import {
  buildNewsItemSlug,
  normalizeSlugKey,
  slugKeysMatch,
  slugifyText,
} from '../common/slug.util';
import { PrismaService } from '../prisma/prisma.service';
import {
  pickLocaleName,
  pickLocaleTitleText,
  type RequestLocale,
} from '../governance/governance-locale.util';
import type { IncidentListQueryDto } from './dto/incident-list-query.dto';
import { resolveNewsItemDescriptionContentType } from './news-item-description.util';

type NewsItemRow = {
  id: string;
  slug: string;
  sourceUrl: string;
  sourceType: NewsSourceType;
  headlineBn: string;
  headlineEn: string;
  descriptionBn: string | null;
  descriptionEn: string | null;
  descriptionContentType: ArticleContentType;
  thumbnailUrl: string | null;
  publishedAt: Date | null;
  stage: string;
  status: string | null;
  createdAt: Date;
};

function mapNewsItem(item: NewsItemRow, locale: RequestLocale) {
  const useBn = locale === 'bn' && item.descriptionBn;
  const useEn = locale === 'en' && item.descriptionEn;
  const description = useBn
    ? item.descriptionBn
    : useEn
      ? item.descriptionEn
      : item.descriptionBn ?? item.descriptionEn ?? null;

  return {
    id: item.id,
    slug: item.slug,
    sourceUrl: item.sourceUrl,
    sourceType: item.sourceType,
    headline: locale === 'bn' ? item.headlineBn : item.headlineEn,
    description,
    descriptionContentType: resolveNewsItemDescriptionContentType(
      item.descriptionBn,
      item.descriptionEn,
      item.descriptionContentType,
    ),
    thumbnailUrl: item.thumbnailUrl,
    publishedAt: item.publishedAt?.toISOString() ?? null,
    stage: item.stage,
    status: item.status,
    createdAt: item.createdAt.toISOString(),
  };
}

@Injectable()
export class IncidentsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: IncidentListQueryDto) {
    const where: Prisma.IncidentWhereInput = {
      reviewStatus: ReviewStatus.PUBLISHED,
    };

    if (query.category?.trim()) {
      where.category = { slug: query.category.trim() };
    }

    if (query.q?.trim()) {
      const term = query.q.trim();
      where.OR = [
        { currentStage: { contains: term, mode: 'insensitive' } },
        {
          translations: {
            some: { title: { contains: term, mode: 'insensitive' } },
          },
        },
        {
          newsItems: {
            some: {
              OR: [
                { headlineBn: { contains: term, mode: 'insensitive' } },
                { headlineEn: { contains: term, mode: 'insensitive' } },
              ],
            },
          },
        },
      ];
    }

    const incidents = await this.prisma.incident.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      include: {
        translations: true,
        category: { include: { translations: true } },
        subcategory: { include: { translations: true } },
        newsItems: { orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    return incidents.map((inc) => this.toListView(inc, query.locale));
  }

  async getBySlug(slug: string, locale: RequestLocale) {
    const incident = await this.prisma.incident.findFirst({
      where: { slug, reviewStatus: ReviewStatus.PUBLISHED },
      include: {
        translations: true,
        category: { include: { translations: true } },
        subcategory: { include: { translations: true } },
        newsItems: { orderBy: { createdAt: 'asc' } },
      },
    });
    if (!incident) throw new NotFoundException('Incident not found');
    return this.toDetailView(incident, locale);
  }

  async getNewsItem(
    incidentSlug: string,
    newsSlug: string,
    locale: RequestLocale,
  ) {
    const incidentFilter = {
      slug: incidentSlug,
      reviewStatus: ReviewStatus.PUBLISHED,
    };

    let item = await this.prisma.newsItem.findFirst({
      where: {
        slug: newsSlug,
        incident: incidentFilter,
      },
      include: {
        incident: {
          include: {
            translations: true,
            category: { include: { translations: true } },
          },
        },
      },
    });

    if (!item && newsSlug.startsWith('update-')) {
      const legacyId = newsSlug.slice('update-'.length);
      item = await this.prisma.newsItem.findFirst({
        where: {
          id: legacyId,
          incident: incidentFilter,
        },
        include: {
          incident: {
            include: {
              translations: true,
              category: { include: { translations: true } },
            },
          },
        },
      });
    }

    if (!item) {
      item = await this.findNewsItemBySlugAlias(newsSlug, incidentFilter);
    }

    if (!item) throw new NotFoundException('News item not found');

    const incident = item.incident;
    const mapped = mapNewsItem(item, locale);

    return {
      ...mapped,
      incident: {
        slug: incident.slug,
        title: pickLocaleTitleText(incident.translations, locale),
        category: {
          slug: incident.category.slug,
          name: pickLocaleName(incident.category.translations, locale),
        },
        currentStage: incident.currentStage,
        currentStatus: incident.currentStatus,
      },
    };
  }

  private async findNewsItemBySlugAlias(
    newsSlug: string,
    incidentFilter: { slug: string; reviewStatus: ReviewStatus },
  ) {
    const requested = normalizeSlugKey(newsSlug);
    const candidates = await this.prisma.newsItem.findMany({
      where: { incident: incidentFilter },
      include: {
        incident: {
          include: {
            translations: true,
            category: { include: { translations: true } },
          },
        },
      },
    });

    return (
      candidates.find((row) => {
        const keys = [
          normalizeSlugKey(row.slug),
          normalizeSlugKey(buildNewsItemSlug(row.headlineEn, row.headlineBn)),
          normalizeSlugKey(slugifyText(row.headlineEn)),
          normalizeSlugKey(slugifyText(row.headlineBn)),
          normalizeSlugKey(
            row.headlineEn
              .trim()
              .toLowerCase()
              .replace(/\s*[:|]\s*/g, '--')
              .replace(/\s+/g, '-')
              .replace(/[^\p{L}\p{M}\p{N}-]/gu, '')
              .replace(/-+/g, '-'),
          ),
        ];
        if (keys.some((key) => key === requested)) return true;
        return slugKeysMatch(newsSlug, row.slug);
      }) ?? null
    );
  }

  private toListView(
    inc: {
      id: string;
      slug: string;
      currentStage: string;
      currentStatus: string | null;
      updatedAt: Date;
      translations: { locale: 'bn' | 'en'; title: string }[];
      category: {
        slug: string;
        translations: { locale: 'bn' | 'en'; name: string }[];
      };
      subcategory: {
        slug: string;
        translations: { locale: 'bn' | 'en'; name: string }[];
      } | null;
      newsItems: NewsItemRow[];
    },
    locale: RequestLocale,
  ) {
    const latest = inc.newsItems[0];
    return {
      id: inc.id,
      slug: inc.slug,
      title: pickLocaleTitleText(inc.translations, locale),
      category: {
        slug: inc.category.slug,
        name: pickLocaleName(inc.category.translations, locale),
      },
      subcategory: inc.subcategory
        ? {
            slug: inc.subcategory.slug,
            name: pickLocaleName(inc.subcategory.translations, locale),
          }
        : null,
      currentStage: inc.currentStage,
      currentStatus: inc.currentStatus,
      updatedAt: inc.updatedAt.toISOString(),
      latestNewsItem: latest ? mapNewsItem(latest, locale) : null,
    };
  }

  private toDetailView(
    inc: {
      id: string;
      slug: string;
      currentStage: string;
      currentStatus: string | null;
      updatedAt: Date;
      createdAt: Date;
      translations: { locale: 'bn' | 'en'; title: string }[];
      category: {
        slug: string;
        translations: { locale: 'bn' | 'en'; name: string }[];
      };
      subcategory: {
        slug: string;
        translations: { locale: 'bn' | 'en'; name: string }[];
      } | null;
      newsItems: NewsItemRow[];
    },
    locale: RequestLocale,
  ) {
    const newsItems = inc.newsItems.map((n) => mapNewsItem(n, locale));
    return {
      ...this.toListView(inc, locale),
      createdAt: inc.createdAt.toISOString(),
      newsItems,
      latestNewsItemId: newsItems.length
        ? newsItems[newsItems.length - 1].id
        : null,
    };
  }
}
