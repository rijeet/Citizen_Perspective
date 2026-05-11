import { Injectable, NotFoundException } from '@nestjs/common';
import { Locale, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { ArticleListQueryDto, RequestLocale } from './dto/article-list-query.dto';

type TranslationRow = {
  locale: Locale;
  title: string;
  description: string | null;
  bodyMd: string;
  seoTitle: string | null;
  seoDescription: string | null;
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
  locale: RequestLocale;
  source: {
    name: string;
    url: string | null;
  };
};

function pickTranslation(
  rows: TranslationRow[],
  locale: RequestLocale,
): TranslationRow | null {
  const direct = rows.find((t) => t.locale === locale);
  if (direct) return direct;
  const fb: Locale = locale === 'bn' ? 'en' : 'bn';
  return rows.find((t) => t.locale === fb) ?? null;
}

function toArticleView(
  article: {
    id: string;
    slug: string;
    publishedAt: Date | null;
    coverUrl: string | null;
    category: string | null;
    source: { name: string; url: string | null };
    translations: TranslationRow[];
  },
  locale: RequestLocale,
  includeBody: boolean,
): ArticleView {
  const t = pickTranslation(article.translations, locale);
  if (!t) {
    throw new NotFoundException(`No translation available for slug ${article.slug}`);
  }

  const base: ArticleView = {
    id: article.id,
    slug: article.slug,
    publishedAt: article.publishedAt?.toISOString() ?? null,
    coverUrl: article.coverUrl,
    category: article.category,
    title: t.title,
    description: t.description,
    locale,
    seoTitle: t.seoTitle,
    seoDescription: t.seoDescription,
    source: article.source,
  };

  if (includeBody) {
    base.bodyMd = t.bodyMd;
  }

  return base;
}

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: ArticleListQueryDto): Promise<{
    data: ArticleView[];
    meta: { page: number; pageSize: number; total: number };
  }> {
    const { locale, page, pageSize, q } = query;
    const where: Prisma.ArticleWhereInput = {
      reviewStatus: 'PUBLISHED',
    };

    if (q?.trim()) {
      const term = q.trim();
      where.translations = {
        some: {
          locale: locale as Locale,
          OR: [
            { title: { contains: term, mode: 'insensitive' } },
            { bodyMd: { contains: term, mode: 'insensitive' } },
            { description: { contains: term, mode: 'insensitive' } },
          ],
        },
      };
    }

    const [total, rows] = await Promise.all([
      this.prisma.article.count({ where }),
      this.prisma.article.findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }, { slug: 'asc' }],
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          source: true,
          translations: true,
        },
      }),
    ]);

    const data = rows.map((article) =>
      toArticleView(article, locale, false),
    );

    return { data, meta: { page, pageSize, total } };
  }

  async getBySlug(
    slug: string,
    locale: RequestLocale,
  ): Promise<ArticleView> {
    const article = await this.prisma.article.findFirst({
      where: { slug, reviewStatus: 'PUBLISHED' },
      include: {
        source: true,
        translations: true,
      },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return toArticleView(article, locale, true);
  }
}
