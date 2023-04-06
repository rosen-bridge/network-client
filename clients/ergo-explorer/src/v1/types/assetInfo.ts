/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */

export interface AssetInfo {
  /** Header ID this asset belongs to */
  headerId: string;
  /** Box ID this asset belongs to */
  boxId: string;
  /** Token ID */
  tokenId: string;
  /** Index of the asset in an output */
  index: number;
  /** Amount of tokens */
  amount: number;
  /** Name of the asset */
  name?: string;
  /** Number of decimal places */
  decimals?: number;
  /** Type of the asset (token standard) */
  type?: string;
}