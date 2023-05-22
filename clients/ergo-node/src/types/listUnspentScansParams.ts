/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */

export type ListUnspentScansParams = {
  /**
   * Minimal number of confirmations, -1 means we consider unconfirmed
   */
  minConfirmations?: number;
  /**
   * Maximum number of confirmations, -1 means unlimited
   */
  maxConfirmations?: number;
  /**
   * Minimal box inclusion height
   */
  minInclusionHeight?: number;
  /**
   * Maximum box inclusion height, -1 means unlimited
   */
  maxInclusionHeight?: number;
};
export const bigIntsListUnspentScansParams = [];
