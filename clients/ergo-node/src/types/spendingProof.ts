/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { SpendingProofBytes } from './spendingProofBytes';
import type { SpendingProofExtension } from './spendingProofExtension';

/**
 * Spending proof for transaction input
 */
export interface SpendingProof {
  proofBytes: SpendingProofBytes;
  /** Variables to be put into context */
  extension: SpendingProofExtension;
}
