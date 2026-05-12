import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminAuthService } from './admin-auth.service';
import { AdminBootstrapDto } from './dto/bootstrap.dto';
import { AdminLoginDto } from './dto/login.dto';

@ApiTags('admin-auth')
@Controller('admin/auth')
export class AdminAuthController {
  constructor(private readonly auth: AdminAuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Admin JWT login' })
  login(@Body() dto: AdminLoginDto) {
    return this.auth.login(dto.email, dto.password);
  }

  @Post('bootstrap')
  @ApiOperation({
    summary:
      'One-time create first admin (requires ADMIN_BOOTSTRAP_SECRET on server; fails if any admin exists)',
  })
  bootstrap(@Body() dto: AdminBootstrapDto) {
    return this.auth.bootstrap(dto.email, dto.password, dto.secret);
  }
}
