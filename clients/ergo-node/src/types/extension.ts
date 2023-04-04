/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { ModifierId } from './modifierId';
import type { Digest32 } from './digest32';
import type { KeyValueItem } from './keyValueItem';

export interface Extension {
  headerId: ModifierId;
  digest: Digest32;
  /** List of key-value records */
  fields: KeyValueItem[] | null;
}
