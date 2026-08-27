import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocaleQueryDto } from '../common/locale-query.dto';
import { FeaturedBannersService } from './featured-banners.service';

@ApiTags('featured-banners')
@Controller('featured-banners')
export class FeaturedBannersController {
  constructor(private readonly banners: FeaturedBannersService) {}

  @Get()
  @ApiOperation({ summary: 'List featured banners (newest first)' })
  list(@Query() query: LocaleQueryDto) {
    return this.banners.list(query.locale);
  }
}
