/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { TransactionId } from './transactionId';
import { bigIntsTransactionId } from './transactionId';
import type { ErgoTransactionInput } from './ergoTransactionInput';
import { bigIntsErgoTransactionInput } from './ergoTransactionInput';
import type { ErgoTransactionDataInput } from './ergoTransactionDataInput';
import { bigIntsErgoTransactionDataInput } from './ergoTransactionDataInput';
import type { ErgoTransactionOutput } from './ergoTransactionOutput';

import { bigIntsErgoTransactionOutput } from './ergoTransactionOutput';

/**
 * Transaction augmented with some useful information
 */
export interface WalletTransaction {
  id?: TransactionId;
  /** Transaction inputs */
  inputs: ErgoTransactionInput[];
  /** Transaction data inputs */
  dataInputs: ErgoTransactionDataInput[];
  /** Transaction outputs */
  outputs: ErgoTransactionOutput[];
  /** Height of a block the transaction was included in */
  inclusionHeight: number;
  /** Number of transaction confirmations */
  numConfirmations: number;
  /** Scan identifiers the transaction relates to */
  scans: number[];
  /** Size in bytes */
  size?: number;
}

export const bigIntsWalletTransaction = [
  ...bigIntsTransactionId.map((item) => (item === '' ? 'id' : `id.${item}`)),
  ...bigIntsErgoTransactionInput.map((item) =>
    item === '' ? 'inputs' : `inputs.${item}`
  ),
  ...bigIntsErgoTransactionDataInput.map((item) =>
    item === '' ? 'dataInputs' : `dataInputs.${item}`
  ),
  ...bigIntsErgoTransactionOutput.map((item) =>
    item === '' ? 'outputs' : `outputs.${item}`
  ),
];
