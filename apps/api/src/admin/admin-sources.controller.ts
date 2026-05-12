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
import { AdminSourcesService } from './admin-sources.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';

@ApiTags('admin-sources')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/sources')
export class AdminSourcesController {
  constructor(private readonly sources: AdminSourcesService) {}

  @Get()
  @ApiOperation({ summary: 'List sources' })
  list() {
    return this.sources.list();
  }

  @Post()
  @ApiOperation({ summary: 'Create source' })
  create(@Body() dto: CreateSourceDto) {
    return this.sources.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update source' })
  update(@Param('id') id: string, @Body() dto: UpdateSourceDto) {
    return this.sources.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete source (only if no articles)' })
  remove(@Param('id') id: string) {
    return this.sources.remove(id);
  }
}
