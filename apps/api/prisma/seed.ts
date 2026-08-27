import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { loadEnvForSeed } from "./load-env-for-seed";

loadEnvForSeed();

const prisma = new PrismaClient();

/** Remove all public/archive content. Admin accounts are kept. */
async function wipeContentData() {
  await prisma.externalVideo.deleteMany();
  await prisma.mediaItem.deleteMany();
  await prisma.timelineEvent.deleteMany();
  await prisma.breakingNewsItem.deleteMany();
  await prisma.newsItem.deleteMany();
  await prisma.governmentInvestigationUpdate.deleteMany();
  await prisma.governmentInvestigation.deleteMany();
  await prisma.incident.deleteMany();
  await prisma.subcategory.deleteMany();
  await prisma.category.deleteMany();
  await prisma.featuredBanner.deleteMany();
  await prisma.articleTranslation.deleteMany();
  await prisma.article.deleteMany();
  await prisma.source.deleteMany();
}

async function upsertAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminEmail && adminPassword) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.admin.upsert({
      where: { email: adminEmail },
      update: { passwordHash },
      create: { email: adminEmail, passwordHash },
    });
    console.log(`Admin upserted: ${adminEmail}`);
    return;
  }

  if (adminEmail && !adminPassword) {
    console.warn(
      "ADMIN_EMAIL is set but ADMIN_PASSWORD is missing; skipping admin upsert. Use `npm run db:seed:admin` after setting both.",
    );
  } else if (!adminEmail && adminPassword) {
    console.warn(
      "ADMIN_PASSWORD is set but ADMIN_EMAIL is missing; skipping admin upsert.",
    );
  } else {
    console.log(
      "No admin env vars: set ADMIN_EMAIL and ADMIN_PASSWORD to upsert an admin (or run `npm run db:seed:admin`).",
    );
  }
}

async function main() {
  await wipeContentData();
  console.log("All content data removed (articles, incidents, categories, etc.).");
  await upsertAdmin();
  console.log("Seed finished — database is empty except admin account(s).");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
