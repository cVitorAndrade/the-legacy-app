import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './shared/infrastructure/env/env.module';

@Module({
  imports: [EnvModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
