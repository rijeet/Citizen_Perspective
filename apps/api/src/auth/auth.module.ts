import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminAuthController } from '../admin/admin-auth.controller';
import { AdminAuthService } from '../admin/admin-auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const expiresSec = parseInt(
          config.get<string>('JWT_EXPIRES_SEC') ?? '604800',
          10,
        );
        return {
          secret:
            config.get<string>('JWT_SECRET') ??
            'development-only-jwt-secret-min-32-chars',
          signOptions: {
            expiresIn: expiresSec,
          },
        };
      },
    }),
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService, JwtStrategy],
  exports: [AdminAuthService, JwtModule],
})
export class AuthModule {}
