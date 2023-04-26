/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { AvlTreeData } from './avlTreeData';
import type { SigmaHeader } from './sigmaHeader';
import type { PreHeader } from './preHeader';
import type { ErgoTransactionOutput } from './ergoTransactionOutput';
import type { ErgoLikeTransaction } from './ergoLikeTransaction';
import type { ErgoLikeContextExtension } from './ergoLikeContextExtension';

export interface ErgoLikeContext {
  /** state root before current block application */
  lastBlockUtxoRoot: AvlTreeData;
  /** fixed number of last block headers in descending order (first header is the newest one) */
  headers: SigmaHeader[];
  /** fields of block header with the current `spendingTransaction`, that can be predicted by a miner before its formation */
  preHeader: PreHeader;
  /** boxes, that corresponds to id's of `spendingTransaction.dataInputs` */
  dataBoxes: ErgoTransactionOutput[];
  /** boxes, that corresponds to id's of `spendingTransaction.inputs` */
  boxesToSpend: ErgoTransactionOutput[];
  /** transaction that contains `self` box */
  spendingTransaction: ErgoLikeTransaction;
  /** index of the box in `boxesToSpend` that contains the script we're evaluating */
  selfIndex: bigint;
  /** prover-defined key-value pairs, that may be used inside a script */
  extension: ErgoLikeContextExtension;
  /** validation parameters passed to Interpreter.verify to detect soft-fork conditions */
  validationSettings: string;
  /** hard limit on accumulated execution cost, if exceeded lead to CostLimitException to be thrown */
  costLimit: bigint;
  /** initial value of execution cost already accumulated before Interpreter.verify is called */
  initCost: bigint;
}
