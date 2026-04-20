import { ConfigService } from '@nestjs/config';
import { EnvConfig } from '../protocols/env-config.protocol';
import { Injectable } from '@nestjs/common';
import { EnvVariables } from '../schema/env.schema';

@Injectable()
export class NestEnvConfigAdapter implements EnvConfig {
  constructor(
    private readonly configService: ConfigService<EnvVariables, true>,
  ) {}

  getAppPort(): number {
    return this.configService.get('API_PORT', { infer: true });
  }

  getNodeEnv(): string {
    return this.configService.get('NODE_ENV', { infer: true });
  }
}
