/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { ScanningPredicate } from './scanningPredicate';
import type { OrPredicateAllOf } from './orPredicateAllOf';
import type { OrPredicateAllOfTwo } from './orPredicateAllOfTwo';

export type OrPredicate = ScanningPredicate &
  OrPredicateAllOf &
  unknown &
  OrPredicateAllOfTwo;
