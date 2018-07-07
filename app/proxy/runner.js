// @flow

import type { Cache } from '../types';
import forward from './forward';
import type { Request } from './forward';

export default (cache: Cache, maxRetries: number) => {
  const run = async (req: Request, retries: number) => {
    const res = await forward(req);

    if (res.status > 399) {
      if (await cache.has(req.url)) {
        return await cache.get(req.url);
      }

      if (retries > 0) {
        return await run(req, retries - 1);
      }
    }

    return res;
  };

  return (req: Request) => run(req, maxRetries);
};
