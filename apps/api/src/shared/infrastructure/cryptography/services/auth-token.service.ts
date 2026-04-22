import { Injectable } from '@nestjs/common';
import { TokenProvider } from 'src/shared/application/cryptography/protocols/token.protocol';
import { EnvConfig } from '../../env/protocols/env-config.protocol';

@Injectable()
export class AuthTokenService {
  constructor(
    private readonly tokenProvider: TokenProvider,
    private readonly envConfig: EnvConfig,
  ) {}

  createAccessToken<TPayload extends object>(paylod: TPayload): string {
    const secret = this.envConfig.getAccessTokenSecret();
    const expiresIn = this.envConfig.getAccessTokenExpiresIn();

    return this.tokenProvider.sign(paylod, secret, expiresIn);
  }

  verifyAccessToken<TPayload extends object>(token: string): TPayload {
    const secret = this.envConfig.getAccessTokenSecret();

    return this.tokenProvider.verify<TPayload>(token, secret);
  }

  createRefreshToken<TPayload extends object>(paylod: TPayload): string {
    const secret = this.envConfig.getRefreshTokenSecret();
    const expiresIn = this.envConfig.getRefreshTokenExpiresIn();

    return this.tokenProvider.sign(paylod, secret, expiresIn);
  }

  verifyRereshToken<TPayload extends object>(token: string): TPayload {
    const secret = this.envConfig.getRefreshTokenSecret();

    return this.tokenProvider.verify<TPayload>(token, secret);
  }
}
