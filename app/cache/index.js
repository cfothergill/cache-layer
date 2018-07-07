// @flow

import type { CacheDriver, Cache } from '../types';
import memoryCache from './memoryCache';
import redisCache from './redisCache';

export default (driver: CacheDriver): Cache => {
  return ({
    memory: memoryCache,
    redis: redisCache,
  })[driver]();
};
