/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { EmissionInfo, EmissionScripts } from '../types';
import { axios } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Get emission data for a given height
 */
export const emissionAt = (
  blockHeight: bigint,
  options?: SecondParameter<typeof axios>
) => {
  return axios<EmissionInfo>(
    { url: `/emission/at/${blockHeight}`, method: 'get' },
    options
  );
};
/**
 * @summary Print emission-related scripts
 */
export const emissionScripts = (options?: SecondParameter<typeof axios>) => {
  return axios<EmissionScripts>(
    { url: `/emission/scripts`, method: 'get' },
    options
  );
};
export type EmissionAtResult = NonNullable<
  Awaited<ReturnType<typeof emissionAt>>
>;
export type EmissionScriptsResult = NonNullable<
  Awaited<ReturnType<typeof emissionScripts>>
>;
