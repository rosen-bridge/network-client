/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { RequestsHolderRequestsItem } from './requestsHolderRequestsItem';

/**
 * Holds many transaction requests and transaction fee
 */
export interface RequestsHolder {
  /** Sequence of transaction requests */
  requests: RequestsHolderRequestsItem[];
  /** Transaction fee */
  fee?: bigint;
  /** List of inputs to be used in serialized form */
  inputsRaw?: string[];
  /** List of data inputs to be used in serialized form */
  dataInputsRaw?: string[];
}
