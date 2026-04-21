import { User } from 'src/modules/user/domain/entities/user.entity';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';
import { PrismaUserMapper } from '../mappers/prisma-user.mapper';
import { PrismaService } from 'src/shared/infrastructure/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(user: User): Promise<void> {
    const prismaUser = PrismaUserMapper.toPersistence(user);
    await this.prismaService.user.create({
      data: prismaUser,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const prismaUser = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!prismaUser) return null;

    return PrismaUserMapper.toDomain(prismaUser);
  }
}
