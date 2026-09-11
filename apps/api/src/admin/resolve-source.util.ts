import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service';

export function sourceNameFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export async function resolveSourceId(
  prisma: PrismaService,
  input: { sourceId?: string; sourceUrl?: string },
): Promise<string> {
  if (input.sourceId?.trim()) {
    const source = await prisma.source.findUnique({
      where: { id: input.sourceId.trim() },
    });
    if (!source) throw new NotFoundException('Source not found');
    return source.id;
  }

  const url = input.sourceUrl?.trim();
  if (!url) {
    throw new BadRequestException('Source URL is required');
  }

  const existing = await prisma.source.findFirst({ where: { url } });
  if (existing) return existing.id;

  const created = await prisma.source.create({
    data: { name: sourceNameFromUrl(url), url },
  });
  return created.id;
}
