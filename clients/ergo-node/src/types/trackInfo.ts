/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { TrackInfoRequested } from './trackInfoRequested';
import type { TrackInfoReceived } from './trackInfoReceived';

export interface TrackInfo {
  invalidModifierApproxSize: bigint;
  /** Currently requested modifiers */
  requested: TrackInfoRequested;
  /** Received modifiers */
  received: TrackInfoReceived;
}
