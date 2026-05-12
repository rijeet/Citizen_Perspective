import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AdminBreakingNewsController } from './admin-breaking-news.controller';
import { BreakingNewsController } from './breaking-news.controller';
import { BreakingNewsService } from './breaking-news.service';

@Module({
  imports: [PrismaModule],
  providers: [BreakingNewsService],
  controllers: [BreakingNewsController, AdminBreakingNewsController],
  exports: [BreakingNewsService],
})
export class BreakingNewsModule {}
