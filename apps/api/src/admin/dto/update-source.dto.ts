import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl, MinLength, ValidateIf } from 'class-validator';

export class UpdateSourceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;

  @ApiPropertyOptional({ description: 'Set null to clear URL' })
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsUrl({ require_protocol: true })
  url?: string | null;
}
