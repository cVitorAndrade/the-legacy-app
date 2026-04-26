import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/http/controllers/auth.controller';
import { IdentityModule } from '../identity/identity.module';
import { UserModule } from '../user/user.module';
import { LocalRegisterUseCase } from './application/use-cases/local-register/local-register.use-case';
import { CryptographyModule } from 'src/shared/infrastructure/cryptography/cryptography.module';
import { RefreshTokenSessionModule } from '../refresh-token-session/refresh-token-session.module';
import { LocalLoginUseCase } from './application/use-cases/local-login/local-login.use-case';
import { RefreshTokenUseCase } from './application/use-cases/refresh-token/refresh-token.use-case';
import { LogoutUseCase } from './application/use-cases/logout/logout.use-case';

@Module({
  providers: [
    LocalRegisterUseCase,
    LocalLoginUseCase,
    RefreshTokenUseCase,
    LogoutUseCase,
  ],
  controllers: [AuthController],
  imports: [
    IdentityModule,
    UserModule,
    CryptographyModule,
    RefreshTokenSessionModule,
  ],
})
export class AuthModule {}
