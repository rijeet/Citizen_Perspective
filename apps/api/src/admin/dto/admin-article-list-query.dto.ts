import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

export class AdminArticleListQueryDto {
  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED', 'ALL'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED', 'ALL'])
  status?: 'DRAFT' | 'PUBLISHED' | 'ALL';
}
