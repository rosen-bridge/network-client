/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */

export interface TokenAmount {
  /** Token ID */
  tokenId: string;
  /** Token amount */
  amount: bigint;
  /** Number of decimals */
  decimals: number;
  /** Token name */
  name?: string;
  /** Asset type (token standard) */
  tokenType?: string;
}
export const bigIntsTokenAmount = ['amount'];
