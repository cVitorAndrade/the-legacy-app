import { Module } from '@nestjs/common';
import { IdentityRepository } from './domain/repositories/identity.repository';
import { PrismaIdentityRepository } from './infrastructure/database/prisma/repositories/prisma-identity.repository';
import { CreateIdentityUseCase } from './application/use-cases/create-identity/create-identity.use-case';
import { DatabaseModule } from 'src/shared/infrastructure/database/database.module';
import { FindIdentityByProviderAndUserIdUseCase } from './application/use-cases/find-identity-by-provider-and-user-id/find-identity-by-provider-and-user-id.use-case';

@Module({
  providers: [
    {
      provide: IdentityRepository,
      useClass: PrismaIdentityRepository,
    },
    CreateIdentityUseCase,
    FindIdentityByProviderAndUserIdUseCase,
  ],
  controllers: [],
  imports: [DatabaseModule],
  exports: [CreateIdentityUseCase, FindIdentityByProviderAndUserIdUseCase],
})
export class IdentityModule {}
