// @flow

import type { RequestHandler } from './types';

const proxy = (endpoint: string): RequestHandler => {
  return (req, res) => {
    res.json({ hello: 'world' });
  };
};

export default proxy;
