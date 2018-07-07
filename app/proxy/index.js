// @flow

import type { ExpressRoute, Cache } from '../types';
import forward from './forward';

export default (host: string, cache: Cache): ExpressRoute => {
  return (req, res) => {
    (async () => {
      const url = `https://${host}/${req.path}`;

      try {
        const { status, headers, body } = await forward(url);
        res.status(status).set(headers).send(body);
      } catch (err) {
        res.status(503).send('');
      }
    })();
  };
};
