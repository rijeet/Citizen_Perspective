import { PartialType } from '@nestjs/swagger';
import { CreateGovInvestigationDto } from './create-gov-investigation.dto';

export class UpdateGovInvestigationDto extends PartialType(
  CreateGovInvestigationDto,
) {}
