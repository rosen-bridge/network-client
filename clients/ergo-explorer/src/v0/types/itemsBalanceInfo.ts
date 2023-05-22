/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { BalanceInfo } from './balanceInfo';

import { bigIntsBalanceInfo } from './balanceInfo';

export interface ItemsBalanceInfo {
  /** Items in selection */
  items?: BalanceInfo[];
  /** Total qty of items */
  total: number;
}
export const bigIntsItemsBalanceInfo = [
  ...bigIntsBalanceInfo.map((item) => `items.${item}`),
];
