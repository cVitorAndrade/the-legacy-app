import { Injectable } from '@nestjs/common';
import { CreateIdentityUseCase } from 'src/modules/identity/application/use-cases/create-identity/create-identity.use-case';
import { CreateRefreshTokenSessionUseCase } from 'src/modules/refresh-token-session/application/use-cases/create-refresh-token-session/create-refresh-token-session.use-case';
import { CreateUserUseCase } from 'src/modules/user/application/use-cases/create-user/create-user.use-case';
import { TransactionManagerService } from 'src/shared/application/database/protocols/transaction-manager.protocol';
import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';
import { AuthTokenService } from 'src/shared/infrastructure/cryptography/services/auth-token.service';

interface LocalRegisterRequest {
  email: string;
  name: string;
  username: string;
  password: string;
  device: string;
  ipAddress: string;
}

@Injectable()
export class LocalRegisterUseCase {
  constructor(
    private readonly createIdentityUseCase: CreateIdentityUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly authTokenService: AuthTokenService,
    private readonly createRefreshTokenSessionUseCase: CreateRefreshTokenSessionUseCase,
    private readonly transactionManagerService: TransactionManagerService,
  ) {}

  async execute(localRegisterRequest: LocalRegisterRequest) {
    const { user } = await this.transactionManagerService.execute(async () => {
      const user = await this.createUserUseCase.execute(localRegisterRequest);

      await this.createIdentityUseCase.execute({
        provider: AuthProvider.LOCAL,
        providerId: user.password,
        userId: user.id,
      });

      return { user };
    });

    const { rawToken: rawRefreshToken, sessionId } =
      await this.createRefreshTokenSessionUseCase.execute({
        device: localRegisterRequest.device,
        ipAddress: localRegisterRequest.ipAddress,
        userId: user.id,
      });

    const accessToken = this.authTokenService.createAccessToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      username: user.username,
      sessionId,
    });

    return {
      accessToken,
      rawRefreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
      },
    };
  }
}
