/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { Timestamp } from './timestamp';
import type { PeerConnectionType } from './peerConnectionType';

export interface Peer {
  address: string;
  restApiUrl?: string | null;
  name?: string | null;
  lastSeen?: Timestamp;
  connectionType?: PeerConnectionType;
}