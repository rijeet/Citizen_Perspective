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
import { TranslationInputDto } from './translation-input.dto';

export class CreateArticleDto {
  @ApiProperty({ example: 'my-article-slug' })
  @IsString()
  @MinLength(1)
  slug: string;

  @ApiPropertyOptional({ description: 'Existing Source id' })
  @IsOptional()
  @IsString()
  sourceId?: string;

  @ApiPropertyOptional({
    description: 'Article source URL (creates or reuses Source by URL)',
    example: 'https://example.com/story',
  })
  @IsOptional()
  @IsString()
  @MinLength(1)
  sourceUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  coverUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ enum: ['MARKDOWN', 'HTML'] })
  @IsOptional()
  @IsIn(['MARKDOWN', 'HTML'])
  contentType?: 'MARKDOWN' | 'HTML';

  @ApiProperty({ type: [TranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TranslationInputDto)
  translations: TranslationInputDto[];
}
