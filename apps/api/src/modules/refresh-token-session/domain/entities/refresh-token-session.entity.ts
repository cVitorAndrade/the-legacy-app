import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface RefreshTokenSessionProps {
  userId: string;
  tokenHash: string;
  familyId: string;
  device: string;
  ipAddress: string;
  createdAt: Date;
  expiresAt: Date;
  revokedAt: Date | null;
}

export class RefreshTokenSession {
  private _id: string;
  private props: RefreshTokenSessionProps;

  constructor(
    props: Replace<
      RefreshTokenSessionProps,
      { familyId?: string; revokedAt?: Date | null; createdAt?: Date }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      familyId: props.familyId ?? randomUUID(),
      createdAt: props.createdAt ?? new Date(),
      revokedAt: props.revokedAt ?? null,
    };

    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this.props.userId;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }

  get tokenHash(): string {
    return this.props.tokenHash;
  }

  get familyId(): string {
    return this.props.familyId;
  }

  get device(): string {
    return this.props.device;
  }

  set device(device: string) {
    this.props.device = device;
  }

  get ipAddress(): string {
    return this.props.ipAddress;
  }

  set ipAddress(ipAddress: string) {
    this.props.ipAddress = ipAddress;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get expiresAt(): Date {
    return this.props.expiresAt;
  }

  set expiresAt(expiresAt: Date) {
    this.props.expiresAt = expiresAt;
  }

  get revokedAt(): Date | null {
    return this.props.revokedAt;
  }

  set revokedAt(revokedAt: Date | null) {
    this.props.revokedAt = revokedAt;
  }
}
