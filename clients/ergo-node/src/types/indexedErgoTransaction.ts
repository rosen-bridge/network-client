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
import type { ModifierId } from './modifierId';
import { bigIntsModifierId } from './modifierId';
import type { Timestamp } from './timestamp';

import { bigIntsTimestamp } from './timestamp';

/**
 * Transaction indexed with extra information
 */
export interface IndexedErgoTransaction {
  id: TransactionId;
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
  /** Id of the block the transaction was included in */
  blockId: ModifierId;
  timestamp: Timestamp;
  /** index of the transaction in the block it was included in */
  index: number;
  /** Global index of the transaction in the blockchain */
  globalIndex: bigint;
  /** Size in bytes */
  size: number;
}

export const bigIntsIndexedErgoTransaction = [
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
  ...bigIntsModifierId.map((item) =>
    item === '' ? 'blockId' : `blockId.${item}`
  ),
  ...bigIntsTimestamp.map((item) =>
    item === '' ? 'timestamp' : `timestamp.${item}`
  ),
  'globalIndex',
];
