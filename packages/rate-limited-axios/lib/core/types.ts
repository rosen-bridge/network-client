import { Semaphore } from '@rosen-bridge/semaphore';

export type Rule = {
  pattern: RegExp;
  semaphore: Semaphore;
  throttleWindow: number;
  timeout: number;
};
