import { TokenHashProvider } from 'src/shared/application/cryptography/protocols/token-hash.protocol';
import crypto from 'node:crypto';

export class CryptoTokenHashAdapter implements TokenHashProvider {
  hash(rawToken: string): string {
    return crypto.createHash('sha256').update(rawToken).digest('hex');
  }
}
