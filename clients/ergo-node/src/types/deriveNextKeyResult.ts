/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { ErgoAddress } from './ergoAddress';

export interface DeriveNextKeyResult {
  /** Derivation path of the resulted secret */
  derivationPath: string;
  address: ErgoAddress;
}
