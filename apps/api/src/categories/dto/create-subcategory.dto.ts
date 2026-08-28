import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

class SubcategoryTranslationInput {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;
}

export class CreateSubcategoryDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  slug: string;

  @ApiProperty({ type: [SubcategoryTranslationInput] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubcategoryTranslationInput)
  translations: SubcategoryTranslationInput[];
}
