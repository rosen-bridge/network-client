/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { AssetInfo } from './assetInfo';

import { bigIntsAssetInfo } from './assetInfo';

export interface ItemsAssetInfo {
  /** Items in selection */
  items?: AssetInfo[];
  /** Total qty of items */
  total: number;
}
export const bigIntsItemsAssetInfo = [
  ...bigIntsAssetInfo.map((item) => `items.${item}`),
];
