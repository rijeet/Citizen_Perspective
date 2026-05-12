import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ArchiveContentModule } from '../archive-content/archive-content.module';
import { AdminArticlesController } from './admin-articles.controller';
import { AdminArticlesService } from './admin-articles.service';
import { AdminMediaItemsController } from './admin-media-items.controller';
import { AdminSourcesController } from './admin-sources.controller';
import { AdminSourcesService } from './admin-sources.service';
import { AdminTimelineEventsController } from './admin-timeline-events.controller';
import { AdminVideosController } from './admin-videos.controller';

@Module({
  imports: [AuthModule, ArchiveContentModule],
  controllers: [
    AdminArticlesController,
    AdminSourcesController,
    AdminVideosController,
    AdminMediaItemsController,
    AdminTimelineEventsController,
  ],
  providers: [AdminArticlesService, AdminSourcesService],
})
export class AdminModule {}
