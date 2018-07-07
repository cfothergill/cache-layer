// @flow

import http from 'http';
import createApp from './app';

const app = createApp({
  host: (process.env.PROXY_HOST: any),
  cache: (process.env.CACHE_DRIVER: any),
  maxRetries: (process.env.MAX_RETRIES: any),
});

const server = http.createServer(app);
server.listen(3000);
