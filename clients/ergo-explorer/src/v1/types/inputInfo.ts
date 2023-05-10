/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { AssetInstanceInfo } from './assetInstanceInfo';
import type { InputInfoAdditionalRegisters } from './inputInfoAdditionalRegisters';

export interface InputInfo {
  /** ID of the corresponding box */
  boxId: string;
  /** Number of nanoErgs in the corresponding box */
  value: bigint;
  /** Index of the input in a transaction */
  index: bigint;
  /** Hex-encoded serialized sigma proof */
  spendingProof?: string;
  /** Modifier ID */
  outputBlockId: string;
  /** ID of the transaction outputting corresponding box */
  outputTransactionId: string;
  /** Index of the output corresponding this input */
  outputIndex: bigint;
  /** Global index of the output corresponding this input */
  outputGlobalIndex: bigint;
  /** Height the output corresponding this input was created at */
  outputCreatedAt: bigint;
  /** Height the output corresponding this input was settled at */
  outputSettledAt: bigint;
  /** Hex-encoded string */
  ergoTree: string;
  /** Decoded address of the corresponding box holder */
  address: string;
  assets?: AssetInstanceInfo[];
  additionalRegisters: InputInfoAdditionalRegisters;
}
