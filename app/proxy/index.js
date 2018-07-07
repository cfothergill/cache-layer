// @flow

import type { ExpressRoute, Cache } from '../types';
import forward from './forward';
import type { Request } from './forward';

export default (host: string, cache: Cache, maxRetries: number): ExpressRoute => {
  const proxy = async (req: Request, retries: number) => {
    const res = await forward(req);

    if (res.status > 399) {
      if (cache.has(req.url)) {
        return cache.get(req.url);
      }

      if (retries > 0) {
        return await proxy(req, retries - 1);
      }
    }

    return res;
  };

  return (req, res, next) => {
    (async () => {
      try {
        const url = `https://${host}/${req.path}`;
        const { status, headers, body } = await proxy({
          url: url,
          headers: req.headers,
        }, maxRetries);

        res.status(status).set(headers).send(body);
        await cache.set(url, { status, headers, body });
      } catch (err) {
        next(err);
      }
    })();
  };
};
