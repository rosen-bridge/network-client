/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { TransactionBoxId } from './transactionBoxId';

import { bigIntsTransactionBoxId } from './transactionBoxId';

export interface ErgoTransactionDataInput {
  boxId: TransactionBoxId;
}
export const bigIntsErgoTransactionDataInput = [
  ...bigIntsTransactionBoxId.map((item) => `boxId.${item}`),
];
