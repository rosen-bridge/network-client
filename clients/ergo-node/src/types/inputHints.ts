/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { InputHintsItem } from './inputHintsItem';

/**
 * hints for inputs, key is input index, values is a set of hints for the input
 */
export interface InputHints {
  [key: string]: InputHintsItem[];
}