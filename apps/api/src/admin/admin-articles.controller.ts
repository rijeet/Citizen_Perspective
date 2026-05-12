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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { AdminArticlesService } from './admin-articles.service';
import { AdminArticleListQueryDto } from './dto/admin-article-list-query.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@ApiTags('admin-articles')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/articles')
export class AdminArticlesController {
  constructor(private readonly articles: AdminArticlesService) {}

  @Get()
  @ApiOperation({ summary: 'List all articles (including drafts)' })
  list(@Query() query: AdminArticleListQueryDto) {
    return this.articles.list(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get article by slug with all translations' })
  getOne(@Param('slug') slug: string) {
    return this.articles.getBySlug(slug);
  }

  @Post()
  @ApiOperation({ summary: 'Create article with translations' })
  create(@Body() dto: CreateArticleDto) {
    return this.articles.create(dto);
  }

  @Patch(':slug')
  @ApiOperation({ summary: 'Update article (partial); upsert translations when provided' })
  update(@Param('slug') slug: string, @Body() dto: UpdateArticleDto) {
    return this.articles.update(slug, dto);
  }

  @Delete(':slug')
  @ApiOperation({ summary: 'Delete article and translations' })
  remove(@Param('slug') slug: string) {
    return this.articles.remove(slug);
  }
}
