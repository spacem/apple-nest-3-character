import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless = require('serverless-http');
import { Logger } from '@nestjs/common';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = env.GLOBAL_PREFIX;
  Logger.log('Bootstrapping server at ' + globalPrefix);
  app.setGlobalPrefix(globalPrefix);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp);
}

let server: any;
export const handler = async (event: any, context: any, callback: any) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
