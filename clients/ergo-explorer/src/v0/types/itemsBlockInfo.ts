/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { BlockInfo } from './blockInfo';

import { bigIntsBlockInfo } from './blockInfo';

export interface ItemsBlockInfo {
  /** Items in selection */
  items?: BlockInfo[];
  /** Total qty of items */
  total: number;
}
export const bigIntsItemsBlockInfo = [
  ...bigIntsBlockInfo.map((item) => `items.${item}`),
];
