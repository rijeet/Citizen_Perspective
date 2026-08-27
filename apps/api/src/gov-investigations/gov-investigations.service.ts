import { Injectable, NotFoundException } from '@nestjs/common';
import {
  GovInvestigationStage,
  GovInvestigationStatus,
  ReviewStatus,
} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  pickLocaleTitleText,
  type RequestLocale,
} from '../governance/governance-locale.util';

type UpdateRow = {
  id: string;
  sourceUrl: string;
  sourceType: string;
  headlineBn: string;
  headlineEn: string;
  thumbnailUrl: string | null;
  publishedAt: Date | null;
  stage: GovInvestigationStage;
  status: GovInvestigationStatus;
  createdAt: Date;
};

function daysSince(date: Date): number {
  return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
}

@Injectable()
export class GovInvestigationsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(locale: RequestLocale) {
    const rows = await this.prisma.governmentInvestigation.findMany({
      where: { reviewStatus: ReviewStatus.PUBLISHED },
      orderBy: { updatedAt: 'desc' },
      include: {
        translations: true,
        incident: { include: { translations: true } },
        updates: { orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    return rows.map((row) => this.toListView(row, locale));
  }

  async getOne(id: string, locale: RequestLocale) {
    const row = await this.prisma.governmentInvestigation.findFirst({
      where: { id, reviewStatus: ReviewStatus.PUBLISHED },
      include: {
        translations: true,
        incident: { include: { translations: true } },
        updates: { orderBy: { createdAt: 'asc' } },
      },
    });
    if (!row) throw new NotFoundException('Investigation not found');
    return this.toDetailView(row, locale);
  }

  private toListView(
    row: {
      id: string;
      currentStage: GovInvestigationStage;
      currentStatus: GovInvestigationStatus;
      updatedAt: Date;
      translations: { locale: 'bn' | 'en'; title: string }[];
      incident: {
        slug: string;
        translations: { locale: 'bn' | 'en'; title: string }[];
      } | null;
      updates: UpdateRow[];
    },
    locale: RequestLocale,
  ) {
    const latest = row.updates[0];
    return {
      id: row.id,
      title: pickLocaleTitleText(row.translations, locale),
      currentStage: row.currentStage,
      currentStatus: row.currentStatus,
      updatedAt: row.updatedAt.toISOString(),
      daysSinceLastUpdate: latest ? daysSince(latest.createdAt) : daysSince(row.updatedAt),
      incident: row.incident
        ? {
            slug: row.incident.slug,
            title: pickLocaleTitleText(row.incident.translations, locale),
          }
        : null,
      latestUpdate: latest ? this.mapUpdate(latest, locale) : null,
    };
  }

  private toDetailView(
    row: {
      id: string;
      currentStage: GovInvestigationStage;
      currentStatus: GovInvestigationStatus;
      updatedAt: Date;
      createdAt: Date;
      translations: { locale: 'bn' | 'en'; title: string }[];
      incident: {
        slug: string;
        translations: { locale: 'bn' | 'en'; title: string }[];
      } | null;
      updates: UpdateRow[];
    },
    locale: RequestLocale,
  ) {
    const updates = row.updates.map((u) => this.mapUpdate(u, locale));
    return {
      ...this.toListView(row, locale),
      createdAt: row.createdAt.toISOString(),
      updates,
      latestUpdateId: updates.length ? updates[updates.length - 1].id : null,
    };
  }

  private mapUpdate(update: UpdateRow, locale: RequestLocale) {
    return {
      id: update.id,
      sourceUrl: update.sourceUrl,
      sourceType: update.sourceType,
      headline: locale === 'bn' ? update.headlineBn : update.headlineEn,
      thumbnailUrl: update.thumbnailUrl,
      publishedAt: update.publishedAt?.toISOString() ?? null,
      stage: update.stage,
      status: update.status,
      createdAt: update.createdAt.toISOString(),
    };
  }
}
