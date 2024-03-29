/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { SigmaBoolean } from './sigmaBoolean';
import { bigIntsSigmaBoolean } from './sigmaBoolean';
import type { SigmaBooleanThresholdPredicateAllOf } from './sigmaBooleanThresholdPredicateAllOf';
import { bigIntsSigmaBooleanThresholdPredicateAllOf } from './sigmaBooleanThresholdPredicateAllOf';
import type { SigmaBooleanThresholdPredicateAllOfTwo } from './sigmaBooleanThresholdPredicateAllOfTwo';

import { bigIntsSigmaBooleanThresholdPredicateAllOfTwo } from './sigmaBooleanThresholdPredicateAllOfTwo';

export type SigmaBooleanThresholdPredicate = SigmaBoolean &
  SigmaBooleanThresholdPredicateAllOf &
  unknown &
  SigmaBooleanThresholdPredicateAllOfTwo;

export const bigIntsSigmaBooleanThresholdPredicate = [
  ...bigIntsSigmaBoolean,
  ...bigIntsSigmaBooleanThresholdPredicateAllOf,
  ...bigIntsSigmaBooleanThresholdPredicateAllOfTwo,
];
