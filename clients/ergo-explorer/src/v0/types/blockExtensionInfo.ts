/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Explorer API v0
 * OpenAPI spec version: 1.0
 */
import type { BlockExtensionInfoFields } from './blockExtensionInfoFields';

import { bigIntsBlockExtensionInfoFields } from './blockExtensionInfoFields';

export interface BlockExtensionInfo {
  /** ID of the corresponding header */
  headerId: string;
  /** Hex-encoded extension digest */
  digest: string;
  fields: BlockExtensionInfoFields;
}
export const bigIntsBlockExtensionInfo = [
  ...bigIntsBlockExtensionInfoFields.map((item) => `fields.${item}`),
];
