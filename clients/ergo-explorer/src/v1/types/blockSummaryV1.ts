/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { HeaderInfo } from './headerInfo';
import { bigIntsHeaderInfo } from './headerInfo';
import type { TransactionInfo1 } from './transactionInfo1';

import { bigIntsTransactionInfo1 } from './transactionInfo1';

export interface BlockSummaryV1 {
  header: HeaderInfo;
  blockTransactions?: TransactionInfo1[];
}

export const bigIntsBlockSummaryV1 = [
  ...bigIntsHeaderInfo.map((item) =>
    item === '' ? 'header' : `header.${item}`
  ),
  ...bigIntsTransactionInfo1.map((item) =>
    item === '' ? 'blockTransactions' : `blockTransactions.${item}`
  ),
];
