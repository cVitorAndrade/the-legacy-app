import { Injectable } from '@nestjs/common';
import { RefreshTokenSessionRepository } from 'src/modules/refresh-token-session/domain/repositories/refresh-token-session.repository';

interface FindRefreshTokenSessionByTokenHashRequest {
  tokenHash: string;
}

@Injectable()
export class FindRefreshTokenSessionByTokenHashUseCase {
  constructor(
    private readonly refreshTokenSessionRepository: RefreshTokenSessionRepository,
  ) {}

  async execute({ tokenHash }: FindRefreshTokenSessionByTokenHashRequest) {
    return this.refreshTokenSessionRepository.findByTokenHash(tokenHash);
  }
}
