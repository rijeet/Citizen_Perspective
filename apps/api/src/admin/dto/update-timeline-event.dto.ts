import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { TimelineTranslationInputDto } from './timeline-translation-input.dto';

export class UpdateTimelineEventDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  eventAt?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ type: [TimelineTranslationInputDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimelineTranslationInputDto)
  translations?: TimelineTranslationInputDto[];
}
