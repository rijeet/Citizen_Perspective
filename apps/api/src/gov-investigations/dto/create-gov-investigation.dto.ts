import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

class GovInvestigationTranslationInput {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  title: string;
}

export class CreateGovInvestigationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  incidentId?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [GovInvestigationTranslationInput] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GovInvestigationTranslationInput)
  translations: GovInvestigationTranslationInput[];
}
