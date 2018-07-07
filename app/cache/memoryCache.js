// @flow

import type { Cache } from '../types';

const memoryCache = (): Cache => {
  const data = new Map();

  return ({
    has: async (key) => data.has(key),
    get: async (key) => data.get(key),
    set: async (key, value) => { data.set(key, value) },
  });
};

export default memoryCache;
