/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */

export type WalletTransactionsParams = {
  /**
   * Minimal tx inclusion height
   */
  minInclusionHeight?: bigint;
  /**
   * Maximal tx inclusion height
   */
  maxInclusionHeight?: bigint;
  /**
   * Minimal confirmations number
   */
  minConfirmations?: bigint;
  /**
   * Maximal confirmations number
   */
  maxConfirmations?: bigint;
};
