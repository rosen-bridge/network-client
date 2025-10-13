import { createAxiosInstance, JsonFieldBigintFactory } from '../../axios';
import type {
  Balance,
  BlockSummary,
  BoxAssetsQuery,
  BoxQuery,
  EpochInfo,
  ErgoTreeConversionRequest,
  ErgoTreeHuman,
  GetApiV1AddressesP1BalanceConfirmedParams,
  GetApiV1AddressesP1TransactionsParams,
  GetApiV1AssetsParams,
  GetApiV1AssetsSearchBytokenidParams,
  GetApiV1BlocksByglobalindexStreamParams,
  GetApiV1BlocksHeadersParams,
  GetApiV1BlocksParams,
  GetApiV1BlocksStreamSummaryParams,
  GetApiV1BoxesByaddressP1Params,
  GetApiV1BoxesByergotreeP1Params,
  GetApiV1BoxesByergotreetemplatehashP1Params,
  GetApiV1BoxesByergotreetemplatehashP1StreamParams,
  GetApiV1BoxesByglobalindexStreamParams,
  GetApiV1BoxesBytokenidP1Params,
  GetApiV1BoxesUnspentByaddressP1Params,
  GetApiV1BoxesUnspentByergotreeP1Params,
  GetApiV1BoxesUnspentByergotreetemplatehashP1Params,
  GetApiV1BoxesUnspentByergotreetemplatehashP1StreamParams,
  GetApiV1BoxesUnspentByglobalindexStreamParams,
  GetApiV1BoxesUnspentBylastepochsStreamParams,
  GetApiV1BoxesUnspentBytokenidP1Params,
  GetApiV1BoxesUnspentStreamParams,
  GetApiV1BoxesUnspentUnconfirmedByaddressP1Params,
  GetApiV1MempoolTransactionsByaddressP1Params,
  GetApiV1TokensParams,
  GetApiV1TokensSearchParams,
  GetApiV1TransactionsByglobalindexStreamParams,
  GetApiV1TransactionsByinputsscripttemplatehashP1Params,
  ItemsAssetInfo,
  ItemsBlockHeader,
  ItemsBlockInfo,
  ItemsOutputInfo,
  ItemsTokenInfo,
  ItemsTransactionInfo,
  ItemsUTransactionInfo,
  ListBlockInfo,
  ListBlockSummaryV1,
  ListOutputInfo,
  ListTransactionInfo,
  MOutputInfo,
  NetworkState,
  NetworkStats,
  OutputInfo,
  PostApiV1BoxesSearchParams,
  PostApiV1BoxesUnspentSearchParams,
  PostApiV1BoxesUnspentSearchUnionParams,
  PostApiV1MempoolTransactionsSubmitBody,
  TokenInfo,
  TotalBalance,
  TransactionInfo,
  TxIdResponse,
} from '../types';
import {
  bigIntsBalance,
  bigIntsBlockSummary,
  bigIntsEpochInfo,
  bigIntsErgoTreeHuman,
  bigIntsItemsAssetInfo,
  bigIntsItemsBlockHeader,
  bigIntsItemsBlockInfo,
  bigIntsItemsOutputInfo,
  bigIntsItemsTokenInfo,
  bigIntsItemsTransactionInfo,
  bigIntsItemsUTransactionInfo,
  bigIntsListBlockInfo,
  bigIntsListBlockSummaryV1,
  bigIntsListOutputInfo,
  bigIntsListTransactionInfo,
  bigIntsMOutputInfo,
  bigIntsNetworkState,
  bigIntsNetworkStats,
  bigIntsOutputInfo,
  bigIntsTokenInfo,
  bigIntsTotalBalance,
  bigIntsTransactionInfo,
  bigIntsTxIdResponse,
} from '../types';

