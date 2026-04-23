import { RefreshTokenSession } from 'src/modules/refresh-token-session/domain/entities/refresh-token-session.entity';
import { RefreshTokenSessionRepository } from 'src/modules/refresh-token-session/domain/repositories/refresh-token-session.repository';
import { PrismaService } from 'src/shared/infrastructure/database/prisma/prisma.service';
import { PrismaRefreshTokenSessionMapper } from '../mappers/prisma-refresh-token-session.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRefreshTokenSessionRepository
  implements RefreshTokenSessionRepository
{
  constructor(private readonly prismaService: PrismaService) {}
  async create(refreshTokenSession: RefreshTokenSession): Promise<void> {
    const prismaRefreshTokenSession =
      PrismaRefreshTokenSessionMapper.toPersistence(refreshTokenSession);
    await this.prismaService.refreshTokenSession.create({
      data: prismaRefreshTokenSession,
    });
  }
}
