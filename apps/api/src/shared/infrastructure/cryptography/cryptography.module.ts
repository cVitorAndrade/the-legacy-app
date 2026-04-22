import { Module } from '@nestjs/common';
import { Argon2Adapter } from './adapters/argon2.adapter';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';
import { TokenProvider } from 'src/shared/application/cryptography/protocols/token.protocol';
import { AuthTokenService } from './services/auth-token.service';
import { JwtAdapter } from './adapters/jwt.adapter';

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
    AuthTokenService,
  ],
  exports: [HasheProvider, TokenProvider, AuthTokenService],
})
export class CryptographyModule {}
