/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type {
  IndexedErgoBox,
  GetIndexedHeight200,
  IndexedErgoTransaction,
  GetTxsByAddress200,
  ErgoAddress,
  GetTxsByAddressParams,
  ModifierId,
  GetTxRangeParams,
  GetBoxesByAddress200,
  GetBoxesByAddressParams,
  GetBoxesByAddressUnspentParams,
  GetBoxRangeParams,
  GetBoxesByErgoTree200,
  GetBoxesByErgoTreeParams,
  GetBoxesByErgoTreeUnspent200,
  GetBoxesByErgoTreeUnspentParams,
  IndexedToken,
  GetAddressBalanceTotal200,
} from '../types';
import { axios } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Retrieve a box by its id
 */
export const getBoxById = (
  boxId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<IndexedErgoBox>(
    { url: `/blockchain/box/byId/${boxId}`, method: 'get' },
    options
  );
};
/**
 * @summary Get current block height the indexer is at
 */
export const getIndexedHeight = (options?: SecondParameter<typeof axios>) => {
  return axios<GetIndexedHeight200>(
    { url: `/blockchain/indexedHeight`, method: 'get' },
    options
  );
};
/**
 * @summary Retrieve a transaction by its id
 */
export const getTxById = (
  txId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<IndexedErgoTransaction>(
    { url: `/blockchain/transaction/byId/${txId}`, method: 'get' },
    options
  );
};
/**
 * @summary Retrieve a transaction by global index number
 */
export const getTxByIndex = (
  txIndex: bigint,
  options?: SecondParameter<typeof axios>
) => {
  return axios<IndexedErgoTransaction>(
    { url: `/blockchain/transaction/byIndex/${txIndex}`, method: 'get' },
    options
  );
};
/**
 * @summary Retrieve transactions by their associated address
 */
export const getTxsByAddress = (
  ergoAddress: ErgoAddress,
  params?: GetTxsByAddressParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<GetTxsByAddress200>(
    {
      url: `/blockchain/transaction/byAddress`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: ergoAddress,
      params,
    },
    options
  );
};
/**
 * @summary Get a range of transaction ids
 */
export const getTxRange = (
  params?: GetTxRangeParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ModifierId[]>(
    { url: `/blockchain/transaction/range`, method: 'get', params },
    options
  );
};
/**
 * @summary Retrieve a box by global index number
 */
export const getBoxByIndex = (
  boxIndex: bigint,
  options?: SecondParameter<typeof axios>
) => {
  return axios<IndexedErgoBox>(
    { url: `/blockchain/box/byIndex/${boxIndex}`, method: 'get' },
    options
  );
};
/**
 * @summary Retrieve boxes by their associated address
 */
export const getBoxesByAddress = (
  ergoAddress: ErgoAddress,
  params?: GetBoxesByAddressParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<GetBoxesByAddress200>(
    {
      url: `/blockchain/box/byAddress`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: ergoAddress,
      params,
    },
    options
  );
};
/**
 * @summary Retrieve unspent boxes by their associated address
 */
export const getBoxesByAddressUnspent = (
  ergoAddress: ErgoAddress,
  params?: GetBoxesByAddressUnspentParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<IndexedErgoBox[]>(
    {
      url: `/blockchain/box/unspent/byAddress`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: ergoAddress,
      params,
    },
    options
  );
};
/**
 * @summary Get a range of box ids
 */
export const getBoxRange = (
  params?: GetBoxRangeParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ModifierId[]>(
    { url: `/blockchain/box/range`, method: 'get', params },
    options
  );
};
/**
 * @summary Retrieve boxes by their associated ergotree
 */
export const getBoxesByErgoTree = (
  getBoxesByErgoTreeBody: string,
  params?: GetBoxesByErgoTreeParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<GetBoxesByErgoTree200>(
    {
      url: `/blockchain/box/byErgoTree`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxesByErgoTreeBody,
      params,
    },
    options
  );
};
/**
 * @summary Retrieve unspent boxes by their associated ergotree
 */
export const getBoxesByErgoTreeUnspent = (
  getBoxesByErgoTreeUnspentBody: string,
  params?: GetBoxesByErgoTreeUnspentParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<GetBoxesByErgoTreeUnspent200>(
    {
      url: `/blockchain/box/unspent/byErgoTree`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxesByErgoTreeUnspentBody,
      params,
    },
    options
  );
};
/**
 * @summary Retrieve minting information about a token
 */
export const getTokenById = (
  tokenId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<IndexedToken>(
    { url: `/blockchain/token/byId/${tokenId}`, method: 'get' },
    options
  );
};
/**
 * @summary Retrieve confirmed and unconfirmed balance of an address
 */
export const getAddressBalanceTotal = (
  ergoAddress: ErgoAddress,
  options?: SecondParameter<typeof axios>
) => {
  return axios<GetAddressBalanceTotal200>(
    {
      url: `/blockchain/balance`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: ergoAddress,
    },
    options
  );
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetBoxByIdResult = NonNullable<
  Awaited<ReturnType<typeof getBoxById>>
>;
export type GetIndexedHeightResult = NonNullable<
  Awaited<ReturnType<typeof getIndexedHeight>>
>;
export type GetTxByIdResult = NonNullable<
  Awaited<ReturnType<typeof getTxById>>
>;
export type GetTxByIndexResult = NonNullable<
  Awaited<ReturnType<typeof getTxByIndex>>
>;
export type GetTxsByAddressResult = NonNullable<
  Awaited<ReturnType<typeof getTxsByAddress>>
>;
export type GetTxRangeResult = NonNullable<
  Awaited<ReturnType<typeof getTxRange>>
>;
export type GetBoxByIndexResult = NonNullable<
  Awaited<ReturnType<typeof getBoxByIndex>>
>;
export type GetBoxesByAddressResult = NonNullable<
  Awaited<ReturnType<typeof getBoxesByAddress>>
>;
export type GetBoxesByAddressUnspentResult = NonNullable<
  Awaited<ReturnType<typeof getBoxesByAddressUnspent>>
>;
export type GetBoxRangeResult = NonNullable<
  Awaited<ReturnType<typeof getBoxRange>>
>;
export type GetBoxesByErgoTreeResult = NonNullable<
  Awaited<ReturnType<typeof getBoxesByErgoTree>>
>;
export type GetBoxesByErgoTreeUnspentResult = NonNullable<
  Awaited<ReturnType<typeof getBoxesByErgoTreeUnspent>>
>;
export type GetTokenByIdResult = NonNullable<
  Awaited<ReturnType<typeof getTokenById>>
>;
export type GetAddressBalanceTotalResult = NonNullable<
  Awaited<ReturnType<typeof getAddressBalanceTotal>>
>;
