/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { BlockExtensionInfoFields } from './blockExtensionInfoFields';

export interface BlockExtensionInfo {
  /** ID of the corresponding header */
  headerId: string;
  /** Hex-encoded extension digest */
  digest: string;
  fields: BlockExtensionInfoFields;
}
