import { RandomStringGeneratorProvider } from 'src/shared/application/cryptography/protocols/random-string-generator.protocol';
import crypto from 'node:crypto';

export class CryptoAdapter implements RandomStringGeneratorProvider {
  generateString(bytes: number = 64): string {
    return crypto.randomBytes(bytes).toString('hex');
  }

  generateUUID(): string {
    return crypto.randomUUID();
  }
}
