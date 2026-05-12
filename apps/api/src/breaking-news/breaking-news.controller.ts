import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocaleOnlyQueryDto } from '../archive-content/locale-query.dto';
import { BreakingNewsService } from './breaking-news.service';

@ApiTags('breaking-news')
@Controller('breaking-news')
export class BreakingNewsController {
  constructor(private readonly breakingNews: BreakingNewsService) {}

  @Get()
  @ApiOperation({ summary: 'Active breaking news lines for ticker (locale title)' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.breakingNews.listPublic(query.locale);
  }
}