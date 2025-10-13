import {
  createAxiosInstanceWithHeaders,
  JsonFieldBigintFactory,
} from '../axios';
import type {
  AccountAddresses,
  AccountAssets,
  AccountHistory,
  AccountInfo,
  AccountList,
  AccountRewards,
  AccountTxsParams,
  AccountUpdates,
  AddressAssets,
  AddressInfo,
  AddressTxs,
  AddressTxsBody,
  AssetAddresses,
  AssetAddressesParams,
  AssetHistory,
  AssetHistoryParams,
  AssetInfo,
  AssetList,
  AssetListBody,
  AssetListWithExtendedBody,
  AssetNftAddress,
  AssetNftAddressParams,
  AssetSummary,
  AssetSummaryParams,
  AssetTokenRegistry,
  AssetTxsParams,
  BlockHashesBody,
  BlockInfo,
  BlockTxCbor,
  BlockTxInfo,
  BlockTxInfoBody,
  BlockTxs,
  Blocks,
  CliProtocolParams,
  CommitteeInfo,
  CommitteeVotes,
  CommitteeVotesParams,
  CredentialTxsBody,
  CredentialUtxosBody,
  DatumHashesBody,
  DatumInfo,
  DrepDelegators,
  DrepDelegatorsParams,
  DrepEpochSummary,
  DrepEpochSummaryParams,
  DrepHistory,
  DrepHistoryParams,
  DrepIdBulkBody,
  DrepInfo,
  DrepList,
  DrepMetadata,
  DrepUpdates,
  DrepUpdatesParams,
  DrepVotes,
  DrepVotesParams,
  EpochBlockProtocols,
  EpochBlockProtocolsParams,
  EpochInfo,
  EpochInfoParams,
  EpochParams,
  EpochParamsParams,
  Genesis,
  OgmiosBody,
  Ogmiostip,
  ParamUpdates,
  PaymentAddressesBody,
  PaymentAddressesWithExtendedBody,
  PolicyAssetAddresses,
  PolicyAssetAddressesParams,
  PolicyAssetInfo,
  PolicyAssetInfoParams,
  PolicyAssetList,
  PolicyAssetListParams,
  PolicyAssetMints,
  PolicyAssetMintsParams,
  PoolBlocks,
  PoolBlocksParams,
  PoolDelegators,
  PoolDelegatorsHistory,
  PoolDelegatorsHistoryParams,
  PoolDelegatorsParams,
  PoolHistoryInfo,
  PoolHistoryParams,
  PoolIdsBody,
  PoolIdsOptionalBody,
  PoolInfo,
  PoolList,
  PoolMetadata,
  PoolRegistrations,
  PoolRegistrationsParams,
  PoolRelays,
  PoolRetirementsParams,
  PoolSnapshot,
  PoolStakeSnapshotParams,
  PoolUpdates,
  PoolUpdatesParams,
  PoolVotes,
  PoolVotesParams,
  ProposalList,
  ProposalVotes,
  ProposalVotesParams,
  ProposalVotingSummary,
  ProposalVotingSummaryParams,
  ReserveWithdrawals,
  ScriptHashesBody,
  ScriptInfo,
  ScriptList,
  ScriptRedeemers,
  ScriptRedeemersParams,
  ScriptUtxosParams,
  StakeAddressesBody,
  StakeAddressesWithEpochNoBody,
  StakeAddressesWithExtendedBody,
  StakeAddressesWithFirstOnlyAndEmptyBody,
  Tip,
  Totals,
  TotalsParams,
  TxCbor,
  TxIdsBody,
  TxInfo,
  TxInfoBody,
  TxMetadata,
  TxMetalabels,
  TxStatus,
  TxUtxos,
  TxbinBody,
  UtxoInfos,
  UtxoRefsWithExtendedBody,
  VoterProposalListParams,
} from '../types';
import {
  bigIntsAccountAddresses,
  bigIntsAccountAssets,
  bigIntsAccountHistory,
  bigIntsAccountInfo,
  bigIntsAccountList,
  bigIntsAccountRewards,
  bigIntsAccountUpdates,
  bigIntsAddressAssets,
  bigIntsAddressInfo,
  bigIntsAddressTxs,
  bigIntsAssetAddresses,
  bigIntsAssetHistory,
  bigIntsAssetInfo,
  bigIntsAssetList,
  bigIntsAssetNftAddress,
  bigIntsAssetSummary,
  bigIntsAssetTokenRegistry,
  bigIntsBlockInfo,
  bigIntsBlockTxCbor,
  bigIntsBlockTxInfo,
  bigIntsBlockTxs,
  bigIntsBlocks,
  bigIntsCliProtocolParams,
  bigIntsCommitteeInfo,
  bigIntsCommitteeVotes,
  bigIntsDatumInfo,
  bigIntsDrepDelegators,
  bigIntsDrepEpochSummary,
  bigIntsDrepHistory,
  bigIntsDrepInfo,
  bigIntsDrepList,
  bigIntsDrepMetadata,
  bigIntsDrepUpdates,
  bigIntsDrepVotes,
  bigIntsEpochBlockProtocols,
  bigIntsEpochInfo,
  bigIntsEpochParams,
  bigIntsGenesis,
  bigIntsOgmiostip,
  bigIntsParamUpdates,
  bigIntsPolicyAssetAddresses,
  bigIntsPolicyAssetInfo,
  bigIntsPolicyAssetList,
  bigIntsPolicyAssetMints,
  bigIntsPoolBlocks,
  bigIntsPoolDelegators,
  bigIntsPoolDelegatorsHistory,
  bigIntsPoolHistoryInfo,
  bigIntsPoolInfo,
  bigIntsPoolList,
  bigIntsPoolMetadata,
  bigIntsPoolRegistrations,
  bigIntsPoolRelays,
  bigIntsPoolSnapshot,
  bigIntsPoolUpdates,
  bigIntsPoolVotes,
  bigIntsProposalList,
  bigIntsProposalVotes,
  bigIntsProposalVotingSummary,
  bigIntsReserveWithdrawals,
  bigIntsScriptInfo,
  bigIntsScriptList,
  bigIntsScriptRedeemers,
  bigIntsTip,
  bigIntsTotals,
  bigIntsTxCbor,
  bigIntsTxInfo,
  bigIntsTxMetadata,
  bigIntsTxMetalabels,
  bigIntsTxStatus,
  bigIntsTxUtxos,
  bigIntsUtxoInfos,
} from '../types';

