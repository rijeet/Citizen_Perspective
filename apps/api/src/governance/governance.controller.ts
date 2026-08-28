import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GovernanceTrackerQueryDto } from './dto/governance-tracker-query.dto';
import { GovernanceTrackerService } from './governance-tracker.service';

@ApiTags('governance')
@Controller('governance')
export class GovernanceController {
  constructor(private readonly tracker: GovernanceTrackerService) {}

  @Get('tracker')
  @ApiOperation({
    summary:
      'Accountability tracker bundle (categories, incidents, banners) for external sites',
  })
  getTracker(@Query() query: GovernanceTrackerQueryDto) {
    return this.tracker.getTracker(query);
  }
}
