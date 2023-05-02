/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { Timestamp } from './timestamp';
import type { Version } from './version';
import type { ModifierId } from './modifierId';
import type { Votes } from './votes';

export interface PreHeader {
  timestamp: Timestamp;
  version: Version;
  nBits: bigint;
  height: bigint;
  parentId: ModifierId;
  votes: Votes;
  minerPk?: string;
}
