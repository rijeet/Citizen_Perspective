import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, MinLength } from 'class-validator';

export class CreateFeaturedBannerDto {
  @ApiProperty()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  captionBn: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  captionEn: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  sectionType: string;
}
