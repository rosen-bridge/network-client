/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { BalanceInfoTokensItem } from './balanceInfoTokensItem';

import { bigIntsBalanceInfoTokensItem } from './balanceInfoTokensItem';

/**
 * Balance information
 */
export interface BalanceInfo {
  /** Balance of nanoERGs */
  nanoErgs: bigint;
  /** Balance of tokens */
  tokens: BalanceInfoTokensItem[];
}
export const bigIntsBalanceInfo = [
  'nanoErgs',
  ...bigIntsBalanceInfoTokensItem.map((item) => `tokens.${item}`),
];
