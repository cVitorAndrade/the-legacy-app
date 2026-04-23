import { hash, verify } from 'argon2';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';

export class Argon2Adapter implements HasheProvider {
  async hash(plainText: string): Promise<string> {
    return await hash(plainText);
  }

  async compare(plainText: string, hash: string): Promise<boolean> {
    return await verify(hash, plainText);
  }
}
