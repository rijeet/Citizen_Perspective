import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArticleDetailQueryDto } from './dto/article-detail-query.dto';
import { ArticleListQueryDto } from './dto/article-list-query.dto';
import { ArticlesService } from './articles.service';

@ApiTags('articles')@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({
    summary: 'List articles with merged locale fields (?locale=bn|en)',
  })
  list(@Query() query: ArticleListQueryDto) {
    return this.articlesService.list(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Single article by slug' })
  getOne(@Param('slug') slug: string, @Query() query: ArticleDetailQueryDto) {
    return this.articlesService.getBySlug(slug, query.locale);
  }
}
