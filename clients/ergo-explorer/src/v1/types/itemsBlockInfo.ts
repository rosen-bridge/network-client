/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { BlockInfo } from './blockInfo';

export interface ItemsBlockInfo {
  /** Items in selection */
  items?: BlockInfo[];
  /** Total qty of items */
  total: bigint;
}
