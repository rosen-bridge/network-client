/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { BlockHeader } from './blockHeader';
import { bigIntsBlockHeader } from './blockHeader';
import type { BlockTransactions } from './blockTransactions';
import { bigIntsBlockTransactions } from './blockTransactions';
import type { BlockADProofs } from './blockADProofs';
import { bigIntsBlockADProofs } from './blockADProofs';
import type { Extension } from './extension';

import { bigIntsExtension } from './extension';

/**
 * Block with header and transactions
 */
export interface FullBlock {
  header: BlockHeader;
  blockTransactions: BlockTransactions;
  adProofs: BlockADProofs;
  extension: Extension;
  /** Size in bytes */
  size: number;
}

export const bigIntsFullBlock = [
  ...bigIntsBlockHeader.map((item) =>
    item === '' ? 'header' : `header.${item}`
  ),
  ...bigIntsBlockTransactions.map((item) =>
    item === '' ? 'blockTransactions' : `blockTransactions.${item}`
  ),
  ...bigIntsBlockADProofs.map((item) =>
    item === '' ? 'adProofs' : `adProofs.${item}`
  ),
  ...bigIntsExtension.map((item) =>
    item === '' ? 'extension' : `extension.${item}`
  ),
];
