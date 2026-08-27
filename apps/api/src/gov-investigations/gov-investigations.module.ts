import { Module } from '@nestjs/common';
import { AdminGovInvestigationsController } from './admin-gov-investigations.controller';
import { AdminGovInvestigationsService } from './admin-gov-investigations.service';
import { GovInvestigationsController } from './gov-investigations.controller';
import { GovInvestigationsService } from './gov-investigations.service';

@Module({
  controllers: [GovInvestigationsController, AdminGovInvestigationsController],
  providers: [GovInvestigationsService, AdminGovInvestigationsService],
})
export class GovInvestigationsModule {}
