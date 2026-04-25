import { Injectable } from '@nestjs/common';
import { RefreshTokenSession } from 'src/modules/refresh-token-session/domain/entities/refresh-token-session.entity';
import { RefreshTokenSessionRepository } from 'src/modules/refresh-token-session/domain/repositories/refresh-token-session.repository';

interface RevokeAllRefreshTokenSessionsByFamilyIdRequest {
  familyId: string;
}

@Injectable()
export class RevokeAllRefreshTokenSessionsByFamilyIdUseCase {
  constructor(
    private readonly refreshTokenSessionRepository: RefreshTokenSessionRepository,
  ) {}

  async execute({ familyId }: RevokeAllRefreshTokenSessionsByFamilyIdRequest) {
    await this.refreshTokenSessionRepository.revokeAllByFamilyId(
      familyId,
      RefreshTokenSession.getRevocationPolicy(),
    );
  }
}
