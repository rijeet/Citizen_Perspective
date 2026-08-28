import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { LocaleQueryDto } from '../../common/locale-query.dto';

export class GovernanceTrackerQueryDto extends LocaleQueryDto {
  @ApiPropertyOptional({ description: 'Filter incidents by category slug' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Search incidents (title, stage, headlines)' })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({ default: 12, maximum: 50 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  incidentLimit?: number = 12;
}
