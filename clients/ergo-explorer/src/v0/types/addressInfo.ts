/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { Summary } from './summary';
import { bigIntsSummary } from './summary';
import type { Transactions } from './transactions';

import { bigIntsTransactions } from './transactions';

export interface AddressInfo {
  summary: Summary;
  transactions: Transactions;
}

export const bigIntsAddressInfo = [
  ...bigIntsSummary.map((item) =>
    item === '' ? 'summary' : `summary.${item}`
  ),
  ...bigIntsTransactions.map((item) =>
    item === '' ? 'transactions' : `transactions.${item}`
  ),
];
