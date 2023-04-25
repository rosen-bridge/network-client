/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { ErgoTransactionOutput } from './ergoTransactionOutput';
import type { ErgoAddress } from './ergoAddress';
import type { ModifierId } from './modifierId';

export interface WalletBox {
  box: ErgoTransactionOutput;
  /** Number of confirmations, if the box is included into the blockchain */
  confirmationsNum: bigint | null;
  address: ErgoAddress;
  /** Transaction which created the box */
  creationTransaction: ModifierId;
  /** Transaction which created the box */
  spendingTransaction: ModifierId;
  /** The height the box was spent at */
  spendingHeight: bigint | null;
  /** The height the transaction containing the box was included in a block at */
  inclusionHeight: bigint;
  /** A flag signalling whether the box is created on main chain */
  onchain: boolean;
  /** A flag signalling whether the box was spent */
  spent: boolean;
  /** An index of a box in the creating transaction */
  creationOutIndex: bigint;
  /** Scan identifiers the box relates to */
  scans: bigint[];
}
