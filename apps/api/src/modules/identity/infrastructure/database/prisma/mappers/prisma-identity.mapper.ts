import { Identity as PrismaIdentity } from '@repo/database';
import { Identity } from 'src/modules/identity/domain/entities/identity.entity';

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
}
