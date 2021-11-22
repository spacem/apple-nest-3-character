/**
 * Developemnt start up as express server
 * instead of lambda function
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { env } from './env';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*', // NOTE: allowing * only for development
    methods: 'GET, POST',
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(env.PORT, () => {
    Logger.log(
      'Listening at http://localhost:' + env.PORT + '/' + globalPrefix,
    );
  });
}
