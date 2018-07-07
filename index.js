// @flow

import http from 'http';
import createApp from './app';

const app = createApp({
  host: 'bobs-epic-drone-shack-inc.herokuapp.com',
  cache: 'memory',
});

const server = http.createServer(app);
server.listen(3000);
