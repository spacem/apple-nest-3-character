import { env } from './env';
import { bootstrap } from './dev';
import { Logger } from '@nestjs/common';
import { handler } from './lambda';

const logger = new Logger('main');

if (env.PRODUCTION !== 'true') {
  logger.log('Starting in dev mode');
  bootstrap();
} else {
  logger.log('Starting in prod mode');
}

module.exports = { handler };
