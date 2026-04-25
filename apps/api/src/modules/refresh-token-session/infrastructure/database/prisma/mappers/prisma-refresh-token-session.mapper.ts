import { RefreshTokenSession as PrismaRefreshTokenSession } from '@repo/database';
import { RefreshTokenSession } from 'src/modules/refresh-token-session/domain/entities/refresh-token-session.entity';

export class PrismaRefreshTokenSessionMapper {
  static toPersistence({
    id,
    userId,
    tokenHash,
    familyId,
    device,
    ipAddress,
    expiresAt,
    revokedAt,
    createdAt,
  }: RefreshTokenSession): PrismaRefreshTokenSession {
    return {
      id,
      userId,
      tokenHash,
      familyId,
      device,
      ipAddress,
      expiresAt,
      revokedAt,
      createdAt,
    };
  }

  static toDomain({
    id,
    device,
    ipAddress,
    familyId,
    tokenHash,
    userId,
    expiresAt,
    revokedAt,
    createdAt,
  }: PrismaRefreshTokenSession): RefreshTokenSession {
    return new RefreshTokenSession(
      {
        device,
        ipAddress,
        familyId,
        tokenHash,
        userId,
        expiresAt,
        revokedAt,
        createdAt,
      },
      id,
    );
  }
}
