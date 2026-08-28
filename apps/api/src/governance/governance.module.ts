import { Module } from '@nestjs/common';
import { CategoriesModule } from '../categories/categories.module';
import { FeaturedBannersModule } from '../featured-banners/featured-banners.module';
import { IncidentsModule } from '../incidents/incidents.module';
import { GovernanceController } from './governance.controller';
import { GovernanceTrackerService } from './governance-tracker.service';

@Module({
  imports: [CategoriesModule, IncidentsModule, FeaturedBannersModule],
  controllers: [GovernanceController],
  providers: [GovernanceTrackerService],
})
export class GovernanceModule {}
