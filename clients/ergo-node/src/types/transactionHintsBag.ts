/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { InputHints } from './inputHints';

/**
 * prover hints extracted from a transaction
 */
export interface TransactionHintsBag {
  /** Hints which contain secrets, do not share them! */
  secretHints?: InputHints[];
  /** Hints which contain public data only, share them freely! */
  publicHints?: InputHints[];
}
