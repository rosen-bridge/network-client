/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { BoxesRequestHolderTargetAssetsItemItem } from './boxesRequestHolderTargetAssetsItemItem';

/**
 * Holds request for wallet boxes
 */
export interface BoxesRequestHolder {
  /** Target assets */
  targetAssets: BoxesRequestHolderTargetAssetsItemItem[][];
  /** Target balance */
  targetBalance: number;
}
