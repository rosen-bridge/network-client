/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { HexString } from './hexString';

import { bigIntsHexString } from './hexString';

/**
 * Algebraic data type of sigma proposition expressions
 */
export interface SigmaBoolean {
  /** Sigma opCode */
  op: number;
  h?: HexString;
  g?: HexString;
  u?: HexString;
  v?: HexString;
  condition?: boolean;
}

export const bigIntsSigmaBoolean = [
  ...bigIntsHexString.map((item) => `h.${item}`),
  ...bigIntsHexString.map((item) => `g.${item}`),
  ...bigIntsHexString.map((item) => `u.${item}`),
  ...bigIntsHexString.map((item) => `v.${item}`),
];
