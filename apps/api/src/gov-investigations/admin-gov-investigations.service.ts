import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GovInvestigationStage,
  GovInvestigationStatus,
  Locale,
  NewsSourceType,
  ReviewStatus,
} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateGovInvestigationDto } from './dto/create-gov-investigation.dto';
import type { CreateGovInvestigationUpdateDto } from './dto/create-gov-investigation-update.dto';
import type { UpdateGovInvestigationDto } from './dto/update-gov-investigation.dto';

@Injectable()
export class AdminGovInvestigationsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.governmentInvestigation.findMany({
      orderBy: { updatedAt: 'desc' },
      include: {
        translations: true,
        incident: { include: { translations: true } },
        updates: { orderBy: { createdAt: 'desc' }, take: 1 },
        _count: { select: { updates: true } },
      },
    });
  }

  async getOne(id: string) {
    const row = await this.prisma.governmentInvestigation.findUnique({
      where: { id },
      include: {
        translations: true,
        incident: { include: { translations: true } },
        updates: { orderBy: { createdAt: 'asc' } },
      },
    });
    if (!row) throw new NotFoundException('Investigation not found');
    return row;
  }

  async create(dto: CreateGovInvestigationDto) {
    this.assertUniqueLocales(dto.translations.map((t) => t.locale));

    if (dto.incidentId) {
      const incident = await this.prisma.incident.findUnique({
        where: { id: dto.incidentId },
      });
      if (!incident) throw new NotFoundException('Incident not found');
    }

    return this.prisma.governmentInvestigation.create({
      data: {
        incidentId: dto.incidentId ?? null,
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
        incident: { include: { translations: true } },
        updates: true,
      },
    });
  }

  async update(id: string, dto: UpdateGovInvestigationDto) {
    const row = await this.prisma.governmentInvestigation.findUnique({
      where: { id },
    });
    if (!row) throw new NotFoundException('Investigation not found');

    if (dto.incidentId) {
      const incident = await this.prisma.incident.findUnique({
        where: { id: dto.incidentId },
      });
      if (!incident) throw new NotFoundException('Incident not found');
    }

    if (dto.translations) {
      this.assertUniqueLocales(dto.translations.map((t) => t.locale));
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.governmentInvestigation.update({
        where: { id },
        data: {
          ...(dto.incidentId !== undefined && { incidentId: dto.incidentId }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
        },
      });

      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.govInvestigationTranslation.upsert({
            where: {
              investigationId_locale: {
                investigationId: id,
                locale: t.locale as Locale,
              },
            },
            create: {
              investigationId: id,
              locale: t.locale as Locale,
              title: t.title,
            },
            update: { title: t.title },
          });
        }
      }

      return tx.governmentInvestigation.findUniqueOrThrow({
        where: { id },
        include: {
          translations: true,
          incident: { include: { translations: true } },
          updates: { orderBy: { createdAt: 'asc' } },
        },
      });
    });
  }

  async remove(id: string) {
    const row = await this.prisma.governmentInvestigation.findUnique({
      where: { id },
    });
    if (!row) throw new NotFoundException('Investigation not found');
    await this.prisma.governmentInvestigation.delete({ where: { id } });
    return { deleted: true, id };
  }

  async addUpdate(id: string, dto: CreateGovInvestigationUpdateDto) {
    const row = await this.prisma.governmentInvestigation.findUnique({
      where: { id },
    });
    if (!row) throw new NotFoundException('Investigation not found');

    return this.prisma.$transaction(async (tx) => {
      const update = await tx.governmentInvestigationUpdate.create({
        data: {
          investigationId: id,
          sourceUrl: dto.sourceUrl,
          sourceType: dto.sourceType as NewsSourceType,
          headlineBn: dto.headlineBn,
          headlineEn: dto.headlineEn,
          thumbnailUrl: dto.thumbnailUrl ?? null,
          publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
          stage: dto.stage as GovInvestigationStage,
          status: dto.status as GovInvestigationStatus,
        },
      });

      await tx.governmentInvestigation.update({
        where: { id },
        data: {
          currentStage: dto.stage as GovInvestigationStage,
          currentStatus: dto.status as GovInvestigationStatus,
        },
      });

      return update;
    });
  }

  async removeUpdate(investigationId: string, updateId: string) {
    const update = await this.prisma.governmentInvestigationUpdate.findFirst({
      where: { id: updateId, investigationId },
    });
    if (!update) throw new NotFoundException('Update not found');

    await this.prisma.$transaction(async (tx) => {
      await tx.governmentInvestigationUpdate.delete({ where: { id: updateId } });

      const latest = await tx.governmentInvestigationUpdate.findFirst({
        where: { investigationId },
        orderBy: { createdAt: 'desc' },
      });

      await tx.governmentInvestigation.update({
        where: { id: investigationId },
        data: {
          currentStage: latest?.stage ?? GovInvestigationStage.INCIDENT_OCCURRED,
          currentStatus: latest?.status ?? GovInvestigationStatus.ON_TRACK,
        },
      });
    });

    return { deleted: true, id: updateId };
  }

  private assertUniqueLocales(locales: string[]) {
    if (new Set(locales).size !== locales.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
  }
}
