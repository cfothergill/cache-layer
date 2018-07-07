// @flow

import type { ExpressRoute, Cache } from './types';

export default (host: string, cache: Cache): ExpressRoute => {
  return (req, res) => {
    res.json({ hello: 'world' });
  };
};
