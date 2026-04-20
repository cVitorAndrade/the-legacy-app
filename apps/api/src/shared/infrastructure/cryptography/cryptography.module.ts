import { Module } from '@nestjs/common';
import { Argon2Adapter } from './adapters/argon2.adapter';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';

@Module({
  providers: [
    {
      provide: HasheProvider,
      useClass: Argon2Adapter,
    },
  ],
  exports: [HasheProvider],
})
export class CryptographyModule {}
