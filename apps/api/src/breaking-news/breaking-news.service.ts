import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateBreakingNewsItemDto } from '../admin/dto/create-breaking-news-item.dto';
import type { UpdateBreakingNewsItemDto } from '../admin/dto/update-breaking-news-item.dto';
import type { RequestLocale } from '../articles/dto/article-list-query.dto';

export type BreakingNewsTickerItem = {
  id: string;
  title: string;
  href: string | null;
};

@Injectable()
export class BreakingNewsService {
  constructor(private readonly prisma: PrismaService) {}

  private normalizeHref(raw: string | null | undefined): string | null {
    if (raw == null || typeof raw !== 'string') {
      return null;
    }
    const t = raw.trim();
    if (!t) {
      return null;
    }
    if (/^https?:\/\//i.test(t)) {
      return t;
    }
    return t.startsWith('/') ? t : `/${t}`;
  }

  async listPublic(locale: RequestLocale): Promise<BreakingNewsTickerItem[]> {
    const rows = await this.prisma.breakingNewsItem.findMany({
      where: { active: true },
      orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
      select: { id: true, titleBn: true, titleEn: true, href: true },
    });
    return rows.map((r) => ({
      id: r.id,
      title: locale === 'en' ? r.titleEn : r.titleBn,
      href: r.href,
    }));
  }

  listAdmin() {
    return this.prisma.breakingNewsItem.findMany({
      orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
    });
  }

  async create(dto: CreateBreakingNewsItemDto) {
    return this.prisma.breakingNewsItem.create({
      data: {
        titleBn: dto.titleBn.trim(),
        titleEn: dto.titleEn.trim(),
        href: this.normalizeHref(dto.href),
        active: dto.active ?? true,
        sortOrder: dto.sortOrder ?? 0,
      },
    });
  }

  async update(id: string, dto: UpdateBreakingNewsItemDto) {
    const row = await this.prisma.breakingNewsItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Breaking news item not found');
    }
    return this.prisma.breakingNewsItem.update({
      where: { id },
      data: {
        ...(dto.titleBn !== undefined && { titleBn: dto.titleBn.trim() }),
        ...(dto.titleEn !== undefined && { titleEn: dto.titleEn.trim() }),
        ...(dto.href !== undefined && {
          href:
            dto.href === null || dto.href === ''
              ? null
              : this.normalizeHref(dto.href),
        }),
        ...(dto.active !== undefined && { active: dto.active }),
        ...(dto.sortOrder !== undefined && { sortOrder: dto.sortOrder }),
      },
    });
  }

  async remove(id: string) {
    const row = await this.prisma.breakingNewsItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Breaking news item not found');
    }
    await this.prisma.breakingNewsItem.delete({ where: { id } });
    return { deleted: true, id };
  }
}
