import { Body, Controller, Headers, Ip, Post, Res } from '@nestjs/common';
import { LocalRegisterRequestDto } from '../dtos/local-register-request.dto';
import { LocalRegisterUseCase } from 'src/modules/auth/application/use-cases/local-register/local-register.use-case';
import type { Response } from 'express';
import { EnvConfig } from 'src/shared/infrastructure/env/protocols/env-config.protocol';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly localRegisterUseCase: LocalRegisterUseCase,
    private readonly envConfig: EnvConfig,
  ) {}

  @Post('register')
  async register(
    @Body() body: LocalRegisterRequestDto,
    @Ip() ipAddress: string,
    @Headers('user-agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { rawRefreshToken, accessToken, user } =
      await this.localRegisterUseCase.execute({
        ...body,
        device: userAgent,
        ipAddress,
      });

    response.cookie('refresh_token', rawRefreshToken, {
      httpOnly: true,
      secure: this.envConfig.getNodeEnv() === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: this.envConfig.getRefreshTokenExpiresInMs(),
    });

    return { accessToken, user };
  }
}
