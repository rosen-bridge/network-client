/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { SpendingProofInfo } from './spendingProofInfo';

export interface UInputInfo {
  /** Id of the corresponding box */
  id: string;
  /** Id of the transaction spending this input */
  transactionId: string;
  spendingProof: SpendingProofInfo;
  /** Amount of nanoERGs in the corresponding box */
  value?: number;
  /** Index of the input in a transaction */
  index: number;
  /** ID of the output transaction */
  outputTransactionId?: string;
  /** Index of the output corresponding this input */
  outputIndex?: number;
  /** Address */
  address?: string;
}