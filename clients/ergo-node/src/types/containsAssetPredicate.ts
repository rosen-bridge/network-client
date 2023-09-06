/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { ScanningPredicate } from './scanningPredicate';
import { bigIntsScanningPredicate } from './scanningPredicate';
import type { ContainsAssetPredicateAllOf } from './containsAssetPredicateAllOf';
import { bigIntsContainsAssetPredicateAllOf } from './containsAssetPredicateAllOf';
import type { ContainsAssetPredicateAllOfTwo } from './containsAssetPredicateAllOfTwo';

import { bigIntsContainsAssetPredicateAllOfTwo } from './containsAssetPredicateAllOfTwo';

export type ContainsAssetPredicate = ScanningPredicate &
  ContainsAssetPredicateAllOf &
  unknown &
  ContainsAssetPredicateAllOfTwo;

export const bigIntsContainsAssetPredicate = [
  ...bigIntsScanningPredicate,
  ...bigIntsContainsAssetPredicateAllOf,
  ...bigIntsContainsAssetPredicateAllOfTwo,
];
