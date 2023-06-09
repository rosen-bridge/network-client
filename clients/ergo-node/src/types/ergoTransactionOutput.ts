/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { TransactionBoxId } from './transactionBoxId';
import { bigIntsTransactionBoxId } from './transactionBoxId';
import type { ErgoTree } from './ergoTree';
import { bigIntsErgoTree } from './ergoTree';
import type { Asset } from './asset';
import { bigIntsAsset } from './asset';
import type { Registers } from './registers';
import { bigIntsRegisters } from './registers';
import type { TransactionId } from './transactionId';

import { bigIntsTransactionId } from './transactionId';

export interface ErgoTransactionOutput {
  boxId?: TransactionBoxId;
  /** Amount of Ergo token */
  value: bigint;
  ergoTree: ErgoTree;
  /** Height the output was created at */
  creationHeight: number;
  /** Assets list in the transaction */
  assets?: Asset[];
  additionalRegisters: Registers;
  transactionId?: TransactionId;
  /** Index in the transaction outputs */
  index?: number;
}

export const bigIntsErgoTransactionOutput = [
  ...bigIntsTransactionBoxId.map((item) => `boxId.${item}`),
  'value',
  ...bigIntsErgoTree.map((item) => `ergoTree.${item}`),
  ...bigIntsAsset.map((item) => `assets.${item}`),
  ...bigIntsRegisters.map((item) => `additionalRegisters.${item}`),
  ...bigIntsTransactionId.map((item) => `transactionId.${item}`),
];
