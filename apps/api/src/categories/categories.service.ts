import { Injectable } from '@nestjs/common';
import { ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  pickLocaleName,
  type RequestLocale,
} from '../governance/governance-locale.util';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublic(locale: RequestLocale) {
    const categories = await this.prisma.category.findMany({
      orderBy: [{ sortOrder: 'asc' }, { slug: 'asc' }],
      include: {
        translations: true,
        subcategories: { include: { translations: true } },
        _count: {
          select: {
            incidents: {
              where: { reviewStatus: ReviewStatus.PUBLISHED },
            },
          },
        },
      },
    });

    return categories.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: pickLocaleName(c.translations, locale),
      incidentCount: c._count.incidents,
      subcategories: c.subcategories.map((s) => ({
        id: s.id,
        slug: s.slug,
        name: pickLocaleName(s.translations, locale),
      })),
    }));
  }
}
