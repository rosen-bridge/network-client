/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */

export type GetBoxesByErgoTreeUnspentParams = {
  /**
   * amount of elements to skip from the start
   */
  offset?: number;
  /**
   * amount of elements to retrieve
   */
  limit?: number;
  /**
   * desc = new boxes first ; asc = old boxes first
   */
  sortDirection?: string;
};
export const bigIntsGetBoxesByErgoTreeUnspentParams = [];
