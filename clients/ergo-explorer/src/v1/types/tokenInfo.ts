/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */

export interface TokenInfo {
  /** ID of the asset */
  id: string;
  /** Box ID this asset was issued by */
  boxId: string;
  /** Number of decimal places */
  emissionAmount: bigint;
  /** Name of the asset */
  name?: string;
  /** Description of the asset */
  description?: string;
  /** Asset type (token standard) */
  type?: string;
  /** Number of decimal places */
  decimals?: number;
}
export const bigIntsTokenInfo = ['emissionAmount'];
