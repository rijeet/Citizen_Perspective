import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocaleQueryDto } from '../common/locale-query.dto';
import { GovInvestigationsService } from './gov-investigations.service';

@ApiTags('gov-investigations')
@Controller('gov-investigations')
export class GovInvestigationsController {
  constructor(private readonly investigations: GovInvestigationsService) {}

  @Get()
  @ApiOperation({ summary: 'List published government investigations' })
  list(@Query() query: LocaleQueryDto) {
    return this.investigations.list(query.locale);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get investigation with update timeline' })
  getOne(@Param('id') id: string, @Query() query: LocaleQueryDto) {
    return this.investigations.getOne(id, query.locale);
  }
}
