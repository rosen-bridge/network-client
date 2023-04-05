/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { SigmaBoolean } from './sigmaBoolean';

/**
 * Result of executeWithContext request (reduceToCrypto)
 */
export interface CryptoResult {
  /** value of SigmaProp type which represents a statement verifiable via sigma protocol */
  value: SigmaBoolean;
  /** Estimated cost of contract execution */
  cost: number;
}