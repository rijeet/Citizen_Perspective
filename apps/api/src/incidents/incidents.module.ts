import { Module } from '@nestjs/common';
import { AdminIncidentsController } from './admin-incidents.controller';
import { AdminIncidentsService } from './admin-incidents.service';
import { IncidentsController } from './incidents.controller';
import { IncidentsService } from './incidents.service';

@Module({
  controllers: [IncidentsController, AdminIncidentsController],
  providers: [IncidentsService, AdminIncidentsService],
  exports: [IncidentsService, AdminIncidentsService],
})
export class IncidentsModule {}
