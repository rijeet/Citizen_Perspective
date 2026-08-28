import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { FeaturedBannersService } from '../featured-banners/featured-banners.service';
import { IncidentsService } from '../incidents/incidents.service';
import type { GovernanceTrackerQueryDto } from './dto/governance-tracker-query.dto';

@Injectable()
export class GovernanceTrackerService {
  constructor(
    private readonly categories: CategoriesService,
    private readonly incidents: IncidentsService,
    private readonly banners: FeaturedBannersService,
  ) {}

  async getTracker(query: GovernanceTrackerQueryDto) {
    const locale = query.locale ?? 'bn';
    const limit = query.incidentLimit ?? 12;

    const [categories, incidentRows, featuredBanners] = await Promise.all([
      this.categories.listPublic(locale),
      this.incidents.list({
        locale,
        category: query.category,
        q: query.q,
      }),
      this.banners.list(locale),
    ]);

    return {
      locale,
      categories,
      incidents: incidentRows.slice(0, limit),
      featuredBanners,
    };
  }
}