export const getKoiosAPI = (url: string, authToken?: string) => {
  const instance = createAxiosInstanceWithHeaders(
    url,
    authToken
      ? {
          Authorization: `Bearer ${authToken}`,
        }
      : {},
  );
  /**
   * Get the tip info about the latest block seen by chain
   * @summary Query Chain Tip
   */
  const tip = () => {
    return instance<Tip>({
      url: `/tip`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTip),
    });
  };

  /**
   * Get the Genesis parameters used to start specific era on chain
   * @summary Get Genesis info
   */
  const genesis = () => {
    return instance<Genesis>({
      url: `/genesis`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsGenesis),
    });
  };

  /**
   * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
   * @summary Get historical tokenomic stats
   */
  const totals = (params?: TotalsParams) => {
    return instance<Totals>({
      url: `/totals`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsTotals),
    });
  };

  /**
   * Get all parameter update proposals submitted to the chain starting Shelley era
   * @summary Param Update Proposals
   */
  const paramUpdates = () => {
    return instance<ParamUpdates>({
      url: `/param_updates`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsParamUpdates),
    });
  };

  /**
   * Get Current Protocol Parameters as published by cardano-cli. Note that the output schema of this command is unfortunately fluid on cardano-node and may vary between CLI versions/era. Accordingly, the returned output for this endpoint is left as raw JSON (single row) and any filtering to output should be done on client-side
   * @summary CLI Protocol Parameters
   */
  const cliProtocolParams = () => {
    return instance<CliProtocolParams>({
      url: `/cli_protocol_params`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsCliProtocolParams),
    });
  };

  /**
   * List of all withdrawals from reserves against stake accounts
   * @summary Reserve Withdrawals
   */
  const reserveWithdrawals = () => {
    return instance<ReserveWithdrawals>({
      url: `/reserve_withdrawals`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsReserveWithdrawals),
    });
  };

  /**
   * List of all withdrawals from treasury against stake accounts
   * @summary Treasury Withdrawals
   */
  const treasuryWithdrawals = () => {
    return instance<ReserveWithdrawals>({
      url: `/treasury_withdrawals`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsReserveWithdrawals),
    });
  };

  /**
   * Get the epoch information, all epochs if no epoch specified
   * @summary Epoch Information
   */
  const epochInfo = (params?: EpochInfoParams) => {
    return instance<EpochInfo>({
      url: `/epoch_info`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsEpochInfo),
    });
  };

  /**
   * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
   * @summary Epoch's Protocol Parameters
   */
  const epochParams = (params?: EpochParamsParams) => {
    return instance<EpochParams>({
      url: `/epoch_params`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsEpochParams),
    });
  };

  /**
   * Get the information about block protocol distribution in epoch
   * @summary Epoch's Block Protocols
   */
  const epochBlockProtocols = (params?: EpochBlockProtocolsParams) => {
    return instance<EpochBlockProtocols>({
      url: `/epoch_block_protocols`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsEpochBlockProtocols),
    });
  };

  /**
   * Get summarised details about all blocks (paginated - latest first)
   * @summary Block List
   */
  const blocks = () => {
    return instance<Blocks>({
      url: `/blocks`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlocks),
    });
  };

  /**
   * Get detailed information about a specific block
   * @summary Block Information
   */
  const blockInfo = (blockHashesBody: BlockHashesBody) => {
    return instance<BlockInfo>({
      url: `/block_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: blockHashesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsBlockInfo),
    });
  };

  /**
   * Get a list of all transactions included in provided blocks
   * @summary Block Transactions
   */
  const blockTxs = (blockHashesBody: BlockHashesBody) => {
    return instance<BlockTxs>({
      url: `/block_txs`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: blockHashesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsBlockTxs),
    });
  };

  /**
   * Get raw CBOR data for all transaction(s) within requested blocks
   * @summary Block Transactions (Raw CBOR)
   */
  const blockTxCbor = (blockHashesBody: BlockHashesBody) => {
    return instance<BlockTxCbor>({
      url: `/block_tx_cbor`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: blockHashesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsBlockTxCbor),
    });
  };

  /**
   * Get detailed information about transaction(s) for requested blocks
   * @deprecated
   * @summary Block Transactions (Detailed Info)
   */
  const blockTxInfo = (blockTxInfoBody: BlockTxInfoBody) => {
    return instance<BlockTxInfo>({
      url: `/block_tx_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: blockTxInfoBody,
      transformResponse: JsonFieldBigintFactory(bigIntsBlockTxInfo),
    });
  };

  /**
   * Get UTxO set for requested UTxO references
   * @summary UTxO Info
   */
  const utxoInfo = (utxoRefsWithExtendedBody: UtxoRefsWithExtendedBody) => {
    return instance<UtxoInfos>({
      url: `/utxo_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: utxoRefsWithExtendedBody,
      transformResponse: JsonFieldBigintFactory(bigIntsUtxoInfos),
    });
  };

  /**
   * Get raw transaction(s) in CBOR format
   * @summary Raw Transaction (CBOR)
   */
  const txCbor = (txIdsBody: TxIdsBody) => {
    return instance<TxCbor>({
      url: `/tx_cbor`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: txIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxCbor),
    });
  };

  /**
   * Get detailed information about transaction(s)
   * @summary Transaction Information
   */
  const txInfo = (txInfoBody: TxInfoBody) => {
    return instance<TxInfo>({
      url: `/tx_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: txInfoBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxInfo),
    });
  };

  /**
   * Get metadata information (if any) for given transaction(s)
   * @summary Transaction Metadata
   */
  const txMetadata = (txIdsBody: TxIdsBody) => {
    return instance<TxMetadata>({
      url: `/tx_metadata`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: txIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxMetadata),
    });
  };

  /**
   * Get a list of all transaction metalabels
   * @summary Transaction Metadata Labels
   */
  const txMetalabels = () => {
    return instance<TxMetalabels>({
      url: `/tx_metalabels`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTxMetalabels),
    });
  };

  /**
   * Submit an already serialized transaction to the network.
   * @summary Submit Transaction
   */
  const submittx = (txbinBody: TxbinBody) => {
    return instance<string>({
      url: `/submittx`,
      method: 'POST',
      headers: { 'Content-Type': 'application/cbor' },
      data: txbinBody,
    });
  };

  /**
   * Get the number of block confirmations for a given transaction hash list
   * @summary Transaction Status
   */
  const txStatus = (txIdsBody: TxIdsBody) => {
    return instance<TxStatus>({
      url: `/tx_status`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: txIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxStatus),
    });
  };

  /**
   * Get UTxO set (inputs/outputs) of transactions [DEPRECATED - Use /utxo_info instead].
   * @deprecated
   * @summary Transaction UTxOs
   */
  const txUtxos = (txIdsBody: TxIdsBody) => {
    return instance<TxUtxos>({
      url: `/tx_utxos`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: txIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTxUtxos),
    });
  };

  /**
   * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
   * @summary Address Information
   */
  const addressInfo = (paymentAddressesBody: PaymentAddressesBody) => {
    return instance<AddressInfo>({
      url: `/address_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: paymentAddressesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressInfo),
    });
  };

  /**
   * Get UTxO set for given addresses
   * @summary Address UTXOs
   */
  const addressUtxos = (
    paymentAddressesWithExtendedBody: PaymentAddressesWithExtendedBody,
  ) => {
    return instance<UtxoInfos>({
      url: `/address_utxos`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: paymentAddressesWithExtendedBody,
      transformResponse: JsonFieldBigintFactory(bigIntsUtxoInfos),
    });
  };

  /**
   * Get UTxO details for requested payment credentials
   * @summary UTxOs from payment credentials
   */
  const credentialUtxos = (credentialUtxosBody: CredentialUtxosBody) => {
    return instance<UtxoInfos>({
      url: `/credential_utxos`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: credentialUtxosBody,
      transformResponse: JsonFieldBigintFactory(bigIntsUtxoInfos),
    });
  };

  /**
   * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
   * @summary Address Transactions
   */
  const addressTxs = (addressTxsBody: AddressTxsBody) => {
    return instance<AddressTxs>({
      url: `/address_txs`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: addressTxsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressTxs),
    });
  };

  /**
   * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
   * @summary Transactions from payment credentials
   */
  const credentialTxs = (credentialTxsBody: CredentialTxsBody) => {
    return instance<AddressTxs>({
      url: `/credential_txs`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: credentialTxsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressTxs),
    });
  };

  /**
   * Get the list of all the assets (policy, name and quantity) for given addresses
   * @summary Address Assets
   */
  const addressAssets = (paymentAddressesBody: PaymentAddressesBody) => {
    return instance<AddressAssets>({
      url: `/address_assets`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: paymentAddressesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressAssets),
    });
  };

  /**
   * Get a list of all stake addresses that have atleast 1 transaction
   * @summary Account List
   */
  const accountList = () => {
    return instance<AccountList>({
      url: `/account_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsAccountList),
    });
  };

  /**
   * Get the account information for given stake addresses
   * @summary Account Information
   */
  const accountInfo = (stakeAddressesBody: StakeAddressesBody) => {
    return instance<AccountInfo>({
      url: `/account_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountInfo),
    });
  };

  /**
   * Get the cached account information for given stake addresses (effective for performance query against registered accounts)
   * @summary Account Information (Cached)
   */
  const accountInfoCached = (stakeAddressesBody: StakeAddressesBody) => {
    return instance<AccountInfo>({
      url: `/account_info_cached`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountInfo),
    });
  };

  /**
   * Get a list of all UTxOs for given stake addresses (account)s
   * @summary UTxOs for stake addresses (accounts)
   */
  const accountUtxos = (
    stakeAddressesWithExtendedBody: StakeAddressesWithExtendedBody,
  ) => {
    return instance<UtxoInfos>({
      url: `/account_utxos`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesWithExtendedBody,
      transformResponse: JsonFieldBigintFactory(bigIntsUtxoInfos),
    });
  };

  /**
   * Get a list of all Txs for a given stake address (account)
   * @summary Account Txs
   */
  const accountTxs = (params: AccountTxsParams) => {
    return instance<AddressTxs>({
      url: `/account_txs`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressTxs),
    });
  };

  /**
   * Get the full rewards history (including MIR) for given stake addresses
   * @summary Account Rewards
   */
  const accountRewards = (
    stakeAddressesWithEpochNoBody: StakeAddressesWithEpochNoBody,
  ) => {
    return instance<AccountRewards>({
      url: `/account_rewards`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesWithEpochNoBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountRewards),
    });
  };

  /**
   * Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
   * @summary Account Updates
   */
  const accountUpdates = (stakeAddressesBody: StakeAddressesBody) => {
    return instance<AccountUpdates>({
      url: `/account_updates`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountUpdates),
    });
  };

  /**
   * Get all addresses associated with given staking accounts
   * @summary Account Addresses
   */
  const accountAddresses = (
    stakeAddressesWithFirstOnlyAndEmptyBody: StakeAddressesWithFirstOnlyAndEmptyBody,
  ) => {
    return instance<AccountAddresses>({
      url: `/account_addresses`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesWithFirstOnlyAndEmptyBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountAddresses),
    });
  };

  /**
   * Get the native asset balance for a given stake address
   * @summary Account Assets
   */
  const accountAssets = (stakeAddressesBody: StakeAddressesBody) => {
    return instance<AccountAssets>({
      url: `/account_assets`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountAssets),
    });
  };

  /**
   * Get the staking history of given stake addresses (accounts)
   * @summary Account History
   */
  const accountHistory = (
    stakeAddressesWithEpochNoBody: StakeAddressesWithEpochNoBody,
  ) => {
    return instance<AccountHistory>({
      url: `/account_history`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: stakeAddressesWithEpochNoBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAccountHistory),
    });
  };

  /**
   * Get the list of all native assets (paginated)
   * @summary Asset List
   */
  const assetList = () => {
    return instance<AssetList>({
      url: `/asset_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsAssetList),
    });
  };

  /**
   * Get the list of asset under the given policy (including balances)
   * @summary Policy Asset List
   */
  const policyAssetList = (params: PolicyAssetListParams) => {
    return instance<PolicyAssetList>({
      url: `/policy_asset_list`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPolicyAssetList),
    });
  };

  /**
   * Get a list of assets registered via token registry on github
   * @summary Asset Token Registry
   */
  const assetTokenRegistry = () => {
    return instance<AssetTokenRegistry>({
      url: `/asset_token_registry`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsAssetTokenRegistry),
    });
  };

  /**
   * Get the information of a list of assets including first minting & token registry metadata
   * @summary Asset Information (Bulk)
   */
  const assetInfo = (assetListBody: AssetListBody) => {
    return instance<AssetInfo>({
      url: `/asset_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: assetListBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAssetInfo),
    });
  };

  /**
   * Get the UTXO information of a list of assets including
   * @summary Asset UTXOs
   */
  const assetUtxos = (assetListWithExtendedBody: AssetListWithExtendedBody) => {
    return instance<UtxoInfos>({
      url: `/asset_utxos`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: assetListWithExtendedBody,
      transformResponse: JsonFieldBigintFactory(bigIntsUtxoInfos),
    });
  };

  /**
   * Get the mint/burn history of an asset
   * @summary Asset History
   */
  const assetHistory = (params: AssetHistoryParams) => {
    return instance<AssetHistory>({
      url: `/asset_history`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAssetHistory),
    });
  };

  /**
   * Get the list of all addresses holding a given asset <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
   * @summary Asset Addresses
   */
  const assetAddresses = (params: AssetAddressesParams) => {
    return instance<AssetAddresses>({
      url: `/asset_addresses`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAssetAddresses),
    });
  };

  /**
   * Get the address where specified NFT currently reside on.
   * @summary NFT Address
   */
  const assetNftAddress = (params: AssetNftAddressParams) => {
    return instance<AssetNftAddress>({
      url: `/asset_nft_address`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAssetNftAddress),
    });
  };

  /**
   * Get the list of addresses with quantity for each asset on the given policy <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
   * @summary Policy Asset Address List
   */
  const policyAssetAddresses = (params: PolicyAssetAddressesParams) => {
    return instance<PolicyAssetAddresses>({
      url: `/policy_asset_addresses`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPolicyAssetAddresses),
    });
  };

  /**
   * Get the information for all assets under the same policy
   * @summary Policy Asset Information
   */
  const policyAssetInfo = (params: PolicyAssetInfoParams) => {
    return instance<PolicyAssetInfo>({
      url: `/policy_asset_info`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPolicyAssetInfo),
    });
  };

  /**
   * Get a list of mint or burn count details for all assets minted under a policy
   * @summary Policy Asset Mints
   */
  const policyAssetMints = (params: PolicyAssetMintsParams) => {
    return instance<PolicyAssetMints>({
      url: `/policy_asset_mints`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPolicyAssetMints),
    });
  };

  /**
   * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
   * @summary Asset Summary
   */
  const assetSummary = (params: AssetSummaryParams) => {
    return instance<AssetSummary>({
      url: `/asset_summary`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAssetSummary),
    });
  };

  /**
   * Get the list of current or all asset transaction hashes (newest first)
   * @summary Asset Transactions
   */
  const assetTxs = (params: AssetTxsParams) => {
    return instance<AddressTxs>({
      url: `/asset_txs`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressTxs),
    });
  };

  /**
   * Summary of voting power and DRep count for each epoch
   * @summary DReps Epoch Summary
   */
  const drepEpochSummary = (params?: DrepEpochSummaryParams) => {
    return instance<DrepEpochSummary>({
      url: `/drep_epoch_summary`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepEpochSummary),
    });
  };

  /**
   * List of all active delegated representatives (DReps)
   * @summary DReps List
   */
  const drepList = () => {
    return instance<DrepList>({
      url: `/drep_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsDrepList),
    });
  };

  /**
   * Get detailed information about requested delegated representatives (DReps)
   * @summary DReps Info
   */
  const drepInfo = (drepIdBulkBody: DrepIdBulkBody) => {
    return instance<DrepInfo>({
      url: `/drep_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: drepIdBulkBody,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepInfo),
    });
  };

  /**
   * List metadata for requested delegated representatives (DReps)
   * @summary DReps Metadata
   */
  const drepMetadata = (drepIdBulkBody: DrepIdBulkBody) => {
    return instance<DrepMetadata>({
      url: `/drep_metadata`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: drepIdBulkBody,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepMetadata),
    });
  };

  /**
   * List of updates for requested (or all) delegated representatives (DReps)
   * @summary DReps Updates
   */
  const drepUpdates = (params?: DrepUpdatesParams) => {
    return instance<DrepUpdates>({
      url: `/drep_updates`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepUpdates),
    });
  };

  /**
   * History of DReps voting power against each (or requested) epoch
   * @summary DReps Voting Power History
   */
  const drepHistory = (params?: DrepHistoryParams) => {
    return instance<DrepHistory>({
      url: `/drep_history`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepHistory),
    });
  };

  /**
   * List of all votes casted by requested delegated representative (DRep)
   * @summary DReps Votes
   */
  const drepVotes = (params: DrepVotesParams) => {
    return instance<DrepVotes>({
      url: `/drep_votes`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepVotes),
    });
  };

  /**
   * List of all delegators to requested delegated representative (DRep).
   * @summary DReps Delegators
   */
  const drepDelegators = (params: DrepDelegatorsParams) => {
    return instance<DrepDelegators>({
      url: `/drep_delegators`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsDrepDelegators),
    });
  };

  /**
   * Information about active committee and its members
   * @summary Committee Information
   */
  const committeeInfo = () => {
    return instance<CommitteeInfo>({
      url: `/committee_info`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsCommitteeInfo),
    });
  };

  /**
   * List of all votes casted by given committee member or collective
   * @summary Committee Votes
   */
  const committeeVotes = (params?: CommitteeVotesParams) => {
    return instance<CommitteeVotes>({
      url: `/committee_votes`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsCommitteeVotes),
    });
  };

  /**
   * List of all governance proposals
   * @summary Proposals List
   */
  const proposalList = () => {
    return instance<ProposalList>({
      url: `/proposal_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsProposalList),
    });
  };

  /**
   * List of all governance proposals for specified DRep, SPO or Committee credential
   * @summary Voter's Proposal List
   */
  const voterProposalList = (params: VoterProposalListParams) => {
    return instance<ProposalList>({
      url: `/voter_proposal_list`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsProposalList),
    });
  };

  /**
   * Summary of votes for given proposal
   * @summary Proposal Voting Summary
   */
  const proposalVotingSummary = (params: ProposalVotingSummaryParams) => {
    return instance<ProposalVotingSummary>({
      url: `/proposal_voting_summary`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsProposalVotingSummary),
    });
  };

  /**
   * List of all votes cast on specified governance action
   * @summary Proposal Votes
   */
  const proposalVotes = (params: ProposalVotesParams) => {
    return instance<ProposalVotes>({
      url: `/proposal_votes`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsProposalVotes),
    });
  };

  /**
   * List of brief info for all pools
   * @summary Pool List
   */
  const poolList = () => {
    return instance<PoolList>({
      url: `/pool_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPoolList),
    });
  };

  /**
   * Current pool statuses and details for a specified list of pool ids
   * @summary Pool Information
   */
  const poolInfo = (poolIdsBody: PoolIdsBody) => {
    return instance<PoolInfo>({
      url: `/pool_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: poolIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolInfo),
    });
  };

  /**
   * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
   * @summary Pool Stake Snapshot
   */
  const poolStakeSnapshot = (params: PoolStakeSnapshotParams) => {
    return instance<PoolSnapshot>({
      url: `/pool_stake_snapshot`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolSnapshot),
    });
  };

  /**
   * Return information about live delegators for a given pool.
   * @summary Pool Delegators List
   */
  const poolDelegators = (params: PoolDelegatorsParams) => {
    return instance<PoolDelegators>({
      url: `/pool_delegators`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolDelegators),
    });
  };

  /**
   * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
   * @summary Pool Delegators History
   */
  const poolDelegatorsHistory = (params: PoolDelegatorsHistoryParams) => {
    return instance<PoolDelegatorsHistory>({
      url: `/pool_delegators_history`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolDelegatorsHistory),
    });
  };

  /**
   * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
   * @summary Pool Blocks
   */
  const poolBlocks = (params: PoolBlocksParams) => {
    return instance<PoolBlocks>({
      url: `/pool_blocks`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolBlocks),
    });
  };

  /**
   * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
   * @summary Pool Stake, Block and Reward History
   */
  const poolHistory = (params: PoolHistoryParams) => {
    return instance<PoolHistoryInfo>({
      url: `/pool_history`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolHistoryInfo),
    });
  };

  /**
   * Return all pool updates for all pools or only updates for specific pool if specified
   * @summary Pool Updates (History)
   */
  const poolUpdates = (params?: PoolUpdatesParams) => {
    return instance<PoolUpdates>({
      url: `/pool_updates`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolUpdates),
    });
  };

  /**
   * Return all pool registrations initiated in the requested epoch
   * @summary Pool Registrations
   */
  const poolRegistrations = (params?: PoolRegistrationsParams) => {
    return instance<PoolRegistrations>({
      url: `/pool_registrations`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolRegistrations),
    });
  };

  /**
   * Return all pool retirements initiated in the requested epoch
   * @summary Pool Retirements
   */
  const poolRetirements = (params?: PoolRetirementsParams) => {
    return instance<PoolRegistrations>({
      url: `/pool_retirements`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolRegistrations),
    });
  };

  /**
   * A list of registered relays for all pools
   * @summary Pool Relays
   */
  const poolRelays = () => {
    return instance<PoolRelays>({
      url: `/pool_relays`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPoolRelays),
    });
  };

  /**
   * List of all votes casted by a pool
   * @summary Pool Votes
   */
  const poolVotes = (params: PoolVotesParams) => {
    return instance<PoolVotes>({
      url: `/pool_votes`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolVotes),
    });
  };

  /**
   * Metadata (on & off-chain) for all pools
   * @summary Pool Metadata
   */
  const poolMetadata = (poolIdsOptionalBody: PoolIdsOptionalBody) => {
    return instance<PoolMetadata>({
      url: `/pool_metadata`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: poolIdsOptionalBody,
      transformResponse: JsonFieldBigintFactory(bigIntsPoolMetadata),
    });
  };

  /**
   * List of script information for given script hashes
   * @summary Script Information
   */
  const scriptInfo = (scriptHashesBody: ScriptHashesBody) => {
    return instance<ScriptInfo>({
      url: `/script_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: scriptHashesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsScriptInfo),
    });
  };

  /**
   * List of all existing native script hashes along with their creation transaction hashes
   * @summary Native Script List
   */
  const nativeScriptList = () => {
    return instance<ScriptList>({
      url: `/native_script_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsScriptList),
    });
  };

  /**
   * List of all existing Plutus script hashes along with their creation transaction hashes
   * @summary Plutus Script List
   */
  const plutusScriptList = () => {
    return instance<ScriptList>({
      url: `/plutus_script_list`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsScriptList),
    });
  };

  /**
   * List of all redeemers for a given script hash
   * @summary Script Redeemers
   */
  const scriptRedeemers = (params: ScriptRedeemersParams) => {
    return instance<ScriptRedeemers>({
      url: `/script_redeemers`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsScriptRedeemers),
    });
  };

  /**
   * List of all UTXOs for a given script hash
   * @summary Script UTXOs
   */
  const scriptUtxos = (params: ScriptUtxosParams) => {
    return instance<UtxoInfos>({
      url: `/script_utxos`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsUtxoInfos),
    });
  };

  /**
   * List of datum information for given datum hashes
   * @summary Datum Information
   */
  const datumInfo = (datumHashesBody: DatumHashesBody) => {
    return instance<DatumInfo>({
      url: `/datum_info`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: datumHashesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsDatumInfo),
    });
  };

  /**
 * Query the current tip of the Network.

<br>
<div style="background-color: #222; padding: 12px 0px 12px 12px;border-left: 5px solid  rgb(173, 44, 44);font-size: var(--font-size-regular);">
We do support transparent forwarding for various methods from Ogmios, you can read about those <a href="#tag--Ogmios">here</a>.
</div>

 * @summary Query Example
 */
  const ogmios = (ogmiosBody: OgmiosBody) => {
    return instance<Ogmiostip>({
      url: `/ogmios`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: ogmiosBody,
      transformResponse: JsonFieldBigintFactory(bigIntsOgmiostip),
    });
  };

  return {
    tip,
    genesis,
    totals,
    paramUpdates,
    cliProtocolParams,
    reserveWithdrawals,
    treasuryWithdrawals,
    epochInfo,
    epochParams,
    epochBlockProtocols,
    blocks,
    blockInfo,
    blockTxs,
    blockTxCbor,
    blockTxInfo,
    utxoInfo,
    txCbor,
    txInfo,
    txMetadata,
    txMetalabels,
    submittx,
    txStatus,
    txUtxos,
    addressInfo,
    addressUtxos,
    credentialUtxos,
    addressTxs,
    credentialTxs,
    addressAssets,
    accountList,
    accountInfo,
    accountInfoCached,
    accountUtxos,
    accountTxs,
    accountRewards,
    accountUpdates,
    accountAddresses,
    accountAssets,
    accountHistory,
    assetList,
    policyAssetList,
    assetTokenRegistry,
    assetInfo,
    assetUtxos,
    assetHistory,
    assetAddresses,
    assetNftAddress,
    policyAssetAddresses,
    policyAssetInfo,
    policyAssetMints,
    assetSummary,
    assetTxs,
    drepEpochSummary,
    drepList,
    drepInfo,
    drepMetadata,
    drepUpdates,
    drepHistory,
    drepVotes,
    drepDelegators,
    committeeInfo,
    committeeVotes,
    proposalList,
    voterProposalList,
    proposalVotingSummary,
    proposalVotes,
    poolList,
    poolInfo,
    poolStakeSnapshot,
    poolDelegators,
    poolDelegatorsHistory,
    poolBlocks,
    poolHistory,
    poolUpdates,
    poolRegistrations,
    poolRetirements,
    poolRelays,
    poolVotes,
    poolMetadata,
    scriptInfo,
    nativeScriptList,
    plutusScriptList,
    scriptRedeemers,
    scriptUtxos,
    datumInfo,
    ogmios,
  };
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type TipResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['tip']>>
>;
export type GenesisResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['genesis']>>
>;
export type TotalsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['totals']>>
>;
export type ParamUpdatesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['paramUpdates']>>
>;
export type CliProtocolParamsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['cliProtocolParams']>>
>;
export type ReserveWithdrawalsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['reserveWithdrawals']>>
>;
export type TreasuryWithdrawalsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['treasuryWithdrawals']>>
>;
export type EpochInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['epochInfo']>>
>;
export type EpochParamsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['epochParams']>>
>;
export type EpochBlockProtocolsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['epochBlockProtocols']>>
>;
export type BlocksResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['blocks']>>
>;
export type BlockInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['blockInfo']>>
>;
export type BlockTxsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['blockTxs']>>
>;
export type BlockTxCborResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['blockTxCbor']>>
>;
export type BlockTxInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['blockTxInfo']>>
>;
export type UtxoInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['utxoInfo']>>
>;
export type TxCborResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['txCbor']>>
>;
export type TxInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['txInfo']>>
>;
export type TxMetadataResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['txMetadata']>>
>;
export type TxMetalabelsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['txMetalabels']>>
>;
export type SubmittxResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['submittx']>>
>;
export type TxStatusResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['txStatus']>>
>;
export type TxUtxosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['txUtxos']>>
>;
export type AddressInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['addressInfo']>>
>;
export type AddressUtxosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['addressUtxos']>>
>;
export type CredentialUtxosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['credentialUtxos']>>
>;
export type AddressTxsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['addressTxs']>>
>;
export type CredentialTxsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['credentialTxs']>>
>;
export type AddressAssetsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['addressAssets']>>
>;
export type AccountListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountList']>>
>;
export type AccountInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountInfo']>>
>;
export type AccountInfoCachedResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountInfoCached']>>
>;
export type AccountUtxosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountUtxos']>>
>;
export type AccountTxsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountTxs']>>
>;
export type AccountRewardsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountRewards']>>
>;
export type AccountUpdatesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountUpdates']>>
>;
export type AccountAddressesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountAddresses']>>
>;
export type AccountAssetsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountAssets']>>
>;
export type AccountHistoryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['accountHistory']>>
>;
export type AssetListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetList']>>
>;
export type PolicyAssetListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['policyAssetList']>>
>;
export type AssetTokenRegistryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetTokenRegistry']>>
>;
export type AssetInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetInfo']>>
>;
export type AssetUtxosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetUtxos']>>
>;
export type AssetHistoryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetHistory']>>
>;
export type AssetAddressesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetAddresses']>>
>;
export type AssetNftAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetNftAddress']>>
>;
export type PolicyAssetAddressesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['policyAssetAddresses']>>
>;
export type PolicyAssetInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['policyAssetInfo']>>
>;
export type PolicyAssetMintsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['policyAssetMints']>>
>;
export type AssetSummaryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetSummary']>>
>;
export type AssetTxsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['assetTxs']>>
>;
export type DrepEpochSummaryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepEpochSummary']>>
>;
export type DrepListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepList']>>
>;
export type DrepInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepInfo']>>
>;
export type DrepMetadataResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepMetadata']>>
>;
export type DrepUpdatesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepUpdates']>>
>;
export type DrepHistoryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepHistory']>>
>;
export type DrepVotesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepVotes']>>
>;
export type DrepDelegatorsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['drepDelegators']>>
>;
export type CommitteeInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['committeeInfo']>>
>;
export type CommitteeVotesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['committeeVotes']>>
>;
export type ProposalListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['proposalList']>>
>;
export type VoterProposalListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['voterProposalList']>>
>;
export type ProposalVotingSummaryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['proposalVotingSummary']>>
>;
export type ProposalVotesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['proposalVotes']>>
>;
export type PoolListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolList']>>
>;
export type PoolInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolInfo']>>
>;
export type PoolStakeSnapshotResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolStakeSnapshot']>>
>;
export type PoolDelegatorsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolDelegators']>>
>;
export type PoolDelegatorsHistoryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolDelegatorsHistory']>>
>;
export type PoolBlocksResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolBlocks']>>
>;
export type PoolHistoryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolHistory']>>
>;
export type PoolUpdatesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolUpdates']>>
>;
export type PoolRegistrationsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolRegistrations']>>
>;
export type PoolRetirementsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolRetirements']>>
>;
export type PoolRelaysResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolRelays']>>
>;
export type PoolVotesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolVotes']>>
>;
export type PoolMetadataResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['poolMetadata']>>
>;
export type ScriptInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['scriptInfo']>>
>;
export type NativeScriptListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['nativeScriptList']>>
>;
export type PlutusScriptListResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['plutusScriptList']>>
>;
export type ScriptRedeemersResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['scriptRedeemers']>>
>;
export type ScriptUtxosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['scriptUtxos']>>
>;
export type DatumInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['datumInfo']>>
>;
export type OgmiosResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getKoiosAPI>['ogmios']>>
>;
