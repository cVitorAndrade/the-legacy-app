import { User as PrismaUser } from '@repo/database';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { UserRole } from 'src/modules/user/domain/enums/user-role.enum';
import { UserStatus } from 'src/modules/user/domain/enums/user-status.enum';

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

  static toDomain({
    id,
    name,
    email,
    username,
    password,
    avatarUrl,
    role,
    status,
    createdAt,
    updatedAt,
  }: PrismaUser): User {
    return new User(
      {
        name,
        email,
        username,
        password,
        avatarUrl,
        role: role as UserRole,
        status: status as UserStatus,
        createdAt,
        updatedAt,
      },
      id,
    );
  }
}
