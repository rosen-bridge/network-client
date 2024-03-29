/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { PeerMode } from './peerMode';

import { bigIntsPeerMode } from './peerMode';

export interface SyncInfo {
  address: string;
  /** Peer operating mode parameters */
  mode: PeerMode;
  version: string;
  status: string;
  height: number;
}
export const bigIntsSyncInfo = [
  ...bigIntsPeerMode.map((item) => (item === '' ? 'mode' : `mode.${item}`)),
];
