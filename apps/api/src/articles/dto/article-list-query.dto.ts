import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

const LOCALES = ['bn', 'en'] as const;
export type RequestLocale = (typeof LOCALES)[number];

export class ArticleListQueryDto {
  @ApiPropertyOptional({ enum: LOCALES })
  @Transform(({ value }) => (value === 'en' ? 'en' : 'bn'))
  @IsIn([...LOCALES])
  locale: RequestLocale = 'bn';

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @ApiPropertyOptional({ default: 12 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize = 12;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(200)
  q?: string;
}
