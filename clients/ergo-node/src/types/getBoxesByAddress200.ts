/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { IndexedErgoBox } from './indexedErgoBox';

export type GetBoxesByAddress200 = {
  /** Array of boxes */
  items?: IndexedErgoBox[];
  /** Total number of retreived boxes */
  total?: bigint;
};
