import { PrismaClient } from '@prisma/client';
import { loadEnvForSeed } from './load-env-for-seed';

loadEnvForSeed();

const prisma = new PrismaClient();

async function main() {
  const n = await prisma.breakingNewsItem.count();
  if (n > 0) {
    console.log(`Breaking news: ${n} row(s) already exist — skip.`);
    return;
  }
  await prisma.breakingNewsItem.createMany({
    data: [
      {
        sortOrder: 0,
        active: true,
        titleBn: 'টিকাদান অভিযান: যাচাইকৃত রিপোর্ট ও উৎস',
        titleEn: 'Vaccination campaign: verified reporting and sources',
        href: '/articles/measles-vaccination-campaign-2024',
      },
      {
        sortOrder: 1,
        active: true,
        titleBn: 'স্বাস্থ্য অধিদপ্তর — প্রাথমিক তথ্য',
        titleEn: 'DGHS — primary information',
        href: 'https://dghs.gov.bd',
      },
    ],
  });
  console.log('Breaking news: inserted 2 sample ticker lines.');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
