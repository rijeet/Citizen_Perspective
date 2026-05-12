import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { TimelineEventsService } from '../archive-content/timeline-events.service';
import { CreateTimelineEventDto } from './dto/create-timeline-event.dto';
import { UpdateTimelineEventDto } from './dto/update-timeline-event.dto';

@ApiTags('admin-timeline-events')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/timeline-events')
export class AdminTimelineEventsController {
  constructor(private readonly timeline: TimelineEventsService) {}

  @Get()
  @ApiOperation({ summary: 'List all timeline events' })
  list() {
    return this.timeline.listAdmin();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const row = await this.timeline.getById(id);
    if (!row) {
      throw new NotFoundException('Timeline event not found');
    }
    return row;
  }

  @Post()
  @ApiOperation({ summary: 'Add timeline event' })
  create(@Body() dto: CreateTimelineEventDto) {
    return this.timeline.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTimelineEventDto) {
    return this.timeline.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeline.remove(id);
  }
}
