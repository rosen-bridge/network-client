/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { ErgoTransactionOutput } from '../types';
import { axios } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Get input box from unconfirmed transactions in pool
 */
export const getUnconfirmedTransactionInputBoxById = (
  boxId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ErgoTransactionOutput>(
    { url: `/transactions/unconfirmed/inputs/byBoxId/${boxId}`, method: 'get' },
    options
  );
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetUnconfirmedTransactionInputBoxByIdResult = NonNullable<
  Awaited<ReturnType<typeof getUnconfirmedTransactionInputBoxById>>
>;
