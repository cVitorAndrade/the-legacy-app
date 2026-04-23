import { Identity as PrismaIdentity } from '@repo/database';
import { Identity } from 'src/modules/identity/domain/entities/identity.entity';
import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';

export class PrismaIdentityMapper {
  static toPersistence({
    id,
    provider,
    providerId,
    userId,
    createdAt,
    updatedAt,
  }: Identity): PrismaIdentity {
    return {
      id,
      provider,
      providerId,
      userId,
      createdAt,
      updatedAt,
    };
  }

  static toDomain({
    id,
    provider,
    providerId,
    userId,
    createdAt,
    updatedAt,
  }: PrismaIdentity): Identity {
    return new Identity(
      {
        provider: provider as AuthProvider,
        providerId,
        userId,
        createdAt,
        updatedAt,
      },
      id,
    );
  }
}
