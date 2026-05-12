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
import { VideosService } from '../archive-content/videos.service';
import { CreateExternalVideoDto } from './dto/create-external-video.dto';
import { UpdateExternalVideoDto } from './dto/update-external-video.dto';

@ApiTags('admin-videos')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/videos')
export class AdminVideosController {
  constructor(private readonly videos: VideosService) {}

  @Get()
  @ApiOperation({ summary: 'List all video embeds' })
  list() {
    return this.videos.listAdmin();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one video with translations' })
  async getOne(@Param('id') id: string) {
    const row = await this.videos.getById(id);
    if (!row) {
      throw new NotFoundException('Video not found');
    }
    return row;
  }

  @Post()
  @ApiOperation({ summary: 'Add YouTube or Facebook video URL' })
  create(@Body() dto: CreateExternalVideoDto) {
    return this.videos.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update video' })
  update(@Param('id') id: string, @Body() dto: UpdateExternalVideoDto) {
    return this.videos.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete video' })
  remove(@Param('id') id: string) {
    return this.videos.remove(id);
  }
}
