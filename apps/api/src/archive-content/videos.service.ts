import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EmbedPlatform, Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pickLocaleTitle, type RequestLocale } from './locale.util';
import type { CreateExternalVideoDto } from '../admin/dto/create-external-video.dto';
import type { UpdateExternalVideoDto } from '../admin/dto/update-external-video.dto';

export type ExternalVideoView = {
  id: string;
  platform: EmbedPlatform;
  watchUrl: string;
  publishedAt: string | null;
  title: string;
  description: string | null;
  locale: RequestLocale;
  source: { name: string; url: string | null } | null;
  tags: string[];
};

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  private toView(
    row: {
      id: string;
      platform: EmbedPlatform;
      watchUrl: string;
      publishedAt: Date | null;
      tags: string[];
      source: { name: string; url: string | null } | null;
      translations: { locale: Locale; title: string; description: string | null }[];
    },
    locale: RequestLocale,
  ): ExternalVideoView {
    const t = pickLocaleTitle(row.translations, locale);
    const pick = t ?? row.translations[0];
    return {
      id: row.id,
      platform: row.platform,
      watchUrl: row.watchUrl,
      publishedAt: row.publishedAt?.toISOString() ?? null,
      title: pick?.title ?? '',
      description: pick?.description ?? null,
      locale,
      source: row.source
        ? { name: row.source.name, url: row.source.url }
        : null,
      tags: row.tags ?? [],
    };
  }

  listPublished(
    locale: RequestLocale,
    tag?: string,
  ): Promise<ExternalVideoView[]> {
    const tagTrim = tag?.trim();
    const where: {
      reviewStatus: 'PUBLISHED';
      tags?: { has: string };
    } = { reviewStatus: 'PUBLISHED' };
    if (tagTrim) {
      where.tags = { has: tagTrim };
    }
    return this.prisma.externalVideo
      .findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
        include: {
          translations: true,
          source: { select: { name: true, url: true } },
        },
      })
      .then((rows) => rows.map((r) => this.toView(r, locale)));
  }

  listAdmin() {
    return this.prisma.externalVideo.findMany({
      orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
      include: { translations: true, source: true },
    });
  }

  getById(id: string) {
    return this.prisma.externalVideo.findUnique({
      where: { id },
      include: { translations: true, source: true },
    });
  }

  async create(dto: CreateExternalVideoDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
    const tags = (dto.tags ?? [])
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    const sid = dto.sourceId?.trim();
    return this.prisma.externalVideo.create({
      data: {
        platform: dto.platform as EmbedPlatform,
        watchUrl: dto.watchUrl,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        ...(sid ? { sourceId: sid } : {}),
        tags,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            description: t.description ?? null,
          })),
        },
      },
      include: { translations: true, source: true },
    });
  }

  async update(id: string, dto: UpdateExternalVideoDto) {
    const v = await this.prisma.externalVideo.findUnique({ where: { id } });
    if (!v) {
      throw new NotFoundException('Video not found');
    }
    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }
    return this.prisma.$transaction(async (tx) => {
      await tx.externalVideo.update({
        where: { id },
        data: {
          ...(dto.platform !== undefined && {
            platform: dto.platform as EmbedPlatform,
          }),
          ...(dto.watchUrl !== undefined && { watchUrl: dto.watchUrl }),
          ...(dto.publishedAt !== undefined && {
            publishedAt:
              dto.publishedAt === null ? null : new Date(dto.publishedAt),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
          ...(dto.sourceId !== undefined && {
            sourceId: dto.sourceId?.trim() ? dto.sourceId.trim() : null,
          }),
          ...(dto.tags !== undefined && {
            tags: dto.tags.map((x) => x.trim()).filter((x) => x.length > 0),
          }),
        },
      });
      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.externalVideoTranslation.upsert({
            where: {
              videoId_locale: { videoId: id, locale: t.locale as Locale },
            },
            create: {
              videoId: id,
              locale: t.locale as Locale,
              title: t.title,
              description: t.description ?? null,
            },
            update: {
              title: t.title,
              description: t.description ?? null,
            },
          });
        }
      }
      return tx.externalVideo.findUniqueOrThrow({
        where: { id },
        include: { translations: true, source: true },
      });
    });
  }

  async remove(id: string) {
    const v = await this.prisma.externalVideo.findUnique({ where: { id } });
    if (!v) {
      throw new NotFoundException('Video not found');
    }
    await this.prisma.externalVideo.delete({ where: { id } });
    return { deleted: true, id };
  }
}
