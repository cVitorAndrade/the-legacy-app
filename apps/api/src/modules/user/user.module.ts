import { Module } from '@nestjs/common';
import { UserRepository } from './domain/repositories/user.repository';
import { PrismaUserRepository } from './infrastructure/database/prisma/repositories/prisma-user.repository';
import { DatabaseModule } from 'src/shared/infrastructure/database/database.module';
import { CryptographyModule } from 'src/shared/infrastructure/cryptography/cryptography.module';
import { CreateUserUseCase } from './application/use-cases/create-user/create-user.use-case';
import { FindUserByEmailUseCase } from './application/use-cases/find-user-by-email/find-user-by-email.use-case';
import { FindUserByIdUseCase } from './application/use-cases/find-user-by-id/find-user-by-id.use-case';

@Module({
  providers: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    CreateUserUseCase,
    FindUserByEmailUseCase,
    FindUserByIdUseCase,
  ],
  controllers: [],
  imports: [DatabaseModule, CryptographyModule],
  exports: [CreateUserUseCase, FindUserByEmailUseCase, FindUserByIdUseCase],
})
export class UserModule {}
