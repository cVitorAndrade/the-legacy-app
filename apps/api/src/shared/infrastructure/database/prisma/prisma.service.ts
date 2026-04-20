import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@repo/database';
import { EnvConfig } from '../../env/protocols/env-config.protocol';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly envConfig: EnvConfig) {
    const pool = new Pool({
      connectionString: envConfig.getDatabaseUrl(),
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
