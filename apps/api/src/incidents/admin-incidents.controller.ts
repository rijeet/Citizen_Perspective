import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { AdminIncidentsService } from './admin-incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { CreateNewsItemDto } from './dto/create-news-item.dto';
import { IncidentListQueryDto } from './dto/incident-list-query.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';

@ApiTags('admin-incidents')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/incidents')
export class AdminIncidentsController {
  constructor(private readonly incidents: AdminIncidentsService) {}

  @Get()
  list(@Query() query: IncidentListQueryDto) {
    return this.incidents.list(query);
  }

  @Get('stages/suggest')
  suggestStages(@Query('q') q?: string) {
    return this.incidents.suggestStages(q);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.incidents.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateIncidentDto) {
    return this.incidents.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIncidentDto) {
    return this.incidents.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidents.remove(id);
  }

  @Post(':id/news-items')
  addNewsItem(@Param('id') id: string, @Body() dto: CreateNewsItemDto) {
    return this.incidents.addNewsItem(id, dto);
  }

  @Delete(':id/news-items/:newsItemId')
  removeNewsItem(
    @Param('id') id: string,
    @Param('newsItemId') newsItemId: string,
  ) {
    return this.incidents.removeNewsItem(id, newsItemId);
  }
}
