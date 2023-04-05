/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { Version } from './version';

export interface Parameters {
  /** Height when current parameters were considered(not actual height). Can be '0' if state is empty */
  height: number;
  /** Storage fee coefficient (per byte per storage period ~4 years) */
  storageFeeFactor: number;
  /** Minimum value per byte of an output */
  minValuePerByte: number;
  /** Maximum block size (in bytes) */
  maxBlockSize: number;
  /** Maximum cumulative computational cost of input scripts in block transactions */
  maxBlockCost: number;
  blockVersion: Version;
  /** Validation cost of a single token */
  tokenAccessCost: number;
  /** Validation cost per one transaction input */
  inputCost: number;
  /** Validation cost per one data input */
  dataInputCost: number;
  /** Validation cost per one transaction output */
  outputCost: number;
}
