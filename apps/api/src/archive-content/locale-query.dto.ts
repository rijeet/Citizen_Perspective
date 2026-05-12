import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

const LOCALES = ['bn', 'en'] as const;

export class LocaleOnlyQueryDto {
  @ApiPropertyOptional({ enum: LOCALES })
  @Transform(({ value }) => (value === 'en' ? 'en' : 'bn'))
  @IsIn([...LOCALES])
  locale: (typeof LOCALES)[number] = 'bn';

  @ApiPropertyOptional({
    description: 'Exact tag match (content tags array contains this value)',
  })
  @IsOptional()
  @IsString()
  @MaxLength(80)
  tag?: string;
}