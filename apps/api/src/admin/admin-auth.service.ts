import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import type { AdminJwtPayload } from '../auth/jwt-payload.type';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async validateCredentials(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string }> {
    const admin = await this.prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return { id: admin.id, email: admin.email };
  }

  async login(email: string, password: string) {
    const admin = await this.validateCredentials(email, password);
    const payload: AdminJwtPayload = { sub: admin.id, email: admin.email };
    const access_token = await this.jwt.signAsync(payload);
    const expiresSec = parseInt(
      this.config.get<string>('JWT_EXPIRES_SEC') ?? '604800',
      10,
    );
    return {
      access_token,
      token_type: 'Bearer' as const,
      expires_in: expiresSec,
      admin: { id: admin.id, email: admin.email },
    };
  }

  async bootstrap(email: string, password: string, secret: string) {
    const expected = this.config.get<string>('ADMIN_BOOTSTRAP_SECRET');
    if (!expected || secret !== expected) {
      throw new ForbiddenException('Invalid bootstrap secret');
    }
    const count = await this.prisma.admin.count();
    if (count > 0) {
      throw new ConflictException(
        'Bootstrap disabled: an admin already exists',
      );
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const admin = await this.prisma.admin.create({
      data: { email, passwordHash },
    });
    const payload: AdminJwtPayload = { sub: admin.id, email: admin.email };
    const access_token = await this.jwt.signAsync(payload);
    const expiresSec = parseInt(
      this.config.get<string>('JWT_EXPIRES_SEC') ?? '604800',
      10,
    );
    return {
      access_token,
      token_type: 'Bearer' as const,
      expires_in: expiresSec,
      admin: { id: admin.id, email: admin.email },
    };
  }
}
