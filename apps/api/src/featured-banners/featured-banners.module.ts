import { Module } from '@nestjs/common';
import { AdminFeaturedBannersController } from './admin-featured-banners.controller';
import {
  AdminFeaturedBannersService,
  FeaturedBannersService,
} from './featured-banners.service';
import { FeaturedBannersController } from './featured-banners.controller';

@Module({
  controllers: [FeaturedBannersController, AdminFeaturedBannersController],
  providers: [FeaturedBannersService, AdminFeaturedBannersService],
  exports: [FeaturedBannersService, AdminFeaturedBannersService],
})
export class FeaturedBannersModule {}
