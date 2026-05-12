import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { VideoTranslationInputDto } from './video-translation-input.dto';

export class UpdateExternalVideoDto {
  @ApiPropertyOptional({ enum: ['YOUTUBE', 'FACEBOOK'] })
  @IsOptional()
  @IsIn(['YOUTUBE', 'FACEBOOK'])
  platform?: 'YOUTUBE' | 'FACEBOOK';

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(8)
  watchUrl?: string;

  @ApiPropertyOptional({ description: 'ISO or null to clear' })
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsDateString()
  publishedAt?: string | null;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ type: [VideoTranslationInputDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VideoTranslationInputDto)
  translations?: VideoTranslationInputDto[];

  @ApiPropertyOptional({
    description: 'Source id; omit to leave unchanged, empty string clears',
  })
  @IsOptional()
  @IsString()
  sourceId?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
