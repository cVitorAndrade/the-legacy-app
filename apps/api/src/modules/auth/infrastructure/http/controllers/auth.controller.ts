import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { LocalRegisterRequestDto } from '../dtos/local-register-request.dto';
import { LocalRegisterUseCase } from 'src/modules/auth/application/use-cases/local-register/local-register.use-case';
import type { Response, Request } from 'express';
import { EnvConfig } from 'src/shared/infrastructure/env/protocols/env-config.protocol';
import { LocalLoginRequestDto } from '../dtos/local-login-request.dto';
import { LocalLoginUseCase } from 'src/modules/auth/application/use-cases/local-login/local-login.use-case';
import { RefreshTokenUseCase } from 'src/modules/auth/application/use-cases/refresh-token/refresh-token.use-case';
import { LogoutUseCase } from 'src/modules/auth/application/use-cases/logout/logout.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly envConfig: EnvConfig,
    private readonly localRegisterUseCase: LocalRegisterUseCase,
    private readonly localLoginUseCase: LocalLoginUseCase,
    private readonly refreshTokenUseCase: RefreshTokenUseCase,
    private readonly logoutUseCase: LogoutUseCase,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
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
      path: '/auth/refresh',
      maxAge: this.envConfig.getRefreshTokenExpiresInMs(),
    });

    return { accessToken, user };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() body: LocalLoginRequestDto,
    @Ip() ipAddress: string,
    @Headers('user-agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { rawRefreshToken, accessToken, user } =
      await this.localLoginUseCase.execute({
        ...body,
        device: userAgent,
        ipAddress,
      });

    response.cookie('refresh_token', rawRefreshToken, {
      httpOnly: true,
      secure: this.envConfig.getNodeEnv() === 'production',
      sameSite: 'strict',
      path: '/auth/refresh',
      maxAge: this.envConfig.getRefreshTokenExpiresInMs(),
    });

    return { accessToken, user };
  }

  @Post('refresh')
  async refresh(
    @Ip() ipAddress: string,
    @Headers('user-agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
    @Req() req: Request,
  ) {
    const rawRefreshToken = req.cookies?.['refresh_token'] as
      | string
      | undefined;

    if (!rawRefreshToken) {
      throw new UnauthorizedException('Refresh token ausente');
    }

    const { accessToken } = await this.refreshTokenUseCase.execute({
      device: userAgent,
      ipAddress,
      rawRefreshToken,
    });

    response.cookie('refresh_token', rawRefreshToken, {
      httpOnly: true,
      secure: this.envConfig.getNodeEnv() === 'production',
      sameSite: 'strict',
      path: '/auth/refresh',
      maxAge: this.envConfig.getRefreshTokenExpiresInMs(),
    });

    return { accessToken };
  }

  @Post('logout')
  async logout(
    @Res({ passthrough: true }) response: Response,
    @Req() req: Request,
  ) {
    const rawRefreshToken = req.cookies?.['refresh_token'] as
      | string
      | undefined;

    if (rawRefreshToken) {
      await this.logoutUseCase.execute({ rawRefreshToken });
    }

    response.clearCookie('refresh_token', { path: '/auth/refresh' });
  }
}
