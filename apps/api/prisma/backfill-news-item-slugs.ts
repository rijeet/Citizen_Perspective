import { PrismaClient } from '@prisma/client';
import { uniqueNewsItemSlug, slugifyText } from '../src/common/slug.util';

const prisma = new PrismaClient();

async function main() {
  const items = await prisma.newsItem.findMany({
    orderBy: { createdAt: 'asc' },
    select: { id: true, slug: true, headlineEn: true },
  });

  const used = new Set<string>();

  for (const item of items) {
    const desired = slugifyText(item.headlineEn);
    const needsUpdate =
      item.slug.startsWith('update-') || item.slug !== desired;

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

  console.log(`Updated ${items.length} news item slug(s) checked.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
