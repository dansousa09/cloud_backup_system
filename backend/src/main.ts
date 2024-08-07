import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const NODE_ENV = process.env.NODE_ENV || 'development';
  const APP_PORT = process.env.APP_PORT || 3000;

  logger.verbose(`(env: ${NODE_ENV}) Running: http://localhost:${APP_PORT}`);
}
bootstrap();
