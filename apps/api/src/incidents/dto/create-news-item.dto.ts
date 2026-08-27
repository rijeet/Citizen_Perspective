import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsISO8601,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

const DESCRIPTION_CONTENT_TYPES = ['MARKDOWN', 'HTML'] as const;

export class CreateNewsItemDto {
  @ApiProperty()
  @IsUrl()
  sourceUrl: string;

  @ApiProperty({ enum: ['YOUTUBE', 'ARTICLE', 'FACEBOOK'] })
  @IsIn(['YOUTUBE', 'ARTICLE', 'FACEBOOK'])
  sourceType: 'YOUTUBE' | 'ARTICLE' | 'FACEBOOK';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  headlineBn: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  headlineEn: string;

  @ApiPropertyOptional({ description: 'Markdown content ref / editorial notes (bn)' })
  @IsOptional()
  @IsString()
  descriptionBn?: string;

  @ApiPropertyOptional({ description: 'Markdown content ref / editorial notes (en)' })
  @IsOptional()
  @IsString()
  descriptionEn?: string;

  @ApiPropertyOptional({ enum: DESCRIPTION_CONTENT_TYPES, default: 'MARKDOWN' })
  @IsOptional()
  @IsIn(DESCRIPTION_CONTENT_TYPES)
  descriptionContentType?: 'MARKDOWN' | 'HTML';

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  thumbnailUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  publishedAt?: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  stage: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  status?: string;
}
