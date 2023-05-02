/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { UnsignedErgoTransaction } from './unsignedErgoTransaction';
import type { GenerateCommitmentsRequestSecrets } from './generateCommitmentsRequestSecrets';

/**
 * request to generate commitments to sign a transaction
 */
export interface GenerateCommitmentsRequest {
  /** Unsigned transaction to sign */
  tx: UnsignedErgoTransaction;
  /** Optionally, external secrets used for signing */
  secrets?: GenerateCommitmentsRequestSecrets;
  /** Optional list of inputs to be used in serialized form */
  inputsRaw?: string[];
  /** Optional list of inputs to be used in serialized form */
  dataInputsRaw?: string[];
}
