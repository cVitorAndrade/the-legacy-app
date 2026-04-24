import { Injectable } from '@nestjs/common';
import { IdentityRepository } from 'src/modules/identity/domain/repositories/identity.repository';
import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';

interface FindIdentityByProviderAndUserIdRequest {
  provider: AuthProvider;
  userId: string;
}

@Injectable()
export class FindIdentityByProviderAndUserIdUseCase {
  constructor(private readonly identityRepository: IdentityRepository) {}

  async execute({ provider, userId }: FindIdentityByProviderAndUserIdRequest) {
    return this.identityRepository.findByProviderAndUserId(provider, userId);
  }
}
