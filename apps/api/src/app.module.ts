import { Module } from '@nestjs/common';
import { EnvModule } from './shared/infrastructure/env/env.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/infrastructure/database/database.module';

@Module({
  imports: [EnvModule.forRoot(), UserModule, AuthModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
