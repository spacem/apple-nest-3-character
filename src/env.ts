import dotenv from 'dotenv';

const envValues = dotenv.config();

export const env = {
  PRODUCTION: process.env.PRODUCTION || 'false',
  GRAPH_URI: process.env.GRAPH_URI || '/graphql',
  APPLE_NEST_MONGO_URL: process.env.APPLE_NEST_MONGO_URL || '',
  PORT: process.env.PORT || '12021',
  ...envValues?.parsed,
};
