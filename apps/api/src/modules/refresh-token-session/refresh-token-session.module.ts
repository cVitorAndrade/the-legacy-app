import { Module } from '@nestjs/common';
import { CryptographyModule } from 'src/shared/infrastructure/cryptography/cryptography.module';
import { DatabaseModule } from 'src/shared/infrastructure/database/database.module';
import { EnvConfig } from 'src/shared/infrastructure/env/protocols/env-config.protocol';
import { CreateRefreshTokenSessionUseCase } from './application/use-cases/create-refresh-token-session/create-refresh-token-session.use-case';
import { RefreshTokenSessionRepository } from './domain/repositories/refresh-token-session.repository';
import { PrismaRefreshTokenSessionRepository } from './infrastructure/database/prisma/repositories/prisma-refresh-token-session.repository';
import { FindRefreshTokenSessionByTokenHashUseCase } from './application/use-cases/find-refresh-token-session-by-token-hash/find-refresh-token-session-by-token-hash.use-case';
import { RevokeRefreshTokenSessionUseCase } from './application/use-cases/revoke-refresh-token-session/revoke-refresh-token-session.use-case';
import { RevokeAllRefreshTokenSessionsByFamilyIdUseCase } from './application/use-cases/revoke-all-refresh-token-sessions-by-family-id/revoke-all-refresh-token-sessions-by-family-id.use-case';
import { UpdateRefreshTokenSessionUseCase } from './application/use-cases/update-refresh-token-session/update-refresh-token-session.use-case';

@Module({
  providers: [
    {
      provide: 'REFRESH_TOKEN_EXPIRES_IN_MS',
      useFactory: (envConfig: EnvConfig) => {
        return envConfig.getRefreshTokenExpiresInMs();
      },
      inject: [EnvConfig],
    },
    {
      provide: RefreshTokenSessionRepository,
      useClass: PrismaRefreshTokenSessionRepository,
    },
    CreateRefreshTokenSessionUseCase,
    FindRefreshTokenSessionByTokenHashUseCase,
    RevokeRefreshTokenSessionUseCase,
    RevokeAllRefreshTokenSessionsByFamilyIdUseCase,
    UpdateRefreshTokenSessionUseCase,
  ],
  imports: [DatabaseModule, CryptographyModule],
  exports: [
    CreateRefreshTokenSessionUseCase,
    FindRefreshTokenSessionByTokenHashUseCase,
    RevokeRefreshTokenSessionUseCase,
    RevokeAllRefreshTokenSessionsByFamilyIdUseCase,
    UpdateRefreshTokenSessionUseCase,
  ],
})
export class RefreshTokenSessionModule {}
