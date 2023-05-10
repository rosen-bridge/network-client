/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { AssetInstanceInfo } from './assetInstanceInfo';
import type { OutputInfo1AdditionalRegisters } from './outputInfo1AdditionalRegisters';

export interface OutputInfo1 {
  /** Id of the box */
  id: string;
  /** Id of the transaction that created the box */
  txId: string;
  /** Value of the box in nanoERG */
  value: bigint;
  /** Index of the output in a transaction */
  index: bigint;
  /** Height at which the box was created */
  creationHeight: bigint;
  /** Serialized ergo tree */
  ergoTree: string;
  /** An address derived from ergo tree */
  address: string;
  assets?: AssetInstanceInfo[];
  additionalRegisters: OutputInfo1AdditionalRegisters;
  /** Transaction ID */
  spentTransactionId?: string;
  mainChain: boolean;
}
