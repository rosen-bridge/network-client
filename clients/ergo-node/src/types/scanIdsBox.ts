/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { ErgoTransactionOutput } from './ergoTransactionOutput';

import { bigIntsErgoTransactionOutput } from './ergoTransactionOutput';

/**
 * Ergo box with associated scans (their respective identifiers)
 */
export interface ScanIdsBox {
  scanIds: number[];
  box: ErgoTransactionOutput;
}

export const bigIntsScanIdsBox = [
  ...bigIntsErgoTransactionOutput.map((item) =>
    item === '' ? 'box' : `box.${item}`
  ),
];
