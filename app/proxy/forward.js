// @flow

import request from 'request';

type Response = {
  status: number;
  headers: Object;
  body?: string;
};

export default (url: string): Promise<Response> => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) { return reject(err); }
      
      resolve({
        status: res.statusCode,
        headers: res.headers,
        body,
      });
    });
  });
};
