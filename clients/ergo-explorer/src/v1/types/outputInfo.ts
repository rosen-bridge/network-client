/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { AssetInstanceInfo } from './assetInstanceInfo';
import { bigIntsAssetInstanceInfo } from './assetInstanceInfo';
import type { OutputInfoAdditionalRegisters } from './outputInfoAdditionalRegisters';

import { bigIntsOutputInfoAdditionalRegisters } from './outputInfoAdditionalRegisters';

export interface OutputInfo {
  /** Id of the box */
  boxId: string;
  /** Id of the transaction that created the box */
  transactionId: string;
  /** Id of the block a box included in */
  blockId: string;
  /** Value of the box in nanoERG */
  value: bigint;
  /** Index of the output in a transaction */
  index: number;
  /** Global index of the output in the blockchain */
  globalIndex: bigint;
  /** Height at which the box was created */
  creationHeight: number;
  /** Height at which the box got fixed in blockchain */
  settlementHeight: number;
  /** Serialized ergo tree */
  ergoTree: string;
  /** An address derived from ergo tree */
  address: string;
  assets?: AssetInstanceInfo[];
  additionalRegisters: OutputInfoAdditionalRegisters;
  /** Id of the transaction this output was spent by */
  spentTransactionId?: string;
  mainChain: boolean;
}

export const bigIntsOutputInfo = [
  'value',
  'globalIndex',
  ...bigIntsAssetInstanceInfo.map((item) =>
    item === '' ? 'assets' : `assets.${item}`
  ),
  ...bigIntsOutputInfoAdditionalRegisters.map((item) =>
    item === '' ? 'additionalRegisters' : `additionalRegisters.${item}`
  ),
];
