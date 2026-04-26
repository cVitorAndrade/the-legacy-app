import { Injectable } from '@nestjs/common';
import { FindRefreshTokenSessionByTokenHashUseCase } from 'src/modules/refresh-token-session/application/use-cases/find-refresh-token-session-by-token-hash/find-refresh-token-session-by-token-hash.use-case';
import { RevokeRefreshTokenSessionUseCase } from 'src/modules/refresh-token-session/application/use-cases/revoke-refresh-token-session/revoke-refresh-token-session.use-case';
import { TokenHashProvider } from 'src/shared/application/cryptography/protocols/token-hash.protocol';

interface LogoutRequest {
  rawRefreshToken: string;
}

@Injectable()
export class LogoutUseCase {
  constructor(
    private readonly tokenHashProvider: TokenHashProvider,
    private readonly findRefreshTokenSessionByTokenHash: FindRefreshTokenSessionByTokenHashUseCase,
    private readonly revokeRefreshTokenSessionUseCase: RevokeRefreshTokenSessionUseCase,
  ) {}

  async execute(logoutRequest: LogoutRequest) {
    const tokenHash = this.tokenHashProvider.hash(
      logoutRequest.rawRefreshToken,
    );
    const refreshTokenSession =
      await this.findRefreshTokenSessionByTokenHash.execute({ tokenHash });

    if (!refreshTokenSession) return;

    await this.revokeRefreshTokenSessionUseCase.execute({
      id: refreshTokenSession.id,
    });
  }
}
