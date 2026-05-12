import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TimelineEventsService } from './timeline-events.service';
import { LocaleOnlyQueryDto } from './locale-query.dto';

@ApiTags('timeline-events')
@Controller('timeline-events')
export class TimelineEventsController {
  constructor(private readonly timeline: TimelineEventsService) {}

  @Get()
  @ApiOperation({ summary: 'List published timeline events (chronological)' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.timeline.listPublished(query.locale);
  }
}
