import { Module } from '@nestjs/common';
import { Argon2Adapter } from './adapters/argon2.adapter';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';
import { TokenProvider } from 'src/shared/application/cryptography/protocols/token.protocol';
import { AuthTokenService } from './services/auth-token.service';
import { JwtAdapter } from './adapters/jwt.adapter';
import { RandomStringGeneratorProvider } from 'src/shared/application/cryptography/protocols/random-string-generator.protocol';
import { CryptoAdapter } from './adapters/crypto.adapter';

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
    AuthTokenService,
  ],
  exports: [
    HasheProvider,
    TokenProvider,
    AuthTokenService,
    RandomStringGeneratorProvider,
  ],
})
export class CryptographyModule {}
