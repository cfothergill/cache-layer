// @flow

import type { $Request, $Response } from 'express';

export type RequestHandler = (req: $Request, res: $Response) => void;

export type Cache = {
  has: (key: string) => Promise<boolean>;
  get: (key: string) => Promise<any>;
  set: (key: string, value: any) => Promise<void>;
};
