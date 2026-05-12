import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { MediaItemsService } from '../archive-content/media-items.service';
import { CreateMediaItemDto } from './dto/create-media-item.dto';
import { UpdateMediaItemDto } from './dto/update-media-item.dto';

@ApiTags('admin-media-items')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/media-items')
export class AdminMediaItemsController {
  constructor(private readonly media: MediaItemsService) {}

  @Get()
  @ApiOperation({ summary: 'List all media URL entries' })
  list() {
    return this.media.listAdmin();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const row = await this.media.getById(id);
    if (!row) {
      throw new NotFoundException('Media item not found');
    }
    return row;
  }

  @Post()
  @ApiOperation({ summary: 'Add media URL with bilingual title/caption' })
  create(@Body() dto: CreateMediaItemDto) {
    return this.media.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMediaItemDto) {
    return this.media.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.media.remove(id);
  }
}
