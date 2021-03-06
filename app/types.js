// @flow

import type { IncomingMessage, ServerResponse } from 'http';
import type { $Request, $Response, NextFunction } from 'express';

export type CacheDriver = ('memory' | 'redis');
export type AppConfig = { host: string; cache: CacheDriver; maxRetries: number };
export type App = (IncomingMessage, ServerResponse) => void;
export type ExpressRoute = (req: $Request, res: $Response, next: NextFunction) => void;

export type Cache = {
  has: (key: string) => Promise<boolean>;
  get: (key: string) => Promise<any>;
  set: (key: string, value: any) => Promise<void>;
};
