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

class IncidentTranslationInput {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  title: string;
}

export class CreateIncidentDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  slug: string;

  @ApiProperty()
  @IsString()
  categoryId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  subcategoryId?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [IncidentTranslationInput] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IncidentTranslationInput)
  translations: IncidentTranslationInput[];
}
