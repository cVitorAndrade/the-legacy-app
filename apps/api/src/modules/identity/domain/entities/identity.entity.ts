import { randomUUID } from 'crypto';
import { AuthProvider } from 'src/shared/domain/enums/auth-provider.enum';
import { Replace } from 'src/utils/replace';

interface IdentityProps {
  userId: string;
  provider: AuthProvider;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Identity {
  private _id: string;
  private props: IdentityProps;

  constructor(
    props: Replace<IdentityProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get userId(): string {
    return this.props.userId;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }

  get provider(): AuthProvider {
    return this.props.provider;
  }

  set provider(provider: AuthProvider) {
    this.props.provider = provider;
  }

  get providerId(): string {
    return this.props.providerId;
  }

  set providerId(providerId: string) {
    this.props.providerId = providerId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
