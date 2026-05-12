import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type CurrentAdmin = { id: string; email: string };

export const CurrentAdminUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): CurrentAdmin => {
    const req = ctx.switchToHttp().getRequest<{ user: CurrentAdmin }>();
    return req.user;
  },
);
