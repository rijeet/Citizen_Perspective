import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pickLocaleTitle, type RequestLocale } from './locale.util';
import type { CreateMediaItemDto } from '../admin/dto/create-media-item.dto';
import type { UpdateMediaItemDto } from '../admin/dto/update-media-item.dto';

export type MediaItemView = {
  id: string;
  mediaUrl: string;
  publishedAt: string | null;
  title: string;
  caption: string | null;
  locale: RequestLocale;
  tags: string[];
};

@Injectable()
export class MediaItemsService {
  constructor(private readonly prisma: PrismaService) {}

  private toView(
    row: {
      id: string;
      mediaUrl: string;
      publishedAt: Date | null;
      tags: string[];
      translations: { locale: Locale; title: string; caption: string | null }[];
    },
    locale: RequestLocale,
  ): MediaItemView {
    const t = pickLocaleTitle(row.translations, locale);
    const pick = t ?? row.translations[0];
    return {
      id: row.id,
      mediaUrl: row.mediaUrl,
      publishedAt: row.publishedAt?.toISOString() ?? null,
      title: pick?.title ?? '',
      caption: pick?.caption ?? null,
      locale,
      tags: row.tags ?? [],
    };
  }

  listPublished(
    locale: RequestLocale,
    tag?: string,
  ): Promise<MediaItemView[]> {
    const tagTrim = tag?.trim();
    const where: {
      reviewStatus: 'PUBLISHED';
      tags?: { has: string };
    } = { reviewStatus: 'PUBLISHED' };
    if (tagTrim) {
      where.tags = { has: tagTrim };
    }
    return this.prisma.mediaItem
      .findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
        include: { translations: true },
      })
      .then((rows) => rows.map((r) => this.toView(r, locale)));
  }

  listAdmin() {
    return this.prisma.mediaItem.findMany({
      orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
      include: { translations: true },
    });
  }

  getById(id: string) {
    return this.prisma.mediaItem.findUnique({
      where: { id },
      include: { translations: true },
    });
  }

  async create(dto: CreateMediaItemDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
    const tags = (dto.tags ?? [])
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    return this.prisma.mediaItem.create({
      data: {
        mediaUrl: dto.mediaUrl,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        tags,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            caption: t.caption ?? null,
          })),
        },
      },
      include: { translations: true },
    });
  }

  async update(id: string, dto: UpdateMediaItemDto) {
    const row = await this.prisma.mediaItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Media item not found');
    }
    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }
    return this.prisma.$transaction(async (tx) => {
      await tx.mediaItem.update({
        where: { id },
        data: {
          ...(dto.mediaUrl !== undefined && { mediaUrl: dto.mediaUrl }),
          ...(dto.publishedAt !== undefined && {
            publishedAt:
              dto.publishedAt === null ? null : new Date(dto.publishedAt),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
          ...(dto.tags !== undefined && {
            tags: dto.tags.map((x) => x.trim()).filter((x) => x.length > 0),
          }),
        },
      });
      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.mediaItemTranslation.upsert({
            where: {
              mediaItemId_locale: {
                mediaItemId: id,
                locale: t.locale as Locale,
              },
            },
            create: {
              mediaItemId: id,
              locale: t.locale as Locale,
              title: t.title,
              caption: t.caption ?? null,
            },
            update: {
              title: t.title,
              caption: t.caption ?? null,
            },
          });
        }
      }
      return tx.mediaItem.findUniqueOrThrow({
        where: { id },
        include: { translations: true },
      });
    });
  }

  async remove(id: string) {
    const row = await this.prisma.mediaItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Media item not found');
    }
    await this.prisma.mediaItem.delete({ where: { id } });
    return { deleted: true, id };
  }
}
