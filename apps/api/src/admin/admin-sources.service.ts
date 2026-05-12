import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateSourceDto } from './dto/create-source.dto';
import type { UpdateSourceDto } from './dto/update-source.dto';

@Injectable()
export class AdminSourcesService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.source.findMany({
      orderBy: { name: 'asc' },
      include: { _count: { select: { articles: true } } },
    });
  }

  async create(dto: CreateSourceDto) {
    return this.prisma.source.create({
      data: {
        name: dto.name,
        url: dto.url ?? null,
      },
    });
  }

  async update(id: string, dto: UpdateSourceDto) {
    const s = await this.prisma.source.findUnique({ where: { id } });
    if (!s) {
      throw new NotFoundException('Source not found');
    }
    return this.prisma.source.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.url !== undefined && { url: dto.url }),
      },
    });
  }

  async remove(id: string) {
    const s = await this.prisma.source.findUnique({
      where: { id },
      include: { _count: { select: { articles: true } } },
    });
    if (!s) {
      throw new NotFoundException('Source not found');
    }
    if (s._count.articles > 0) {
      throw new ConflictException(
        'Cannot delete source while articles reference it',
      );
    }
    await this.prisma.source.delete({ where: { id } });
    return { deleted: true, id };
  }
}
