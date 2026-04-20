import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';
import { UserRole } from '../enums/user-role.enum';
import { UserStatus } from '../enums/user-status.enum';

interface UserProps {
  name: string;
  email: string;
  password: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(
    props: Replace<
      UserProps,
      {
        avatarUrl?: string | null;
        createdAt?: Date;
        updatedAt?: Date;
        role?: UserRole;
        status?: UserStatus;
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      role: props.role ?? UserRole.USER,
      status: props.status ?? UserStatus.ACTIVE,
      avatarUrl: props.avatarUrl ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get password(): string {
    return this.props.password;
  }

  get role(): UserRole {
    return this.props.role;
  }

  get status(): UserStatus {
    return this.props.status;
  }

  get username(): string {
    return this.props.username;
  }

  get avatarUrl(): string | null {
    return this.props.avatarUrl;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set email(email: string) {
    this.props.email = email;
  }

  set password(password: string) {
    this.props.password = password;
  }

  set role(role: UserRole) {
    this.props.role = role;
  }

  set status(status: UserStatus) {
    this.props.status = status;
  }

  set avatarUrl(avatarUrl: string | null) {
    this.props.avatarUrl = avatarUrl;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
