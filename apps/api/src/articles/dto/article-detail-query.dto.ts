import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn } from 'class-validator';
import type { RequestLocale } from './article-list-query.dto';

const LOCALES = ['bn', 'en'] as const;

export class ArticleDetailQueryDto {
  @ApiPropertyOptional({ enum: LOCALES })
  @Transform(({ value }) => (value === 'en' ? 'en' : 'bn'))
  @IsIn([...LOCALES])
  locale: RequestLocale = 'bn';
}
