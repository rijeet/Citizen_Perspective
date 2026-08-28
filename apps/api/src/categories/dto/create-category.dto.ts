import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

class CategoryTranslationInput {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;
}

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  slug: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  sortOrder?: number;

  @ApiProperty({ type: [CategoryTranslationInput] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryTranslationInput)
  translations: CategoryTranslationInput[];
}
