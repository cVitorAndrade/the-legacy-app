import { Inject, Injectable } from '@nestjs/common';
import { RefreshTokenSessionRepository } from '../../../domain/repositories/refresh-token-session.repository';
import { RefreshTokenSession } from '../../../domain/entities/refresh-token-session.entity';
import { RandomStringGeneratorProvider } from 'src/shared/application/cryptography/protocols/random-string-generator.protocol';
import { TokenHashProvider } from 'src/shared/application/cryptography/protocols/token-hash.protocol';

interface CreateRefreshTokenSessionRequest {
  userId: string;
  device: string;
  ipAddress: string;
  familyId?: string;
}

@Injectable()
export class CreateRefreshTokenSessionUseCase {
  constructor(
    @Inject('REFRESH_TOKEN_EXPIRES_IN_MS')
    private readonly refreshTokenExpiresInMs: number,
    private readonly refreshTokenSessionRepository: RefreshTokenSessionRepository,
    private readonly tokenHashProvider: TokenHashProvider,
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
      tokenHash: this.tokenHashProvider.hash(rawToken),
      familyId: createRefreshTokenSessionRequest.familyId ?? undefined,
      expiresAt,
    });

    console.log({
      first: this.tokenHashProvider.hash(rawToken),
      second: this.tokenHashProvider.hash(rawToken),
      thirt: this.tokenHashProvider.hash(rawToken),
    });

    await this.refreshTokenSessionRepository.create(refreshTokenSession);

    return { rawToken, sessionId: refreshTokenSession.id, expiresAt };
  }
}
