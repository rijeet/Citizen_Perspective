import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AdminBootstrapDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Must match server env ADMIN_BOOTSTRAP_SECRET (one-time when no admins exist)',
  })
  @IsString()
  @MinLength(8)
  secret: string;
}
