/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */

export interface RequestedInfo {
  address?: string;
  version?: string;
  /** How many times we checked for modifier delivery status */
  checks: bigint;
}
