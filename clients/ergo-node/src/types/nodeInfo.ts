/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { NodeInfoStateType } from './nodeInfoStateType';
import type { Parameters } from './parameters';

export interface NodeInfo {
  name: string;
  appVersion: string;
  /** Can be 'null' if state is empty (no full block is applied since node launch) */
  fullHeight: number | null;
  /** Can be 'null' if state is empty (no header applied since node launch) */
  headersHeight: number | null;
  /** Maximum block height of connected peers. Can be 'null' if state is empty (no peer connected since node launch) */
  maxPeerHeight: number | null;
  /** Can be 'null' if no full block is applied since node launch */
  bestFullHeaderId: string | null;
  /** Can be 'null' if no full block is applied since node launch */
  previousFullHeaderId: string | null;
  /** Can be 'null' if no header applied since node launch */
  bestHeaderId: string | null;
  /** Can be 'null' if state is empty (no full block is applied since node launch) */
  stateRoot: string | null;
  stateType: NodeInfoStateType;
  /** Can be 'null' if no full block is applied since node launch */
  stateVersion: string | null;
  isMining: boolean;
  /** Number of connected peers */
  peersCount: number;
  /** Current unconfirmed transactions count */
  unconfirmedCount: number;
  /** Difficulty on current bestFullHeaderId. Can be 'null' if no full block is applied since node launch. Difficulty is a BigInt integer.
   */
  difficulty: number | null;
  /** Current internal node time */
  currentTime: number;
  /** Time when the node was started */
  launchTime: number;
  /** Can be 'null' if no headers is applied since node launch. headersScore is a BigInt integer. */
  headersScore: number | null;
  /** Can be 'null' if no full block is applied since node launch. fullBlocksScore is a BigInt integer. */
  fullBlocksScore: number | null;
  /** Can be 'null' if genesis blocks is not produced yet */
  genesisBlockId: string | null;
  /** current parameters */
  parameters: Parameters;
  /** Whether EIP-27 locked in */
  eip27Supported?: boolean;
  /** Publicly accessible url of node which exposes restApi in firewall */
  restApiUrl?: string;
}
