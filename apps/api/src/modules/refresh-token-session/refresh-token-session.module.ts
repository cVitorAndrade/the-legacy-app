import { Module } from '@nestjs/common';
import { CryptographyModule } from 'src/shared/infrastructure/cryptography/cryptography.module';
import { DatabaseModule } from 'src/shared/infrastructure/database/database.module';
import { EnvConfig } from 'src/shared/infrastructure/env/protocols/env-config.protocol';
import { CreateRefreshTokenSessionUseCase } from './application/use-cases/create-refresh-token-session.use-case';
import { RefreshTokenSessionRepository } from './domain/repositories/refresh-token-session.repository';
import { PrismaRefreshTokenSessionRepository } from './infrastructure/database/prisma/repositories/prisma-refresh-token-session.repository';

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
  ],
  imports: [DatabaseModule, CryptographyModule],
  exports: [CreateRefreshTokenSessionUseCase],
})
export class RefreshTokenSessionModule {}
