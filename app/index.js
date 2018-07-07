// @flow

import type { IncomingMessage, ServerResponse } from 'http';
import express from 'express';
import createProxy from './proxy';

type Config = { host: string; cache: 'memory' | 'redis'; };
type App = (IncomingMessage, ServerResponse) => void;

const create = (config: Config): App => {
  const cache = {};
  const proxy = createProxy(config.host);
  const app = express();

  app.get('/', proxy);
  app.get('/hello', proxy);

  return app;
};

export default create;
