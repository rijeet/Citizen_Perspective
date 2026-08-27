import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

export class LocaleQueryDto {
  @ApiPropertyOptional({ enum: ['bn', 'en'], default: 'bn' })
  @IsOptional()
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en' = 'bn';
}
