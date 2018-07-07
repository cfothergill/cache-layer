// @flow

import { promisify } from 'util';
import redis from 'redis';
import type { Cache } from '../types';

const redisCache = (): Cache => {
  const client = redis.createClient({ host: 'redis' });
  const existsAsync = promisify(client.exists).bind(client);
  const getAsync = promisify(client.get).bind(client);
  const setAsync = promisify(client.set).bind(client);

  return {
    has: async (key) => !! await existsAsync(key),
    get: async (key) => JSON.parse(await getAsync(key)),
    set: async (key, value) => { await setAsync(key, JSON.stringify(value)) },
  };
};

export default redisCache;
