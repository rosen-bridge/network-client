/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { Digest32 } from './digest32';

export interface AvlTreeData {
  digest: Digest32;
  treeFlags?: bigint;
  keyLength?: bigint;
  valueLength?: bigint | null;
}
