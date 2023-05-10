/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */

export interface DataInputInfo1 {
  /** ID of the corresponding box */
  id: string;
  /** Number of nanoErgs in the corresponding box */
  value?: bigint;
  index: bigint;
  /** ID of the transaction this data input was used in */
  transactionId: string;
  /** ID of the transaction outputting corresponding box */
  outputTransactionId?: string;
  outputIndex?: bigint;
  /** Decoded address of the corresponding box holder */
  address?: string;
}
