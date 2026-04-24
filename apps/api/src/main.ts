import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ApplicationErrorFilter } from './shared/infrastructure/http/filters/application-error.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new ApplicationErrorFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors) => {
        const firstErrorMessage = Object.values(errors[0].constraints || {})[0];

        return new BadRequestException({
          statusCode: 400,
          error: 'ValidationError',
          message: firstErrorMessage || 'Erro de validação nos dados enviados',
        });
      },
    }),
  );

  app.use(cookieParser());

  app.set('trust proxy', true);

  app.enableCors({
    origin: process.env.WEB_URL,
    credentials: true,
  });

  await app.listen(process.env.API_PORT!);
}
bootstrap();
