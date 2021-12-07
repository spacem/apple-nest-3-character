import dotenv from 'dotenv';

const envValues = dotenv.config();

export const env = {
  PRODUCTION: process.env.PRODUCTION || 'false',
  GLOBAL_PREFIX: process.env.GLOBAL_PREFIX || 'api', // on prod set to '.netlify/functions/main'
  GRAPH_URI: process.env.GRAPH_URI || '/graphql',
  APPLE_NEST_MONGO_URL: process.env.APPLE_NEST_MONGO_URL || '',
  PORT: process.env.PORT || '12021',
  ...envValues?.parsed,
};
