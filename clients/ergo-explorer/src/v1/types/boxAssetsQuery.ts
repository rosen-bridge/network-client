/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */

export interface BoxAssetsQuery {
  /** SHA-256 hash of ErgoTree template this box script should have */
  ergoTreeTemplateHash: string;
  /** IDs of tokens returned boxes should contain */
  assets?: string[];
}