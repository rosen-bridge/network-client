/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { HeaderInfo } from './headerInfo';
import { bigIntsHeaderInfo } from './headerInfo';
import type { TransactionInfo } from './transactionInfo';
import { bigIntsTransactionInfo } from './transactionInfo';
import type { BlockExtensionInfo } from './blockExtensionInfo';

import { bigIntsBlockExtensionInfo } from './blockExtensionInfo';

/**
 * Full block info
 */
export interface FullBlockInfo {
  header: HeaderInfo;
  blockTransactions?: TransactionInfo[];
  extension: BlockExtensionInfo;
  /** Serialized hex-encoded AD Proofs */
  adProofs?: string;
}

export const bigIntsFullBlockInfo = [
  ...bigIntsHeaderInfo.map((item) =>
    item === '' ? 'header' : `header.${item}`
  ),
  ...bigIntsTransactionInfo.map((item) =>
    item === '' ? 'blockTransactions' : `blockTransactions.${item}`
  ),
  ...bigIntsBlockExtensionInfo.map((item) =>
    item === '' ? 'extension' : `extension.${item}`
  ),
];
