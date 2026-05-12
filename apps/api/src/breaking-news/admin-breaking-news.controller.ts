import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { CreateBreakingNewsItemDto } from '../admin/dto/create-breaking-news-item.dto';
import { UpdateBreakingNewsItemDto } from '../admin/dto/update-breaking-news-item.dto';
import { BreakingNewsService } from './breaking-news.service';

@ApiTags('admin-breaking-news')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/breaking-news')
export class AdminBreakingNewsController {
  constructor(private readonly breakingNews: BreakingNewsService) {}

  @Get()
  @ApiOperation({ summary: 'List all breaking news ticker lines' })
  list() {
    return this.breakingNews.listAdmin();
  }

  @Post()
  @ApiOperation({ summary: 'Create ticker line' })
  create(@Body() dto: CreateBreakingNewsItemDto) {
    return this.breakingNews.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update ticker line' })
  update(@Param('id') id: string, @Body() dto: UpdateBreakingNewsItemDto) {
    return this.breakingNews.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete ticker line' })
  remove(@Param('id') id: string) {
    return this.breakingNews.remove(id);
  }
}
