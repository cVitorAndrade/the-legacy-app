import { Module } from '@nestjs/common';
import { EnvModule } from './shared/infrastructure/env/env.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [EnvModule.forRoot(), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
