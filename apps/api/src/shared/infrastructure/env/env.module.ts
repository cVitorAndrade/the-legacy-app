import { Module } from '@nestjs/common';
import { NestEnvConfigAdapter } from './adapters/nest-env-config';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './protocols/env-config.protocol';
import { join } from 'path';
import { envSchema } from './schema/env.schema';

@Module({})
export class EnvModule {
  static forRoot() {
    return {
      module: EnvModule,
      global: true,
      imports: [
        ConfigModule.forRoot({
          envFilePath: join(__dirname, '../../../../../../.env'),
          isGlobal: true,
          expandVariables: true,
          validate: (env) => envSchema.parse(env),
        }),
      ],
      providers: [
        {
          provide: EnvConfig,
          useClass: NestEnvConfigAdapter,
        },
      ],
      exports: [EnvConfig],
    };
  }
}
