import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';
import { Identity } from '../entities/identity.entity';

export abstract class IdentityRepository {
  abstract create(identity: Identity): Promise<void>;
  abstract findByProviderAndProviderId(
    provider: AuthProvider,
    providerId: string,
  ): Promise<Identity | null>;
  abstract findByProviderAndUserId(
    provider: AuthProvider,
    userId: string,
  ): Promise<Identity | null>;
}
