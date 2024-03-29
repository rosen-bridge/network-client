/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { Asset } from './asset';

import { bigIntsAsset } from './asset';

/**
 * Amount of Ergo tokens and assets
 */
export interface BalancesSnapshot {
  height: number;
  balance: bigint;
  assets?: Asset[];
}

export const bigIntsBalancesSnapshot = [
  'balance',
  ...bigIntsAsset.map((item) => (item === '' ? 'assets' : `assets.${item}`)),
];
