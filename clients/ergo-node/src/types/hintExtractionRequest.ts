/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { ErgoTransaction } from './ergoTransaction';
import type { SigmaBoolean } from './sigmaBoolean';

/**
 * request to extract prover hints from a transaction
 */
export interface HintExtractionRequest {
  /** Transaction to extract prover hints from */
  tx: ErgoTransaction;
  /** Real signers of the transaction */
  real: SigmaBoolean[];
  /** Simulated signers of the transaction */
  simulated: SigmaBoolean[];
  /** Optional list of inputs to be used in serialized form */
  inputsRaw?: string[];
  /** Optional list of inputs to be used in serialized form */
  dataInputsRaw?: string[];
}
