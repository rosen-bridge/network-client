/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { AssetInstanceInfo } from './assetInstanceInfo';
import type { UDataInputInfoAdditionalRegisters } from './uDataInputInfoAdditionalRegisters';

export interface UDataInputInfo {
  /** ID of the corresponding box */
  boxId: string;
  /** Number of nanoErgs in the corresponding box */
  value: number;
  /** Index of the input in a transaction */
  index: number;
  /** Modifier ID */
  outputBlockId?: string;
  /** ID of the transaction outputting corresponding box */
  outputTransactionId: string;
  /** Index of the output corresponding this input */
  outputIndex: number;
  /** ErgoTree Template */
  ergoTree: string;
  /** Decoded address of the corresponding box holder */
  address: string;
  assets?: AssetInstanceInfo[];
  additionalRegisters: UDataInputInfoAdditionalRegisters;
}