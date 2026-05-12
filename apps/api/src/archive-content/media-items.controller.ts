import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MediaItemsService } from './media-items.service';
import { LocaleOnlyQueryDto } from './locale-query.dto';

@ApiTags('media-items')
@Controller('media-items')
export class MediaItemsController {
  constructor(private readonly media: MediaItemsService) {}

  @Get()
  @ApiOperation({ summary: 'List published media URLs (images, files, etc.)' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.media.listPublished(query.locale, query.tag);
  }
}
