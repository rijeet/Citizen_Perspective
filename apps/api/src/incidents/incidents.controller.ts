import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocaleQueryDto } from '../common/locale-query.dto';
import { IncidentListQueryDto } from './dto/incident-list-query.dto';
import { IncidentsService } from './incidents.service';

@ApiTags('incidents')
@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidents: IncidentsService) {}

  @Get()
  @ApiOperation({ summary: 'List published incidents' })
  list(@Query() query: IncidentListQueryDto) {
    return this.incidents.list(query);
  }

  @Get(':slug/updates/:newsSlug')
  @ApiOperation({ summary: 'Get a single news update by slug' })
  getNewsItem(
    @Param('slug') slug: string,
    @Param('newsSlug') newsSlug: string,
    @Query() query: LocaleQueryDto,
  ) {
    return this.incidents.getNewsItem(slug, newsSlug, query.locale);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get incident by slug with news timeline' })
  getOne(@Param('slug') slug: string, @Query() query: LocaleQueryDto) {
    return this.incidents.getBySlug(slug, query.locale);
  }
}
