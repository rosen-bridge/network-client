/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */

/**
 * Emission info for height
 */
export interface EmissionInfo {
  minerReward?: bigint;
  totalCoinsIssued?: bigint;
  totalRemainCoins?: bigint;
  reemitted?: bigint;
}
export const bigIntsEmissionInfo = [
  'minerReward',
  'totalCoinsIssued',
  'totalRemainCoins',
  'reemitted',
];
