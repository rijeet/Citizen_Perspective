import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { AdminArticleListQueryDto } from './dto/admin-article-list-query.dto';
import type { CreateArticleDto } from './dto/create-article.dto';
import type { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class AdminArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: AdminArticleListQueryDto) {
    const where =
      query.status && query.status !== 'ALL'
        ? { reviewStatus: query.status as ReviewStatus }
        : {};

    return this.prisma.article.findMany({
      where,
      orderBy: [{ publishedAt: 'desc' }, { slug: 'asc' }],
      include: {
        source: true,
        translations: true,
      },
    });
  }

  async getBySlug(slug: string) {
    const article = await this.prisma.article.findUnique({
      where: { slug },
      include: { source: true, translations: true },
    });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async create(dto: CreateArticleDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }

    const existing = await this.prisma.article.findUnique({
      where: { slug: dto.slug },
    });
    if (existing) {
      throw new ConflictException('Slug already in use');
    }

    const source = await this.prisma.source.findUnique({
      where: { id: dto.sourceId },
    });
    if (!source) {
      throw new NotFoundException('Source not found');
    }

    return this.prisma.article.create({
      data: {
        slug: dto.slug,
        sourceId: dto.sourceId,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
        coverUrl: dto.coverUrl ?? null,
        category: dto.category ?? null,
        tags: (dto.tags ?? [])
          .map((x) => x.trim())
          .filter((x) => x.length > 0),
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            description: t.description ?? null,
            bodyMd: t.bodyMd,
            seoTitle: t.seoTitle ?? null,
            seoDescription: t.seoDescription ?? null,
          })),
        },
      },
      include: { source: true, translations: true },
    });
  }

  async update(slug: string, dto: UpdateArticleDto) {
    const article = await this.prisma.article.findUnique({ where: { slug } });
    if (!article) {
      throw new NotFoundException('Article not found');
    }

    if (dto.slug && dto.slug !== slug) {
      const taken = await this.prisma.article.findUnique({
        where: { slug: dto.slug },
      });
      if (taken) {
        throw new ConflictException('Slug already in use');
      }
    }

    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }

    if (dto.sourceId) {
      const source = await this.prisma.source.findUnique({
        where: { id: dto.sourceId },
      });
      if (!source) {
        throw new NotFoundException('Source not found');
      }
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.article.update({
        where: { id: article.id },
        data: {
          ...(dto.slug !== undefined && { slug: dto.slug }),
          ...(dto.sourceId !== undefined && { sourceId: dto.sourceId }),
          ...(dto.publishedAt !== undefined && {
            publishedAt:
              dto.publishedAt === null ? null : new Date(dto.publishedAt),
          }),
          ...(dto.coverUrl !== undefined && { coverUrl: dto.coverUrl }),
          ...(dto.category !== undefined && { category: dto.category }),
          ...(dto.tags !== undefined && {
            tags: dto.tags.map((x) => x.trim()).filter((x) => x.length > 0),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
        },
      });

      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.articleTranslation.upsert({
            where: {
              articleId_locale: {
                articleId: article.id,
                locale: t.locale as Locale,
              },
            },
            create: {
              articleId: article.id,
              locale: t.locale as Locale,
              title: t.title,
              description: t.description ?? null,
              bodyMd: t.bodyMd,
              seoTitle: t.seoTitle ?? null,
              seoDescription: t.seoDescription ?? null,
            },
            update: {
              title: t.title,
              description: t.description ?? null,
              bodyMd: t.bodyMd,
              seoTitle: t.seoTitle ?? null,
              seoDescription: t.seoDescription ?? null,
            },
          });
        }
      }

      return tx.article.findUniqueOrThrow({
        where: { id: updated.id },
        include: { source: true, translations: true },
      });
    });
  }

  async remove(slug: string) {
    const article = await this.prisma.article.findUnique({ where: { slug } });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    await this.prisma.article.delete({ where: { id: article.id } });
    return { deleted: true, slug };
  }
}
