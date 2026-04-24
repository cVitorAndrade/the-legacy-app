import { Injectable } from '@nestjs/common';
import { FindUserByEmailUseCase } from 'src/modules/user/application/use-cases/find-user-by-email/find-user-by-email.use-case';
import { InvalidCredentialsError } from '../../erros/invalid-credentials.error';
import { UserStatus } from 'src/modules/user/domain/enums/user-status.enum';
import { FindIdentityByProviderAndUserIdUseCase } from 'src/modules/identity/application/use-cases/find-identity-by-provider-and-user-id/find-identity-by-provider-and-user-id.use-case';
import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';
import { CreateRefreshTokenSessionUseCase } from 'src/modules/refresh-token-session/application/use-cases/create-refresh-token-session.use-case';
import { AuthTokenService } from 'src/shared/infrastructure/cryptography/services/auth-token.service';

interface LoginLocalRequest {
  email: string;
  password: string;
  device: string;
  ipAddress: string;
}

@Injectable()
export class LocalLoginUseCase {
  constructor(
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly findIdentityByProviderAndUserIdUseCase: FindIdentityByProviderAndUserIdUseCase,
    private readonly createRefreshTokenSession: CreateRefreshTokenSessionUseCase,
    private readonly hashProvider: HasheProvider,
    private readonly authTokenService: AuthTokenService,
  ) {}

  async execute(loginLocalRequest: LoginLocalRequest) {
    const user = await this.findUserByEmailUseCase.execute({
      email: loginLocalRequest.email,
    });
    if (!user) throw new InvalidCredentialsError();

    const identity = await this.findIdentityByProviderAndUserIdUseCase.execute({
      provider: AuthProvider.LOCAL,
      userId: user.id,
    });
    console.log({ identity });

    if (!identity) throw new InvalidCredentialsError();

    const isPasswordValid = await this.hashProvider.compare(
      loginLocalRequest.password,
      identity.providerId,
    );

    const isActiveUser = user.status === UserStatus.ACTIVE;

    if (!isActiveUser || !isPasswordValid) {
      console.log({ isActiveUser, isPasswordValid });
      throw new InvalidCredentialsError();
    }

    const { rawToken: rawRefreshToken, sessionId } =
      await this.createRefreshTokenSession.execute({
        device: loginLocalRequest.device,
        ipAddress: loginLocalRequest.ipAddress,
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
      rawRefreshToken,
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
      },
    };
  }
}
