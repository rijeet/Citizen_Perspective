import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { TimelineTranslationInputDto } from './timeline-translation-input.dto';

export class CreateTimelineEventDto {
  @ApiProperty({ description: 'When this event appears on the timeline (ISO date)' })
  @IsDateString()
  eventAt: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [TimelineTranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TimelineTranslationInputDto)
  translations: TimelineTranslationInputDto[];
}
