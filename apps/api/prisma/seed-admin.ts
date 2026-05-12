import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { loadEnvForSeed } from './load-env-for-seed';

loadEnvForSeed();

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error(
      'Set ADMIN_EMAIL and ADMIN_PASSWORD (e.g. in apps/api/.env or repo root .env), then run: npm run db:seed:admin',
    );
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(adminPassword, 10);
  await prisma.admin.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: { email: adminEmail, passwordHash },
  });
  console.log(`Admin upserted: ${adminEmail}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
