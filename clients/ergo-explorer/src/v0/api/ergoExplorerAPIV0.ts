import { createAxiosInstance, JsonFieldBigintFactory } from '../../axios';
import type {
  AddressInfo,
  BlockChainInfo,
  BlockSummary,
  DexBuyOrderInfo,
  DexSellOrderInfo,
  GetApiV0AddressesAssetholdersP1Params,
  GetApiV0AddressesBalancesParams,
  GetApiV0AddressesP1Params,
  GetApiV0AddressesP1TransactionsParams,
  GetApiV0AssetsIssuingboxesParams,
  GetApiV0BlocksParams,
  GetApiV0DexTokensP1UnspentbuyordersParams,
  GetApiV0DexTokensP1UnspentsellordersParams,
  GetApiV0TransactionsSinceP1Params,
  GetApiV0TransactionsUnconfirmedByaddressP1Params,
  GetApiV0TransactionsUnconfirmedParams,
  ItemsBalanceInfo,
  ItemsBlockInfo,
  ItemsOutputInfo,
  ItemsTransactionInfo,
  ItemsUTransactionInfo,
  OutputInfo,
  PostApiV0TransactionsSendBody,
  StatsSummary,
  TransactionInfo,
  TransactionSummary,
  TxIdResponse,
  UTransactionSummary,
} from '../types';
import {
  bigIntsAddressInfo,
  bigIntsBlockChainInfo,
  bigIntsBlockSummary,
  bigIntsDexBuyOrderInfo,
  bigIntsDexSellOrderInfo,
  bigIntsItemsBalanceInfo,
  bigIntsItemsBlockInfo,
  bigIntsItemsOutputInfo,
  bigIntsItemsTransactionInfo,
  bigIntsItemsUTransactionInfo,
  bigIntsOutputInfo,
  bigIntsStatsSummary,
  bigIntsTransactionInfo,
  bigIntsTransactionSummary,
  bigIntsTxIdResponse,
  bigIntsUTransactionSummary,
} from '../types';

