/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { InputHints } from './inputHints';

import { bigIntsInputHints } from './inputHints';

/**
 * prover hints extracted from a transaction
 */
export interface TransactionHintsBag {
  /** Hints which contain secrets, do not share them! */
  secretHints?: InputHints[];
  /** Hints which contain public data only, share them freely! */
  publicHints?: InputHints[];
}

export const bigIntsTransactionHintsBag = [
  ...bigIntsInputHints.map((item) =>
    item === '' ? 'secretHints' : `secretHints.${item}`
  ),
  ...bigIntsInputHints.map((item) =>
    item === '' ? 'publicHints' : `publicHints.${item}`
  ),
];
