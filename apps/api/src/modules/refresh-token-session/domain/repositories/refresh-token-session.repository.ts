import { RefreshTokenSession } from '../entities/refresh-token-session.entity';

export abstract class RefreshTokenSessionRepository {
  abstract create(refreshTokenSession: RefreshTokenSession): Promise<void>;
}
