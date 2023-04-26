/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { PeerMode } from './peerMode';

export interface SyncInfo {
  address: string;
  /** Peer operating mode parameters */
  mode: PeerMode;
  version: string;
  status: string;
  height: bigint;
}
