import { Identity } from '../entities/identity.entity';

export abstract class IdentityRepository {
  abstract create(identity: Identity): Promise<void>;
}
