import { PrismaClient } from '@prisma/client';
import { buildNewsItemSlug } from '../src/common/slug.util';

const prisma = new PrismaClient();

async function main() {
  const items = await prisma.newsItem.findMany({
    orderBy: { createdAt: 'asc' },
    select: { id: true, slug: true, headlineEn: true, headlineBn: true },
  });

  const used = new Set<string>();

  for (const item of items) {
    const desired = buildNewsItemSlug(item.headlineEn, item.headlineBn);
    const needsUpdate =
      item.slug.startsWith('update-') ||
      item.slug !== desired;

    if (!needsUpdate) {
      used.add(item.slug);
      continue;
    }

    let slug = desired;
    let n = 0;
    while (used.has(slug)) {
      n += 1;
      slug = `${desired}-${n}`;
    }

    await prisma.newsItem.update({
      where: { id: item.id },
      data: { slug },
    });
    used.add(slug);
    console.log(`${item.slug} -> ${slug}`);
  }

  console.log(`Checked ${items.length} news item slug(s).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
