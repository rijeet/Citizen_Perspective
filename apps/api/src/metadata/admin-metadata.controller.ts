import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { MetadataFetchService } from './metadata-fetch.service';

class FetchMetadataDto {
  @ApiProperty()
  @IsUrl()
  url: string;
}

@ApiTags('admin-metadata')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/fetch-metadata')
export class AdminMetadataController {
  constructor(private readonly metadata: MetadataFetchService) {}

  @Post()
  @ApiOperation({ summary: 'Fetch headline/thumbnail/date from URL' })
  fetch(@Body() dto: FetchMetadataDto) {
    return this.metadata.fetch(dto.url);
  }
}
