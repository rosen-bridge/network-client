/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { AssetInstanceInfo } from './assetInstanceInfo';
import type { UOutputInfoAdditionalRegisters } from './uOutputInfoAdditionalRegisters';

export interface UOutputInfo {
  /** Id of the box */
  boxId: string;
  /** Id of the transaction that created the box */
  transactionId: string;
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
  additionalRegisters: UOutputInfoAdditionalRegisters;
  /** Id of the transaction this output was spent by */
  spentTransactionId?: string;
}
