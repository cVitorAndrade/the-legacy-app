import { Module } from '@nestjs/common';
import { Argon2Adapter } from './adapters/argon2.adapter';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';
import { TokenProvider } from 'src/shared/application/cryptography/protocols/token.protocol';
import { AuthTokenService } from './services/auth-token.service';
import { JwtAdapter } from './adapters/jwt.adapter';
import { RandomStringGeneratorProvider } from 'src/shared/application/cryptography/protocols/random-string-generator.protocol';
import { CryptoAdapter } from './adapters/crypto.adapter';
import { TokenHashProvider } from 'src/shared/application/cryptography/protocols/token-hash.protocol';
import { CryptoTokenHashAdapter } from './adapters/crypto-token-hash.adapter';

@Module({
  providers: [
    {
      provide: HasheProvider,
      useClass: Argon2Adapter,
    },
    {
      provide: TokenProvider,
      useClass: JwtAdapter,
    },
    {
      provide: RandomStringGeneratorProvider,
      useClass: CryptoAdapter,
    },
    {
      provide: TokenHashProvider,
      useClass: CryptoTokenHashAdapter,
    },
    AuthTokenService,
  ],
  exports: [
    HasheProvider,
    TokenProvider,
    AuthTokenService,
    RandomStringGeneratorProvider,
    TokenHashProvider,
  ],
})
export class CryptographyModule {}
