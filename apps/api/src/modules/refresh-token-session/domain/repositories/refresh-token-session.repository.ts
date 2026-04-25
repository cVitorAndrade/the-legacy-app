import { RefreshTokenSession } from '../entities/refresh-token-session.entity';

export abstract class RefreshTokenSessionRepository {
  abstract create(refreshTokenSession: RefreshTokenSession): Promise<void>;
  abstract findByTokenHash(
    tokenHash: string,
  ): Promise<RefreshTokenSession | null>;
  abstract findById(id: string): Promise<RefreshTokenSession | null>;
  abstract save(refreshTokenSession: RefreshTokenSession): Promise<void>;
  abstract revokeAllByFamilyId(
    familyId: string,
    data: Partial<RefreshTokenSession>,
  ): Promise<void>;
}
