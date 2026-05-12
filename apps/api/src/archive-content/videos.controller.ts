import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VideosService } from './videos.service';
import { LocaleOnlyQueryDto } from './locale-query.dto';

@ApiTags('videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videos: VideosService) {}

  @Get()
  @ApiOperation({ summary: 'List published YouTube / Facebook embeds' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.videos.listPublished(query.locale, query.tag);
  }
}
