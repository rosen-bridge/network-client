/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { ProofOfUpcomingTransactions } from './proofOfUpcomingTransactions';

/**
 * Block candidate related data for external miner to perform work
 */
export interface WorkMessage {
  /** Base16-encoded block header bytes without PoW solution */
  msg: string;
  /** Work target value */
  b: number;
  /** Base16-encoded miner public key */
  pk: string;
  proof?: ProofOfUpcomingTransactions;
}