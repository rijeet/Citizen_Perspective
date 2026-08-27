import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { RequestLocale } from '../governance/governance-locale.util';

@Injectable()
export class FeaturedBannersService {
  constructor(private readonly prisma: PrismaService) {}

  async list(locale: RequestLocale) {
    const rows = await this.prisma.featuredBanner.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return rows.map((row) => ({
      id: row.id,
      imageUrl: row.imageUrl,
      caption: locale === 'bn' ? row.captionBn : row.captionEn,
      sectionType: row.sectionType,
      createdAt: row.createdAt.toISOString(),
    }));
  }
}

@Injectable()
export class AdminFeaturedBannersService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.featuredBanner.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(dto: {
    imageUrl: string;
    captionBn: string;
    captionEn: string;
    sectionType: string;
  }) {
    return this.prisma.featuredBanner.create({ data: dto });
  }

  async remove(id: string) {
    const row = await this.prisma.featuredBanner.findUnique({ where: { id } });
    if (!row) throw new NotFoundException('Banner not found');
    await this.prisma.featuredBanner.delete({ where: { id } });
    return { deleted: true, id };
  }
}
