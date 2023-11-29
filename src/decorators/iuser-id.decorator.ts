import { authorizationToLoginPayload } from 'src/utils/base-64-converter';

import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  const loginPayload = authorizationToLoginPayload(authorization);

  return loginPayload?.id;
});
