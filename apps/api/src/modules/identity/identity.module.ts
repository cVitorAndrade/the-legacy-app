import { Module } from '@nestjs/common';
import { IdentityRepository } from './domain/repositories/identity.repository';
import { PrismaIdentityRepository } from './infrastructure/database/prisma/repositories/prisma-identity.repository';
import { CreateIdentityUseCase } from './application/use-cases/create-identity/create-identity.use-case';
import { DatabaseModule } from 'src/shared/infrastructure/database/database.module';

@Module({
  providers: [
    {
      provide: IdentityRepository,
      useClass: PrismaIdentityRepository,
    },
    CreateIdentityUseCase,
  ],
  controllers: [],
  imports: [DatabaseModule],
  exports: [CreateIdentityUseCase],
})
export class IdentityModule {}
