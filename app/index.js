// @flow

import express from 'express';
import createCache from './cache';
import createProxy from './proxy';
import type { AppConfig, App } from './types';

export default (config: AppConfig): App => {
  const cache = createCache(config.cache);
  const proxy = createProxy(config.host, cache, config.maxRetries);
  const app = express();

  app.get('/api/v0/drones', proxy);
  app.get('/api/v0/drone/:id', proxy);

  return app;
};
