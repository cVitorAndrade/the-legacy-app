import { User as PrismaUser } from '@repo/database';
import { User } from 'src/modules/user/domain/entities/user.entity';

export class PrismaUserMapper {
  static toPersistence({
    id,
    email,
    name,
    username,
    password,
    avatarUrl,
    role,
    status,
    createdAt,
    updatedAt,
  }: User): PrismaUser {
    return {
      id,
      email,
      name,
      username,
      password,
      avatarUrl,
      role,
      status,
      createdAt,
      updatedAt,
    };
  }
}
