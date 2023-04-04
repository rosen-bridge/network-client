/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { Digest32 } from './digest32';
import type { Timestamp } from './timestamp';
import type { ADDigest } from './aDDigest';
import type { SerializedAdProof } from './serializedAdProof';
import type { ModifierId } from './modifierId';
import type { Transactions } from './transactions';
import type { Votes } from './votes';

/**
 * Can be null if node is not mining or candidate block is not ready
 */
export type CandidateBlock = {
  version?: number;
  extensionHash: Digest32;
  timestamp?: Timestamp;
  stateRoot?: ADDigest;
  nBits?: number;
  adProofBytes?: SerializedAdProof;
  parentId: ModifierId;
  transactionsNumber?: number;
  transactions?: Transactions;
  votes?: Votes;
} | null;
