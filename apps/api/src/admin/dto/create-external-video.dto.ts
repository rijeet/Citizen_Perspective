import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { VideoTranslationInputDto } from './video-translation-input.dto';

export class CreateExternalVideoDto {
  @ApiProperty({ enum: ['YOUTUBE', 'FACEBOOK'] })
  @IsIn(['YOUTUBE', 'FACEBOOK'])
  platform: 'YOUTUBE' | 'FACEBOOK';

  @ApiProperty({ description: 'YouTube or Facebook watch / share URL' })
  @IsString()
  @MinLength(8)
  watchUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [VideoTranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => VideoTranslationInputDto)
  translations: VideoTranslationInputDto[];

  @ApiPropertyOptional({ description: 'Optional Source id for attribution' })
  @IsOptional()
  @IsString()
  sourceId?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
