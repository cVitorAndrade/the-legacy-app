import { Inject, Injectable } from '@nestjs/common';
import { RefreshTokenSessionRepository } from '../../domain/repositories/refresh-token-session.repository';
import { RefreshTokenSession } from '../../domain/entities/refresh-token-session.entity';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';
import { RandomStringGeneratorProvider } from 'src/shared/application/cryptography/protocols/random-string-generator.protocol';

interface CreateRefreshTokenSessionRequest {
  userId: string;
  device: string;
  ipAddress: string;
}

@Injectable()
export class CreateRefreshTokenSessionUseCase {
  constructor(
    @Inject('REFRESH_TOKEN_EXPIRES_IN_MS')
    private readonly refreshTokenExpiresInMs: number,
    private readonly refreshTokenSessionRepository: RefreshTokenSessionRepository,
    private readonly hashProvider: HasheProvider,
    private readonly randomStringGeneratorProvider: RandomStringGeneratorProvider,
  ) {}

  async execute(
    createRefreshTokenSessionRequest: CreateRefreshTokenSessionRequest,
  ) {
    const rawToken = this.randomStringGeneratorProvider.generateString();

    const expiresAt = new Date(
      new Date().getTime() + this.refreshTokenExpiresInMs,
    );

    const refreshTokenSession = new RefreshTokenSession({
      device: createRefreshTokenSessionRequest.device,
      userId: createRefreshTokenSessionRequest.userId,
      ipAddress: createRefreshTokenSessionRequest.ipAddress,
      tokenHash: await this.hashProvider.hash(rawToken),
      expiresAt,
    });

    await this.refreshTokenSessionRepository.create(refreshTokenSession);

    return { rawToken, sessionId: refreshTokenSession.id, expiresAt };
  }
}
