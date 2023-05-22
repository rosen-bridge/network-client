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
 * Request for burning tokens in wallet
 */
export interface BurnTokensRequest {
  /** Assets list to burn in the transaction */
  assetsToBurn: Asset[];
}
export const bigIntsBurnTokensRequest = [
  ...bigIntsAsset.map((item) => `assetsToBurn.${item}`),
];
