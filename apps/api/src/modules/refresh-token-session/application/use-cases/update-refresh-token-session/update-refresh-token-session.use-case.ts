import { Injectable } from '@nestjs/common';
import { RefreshTokenSession } from 'src/modules/refresh-token-session/domain/entities/refresh-token-session.entity';
import { RefreshTokenSessionRepository } from 'src/modules/refresh-token-session/domain/repositories/refresh-token-session.repository';

interface UpdateRefreshTokenSessionRequest {
  refreshTokenSession: RefreshTokenSession;
}

@Injectable()
export class UpdateRefreshTokenSessionUseCase {
  constructor(
    private readonly refreshTokenSessionRepository: RefreshTokenSessionRepository,
  ) {}

  async execute({ refreshTokenSession }: UpdateRefreshTokenSessionRequest) {
    await this.refreshTokenSessionRepository.save(refreshTokenSession);
  }
}