export const getErgoExplorerAPIV1 = (url: string) => {
  const instance = createAxiosInstance(url);
  const getApiV1TransactionsP1 = (p1: string) => {
    return instance<TransactionInfo>({
      url: `/api/v1/transactions/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionInfo),
    });
  };

  const getApiV1TransactionsByinputsscripttemplatehashP1 = (
    p1: string,
    params?: GetApiV1TransactionsByinputsscripttemplatehashP1Params,
  ) => {
    return instance<ItemsTransactionInfo>({
      url: `/api/v1/transactions/byInputsScriptTemplateHash/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsTransactionInfo),
    });
  };

  /**
   * Get a stream of transactions ordered by global index
   */
  const getApiV1TransactionsByglobalindexStream = (
    params: GetApiV1TransactionsByglobalindexStreamParams,
  ) => {
    return instance<ListTransactionInfo>({
      url: `/api/v1/transactions/byGlobalIndex/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListTransactionInfo),
    });
  };

  const getApiV1BoxesUnspentBylastepochsStream = (
    params: GetApiV1BoxesUnspentBylastepochsStreamParams,
  ) => {
    return instance<ListOutputInfo>({
      url: `/api/v1/boxes/unspent/byLastEpochs/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  /**
   * Get a stream of unspent outputs ordered by global index
   */
  const getApiV1BoxesUnspentByglobalindexStream = (
    params: GetApiV1BoxesUnspentByglobalindexStreamParams,
  ) => {
    return instance<ListOutputInfo>({
      url: `/api/v1/boxes/unspent/byGlobalIndex/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  const getApiV1BoxesUnspentStream = (
    params: GetApiV1BoxesUnspentStreamParams,
  ) => {
    return instance<ListOutputInfo>({
      url: `/api/v1/boxes/unspent/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  /**
   * Get a stream of unspent outputs by a hash of the given ErgoTreeTemplate
   */
  const getApiV1BoxesByergotreetemplatehashP1Stream = (
    p1: string,
    params: GetApiV1BoxesByergotreetemplatehashP1StreamParams,
  ) => {
    return instance<ListOutputInfo>({
      url: `/api/v1/boxes/byErgoTreeTemplateHash/${p1}/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  const getApiV1BoxesUnspentByergotreetemplatehashP1Stream = (
    p1: string,
    params: GetApiV1BoxesUnspentByergotreetemplatehashP1StreamParams,
  ) => {
    return instance<ListOutputInfo>({
      url: `/api/v1/boxes/unspent/byErgoTreeTemplateHash/${p1}/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  const getApiV1BoxesUnspentBytokenidP1 = (
    p1: string,
    params?: GetApiV1BoxesUnspentBytokenidP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/unspent/byTokenId/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesBytokenidP1 = (
    p1: string,
    params?: GetApiV1BoxesBytokenidP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/byTokenId/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesP1 = (p1: string) => {
    return instance<OutputInfo>({
      url: `/api/v1/boxes/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsOutputInfo),
    });
  };

  const getApiV1BoxesByergotreeP1 = (
    p1: string,
    params?: GetApiV1BoxesByergotreeP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/byErgoTree/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesByergotreetemplatehashP1 = (
    p1: string,
    params?: GetApiV1BoxesByergotreetemplatehashP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/byErgoTreeTemplateHash/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesUnspentByergotreeP1 = (
    p1: string,
    params?: GetApiV1BoxesUnspentByergotreeP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/unspent/byErgoTree/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesUnspentByergotreetemplatehashP1 = (
    p1: string,
    params?: GetApiV1BoxesUnspentByergotreetemplatehashP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/unspent/byErgoTreeTemplateHash/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesByaddressP1 = (
    p1: string,
    params?: GetApiV1BoxesByaddressP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/byAddress/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1BoxesUnspentUnconfirmedByaddressP1 = (
    p1: string,
    params?: GetApiV1BoxesUnspentUnconfirmedByaddressP1Params,
  ) => {
    return instance<MOutputInfo[]>({
      url: `/api/v1/boxes/unspent/unconfirmed/byAddress/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsMOutputInfo),
    });
  };

  const getApiV1BoxesUnspentByaddressP1 = (
    p1: string,
    params?: GetApiV1BoxesUnspentByaddressP1Params,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/unspent/byAddress/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  /**
   * Get a stream of outputs ordered by global index
   */
  const getApiV1BoxesByglobalindexStream = (
    params: GetApiV1BoxesByglobalindexStreamParams,
  ) => {
    return instance<ListOutputInfo>({
      url: `/api/v1/boxes/byGlobalIndex/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  /**
   * Search among UTXO set by ergoTreeTemplateHash and tokens. The resulted UTXOs will contain at lest one of the given tokens.
   */
  const postApiV1BoxesUnspentSearchUnion = (
    boxAssetsQuery: BoxAssetsQuery,
    params?: PostApiV1BoxesUnspentSearchUnionParams,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/unspent/search/union`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: boxAssetsQuery,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  /**
   * Detailed search among UTXO set
   */
  const postApiV1BoxesUnspentSearch = (
    boxQuery: BoxQuery,
    params?: PostApiV1BoxesUnspentSearchParams,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/unspent/search`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: boxQuery,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  /**
   * Detailed search among all boxes in the chain
   */
  const postApiV1BoxesSearch = (
    boxQuery: BoxQuery,
    params?: PostApiV1BoxesSearchParams,
  ) => {
    return instance<ItemsOutputInfo>({
      url: `/api/v1/boxes/search`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: boxQuery,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsOutputInfo),
    });
  };

  const getApiV1Tokens = (params?: GetApiV1TokensParams) => {
    return instance<ItemsTokenInfo>({
      url: `/api/v1/tokens`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsTokenInfo),
    });
  };

  /**
   * Search by ID or Symbol of an asset. Note that symbols aren't unique.
   */
  const getApiV1TokensSearch = (params: GetApiV1TokensSearchParams) => {
    return instance<ItemsTokenInfo>({
      url: `/api/v1/tokens/search`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsTokenInfo),
    });
  };

  /**
   * Get all assets with a given Symbol. Note that symbols aren't unique.
   */
  const getApiV1TokensBysymbolP1 = (p1: string) => {
    return instance<TokenInfo[]>({
      url: `/api/v1/tokens/bySymbol/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTokenInfo),
    });
  };

  const getApiV1TokensP1 = (p1: string) => {
    return instance<TokenInfo>({
      url: `/api/v1/tokens/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTokenInfo),
    });
  };

  /**
   * Use '/tokens' instead
   * @deprecated
   */
  const getApiV1Assets = (params?: GetApiV1AssetsParams) => {
    return instance<ItemsTokenInfo>({
      url: `/api/v1/assets`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsTokenInfo),
    });
  };

  const getApiV1AssetsSearchBytokenid = (
    params: GetApiV1AssetsSearchBytokenidParams,
  ) => {
    return instance<ItemsAssetInfo>({
      url: `/api/v1/assets/search/byTokenId`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsAssetInfo),
    });
  };

  const getApiV1EpochsParams = () => {
    return instance<EpochInfo>({
      url: `/api/v1/epochs/params`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsEpochInfo),
    });
  };

  const getApiV1AddressesP1Transactions = (
    p1: string,
    params?: GetApiV1AddressesP1TransactionsParams,
  ) => {
    return instance<ItemsTransactionInfo>({
      url: `/api/v1/addresses/${p1}/transactions`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsTransactionInfo),
    });
  };

  const getApiV1AddressesP1BalanceConfirmed = (
    p1: string,
    params?: GetApiV1AddressesP1BalanceConfirmedParams,
  ) => {
    return instance<Balance>({
      url: `/api/v1/addresses/${p1}/balance/confirmed`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsBalance),
    });
  };

  const getApiV1AddressesP1BalanceTotal = (p1: string) => {
    return instance<TotalBalance>({
      url: `/api/v1/addresses/${p1}/balance/total`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTotalBalance),
    });
  };

  const getApiV1Blocks = (params?: GetApiV1BlocksParams) => {
    return instance<ItemsBlockInfo>({
      url: `/api/v1/blocks`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsBlockInfo),
    });
  };

  const getApiV1BlocksP1 = (p1: string) => {
    return instance<BlockSummary>({
      url: `/api/v1/blocks/${p1}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlockSummary),
    });
  };

  const getApiV1BlocksHeaders = (params?: GetApiV1BlocksHeadersParams) => {
    return instance<ItemsBlockHeader>({
      url: `/api/v1/blocks/headers`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsBlockHeader),
    });
  };

  /**
   * Get a stream of blocks ordered by global index (height)
   */
  const getApiV1BlocksByglobalindexStream = (
    params: GetApiV1BlocksByglobalindexStreamParams,
  ) => {
    return instance<ListBlockInfo>({
      url: `/api/v1/blocks/byGlobalIndex/stream`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListBlockInfo),
    });
  };

  /**
   * Get a stream of block summaries ordered by global index (height)
   */
  const getApiV1BlocksStreamSummary = (
    params?: GetApiV1BlocksStreamSummaryParams,
  ) => {
    return instance<ListBlockSummaryV1>({
      url: `/api/v1/blocks/stream/summary`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsListBlockSummaryV1),
    });
  };

  const postApiV1MempoolTransactionsSubmit = (
    postApiV1MempoolTransactionsSubmitBody: PostApiV1MempoolTransactionsSubmitBody,
  ) => {
    return instance<TxIdResponse>({
      url: `/api/v1/mempool/transactions/submit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: postApiV1MempoolTransactionsSubmitBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxIdResponse),
    });
  };

  const getApiV1MempoolTransactionsByaddressP1 = (
    p1: string,
    params?: GetApiV1MempoolTransactionsByaddressP1Params,
  ) => {
    return instance<ItemsUTransactionInfo>({
      url: `/api/v1/mempool/transactions/byAddress/${p1}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsItemsUTransactionInfo),
    });
  };

  /**
   * Get a stream of unspent outputs
   */
  const getApiV1MempoolBoxesUnspent = () => {
    return instance<ListOutputInfo>({
      url: `/api/v1/mempool/boxes/unspent`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsListOutputInfo),
    });
  };

  /**
   * @deprecated
   */
  const getApiV1Info = () => {
    return instance<NetworkState>({
      url: `/api/v1/info`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsNetworkState),
    });
  };

  const getApiV1Networkstate = () => {
    return instance<NetworkState>({
      url: `/api/v1/networkState`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsNetworkState),
    });
  };

  const getApiV1Networkstats = () => {
    return instance<NetworkStats>({
      url: `/api/v1/networkStats`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsNetworkStats),
    });
  };

  const postApiV1ErgotreeConvert = (
    ergoTreeConversionRequest: ErgoTreeConversionRequest,
  ) => {
    return instance<ErgoTreeHuman>({
      url: `/api/v1/ergotree/convert`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: ergoTreeConversionRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTreeHuman),
    });
  };

  return {
    getApiV1TransactionsP1,
    getApiV1TransactionsByinputsscripttemplatehashP1,
    getApiV1TransactionsByglobalindexStream,
    getApiV1BoxesUnspentBylastepochsStream,
    getApiV1BoxesUnspentByglobalindexStream,
    getApiV1BoxesUnspentStream,
    getApiV1BoxesByergotreetemplatehashP1Stream,
    getApiV1BoxesUnspentByergotreetemplatehashP1Stream,
    getApiV1BoxesUnspentBytokenidP1,
    getApiV1BoxesBytokenidP1,
    getApiV1BoxesP1,
    getApiV1BoxesByergotreeP1,
    getApiV1BoxesByergotreetemplatehashP1,
    getApiV1BoxesUnspentByergotreeP1,
    getApiV1BoxesUnspentByergotreetemplatehashP1,
    getApiV1BoxesByaddressP1,
    getApiV1BoxesUnspentUnconfirmedByaddressP1,
    getApiV1BoxesUnspentByaddressP1,
    getApiV1BoxesByglobalindexStream,
    postApiV1BoxesUnspentSearchUnion,
    postApiV1BoxesUnspentSearch,
    postApiV1BoxesSearch,
    getApiV1Tokens,
    getApiV1TokensSearch,
    getApiV1TokensBysymbolP1,
    getApiV1TokensP1,
    getApiV1Assets,
    getApiV1AssetsSearchBytokenid,
    getApiV1EpochsParams,
    getApiV1AddressesP1Transactions,
    getApiV1AddressesP1BalanceConfirmed,
    getApiV1AddressesP1BalanceTotal,
    getApiV1Blocks,
    getApiV1BlocksP1,
    getApiV1BlocksHeaders,
    getApiV1BlocksByglobalindexStream,
    getApiV1BlocksStreamSummary,
    postApiV1MempoolTransactionsSubmit,
    getApiV1MempoolTransactionsByaddressP1,
    getApiV1MempoolBoxesUnspent,
    getApiV1Info,
    getApiV1Networkstate,
    getApiV1Networkstats,
    postApiV1ErgotreeConvert,
  };
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetApiV1TransactionsP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1TransactionsP1']
    >
  >
>;
export type GetApiV1TransactionsByinputsscripttemplatehashP1Result =
  NonNullable<
    Awaited<
      ReturnType<
        ReturnType<
          typeof getErgoExplorerAPIV1
        >['getApiV1TransactionsByinputsscripttemplatehashP1']
      >
    >
  >;
export type GetApiV1TransactionsByglobalindexStreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1TransactionsByglobalindexStream']
    >
  >
>;
export type GetApiV1BoxesUnspentBylastepochsStreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesUnspentBylastepochsStream']
    >
  >
>;
export type GetApiV1BoxesUnspentByglobalindexStreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesUnspentByglobalindexStream']
    >
  >
>;
export type GetApiV1BoxesUnspentStreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesUnspentStream']
    >
  >
>;
export type GetApiV1BoxesByergotreetemplatehashP1StreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesByergotreetemplatehashP1Stream']
    >
  >
>;
export type GetApiV1BoxesUnspentByergotreetemplatehashP1StreamResult =
  NonNullable<
    Awaited<
      ReturnType<
        ReturnType<
          typeof getErgoExplorerAPIV1
        >['getApiV1BoxesUnspentByergotreetemplatehashP1Stream']
      >
    >
  >;
export type GetApiV1BoxesUnspentBytokenidP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesUnspentBytokenidP1']
    >
  >
>;
export type GetApiV1BoxesBytokenidP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesBytokenidP1']
    >
  >
>;
export type GetApiV1BoxesP1Result = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesP1']>
  >
>;
export type GetApiV1BoxesByergotreeP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesByergotreeP1']
    >
  >
>;
export type GetApiV1BoxesByergotreetemplatehashP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesByergotreetemplatehashP1']
    >
  >
>;
export type GetApiV1BoxesUnspentByergotreeP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesUnspentByergotreeP1']
    >
  >
>;
export type GetApiV1BoxesUnspentByergotreetemplatehashP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesUnspentByergotreetemplatehashP1']
    >
  >
>;
export type GetApiV1BoxesByaddressP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesByaddressP1']
    >
  >
>;
export type GetApiV1BoxesUnspentUnconfirmedByaddressP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesUnspentUnconfirmedByaddressP1']
    >
  >
>;
export type GetApiV1BoxesUnspentByaddressP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BoxesUnspentByaddressP1']
    >
  >
>;
export type GetApiV1BoxesByglobalindexStreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BoxesByglobalindexStream']
    >
  >
>;
export type PostApiV1BoxesUnspentSearchUnionResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['postApiV1BoxesUnspentSearchUnion']
    >
  >
>;
export type PostApiV1BoxesUnspentSearchResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['postApiV1BoxesUnspentSearch']
    >
  >
>;
export type PostApiV1BoxesSearchResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['postApiV1BoxesSearch']>
  >
>;
export type GetApiV1TokensResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1Tokens']>>
>;
export type GetApiV1TokensSearchResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1TokensSearch']>
  >
>;
export type GetApiV1TokensBysymbolP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1TokensBysymbolP1']
    >
  >
>;
export type GetApiV1TokensP1Result = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1TokensP1']>
  >
>;
export type GetApiV1AssetsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1Assets']>>
>;
export type GetApiV1AssetsSearchBytokenidResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1AssetsSearchBytokenid']
    >
  >
>;
export type GetApiV1EpochsParamsResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1EpochsParams']>
  >
>;
export type GetApiV1AddressesP1TransactionsResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1AddressesP1Transactions']
    >
  >
>;
export type GetApiV1AddressesP1BalanceConfirmedResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1AddressesP1BalanceConfirmed']
    >
  >
>;
export type GetApiV1AddressesP1BalanceTotalResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1AddressesP1BalanceTotal']
    >
  >
>;
export type GetApiV1BlocksResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1Blocks']>>
>;
export type GetApiV1BlocksP1Result = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BlocksP1']>
  >
>;
export type GetApiV1BlocksHeadersResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BlocksHeaders']>
  >
>;
export type GetApiV1BlocksByglobalindexStreamResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1BlocksByglobalindexStream']
    >
  >
>;
export type GetApiV1BlocksStreamSummaryResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1BlocksStreamSummary']
    >
  >
>;
export type PostApiV1MempoolTransactionsSubmitResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['postApiV1MempoolTransactionsSubmit']
    >
  >
>;
export type GetApiV1MempoolTransactionsByaddressP1Result = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoExplorerAPIV1
      >['getApiV1MempoolTransactionsByaddressP1']
    >
  >
>;
export type GetApiV1MempoolBoxesUnspentResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['getApiV1MempoolBoxesUnspent']
    >
  >
>;
export type GetApiV1InfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1Info']>>
>;
export type GetApiV1NetworkstateResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1Networkstate']>
  >
>;
export type GetApiV1NetworkstatsResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoExplorerAPIV1>['getApiV1Networkstats']>
  >
>;
export type PostApiV1ErgotreeConvertResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoExplorerAPIV1>['postApiV1ErgotreeConvert']
    >
  >
>;
