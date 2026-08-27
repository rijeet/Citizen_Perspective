import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { CreateFeaturedBannerDto } from './dto/create-featured-banner.dto';
import { AdminFeaturedBannersService } from './featured-banners.service';

@ApiTags('admin-featured-banners')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/featured-banners')
export class AdminFeaturedBannersController {
  constructor(private readonly banners: AdminFeaturedBannersService) {}

  @Get()
  list() {
    return this.banners.list();
  }

  @Post()
  create(@Body() dto: CreateFeaturedBannerDto) {
    return this.banners.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banners.remove(id);
  }
}
