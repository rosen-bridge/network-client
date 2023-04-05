/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { ScanWalletInteraction } from './scanWalletInteraction';
import type { ScanningPredicate } from './scanningPredicate';

export interface Scan {
  scanName?: string;
  scanId?: number;
  walletInteraction?: ScanWalletInteraction;
  removeOffchain?: boolean;
  trackingRule?: ScanningPredicate;
}