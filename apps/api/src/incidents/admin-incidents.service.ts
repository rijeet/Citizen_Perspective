import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ArticleContentType, Locale, NewsSourceType, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateIncidentDto } from './dto/create-incident.dto';
import type { CreateNewsItemDto } from './dto/create-news-item.dto';
import type { IncidentListQueryDto } from './dto/incident-list-query.dto';
import type { UpdateIncidentDto } from './dto/update-incident.dto';
import { resolveNewsItemDescriptionContentType } from './news-item-description.util';
import { uniqueNewsItemSlug } from '../common/slug.util';

@Injectable()
export class AdminIncidentsService {
  constructor(private readonly prisma: PrismaService) {}

  list(query: IncidentListQueryDto) {
    const where =
      query.status && query.status !== 'ALL'
        ? { reviewStatus: query.status as ReviewStatus }
        : {};

    return this.prisma.incident.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      include: {
        translations: true,
        category: { include: { translations: true } },
        subcategory: { include: { translations: true } },
        newsItems: { orderBy: { createdAt: 'desc' }, take: 1 },
        _count: { select: { newsItems: true } },
      },
    });
  }

  async getOne(id: string) {
    const incident = await this.prisma.incident.findUnique({
      where: { id },
      include: {
        translations: true,
        category: { include: { translations: true } },
        subcategory: { include: { translations: true } },
        newsItems: { orderBy: { createdAt: 'asc' } },
      },
    });
    if (!incident) throw new NotFoundException('Incident not found');
    return incident;
  }

  async create(dto: CreateIncidentDto) {
    this.assertUniqueLocales(dto.translations.map((t) => t.locale));

    const existing = await this.prisma.incident.findUnique({
      where: { slug: dto.slug },
    });
    if (existing) throw new ConflictException('Slug already in use');

    const category = await this.prisma.category.findUnique({
      where: { id: dto.categoryId },
    });
    if (!category) throw new NotFoundException('Category not found');

    if (dto.subcategoryId) {
      const sub = await this.prisma.subcategory.findFirst({
        where: { id: dto.subcategoryId, categoryId: dto.categoryId },
      });
      if (!sub) throw new NotFoundException('Subcategory not found');
    }

    return this.prisma.incident.create({
      data: {
        slug: dto.slug,
        categoryId: dto.categoryId,
        subcategoryId: dto.subcategoryId ?? null,
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
          })),
        },
      },
      include: {
        translations: true,
        category: { include: { translations: true } },
        subcategory: { include: { translations: true } },
        newsItems: true,
      },
    });
  }

  async update(id: string, dto: UpdateIncidentDto) {
    const incident = await this.prisma.incident.findUnique({ where: { id } });
    if (!incident) throw new NotFoundException('Incident not found');

    if (dto.slug && dto.slug !== incident.slug) {
      const taken = await this.prisma.incident.findUnique({
        where: { slug: dto.slug },
      });
      if (taken) throw new ConflictException('Slug already in use');
    }

    if (dto.translations) {
      this.assertUniqueLocales(dto.translations.map((t) => t.locale));
    }

    if (dto.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: dto.categoryId },
      });
      if (!category) throw new NotFoundException('Category not found');
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.incident.update({
        where: { id },
        data: {
          ...(dto.slug !== undefined && { slug: dto.slug }),
          ...(dto.categoryId !== undefined && { categoryId: dto.categoryId }),
          ...(dto.subcategoryId !== undefined && {
            subcategoryId: dto.subcategoryId,
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
        },
      });

      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.incidentTranslation.upsert({
            where: {
              incidentId_locale: {
                incidentId: id,
                locale: t.locale as Locale,
              },
            },
            create: {
              incidentId: id,
              locale: t.locale as Locale,
              title: t.title,
            },
            update: { title: t.title },
          });
        }
      }

      return tx.incident.findUniqueOrThrow({
        where: { id },
        include: {
          translations: true,
          category: { include: { translations: true } },
          subcategory: { include: { translations: true } },
          newsItems: { orderBy: { createdAt: 'asc' } },
        },
      });
    });
  }

  async remove(id: string) {
    const incident = await this.prisma.incident.findUnique({ where: { id } });
    if (!incident) throw new NotFoundException('Incident not found');
    await this.prisma.incident.delete({ where: { id } });
    return { deleted: true, id };
  }

  async addNewsItem(incidentId: string, dto: CreateNewsItemDto) {
    const incident = await this.prisma.incident.findUnique({
      where: { id: incidentId },
    });
    if (!incident) throw new NotFoundException('Incident not found');

    return this.prisma.$transaction(async (tx) => {
      const slug = await uniqueNewsItemSlug(
        async (candidate) => {
          const existing = await tx.newsItem.findUnique({
            where: { slug: candidate },
            select: { id: true },
          });
          return Boolean(existing);
        },
        dto.headlineEn,
        dto.headlineBn,
      );

      const newsItem = await tx.newsItem.create({
        data: {
          slug,
          incidentId,
          sourceUrl: dto.sourceUrl,
          sourceType: dto.sourceType as NewsSourceType,
          headlineBn: dto.headlineBn,
          headlineEn: dto.headlineEn,
          descriptionBn: dto.descriptionBn?.trim() || null,
          descriptionEn: dto.descriptionEn?.trim() || null,
          descriptionContentType: resolveNewsItemDescriptionContentType(
            dto.descriptionBn,
            dto.descriptionEn,
            dto.descriptionContentType,
          ),
          thumbnailUrl: dto.thumbnailUrl ?? null,
          publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
          stage: dto.stage,
          status: dto.status ?? null,
        },
      });

      await tx.incident.update({
        where: { id: incidentId },
        data: {
          currentStage: dto.stage,
          currentStatus: dto.status ?? null,
        },
      });

      return newsItem;
    });
  }

  async removeNewsItem(incidentId: string, newsItemId: string) {
    const item = await this.prisma.newsItem.findFirst({
      where: { id: newsItemId, incidentId },
    });
    if (!item) throw new NotFoundException('News item not found');

    await this.prisma.$transaction(async (tx) => {
      await tx.newsItem.delete({ where: { id: newsItemId } });

      const latest = await tx.newsItem.findFirst({
        where: { incidentId },
        orderBy: { createdAt: 'desc' },
      });

      await tx.incident.update({
        where: { id: incidentId },
        data: {
          currentStage: latest?.stage ?? '',
          currentStatus: latest?.status ?? null,
        },
      });
    });

    return { deleted: true, id: newsItemId };
  }

  suggestStages(q?: string) {
    return this.prisma.newsItem.findMany({
      where: q?.trim()
        ? { stage: { contains: q.trim(), mode: 'insensitive' } }
        : undefined,
      select: { stage: true },
      distinct: ['stage'],
      orderBy: { stage: 'asc' },
      take: 20,
    });
  }

  private assertUniqueLocales(locales: string[]) {
    if (new Set(locales).size !== locales.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
  }
}
