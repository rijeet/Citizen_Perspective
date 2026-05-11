import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import * as path from 'path';
import { ArticlesModule } from './articles/articles.module';
import { PrismaModule } from './prisma/prisma.module';

/** Compiled as `apps/api/dist/src/*.js` → package root `apps/api` */
const apiPackageDir = path.join(__dirname, '..', '..');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // Prisma resolves `DATABASE_URL`; load regardless of cwd (root vs apps/api).
      envFilePath: [
        path.join(apiPackageDir, '.env'),
        path.resolve(process.cwd(), 'apps/api/.env'),
        path.resolve(process.cwd(), '.env'),
        path.join(apiPackageDir, '..', '..', '.env'),
      ],
      expandVariables: true,
    }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    PrismaModule,
    ArticlesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
