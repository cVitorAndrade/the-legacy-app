import { Identity } from '../entities/identity.entity';

export abstract class IdentityRepository {
  abstract create(identity: Identity): Promise<void>;
  abstract findByProviderAndProviderId(
    provider: string,
    providerId: string,
  ): Promise<Identity | null>;
}
