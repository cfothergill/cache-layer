// @flow

import http from 'http';
import createApp from './app';

const app = createApp({
  host: '',
  cache: 'memory',
});

const server = http.createServer(app);
server.listen(3000);
