/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type {
  GetHeaderIdsParams,
  FullBlock,
  BlockHeader,
  GetChainSliceParams,
  BlockTransactions,
  MerkleProof,
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
 * @summary Get the Array of header ids
 */
export const getHeaderIds = (
  params?: GetHeaderIdsParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<string[]>({ url: `/blocks`, method: 'get', params }, options);
};
/**
 * @summary Send a mined block
 */
export const sendMinedBlock = (
  fullBlock: FullBlock,
  options?: SecondParameter<typeof axios>
) => {
  return axios<void>(
    {
      url: `/blocks`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: fullBlock,
    },
    options
  );
};
/**
 * @summary Get the header ids at a given height
 */
export const getFullBlockAt = (
  blockHeight: bigint,
  options?: SecondParameter<typeof axios>
) => {
  return axios<string[]>(
    { url: `/blocks/at/${blockHeight}`, method: 'get' },
    options
  );
};
/**
 * @summary Get headers in a specified range
 */
export const getChainSlice = (
  params?: GetChainSliceParams,
  options?: SecondParameter<typeof axios>
) => {
  return axios<BlockHeader[]>(
    { url: `/blocks/chainSlice`, method: 'get', params },
    options
  );
};
/**
 * @summary Get the full block info by a given signature
 */
export const getFullBlockById = (
  headerId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<FullBlock>(
    { url: `/blocks/${headerId}`, method: 'get' },
    options
  );
};
/**
 * @summary Get the block header info by a given signature
 */
export const getBlockHeaderById = (
  headerId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<BlockHeader>(
    { url: `/blocks/${headerId}/header`, method: 'get' },
    options
  );
};
/**
 * @summary Get the block transactions info by a given signature
 */
export const getBlockTransactionsById = (
  headerId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<BlockTransactions>(
    { url: `/blocks/${headerId}/transactions`, method: 'get' },
    options
  );
};
/**
 * @summary Get Merkle proof for transaction
 */
export const getProofForTx = (
  headerId: string,
  txId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<MerkleProof>(
    { url: `/blocks/${headerId}/proofFor/${txId}`, method: 'get' },
    options
  );
};
/**
 * @summary Get the last headers objects
 */
export const getLastHeaders = (
  count: bigint,
  options?: SecondParameter<typeof axios>
) => {
  return axios<BlockHeader[]>(
    { url: `/blocks/lastHeaders/${count}`, method: 'get' },
    options
  );
};
/**
 * @summary Get the persistent modifier by its id
 */
export const getModifierById = (
  modifierId: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<void>(
    { url: `/blocks/modifier/${modifierId}`, method: 'get' },
    options
  );
};
export type GetHeaderIdsResult = NonNullable<
  Awaited<ReturnType<typeof getHeaderIds>>
>;
export type SendMinedBlockResult = NonNullable<
  Awaited<ReturnType<typeof sendMinedBlock>>
>;
export type GetFullBlockAtResult = NonNullable<
  Awaited<ReturnType<typeof getFullBlockAt>>
>;
export type GetChainSliceResult = NonNullable<
  Awaited<ReturnType<typeof getChainSlice>>
>;
export type GetFullBlockByIdResult = NonNullable<
  Awaited<ReturnType<typeof getFullBlockById>>
>;
export type GetBlockHeaderByIdResult = NonNullable<
  Awaited<ReturnType<typeof getBlockHeaderById>>
>;
export type GetBlockTransactionsByIdResult = NonNullable<
  Awaited<ReturnType<typeof getBlockTransactionsById>>
>;
export type GetProofForTxResult = NonNullable<
  Awaited<ReturnType<typeof getProofForTx>>
>;
export type GetLastHeadersResult = NonNullable<
  Awaited<ReturnType<typeof getLastHeaders>>
>;
export type GetModifierByIdResult = NonNullable<
  Awaited<ReturnType<typeof getModifierById>>
>;
