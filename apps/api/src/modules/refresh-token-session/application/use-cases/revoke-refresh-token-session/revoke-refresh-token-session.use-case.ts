import { Injectable, NotFoundException } from '@nestjs/common';
import { RefreshTokenSessionRepository } from 'src/modules/refresh-token-session/domain/repositories/refresh-token-session.repository';

interface RevokeRefreshTokenSessionRequest {
  id: string;
}

@Injectable()
export class RevokeRefreshTokenSessionUseCase {
  constructor(
    private readonly refreshTokenSessionRepository: RefreshTokenSessionRepository,
  ) {}

  async execute(
    revokeRefreshTokenSessionRequest: RevokeRefreshTokenSessionRequest,
  ) {
    const refreshTokenSession =
      await this.refreshTokenSessionRepository.findById(
        revokeRefreshTokenSessionRequest.id,
      );

    if (!refreshTokenSession) throw new NotFoundException();

    refreshTokenSession.revoke();

    await this.refreshTokenSessionRepository.save(refreshTokenSession);
  }
}