export const getErgoExplorerAPIV0 = (url: string) => {
  const instance = createAxiosInstance(url);
  const getApiV0AddressesP1 = (
    p1: string,
    params?: GetApiV0AddressesP1Params,
  ) => {
    return instance<AddressInfo>({
      url: `/api/v0/addresses/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressInfo),
    });
  };

  const getApiV0AddressesP1Transactions = (
    p1: string,
    params?: GetApiV0AddressesP1TransactionsParams,
  ) => {
    return instance<ItemsTransactionInfo>({
      url: `/api/v0/addresses/${p1}/transactions`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsTransactionInfo),
    });
  };

  const getApiV0AddressesAssetholdersP1 = (
    p1: string,
    params?: GetApiV0AddressesAssetholdersP1Params,
  ) => {
    return instance<string[]>({
      url: `/api/v0/addresses/assetHolders/${p1}`,
      method: 'GET',
      params,
    });
  };

  const getApiV0AddressesBalances = (
    params?: GetApiV0AddressesBalancesParams,
  ) => {
    return instance<ItemsBalanceInfo>({
      url: `/api/v0/addresses/balances`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsBalanceInfo),
    });
  };

  const getApiV0AssetsIssuingboxes = (
    params?: GetApiV0AssetsIssuingboxesParams,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v0/assets/issuingBoxes`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV0AssetsP1Issuingbox = (p1: string) => {
    return instance<OutputInfo[]>({
      url: `/api/v0/assets/${p1}/issuingBox`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV0Blocks = (params?: GetApiV0BlocksParams) => {
    return instance<ItemsBlockInfo>({
      url: `/api/v0/blocks`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsBlockInfo),
    });
  };

  const getApiV0BlocksP1 = (p1: string) => {
    return instance<BlockSummary>({
      url: `/api/v0/blocks/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlockSummary),
    });
  };

  const getApiV0BlocksAtP1 = (p1: number) => {
    return instance<string[]>({
      url: `/api/v0/blocks/at/${p1}`,
      method: 'GET',
    });
  };

  /**
   * DEX sell orders for a given token id
   */
  const getApiV0DexTokensP1Unspentsellorders = (
    p1: string,
    params?: GetApiV0DexTokensP1UnspentsellordersParams,
  ) => {
    return instance<DexSellOrderInfo[]>({
      url: `/api/v0/dex/tokens/${p1}/unspentSellOrders`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDexSellOrderInfo),
    });
  };

  /**
   * DEX buy orders for a given token id
   */
  const getApiV0DexTokensP1Unspentbuyorders = (
    p1: string,
    params?: GetApiV0DexTokensP1UnspentbuyordersParams,
  ) => {
    return instance<DexBuyOrderInfo[]>({
      url: `/api/v0/dex/tokens/${p1}/unspentBuyOrders`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDexBuyOrderInfo),
    });
  };

  const getApiV0TransactionsP1 = (p1: string) => {
    return instance<TransactionSummary>({
      url: `/api/v0/transactions/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionSummary),
    });
  };

  const getApiV0TransactionsUnconfirmedP1 = (p1: string) => {
    return instance<UTransactionSummary>({
      url: `/api/v0/transactions/unconfirmed/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsUTransactionSummary),
    });
  };

  const getApiV0TransactionsUnconfirmedByaddressP1 = (
    p1: string,
    params?: GetApiV0TransactionsUnconfirmedByaddressP1Params,
  ) => {
    return instance<ItemsUTransactionInfo>({
      url: `/api/v0/transactions/unconfirmed/byAddress/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsUTransactionInfo),
    });
  };

  const getApiV0TransactionsUnconfirmed = (
    params?: GetApiV0TransactionsUnconfirmedParams,
  ) => {
    return instance<ItemsUTransactionInfo>({
      url: `/api/v0/transactions/unconfirmed`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsUTransactionInfo),
    });
  };

  const getApiV0TransactionsSinceP1 = (
    p1: number,
    params?: GetApiV0TransactionsSinceP1Params,
  ) => {
    return instance<TransactionInfo[]>({
      url: `/api/v0/transactions/since/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionInfo),
    });
  };

  const postApiV0TransactionsSend = (
    postApiV0TransactionsSendBody: PostApiV0TransactionsSendBody,
  ) => {
    return instance<TxIdResponse>({
      url: `/api/v0/transactions/send`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: postApiV0TransactionsSendBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxIdResponse),
    });
  };

  const getApiV0TransactionsBoxesP1 = (p1: string) => {
    return instance<OutputInfo>({
      url: `/api/v0/transactions/boxes/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV0TransactionsBoxesByergotreeP1 = (p1: string) => {
    return instance<OutputInfo[]>({
      url: `/api/v0/transactions/boxes/byErgoTree/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV0TransactionsBoxesByergotreeUnspentP1 = (p1: string) => {
    return instance<OutputInfo[]>({
      url: `/api/v0/transactions/boxes/byErgoTree/unspent/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV0TransactionsBoxesByaddressP1 = (p1: string) => {
    return instance<OutputInfo[]>({
      url: `/api/v0/transactions/boxes/byAddress/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV0TransactionsBoxesByaddressUnspentP1 = (p1: string) => {
    return instance<OutputInfo[]>({
      url: `/api/v0/transactions/boxes/byAddress/unspent/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV0Info = () => {
    return instance<BlockChainInfo>({
      url: `/api/v0/info`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlockChainInfo),
    });
  };

  const getApiV0InfoSupply = () => {
    return instance<string>({
      url: `/api/v0/info/supply`,
      method: 'GET',
    });
  };

  const getApiV0Stats = () => {
    return instance<StatsSummary>({
      url: `/api/v0/stats`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsStatsSummary),
    });
  };

  const getApiV0DocsOpenapi = () => {
    return instance<string>({
      url: `/api/v0/docs/openapi`,
      method: 'GET',
    });
  };

  return {
    getApiV0AddressesP1,
    getApiV0AddressesP1Transactions,
    getApiV0AddressesAssetholdersP1,
    getApiV0AddressesBalances,
    getApiV0AssetsIssuingboxes,
    getApiV0AssetsP1Issuingbox,
    getApiV0Blocks,
    getApiV0BlocksP1,
    getApiV0BlocksAtP1,
    getApiV0DexTokensP1Unspentsellorders,
    getApiV0DexTokensP1Unspentbuyorders,
    getApiV0TransactionsP1,
    getApiV0TransactionsUnconfirmedP1,
    getApiV0TransactionsUnconfirmedByaddressP1,
    getApiV0TransactionsUnconfirmed,
    getApiV0TransactionsSinceP1,
    postApiV0TransactionsSend,
    getApiV0TransactionsBoxesP1,
    getApiV0TransactionsBoxesByergotreeP1,
    getApiV0TransactionsBoxesByergotreeUnspentP1,
    getApiV0TransactionsBoxesByaddressP1,
    getApiV0TransactionsBoxesByaddressUnspentP1,
    getApiV0Info,
    getApiV0InfoSupply,
    getApiV0Stats,
    getApiV0DocsOpenapi,
  };
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetApiV0AddressesP1Result = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0AddressesP1']>
  >
>;
export type GetApiV0AddressesP1TransactionsResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0AddressesP1Transactions']
    >
  >
>;
export type GetApiV0AddressesAssetholdersP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0AddressesAssetholdersP1']
    >
  >
>;
export type GetApiV0AddressesBalancesResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0AddressesBalances']
    >
  >
>;
export type GetApiV0AssetsIssuingboxesResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0AssetsIssuingboxes']
    >
  >
>;
export type GetApiV0AssetsP1IssuingboxResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0AssetsP1Issuingbox']
    >
  >
>;
export type GetApiV0BlocksResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0Blocks']>>
>;
export type GetApiV0BlocksP1Result = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0BlocksP1']>
  >
>;
export type GetApiV0BlocksAtP1Result = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0BlocksAtP1']>
  >
>;
export type GetApiV0DexTokensP1UnspentsellordersResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0DexTokensP1Unspentsellorders']
    >
  >
>;
export type GetApiV0DexTokensP1UnspentbuyordersResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0DexTokensP1Unspentbuyorders']
    >
  >
>;
export type GetApiV0TransactionsP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0TransactionsP1']
    >
  >
>;
export type GetApiV0TransactionsUnconfirmedP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0TransactionsUnconfirmedP1']
    >
  >
>;
export type GetApiV0TransactionsUnconfirmedByaddressP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0TransactionsUnconfirmedByaddressP1']
    >
  >
>;
export type GetApiV0TransactionsUnconfirmedResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0TransactionsUnconfirmed']
    >
  >
>;
export type GetApiV0TransactionsSinceP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0TransactionsSinceP1']
    >
  >
>;
export type PostApiV0TransactionsSendResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['postApiV0TransactionsSend']
    >
  >
>;
export type GetApiV0TransactionsBoxesP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV0>['getApiV0TransactionsBoxesP1']
    >
  >
>;
export type GetApiV0TransactionsBoxesByergotreeP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0TransactionsBoxesByergotreeP1']
    >
  >
>;
export type GetApiV0TransactionsBoxesByergotreeUnspentP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0TransactionsBoxesByergotreeUnspentP1']
    >
  >
>;
export type GetApiV0TransactionsBoxesByaddressP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0TransactionsBoxesByaddressP1']
    >
  >
>;
export type GetApiV0TransactionsBoxesByaddressUnspentP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV0
      >['getApiV0TransactionsBoxesByaddressUnspentP1']
    >
  >
>;
export type GetApiV0InfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0Info']>>
>;
export type GetApiV0InfoSupplyResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0InfoSupply']>
  >
>;
export type GetApiV0StatsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0Stats']>>
>;
export type GetApiV0DocsOpenapiResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV0>['getApiV0DocsOpenapi']>
  >
>;
