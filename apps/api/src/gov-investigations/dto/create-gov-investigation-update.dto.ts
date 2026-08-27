import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsISO8601,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateGovInvestigationUpdateDto {
  @ApiProperty()
  @IsUrl()
  sourceUrl: string;

  @ApiProperty({ enum: ['YOUTUBE', 'ARTICLE', 'FACEBOOK'] })
  @IsIn(['YOUTUBE', 'ARTICLE', 'FACEBOOK'])
  sourceType: 'YOUTUBE' | 'ARTICLE' | 'FACEBOOK';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  headlineBn: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  headlineEn: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  thumbnailUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  publishedAt?: string;

  @ApiProperty({
    enum: [
      'INCIDENT_OCCURRED',
      'INVESTIGATION_PROMISED',
      'COMMITTEE_FORMED',
      'INVESTIGATION_ONGOING',
      'REPORT_SUBMITTED',
      'ACTION_TAKEN',
      'CLOSED_NO_ACTION',
      'CLOSED_RESOLVED',
    ],
  })
  @IsIn([
    'INCIDENT_OCCURRED',
    'INVESTIGATION_PROMISED',
    'COMMITTEE_FORMED',
    'INVESTIGATION_ONGOING',
    'REPORT_SUBMITTED',
    'ACTION_TAKEN',
    'CLOSED_NO_ACTION',
    'CLOSED_RESOLVED',
  ])
  stage:
    | 'INCIDENT_OCCURRED'
    | 'INVESTIGATION_PROMISED'
    | 'COMMITTEE_FORMED'
    | 'INVESTIGATION_ONGOING'
    | 'REPORT_SUBMITTED'
    | 'ACTION_TAKEN'
    | 'CLOSED_NO_ACTION'
    | 'CLOSED_RESOLVED';

  @ApiProperty({
    enum: ['ON_TRACK', 'DELAYED', 'STALLED', 'RESOLVED'],
  })
  @IsIn(['ON_TRACK', 'DELAYED', 'STALLED', 'RESOLVED'])
  status: 'ON_TRACK' | 'DELAYED' | 'STALLED' | 'RESOLVED';
}
