// @flow

import memoryCache from './memoryCache';
import redisCache from './redisCache';

const { CACHE_DRIVER } = process.env;
const cache = CACHE_DRIVER === 'redis' ?
  redisCache() : memoryCache();

export default cache;
