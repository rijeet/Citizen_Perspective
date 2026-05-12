import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MediaItemsService } from './media-items.service';
import { MediaItemsController } from './media-items.controller';
import { TimelineEventsService } from './timeline-events.service';
import { TimelineEventsController } from './timeline-events.controller';

@Module({
  imports: [PrismaModule],
  providers: [VideosService, MediaItemsService, TimelineEventsService],
  controllers: [
    VideosController,
    MediaItemsController,
    TimelineEventsController,
  ],
  exports: [VideosService, MediaItemsService, TimelineEventsService],
})
export class ArchiveContentModule {}
