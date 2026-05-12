import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pickLocaleTitle, type RequestLocale } from './locale.util';
import type { CreateTimelineEventDto } from '../admin/dto/create-timeline-event.dto';
import type { UpdateTimelineEventDto } from '../admin/dto/update-timeline-event.dto';

export type TimelineEventView = {
  id: string;
  eventAt: string;
  title: string;
  bodyMd: string;
  locale: RequestLocale;
};

@Injectable()
export class TimelineEventsService {
  constructor(private readonly prisma: PrismaService) {}

  private toView(
    row: {
      id: string;
      eventAt: Date;
      translations: { locale: Locale; title: string; bodyMd: string }[];
    },
    locale: RequestLocale,
  ): TimelineEventView {
    const t = pickLocaleTitle(row.translations, locale);
    const pick = t ?? row.translations[0];
    return {
      id: row.id,
      eventAt: row.eventAt.toISOString(),
      title: pick?.title ?? '',
      bodyMd: pick?.bodyMd ?? '',
      locale,
    };
  }

  listPublished(locale: RequestLocale): Promise<TimelineEventView[]> {
    return this.prisma.timelineEvent
      .findMany({
        where: { reviewStatus: 'PUBLISHED' },
        orderBy: [{ eventAt: 'asc' }, { id: 'asc' }],
        include: { translations: true },
      })
      .then((rows) => rows.map((r) => this.toView(r, locale)));
  }

  listAdmin() {
    return this.prisma.timelineEvent.findMany({
      orderBy: [{ eventAt: 'asc' }, { id: 'asc' }],
      include: { translations: true },
    });
  }

  getById(id: string) {
    return this.prisma.timelineEvent.findUnique({
      where: { id },
      include: { translations: true },
    });
  }

  async create(dto: CreateTimelineEventDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
    return this.prisma.timelineEvent.create({
      data: {
        eventAt: new Date(dto.eventAt),
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            bodyMd: t.bodyMd,
          })),
        },
      },
      include: { translations: true },
    });
  }

  async update(id: string, dto: UpdateTimelineEventDto) {
    const row = await this.prisma.timelineEvent.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Timeline event not found');
    }
    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }
    return this.prisma.$transaction(async (tx) => {
      await tx.timelineEvent.update({
        where: { id },
        data: {
          ...(dto.eventAt !== undefined && {
            eventAt: new Date(dto.eventAt),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
        },
      });
      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.timelineEventTranslation.upsert({
            where: {
              eventId_locale: { eventId: id, locale: t.locale as Locale },
            },
            create: {
              eventId: id,
              locale: t.locale as Locale,
              title: t.title,
              bodyMd: t.bodyMd,
            },
            update: {
              title: t.title,
              bodyMd: t.bodyMd,
            },
          });
        }
      }
      return tx.timelineEvent.findUniqueOrThrow({
        where: { id },
        include: { translations: true },
      });
    });
  }

  async remove(id: string) {
    const row = await this.prisma.timelineEvent.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Timeline event not found');
    }
    await this.prisma.timelineEvent.delete({ where: { id } });
    return { deleted: true, id };
  }
}
