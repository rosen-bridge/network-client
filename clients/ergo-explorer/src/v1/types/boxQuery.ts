/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Explorer API v1
 * OpenAPI spec version: 1.0
 */
import type { BoxQueryRegisters } from './boxQueryRegisters';
import type { BoxQueryConstants } from './boxQueryConstants';

export interface BoxQuery {
  /** SHA-256 hash of ErgoTree template this box script should have */
  ergoTreeTemplateHash: string;
  /** Pairs of (register ID, register value) this box should contain */
  registers?: BoxQueryRegisters;
  /** Pairs of (constant index, constant value) this box should contain */
  constants?: BoxQueryConstants;
  /** IDs of tokens returned boxes should contain */
  assets?: string[];
}