/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { InputInfo } from './inputInfo';
import { bigIntsInputInfo } from './inputInfo';
import type { DataInputInfo } from './dataInputInfo';
import { bigIntsDataInputInfo } from './dataInputInfo';
import type { OutputInfo } from './outputInfo';

import { bigIntsOutputInfo } from './outputInfo';

export interface TransactionInfo {
  /** Transaction ID */
  id: string;
  /** ID of the corresponding header */
  headerId: string;
  /** Height of the block the transaction was included in */
  inclusionHeight: number;
  /** Timestamp the transaction got into the network */
  timestamp: bigint;
  /** Index of a transaction inside a block */
  index: number;
  /** Number of transaction confirmations */
  confirmationsCount: number;
  inputs?: InputInfo[];
  dataInputs?: DataInputInfo[];
  outputs?: OutputInfo[];
}

export const bigIntsTransactionInfo = [
  'timestamp',
  ...bigIntsInputInfo.map((item) => `inputs.${item}`),
  ...bigIntsDataInputInfo.map((item) => `dataInputs.${item}`),
  ...bigIntsOutputInfo.map((item) => `outputs.${item}`),
];
