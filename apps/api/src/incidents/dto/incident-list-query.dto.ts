import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { LocaleQueryDto } from '../../common/locale-query.dto';

export class IncidentListQueryDto extends LocaleQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED', 'ALL'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED', 'ALL'])
  status?: 'DRAFT' | 'PUBLISHED' | 'ALL';
}
