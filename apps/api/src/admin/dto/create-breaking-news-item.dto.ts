import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBreakingNewsItemDto {
  @ApiProperty({ example: 'টিকাদান অভিযান সম্পর্কিত আপডেট' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  titleBn: string;

  @ApiProperty({ example: 'Update on vaccination campaign' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  titleEn: string;

  @ApiPropertyOptional({
    description: 'Internal path (e.g. /articles/slug) or https URL',
    example: '/articles/measles-vaccination-campaign-2024',
  })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  href?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
