import { Controller, Get } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('health')
@SkipThrottle()
export class HealthController {
  @Get()
  get() {
    return { status: 'ok', service: 'citizen-perspective-api' };
  }
}
