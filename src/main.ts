import { env } from './env';
import { bootstrap } from './dev';

if (env.PRODUCTION !== 'true') {
  bootstrap();
}

export { handler } from './lambda';
