// @flow

import type { ExpressRoute, Cache } from '../types';
import createRunner from './runner';

export default (host: string, cache: Cache, maxRetries: number): ExpressRoute => {
  return (req, res, next) => {
    (async () => {
      try {
        const url = `https://${host}/${req.path}`;
        const runner = createRunner(cache, maxRetries);

        const { status, headers, body } = await runner({
          url: url,
          headers: req.headers,
        });

        res.status(status).set(headers).send(body);
        await cache.set(url, { status, headers, body });
      } catch (err) {
        next(err);
      }
    })();
  };
};
