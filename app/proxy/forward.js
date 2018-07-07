// @flow

import request from 'request';

type Headers = { [string]: string };
export type Request = { url: string, headers: Headers };
export type Response = { status: number; headers: Headers; body?: string; };

export default (req: Request): Promise<Response> => {
  return new Promise((resolve, reject) => {
    request(req.url, (err, res, body) => {
      if (err) { return reject(err); }

      resolve({
        status: res.statusCode,
        headers: res.headers,
        body,
      });
    });
  });
};
