import { Identity } from 'src/modules/identity/domain/entities/identity.entity';
import { IdentityRepository } from 'src/modules/identity/domain/repositories/identity.repository';
import { PrismaService } from 'src/shared/infrastructure/database/prisma/prisma.service';
import { PrismaIdentityMapper } from '../mappers/prisma-identity.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaIdentityRepository implements IdentityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(identity: Identity): Promise<void> {
    const prismaIdentity = PrismaIdentityMapper.toPersistence(identity);
    await this.prismaService.identity.create({
      data: prismaIdentity,
    });
  }
}
