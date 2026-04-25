import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRefreshTokenSessionUseCase } from 'src/modules/refresh-token-session/application/use-cases/create-refresh-token-session/create-refresh-token-session.use-case';
import { FindRefreshTokenSessionByTokenHashUseCase } from 'src/modules/refresh-token-session/application/use-cases/find-refresh-token-session-by-token-hash/find-refresh-token-session-by-token-hash.use-case';
import { RevokeAllRefreshTokenSessionsByFamilyIdUseCase } from 'src/modules/refresh-token-session/application/use-cases/revoke-all-refresh-token-sessions-by-family-id/revoke-all-refresh-token-sessions-by-family-id.use-case';
import { RevokeRefreshTokenSessionUseCase } from 'src/modules/refresh-token-session/application/use-cases/revoke-refresh-token-session/revoke-refresh-token-session.use-case';
import { FindUserByIdUseCase } from 'src/modules/user/application/use-cases/find-user-by-id/find-user-by-id.use-case';
import { UserStatus } from 'src/modules/user/domain/enums/user-status.enum';
import { TokenHashProvider } from 'src/shared/application/cryptography/protocols/token-hash.protocol';
import { AuthTokenService } from 'src/shared/infrastructure/cryptography/services/auth-token.service';

interface RefreshTokenRequest {
  rawRefreshToken: string;
  device: string;
  ipAddress: string;
}

@Injectable()
export class RefreshTokenUseCase {
  constructor(
    private readonly tokenHashProvider: TokenHashProvider,
    private readonly findRefreshTokenSessionByTokenHashUseCase: FindRefreshTokenSessionByTokenHashUseCase,
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
    private readonly createRefreshTokenSessionUseCase: CreateRefreshTokenSessionUseCase,
    private readonly revokeRefrehTokenSessionUseCase: RevokeRefreshTokenSessionUseCase,
    private readonly revokeAllRefreshTokenSessionsByFamilyIdUseCase: RevokeAllRefreshTokenSessionsByFamilyIdUseCase,
    private readonly authTokenService: AuthTokenService,
  ) {}

  async execute(refreshTokenRequest: RefreshTokenRequest) {
    const tokenHash = this.tokenHashProvider.hash(
      refreshTokenRequest.rawRefreshToken,
    );

    console.log({
      tokenHash,
      first: this.tokenHashProvider.hash(refreshTokenRequest.rawRefreshToken),
      second: this.tokenHashProvider.hash(refreshTokenRequest.rawRefreshToken),
      third: this.tokenHashProvider.hash(refreshTokenRequest.rawRefreshToken),
    });

    const refreshTokenSession =
      await this.findRefreshTokenSessionByTokenHashUseCase.execute({
        tokenHash,
      });
    if (!refreshTokenSession) throw new UnauthorizedException();

    if (refreshTokenSession.expiresAt < new Date())
      throw new UnauthorizedException();

    if (refreshTokenSession.revokedAt !== null) {
      await this.revokeAllRefreshTokenSessionsByFamilyIdUseCase.execute({
        familyId: refreshTokenSession.familyId,
      });
      throw new UnauthorizedException();
    }

    await this.revokeRefrehTokenSessionUseCase.execute({
      id: refreshTokenSession.id,
    });

    const user = await this.findUserByIdUseCase.execute({
      id: refreshTokenSession.userId,
    });

    if (!user || user.status !== UserStatus.ACTIVE)
      throw new UnauthorizedException('Usuário não encontrado');

    const { rawToken: newRawToken, sessionId: newSessionId } =
      await this.createRefreshTokenSessionUseCase.execute({
        device: refreshTokenRequest.device,
        ipAddress: refreshTokenRequest.ipAddress,
        userId: user.id,
        familyId: refreshTokenSession.familyId,
      });

    const accessToken = this.authTokenService.createAccessToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      username: user.username,
      sessionId: newSessionId,
    });

    return { accessToken, rawRefreshToken: newRawToken };
  }
}
