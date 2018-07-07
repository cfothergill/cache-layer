// @flow

export type Cache = {
  has: (key: string) => Promise<boolean>;
  get: (key: string) => Promise<any>;
  set: (key: string, value: any) => Promise<void>;
};
