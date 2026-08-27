import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Locale } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateCategoryDto } from './dto/create-category.dto';
import type { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import type { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class AdminCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.category.findMany({
      orderBy: [{ sortOrder: 'asc' }, { slug: 'asc' }],
      include: {
        translations: true,
        subcategories: { include: { translations: true } },
        _count: { select: { incidents: true } },
      },
    });
  }

  async getOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        translations: true,
        subcategories: { include: { translations: true } },
      },
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async create(dto: CreateCategoryDto) {
    this.assertUniqueLocales(dto.translations.map((t) => t.locale));
    const existing = await this.prisma.category.findUnique({
      where: { slug: dto.slug },
    });
    if (existing) throw new ConflictException('Slug already in use');

    return this.prisma.category.create({
      data: {
        slug: dto.slug,
        sortOrder: dto.sortOrder ?? 0,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            name: t.name,
          })),
        },
      },
      include: {
        translations: true,
        subcategories: { include: { translations: true } },
      },
    });
  }

  async update(id: string, dto: UpdateCategoryDto) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');

    if (dto.slug && dto.slug !== category.slug) {
      const taken = await this.prisma.category.findUnique({
        where: { slug: dto.slug },
      });
      if (taken) throw new ConflictException('Slug already in use');
    }

    if (dto.translations) {
      this.assertUniqueLocales(dto.translations.map((t) => t.locale));
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.category.update({
        where: { id },
        data: {
          ...(dto.slug !== undefined && { slug: dto.slug }),
          ...(dto.sortOrder !== undefined && { sortOrder: dto.sortOrder }),
        },
      });

      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.categoryTranslation.upsert({
            where: {
              categoryId_locale: {
                categoryId: id,
                locale: t.locale as Locale,
              },
            },
            create: {
              categoryId: id,
              locale: t.locale as Locale,
              name: t.name,
            },
            update: { name: t.name },
          });
        }
      }

      return tx.category.findUniqueOrThrow({
        where: { id },
        include: {
          translations: true,
          subcategories: { include: { translations: true } },
        },
      });
    });
  }

  async remove(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    await this.prisma.category.delete({ where: { id } });
    return { deleted: true, id };
  }

  async createSubcategory(categoryId: string, dto: CreateSubcategoryDto) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) throw new NotFoundException('Category not found');

    this.assertUniqueLocales(dto.translations.map((t) => t.locale));

    const existing = await this.prisma.subcategory.findUnique({
      where: { categoryId_slug: { categoryId, slug: dto.slug } },
    });
    if (existing) throw new ConflictException('Subcategory slug already in use');

    return this.prisma.subcategory.create({
      data: {
        categoryId,
        slug: dto.slug,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            name: t.name,
          })),
        },
      },
      include: { translations: true },
    });
  }

  async removeSubcategory(id: string) {
    const sub = await this.prisma.subcategory.findUnique({ where: { id } });
    if (!sub) throw new NotFoundException('Subcategory not found');
    await this.prisma.subcategory.delete({ where: { id } });
    return { deleted: true, id };
  }

  private assertUniqueLocales(locales: string[]) {
    if (new Set(locales).size !== locales.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
  }
}
