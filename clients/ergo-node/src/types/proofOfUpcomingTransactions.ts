/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { MerkleProof } from './merkleProof';

/**
 * Proof that a block corresponding to given header without PoW contains some transactions
 */
export interface ProofOfUpcomingTransactions {
  /** Base16-encoded serialized header without Proof-of-Work */
  msgPreimage: string;
  /** Merkle proofs of transactions included into blocks (not necessarily all the block transactions) */
  txProofs: MerkleProof[];
}
