/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { IndexedErgoTransaction } from './indexedErgoTransaction';

export type GetTxsByAddress200 = {
  /** Array of transactions */
  items?: IndexedErgoTransaction[];
  /** Total count of retreived transactions */
  total?: bigint;
};
