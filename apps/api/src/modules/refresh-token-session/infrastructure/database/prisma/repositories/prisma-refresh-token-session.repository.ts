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

  async findByTokenHash(
    tokenHash: string,
  ): Promise<RefreshTokenSession | null> {
    const prismaRefreshTokenSession =
      await this.prismaService.refreshTokenSession.findUnique({
        where: { tokenHash },
      });
    if (!prismaRefreshTokenSession) return null;

    return PrismaRefreshTokenSessionMapper.toDomain(prismaRefreshTokenSession);
  }

  async findById(id: string): Promise<RefreshTokenSession | null> {
    const prismaRefreshTokenSession =
      await this.prismaService.refreshTokenSession.findUnique({
        where: { id },
      });
    if (!prismaRefreshTokenSession) return null;

    return PrismaRefreshTokenSessionMapper.toDomain(prismaRefreshTokenSession);
  }

  async save(refreshTokenSession: RefreshTokenSession): Promise<void> {
    const prismaRefreshTokenSession =
      PrismaRefreshTokenSessionMapper.toPersistence(refreshTokenSession);
    await this.prismaService.refreshTokenSession.update({
      data: prismaRefreshTokenSession,
      where: { id: prismaRefreshTokenSession.id },
    });
  }

  async revokeAllByFamilyId(
    familyId: string,
    data: Partial<RefreshTokenSession>,
  ): Promise<void> {
    await this.prismaService.refreshTokenSession.updateMany({
      where: { familyId },
      data,
    });
  }
}
