import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AdminMetadataController } from './admin-metadata.controller';
import { MetadataFetchService } from './metadata-fetch.service';

@Module({
  imports: [AuthModule],
  controllers: [AdminMetadataController],
  providers: [MetadataFetchService],
  exports: [MetadataFetchService],
})
export class MetadataModule {}
