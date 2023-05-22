/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { ErgoTransactionOutput } from './ergoTransactionOutput';
import { bigIntsErgoTransactionOutput } from './ergoTransactionOutput';
import type { ErgoAddress } from './ergoAddress';
import { bigIntsErgoAddress } from './ergoAddress';
import type { ModifierId } from './modifierId';

import { bigIntsModifierId } from './modifierId';

/**
 * Box indexed with extra information
 */
export interface IndexedErgoBox {
  box: ErgoTransactionOutput;
  /** Number of confirmations, if the box is included into the blockchain */
  confirmationsNum: number | null;
  address: ErgoAddress;
  /** Transaction which created the box */
  creationTransaction: ModifierId;
  /** Transaction which created the box */
  spendingTransaction: ModifierId;
  /** The height the box was spent at */
  spendingHeight: number | null;
  /** The height the transaction containing the box was included in a block at */
  inclusionHeight: number;
  /** A flag signalling whether the box was spent */
  spent: boolean;
  /** Global index of the output in the blockchain */
  globalIndex: bigint;
}

export const bigIntsIndexedErgoBox = [
  ...bigIntsErgoTransactionOutput.map((item) => `box.${item}`),
  ...bigIntsErgoAddress.map((item) => `address.${item}`),
  ...bigIntsModifierId.map((item) => `creationTransaction.${item}`),
  ...bigIntsModifierId.map((item) => `spendingTransaction.${item}`),
  'globalIndex',
];
