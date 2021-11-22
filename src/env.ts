import dotenv from 'dotenv';

const envValues = dotenv.config();

export const env = {
  PRODUCTION: 'false',
  GRAPH_URI: '/graphql',
  APPLE_NEST_MONGO_URL: '',
  PORT: '12021',
  ...envValues?.parsed,
};
