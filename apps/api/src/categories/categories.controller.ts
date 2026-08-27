import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocaleQueryDto } from '../common/locale-query.dto';
import { CategoriesService } from './categories.service';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categories: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List categories with incident counts' })
  list(@Query() query: LocaleQueryDto) {
    return this.categories.listPublic(query.locale);
  }
}
