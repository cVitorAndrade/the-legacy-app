import { Injectable } from '@nestjs/common';
import { Identity } from 'src/modules/identity/domain/entities/identity.entity';
import { IdentityRepository } from 'src/modules/identity/domain/repositories/identity.repository';
import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';
import { IndetityAlreadyInUseError } from '../../errors/identity-already-in-use.error';
import { ProviderAlreadyLinked } from '../../errors/provider-already-linked-error';

interface CreateIdentityRequest {
  userId: string;
  provider: AuthProvider;
  providerId: string;
}

@Injectable()
export class CreateIdentityUseCase {
  constructor(private readonly identityRepository: IdentityRepository) {}

  async execute(createIdentityRequest: CreateIdentityRequest) {
    const identityAlreadyInUse =
      await this.identityRepository.findByProviderAndProviderId(
        createIdentityRequest.provider,
        createIdentityRequest.providerId,
      );

    if (identityAlreadyInUse)
      throw new IndetityAlreadyInUseError(createIdentityRequest.provider);

    const providerAlreadyLinked =
      await this.identityRepository.findByProviderAndUserId(
        createIdentityRequest.provider,
        createIdentityRequest.userId,
      );

    if (providerAlreadyLinked)
      throw new ProviderAlreadyLinked(createIdentityRequest.provider);

    const identity = new Identity({
      ...createIdentityRequest,
    });
    await this.identityRepository.create(identity);

    return identity;
  }
}
