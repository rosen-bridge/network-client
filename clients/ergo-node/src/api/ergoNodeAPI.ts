import { createAxiosInstance, JsonFieldBigintFactory } from '../axios';
import type {
  AddressHolder,
  AddressValidity,
  BalancesSnapshot,
  BlacklistedPeers,
  BlockHeader,
  BlockTransactions,
  BoxesRequestHolder,
  CheckWallet,
  CompileRequest,
  CryptoResult,
  DeriveKey,
  DeriveKeyResult,
  DeriveNextKeyResult,
  DlogSecret,
  EmissionInfo,
  EmissionScripts,
  ErgoAddress,
  ErgoTransaction,
  ErgoTransactionOutput,
  ErgoTransactionWithInputBoxes,
  ErgoTreeObject,
  ExecuteScript,
  FeeHistogram,
  FullBlock,
  GenerateCommitmentsRequest,
  GetAddressBalanceTotal200,
  GetBoxRangeParams,
  GetBoxesByAddress200,
  GetBoxesByAddressParams,
  GetBoxesByAddressUnspentParams,
  GetBoxesByErgoTree200,
  GetBoxesByErgoTreeParams,
  GetBoxesByErgoTreeUnspent200,
  GetBoxesByErgoTreeUnspentParams,
  GetBoxesByTemplateHashParams,
  GetBoxesByTemplateHashUnspentParams,
  GetBoxesByTokenId200,
  GetBoxesByTokenIdParams,
  GetBoxesByTokenIdUnspentParams,
  GetChainSliceParams,
  GetExpectedWaitTimeParams,
  GetFeeHistogramParams,
  GetHeaderIdsParams,
  GetIndexedHeight200,
  GetRecommendedFeeParams,
  GetTxRangeParams,
  GetTxsByAddress200,
  GetTxsByAddressParams,
  GetUnconfirmedTransactionOutputBoxesByErgoTreeParams,
  GetUnconfirmedTransactionOutputBoxesByRegistersParams,
  GetUnconfirmedTransactionsByErgoTreeParams,
  GetUnconfirmedTransactionsParams,
  HintExtractionRequest,
  IndexedErgoBox,
  IndexedErgoTransaction,
  IndexedFullBlock,
  IndexedToken,
  InitWallet,
  InitWalletResult,
  ListSpentScansParams,
  ListUnspentScansParams,
  MerkleProof,
  ModifierId,
  NipopowProof,
  NodeInfo,
  PassphraseMatch,
  PaymentRequest,
  Peer,
  PeersStatus,
  PopowHeader,
  PowSolutions,
  PrivateKeyRequest,
  Registers,
  RequestsHolder,
  RestoreWallet,
  RewardAddress,
  RewardPubKey,
  Scan,
  ScanId,
  ScanIdBoxId,
  ScanIdsBox,
  ScanRequest,
  ScriptBytes,
  SerializedAdProof,
  SerializedBox,
  SnapshotsInfo,
  SyncInfo,
  TrackInfo,
  TransactionBoxId,
  TransactionHintsBag,
  TransactionId,
  TransactionSigningRequest,
  Transactions,
  TransactionsWithInputBoxes,
  UnlockWallet,
  UnsignedErgoTransaction,
  WalletBox,
  WalletBoxesParams,
  WalletGetTransactionParams,
  WalletRescanBody,
  WalletStatus,
  WalletTransaction,
  WalletTransactionsByScanIdParams,
  WalletTransactionsParams,
  WalletUnspentBoxesParams,
  WalletUpdateChangeAddressBody,
  WorkMessage,
} from '../types';
import {
  bigIntsAddressHolder,
  bigIntsAddressValidity,
  bigIntsBalancesSnapshot,
  bigIntsBlacklistedPeers,
  bigIntsBlockHeader,
  bigIntsBlockTransactions,
  bigIntsCryptoResult,
  bigIntsDeriveKeyResult,
  bigIntsDeriveNextKeyResult,
  bigIntsDlogSecret,
  bigIntsEmissionInfo,
  bigIntsEmissionScripts,
  bigIntsErgoAddress,
  bigIntsErgoTransaction,
  bigIntsErgoTransactionOutput,
  bigIntsErgoTransactionWithInputBoxes,
  bigIntsErgoTreeObject,
  bigIntsFeeHistogram,
  bigIntsFullBlock,
  bigIntsGetAddressBalanceTotal200,
  bigIntsGetBoxesByAddress200,
  bigIntsGetBoxesByErgoTree200,
  bigIntsGetBoxesByErgoTreeUnspent200,
  bigIntsGetBoxesByTokenId200,
  bigIntsGetIndexedHeight200,
  bigIntsGetTxsByAddress200,
  bigIntsIndexedErgoBox,
  bigIntsIndexedErgoTransaction,
  bigIntsIndexedFullBlock,
  bigIntsIndexedToken,
  bigIntsInitWalletResult,
  bigIntsMerkleProof,
  bigIntsModifierId,
  bigIntsNipopowProof,
  bigIntsNodeInfo,
  bigIntsPassphraseMatch,
  bigIntsPeer,
  bigIntsPeersStatus,
  bigIntsPopowHeader,
  bigIntsRewardAddress,
  bigIntsRewardPubKey,
  bigIntsScan,
  bigIntsScanId,
  bigIntsScanIdBoxId,
  bigIntsScriptBytes,
  bigIntsSerializedAdProof,
  bigIntsSerializedBox,
  bigIntsSnapshotsInfo,
  bigIntsSyncInfo,
  bigIntsTrackInfo,
  bigIntsTransactionHintsBag,
  bigIntsTransactionId,
  bigIntsTransactionsWithInputBoxes,
  bigIntsUnsignedErgoTransaction,
  bigIntsWalletBox,
  bigIntsWalletStatus,
  bigIntsWalletTransaction,
  bigIntsWorkMessage,
} from '../types';

export const getErgoNodeAPI = (url: string) => {
  const instance = createAxiosInstance(url);
  /**
   * @summary Get an array of header ids (hex encoded) for the given range of blockchain block heights. Returns a page of the whole list starting from `offset` and containing `limit` items.
   */
  const getHeaderIds = (params?: GetHeaderIdsParams) => {
    return instance<string[]>({
      url: `/blocks`,
      method: 'GET',
      params,
    });
  };

  /**
   * @summary Send a mined block
   */
  const sendMinedBlock = (fullBlock: FullBlock) => {
    return instance<void>({
      url: `/blocks`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: fullBlock,
    });
  };

  /**
   * @summary Get header ids at the given height
   */
  const getFullBlockAt = (blockHeight: number) => {
    return instance<string[]>({
      url: `/blocks/at/${blockHeight}`,
      method: 'GET',
    });
  };

  /**
   * @summary Get headers in a specified range of heights
   */
  const getChainSlice = (params?: GetChainSliceParams) => {
    return instance<BlockHeader[]>({
      url: `/blocks/chainSlice`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsBlockHeader),
    });
  };

  /**
   * @summary Get the full block info by a given header id
   */
  const getFullBlockById = (headerId: string) => {
    return instance<FullBlock>({
      url: `/blocks/${headerId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsFullBlock),
    });
  };

  /**
   * @summary Get full blocks by given header ids
   */
  const getFullBlockByIds = (getFullBlockByIdsBody: string[]) => {
    return instance<FullBlock[]>({
      url: `/blocks/headerIds`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getFullBlockByIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsFullBlock),
    });
  };

  /**
   * @summary Get the block header info by a given header id
   */
  const getBlockHeaderById = (headerId: string) => {
    return instance<BlockHeader>({
      url: `/blocks/${headerId}/header`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlockHeader),
    });
  };

  /**
   * @summary Get the block transactions info by a given signature
   */
  const getBlockTransactionsById = (headerId: string) => {
    return instance<BlockTransactions>({
      url: `/blocks/${headerId}/transactions`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlockTransactions),
    });
  };

  /**
   * @summary Get Merkle proof for transaction
   */
  const getProofForTx = (headerId: string, txId: string) => {
    return instance<MerkleProof>({
      url: `/blocks/${headerId}/proofFor/${txId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsMerkleProof),
    });
  };

  /**
   * @summary Get the last headers objects
   */
  const getLastHeaders = (count: number) => {
    return instance<BlockHeader[]>({
      url: `/blocks/lastHeaders/${count}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlockHeader),
    });
  };

  /**
   * @summary Get the persistent modifier by its id
   */
  const getModifierById = (modifierId: string) => {
    return instance<void>({
      url: `/blocks/modifier/${modifierId}`,
      method: 'GET',
    });
  };

  /**
   * @summary Construct PoPow header according to given header id
   */
  const getPopowHeaderById = (headerId: string) => {
    return instance<PopowHeader>({
      url: `/nipopow/popowHeaderById/${headerId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPopowHeader),
    });
  };

  /**
   * @summary Construct PoPow header for best header at given height
   */
  const getPopowHeaderByHeight = (height: number) => {
    return instance<PopowHeader>({
      url: `/nipopow/popowHeaderByHeight/${height}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPopowHeader),
    });
  };

  /**
   * @summary Construct PoPoW proof for given min superchain length and suffix length
   */
  const getPopowProof = (minChainLength: number, suffixLength: number) => {
    return instance<NipopowProof>({
      url: `/nipopow/proof/${minChainLength}/${suffixLength}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsNipopowProof),
    });
  };

  /**
   * @summary Construct PoPoW proof for given min superchain length, suffix length and header ID
   */
  const getPopowProofByHeaderId = (
    minChainLength: number,
    suffixLength: number,
    headerId: string,
  ) => {
    return instance<NipopowProof>({
      url: `/nipopow/proof/${minChainLength}/${suffixLength}/${headerId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsNipopowProof),
    });
  };

  /**
   * @summary Get the information about the Node
   */
  const getNodeInfo = () => {
    return instance<NodeInfo>({
      url: `/info`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsNodeInfo),
    });
  };

  /**
   * @summary Submit an Ergo transaction to unconfirmed pool to send it over the network
   */
  const sendTransaction = (ergoTransaction: ErgoTransaction) => {
    return instance<TransactionId>({
      url: `/transactions`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: ergoTransaction,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Submit an Ergo transaction given as hex-encoded transaction bytes to unconfirmed pool to send it over the network
   */
  const sendTransactionAsBytes = (sendTransactionAsBytesBody: string) => {
    return instance<TransactionId>({
      url: `/transactions/bytes`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: sendTransactionAsBytesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Checks an Ergo transaction without sending it over the network. Checks that transaction is valid and its inputs are in the UTXO set. Returns transaction identifier if the transaction is passing the checks.
   */
  const checkTransaction = (ergoTransaction: ErgoTransaction) => {
    return instance<TransactionId>({
      url: `/transactions/check`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: ergoTransaction,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Checks an Ergo transaction without sending it over the network given in form of hex-encoded transaction bytes. Checks that transaction is valid and its inputs are in the UTXO set. Returns transaction identifier if the transaction is passing the checks.
   */
  const checkTransactionAsBytes = (checkTransactionAsBytesBody: string) => {
    return instance<TransactionId>({
      url: `/transactions/checkBytes`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: checkTransactionAsBytesBody,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Get current pool of the unconfirmed transactions pool
   */
  const getUnconfirmedTransactions = (
    params?: GetUnconfirmedTransactionsParams,
  ) => {
    return instance<TransactionsWithInputBoxes>({
      url: `/transactions/unconfirmed`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(
        bigIntsTransactionsWithInputBoxes,
      ),
    });
  };

  /**
   * @summary Check if given transaction is unconfirmed in pool
   */
  const checkUnconfirmedTransaction = (txId: string) => {
    return instance<void>({
      url: `/transactions/unconfirmed/${txId}`,
      method: 'HEAD',
    });
  };

  /**
   * @summary Get unconfirmed transaction from pool
   */
  const getUnconfirmedTransactionById = (txId: string) => {
    return instance<ErgoTransactionWithInputBoxes>({
      url: `/transactions/unconfirmed/byTransactionId/${txId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(
        bigIntsErgoTransactionWithInputBoxes,
      ),
    });
  };

  /**
   * @summary Get list of unconfirmed transactions ids
   */
  const getUnconfirmedTxIds = () => {
    return instance<string[]>({
      url: `/transactions/unconfirmed/transactionIds`,
      method: 'GET',
    });
  };

  /**
   * @summary Get list of unconfirmed transactions by their ids
   */
  const getUnconfirmedTxsByIds = (getUnconfirmedTxsByIdsBody: string[]) => {
    return instance<string[]>({
      url: `/transactions/unconfirmed/byTransactionIds`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getUnconfirmedTxsByIdsBody,
    });
  };

  /**
   * @summary Finds unconfirmed transactions by ErgoTree hex of one of its output or input boxes (if present in UtxoState)
   */
  const getUnconfirmedTransactionsByErgoTree = (
    getUnconfirmedTransactionsByErgoTreeBody: string,
    params?: GetUnconfirmedTransactionsByErgoTreeParams,
  ) => {
    return instance<ErgoTransactionWithInputBoxes>({
      url: `/transactions/unconfirmed/byErgoTree`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getUnconfirmedTransactionsByErgoTreeBody,
      params,
      transformResponse: JsonFieldBigintFactory(
        bigIntsErgoTransactionWithInputBoxes,
      ),
    });
  };

  /**
   * @summary Get input box from unconfirmed transactions in pool
   */
  const getUnconfirmedTransactionInputBoxById = (boxId: string) => {
    return instance<IndexedErgoBox>({
      url: `/transactions/unconfirmed/inputs/byBoxId/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Get output box from unconfirmed transactions in pool
   */
  const getUnconfirmedTransactionOutputBoxById = (boxId: string) => {
    return instance<ErgoTransactionOutput>({
      url: `/transactions/unconfirmed/outputs/byBoxId/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Finds all output boxes by ErgoTree hex among unconfirmed transactions
   */
  const getUnconfirmedTransactionOutputBoxesByErgoTree = (
    getUnconfirmedTransactionOutputBoxesByErgoTreeBody: string,
    params?: GetUnconfirmedTransactionOutputBoxesByErgoTreeParams,
  ) => {
    return instance<ErgoTransactionOutput[]>({
      url: `/transactions/unconfirmed/outputs/byErgoTree`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getUnconfirmedTransactionOutputBoxesByErgoTreeBody,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Get output box from unconfirmed transactions in pool by tokenId
   */
  const getUnconfirmedTransactionOutputBoxesByTokenId = (tokenId: string) => {
    return instance<ErgoTransactionOutput[]>({
      url: `/transactions/unconfirmed/outputs/byTokenId/${tokenId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Finds all output boxes among unconfirmed transactions that contain given registers
   */
  const getUnconfirmedTransactionOutputBoxesByRegisters = (
    registers: Registers,
    params?: GetUnconfirmedTransactionOutputBoxesByRegistersParams,
  ) => {
    return instance<ErgoTransactionOutput[]>({
      url: `/transactions/unconfirmed/outputs/byRegisters`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: registers,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Get histogram (waittime, (n_trans, sum(fee)) for transactions in mempool. It contains "bins"+1 bins, where i-th elements corresponds to transaction with wait time [i*maxtime/bins, (i+1)*maxtime/bins), and last bin corresponds to the transactions with wait time >= maxtime.
   */
  const getFeeHistogram = (params?: GetFeeHistogramParams) => {
    return instance<FeeHistogram>({
      url: `/transactions/poolHistogram`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsFeeHistogram),
    });
  };

  /**
   * @summary Get recommended fee (in nanoErgs) for a transaction with specified size (in bytes) to be proceeded in specified time (in minutes)
   */
  const getRecommendedFee = (params: GetRecommendedFeeParams) => {
    return instance<number>({
      url: `/transactions/getFee`,
      method: 'GET',
      params,
    });
  };

  /**
   * @summary Get expected wait time for the transaction with specified fee and size
   */
  const getExpectedWaitTime = (params: GetExpectedWaitTimeParams) => {
    return instance<number>({
      url: `/transactions/waitTime`,
      method: 'GET',
      params,
    });
  };

  /**
   * @summary Get all known peers
   */
  const getAllPeers = () => {
    return instance<Peer[]>({
      url: `/peers/all`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPeer),
    });
  };

  /**
   * @summary Get current connected peers
   */
  const getConnectedPeers = () => {
    return instance<Peer[]>({
      url: `/peers/connected`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPeer),
    });
  };

  /**
   * @summary Add address to peers list
   */
  const connectToPeer = (connectToPeerBody: string) => {
    return instance<void>({
      url: `/peers/connect`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: connectToPeerBody,
    });
  };

  /**
   * @summary Get blacklisted peers
   */
  const getBlacklistedPeers = () => {
    return instance<BlacklistedPeers>({
      url: `/peers/blacklisted`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBlacklistedPeers),
    });
  };

  /**
   * @summary Get last incoming message timestamp and current network time
   */
  const getPeersStatus = () => {
    return instance<PeersStatus[]>({
      url: `/peers/status`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsPeersStatus),
    });
  };

  /**
   * @summary Get sync info reported by peers, including versions, current status and height (if available)
   */
  const getPeersSyncInfo = () => {
    return instance<SyncInfo[]>({
      url: `/peers/syncInfo`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsSyncInfo),
    });
  };

  /**
   * @summary Get track info reported by peers, including count of invalid modifiers and details of requested and received modifiers
   */
  const getPeersTrackInfo = () => {
    return instance<TrackInfo[]>({
      url: `/peers/trackInfo`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsTrackInfo),
    });
  };

  /**
   * @summary Get random seed of 32 bytes
   */
  const getRandomSeed = () => {
    return instance<string>({ url: `/utils/seed`, method: 'GET' });
  };

  /**
   * @summary Check address validity (prefer POST request as addresses can be too big)
   */
  const checkAddressValidityWithGet = (address: ErgoAddress) => {
    return instance<AddressValidity>({
      url: `/utils/address/${address}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsAddressValidity),
    });
  };

  /**
   * @summary Checks address validity
   */
  const checkAddressValidity = (checkAddressValidityBody: string) => {
    return instance<AddressValidity>({
      url: `/utils/address`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: checkAddressValidityBody,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressValidity),
    });
  };

  /**
   * @summary Convert Pay-To-Public-Key Address to raw representation (hex-encoded serialized curve point)
   */
  const addressToRaw = (address: ErgoAddress) => {
    return instance<string>({
      url: `/utils/addressToRaw/${address}`,
      method: 'GET',
    });
  };

  /**
   * @summary Generate Pay-To-Public-Key address from hex-encoded raw pubkey (secp256k1 serialized point)
   */
  const rawToAddress = (pubkeyHex: string) => {
    return instance<ErgoAddress>({
      url: `/utils/rawToAddress/${pubkeyHex}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoAddress),
    });
  };

  /**
   * @summary Generate Ergo address from hex-encoded ErgoTree (prefer POST request as ErgoTree can be too big)
   */
  const ergoTreeToAddressWithGet = (ergoTreeHex: string) => {
    return instance<ErgoAddress>({
      url: `/utils/ergoTreeToAddress/${ergoTreeHex}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoAddress),
    });
  };

  /**
   * @summary Generate Ergo address from hex-encoded ErgoTree
   */
  const ergoTreeToAddress = (ergoTreeToAddressBody: string) => {
    return instance<ErgoAddress>({
      url: `/utils/ergoTreeToAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: ergoTreeToAddressBody,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoAddress),
    });
  };

  /**
   * @summary Generate random seed of specified length in bytes
   */
  const getRandomSeedWithLength = (length: string) => {
    return instance<string>({
      url: `/utils/seed/${length}`,
      method: 'GET',
    });
  };

  /**
   * @summary Return Blake2b hash of specified message
   */
  const hashBlake2b = (hashBlake2bBody: string) => {
    return instance<string>({
      url: `/utils/hash/blake2b`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: hashBlake2bBody,
    });
  };

  /**
   * @summary Initialize new wallet with randomly generated seed
   */
  const walletInit = (initWallet: InitWallet) => {
    return instance<InitWalletResult>({
      url: `/wallet/init`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: initWallet,
      transformResponse: JsonFieldBigintFactory(bigIntsInitWalletResult),
    });
  };

  /**
   * @summary Create new wallet from existing mnemonic seed
   */
  const walletRestore = (restoreWallet: RestoreWallet) => {
    return instance<void>({
      url: `/wallet/restore`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: restoreWallet,
    });
  };

  /**
   * @summary Check whether mnemonic phrase is corresponding to the wallet seed
   */
  const checkSeed = (checkWallet: CheckWallet) => {
    return instance<PassphraseMatch>({
      url: `/wallet/check`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: checkWallet,
      transformResponse: JsonFieldBigintFactory(bigIntsPassphraseMatch),
    });
  };

  /**
   * @summary Unlock wallet
   */
  const walletUnlock = (unlockWallet: UnlockWallet) => {
    return instance<void>({
      url: `/wallet/unlock`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: unlockWallet,
    });
  };

  /**
   * @summary Lock wallet
   */
  const walletLock = () => {
    return instance<void>({ url: `/wallet/lock`, method: 'GET' });
  };

  /**
   * @summary Rescan wallet (all the available full blocks). When fromHeight is set wallet would not see any boxes below it.
   */
  const walletRescan = (walletRescanBody?: WalletRescanBody) => {
    return instance<void>({
      url: `/wallet/rescan`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: walletRescanBody,
    });
  };

  /**
   * @summary Get wallet status
   */
  const getWalletStatus = () => {
    return instance<WalletStatus>({
      url: `/wallet/status`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsWalletStatus),
    });
  };

  /**
   * @summary Update address to be used to send change to
   */
  const walletUpdateChangeAddress = (
    walletUpdateChangeAddressBody: WalletUpdateChangeAddressBody,
  ) => {
    return instance<void>({
      url: `/wallet/updateChangeAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: walletUpdateChangeAddressBody,
    });
  };

  /**
   * @summary Derive new key according to a provided path
   */
  const walletDeriveKey = (deriveKey: DeriveKey) => {
    return instance<DeriveKeyResult>({
      url: `/wallet/deriveKey`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: deriveKey,
      transformResponse: JsonFieldBigintFactory(bigIntsDeriveKeyResult),
    });
  };

  /**
   * @summary Derive next key
   */
  const walletDeriveNextKey = () => {
    return instance<DeriveNextKeyResult>({
      url: `/wallet/deriveNextKey`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsDeriveNextKeyResult),
    });
  };

  /**
   * @summary Get total amount of confirmed Ergo tokens and assets
   */
  const walletBalances = () => {
    return instance<BalancesSnapshot>({
      url: `/wallet/balances`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBalancesSnapshot),
    });
  };

  /**
   * @summary Get a list of all wallet-related transactions
   */
  const walletTransactions = (params?: WalletTransactionsParams) => {
    return instance<WalletTransaction[]>({
      url: `/wallet/transactions`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletTransaction),
    });
  };

  /**
   * @summary Get wallet-related transaction by id
   */
  const walletGetTransaction = (params: WalletGetTransactionParams) => {
    return instance<WalletTransaction[]>({
      url: `/wallet/transactionById`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletTransaction),
    });
  };

  /**
   * @summary Get scan-related transactions by scan id
   */
  const walletTransactionsByScanId = (
    scanId: number,
    params?: WalletTransactionsByScanIdParams,
  ) => {
    return instance<WalletTransaction[]>({
      url: `/wallet/transactionsByScanId/${scanId}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletTransaction),
    });
  };

  /**
   * @summary Get a list of all wallet-related boxes, both spent and unspent. Set minConfirmations to -1 to get mempool boxes included.
   */
  const walletBoxes = (params?: WalletBoxesParams) => {
    return instance<WalletBox[]>({
      url: `/wallet/boxes`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletBox),
    });
  };

  /**
   * @summary Get a list of collected boxes.
   */
  const walletBoxesCollect = (boxesRequestHolder: BoxesRequestHolder) => {
    return instance<WalletBox[]>({
      url: `/wallet/boxes/collect`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: boxesRequestHolder,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletBox),
    });
  };

  /**
   * @summary Get a list of unspent boxes. Set minConfirmations to -1 to have mempool boxes considered.
   */
  const walletUnspentBoxes = (params?: WalletUnspentBoxesParams) => {
    return instance<WalletBox[]>({
      url: `/wallet/boxes/unspent`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletBox),
    });
  };

  /**
   * @summary Get summary amount of confirmed plus unconfirmed Ergo tokens and assets
   */
  const walletBalancesUnconfirmed = () => {
    return instance<BalancesSnapshot>({
      url: `/wallet/balances/withUnconfirmed`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsBalancesSnapshot),
    });
  };

  /**
   * @summary Get wallet addresses
   */
  const walletAddresses = () => {
    return instance<ErgoAddress[]>({
      url: `/wallet/addresses`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoAddress),
    });
  };

  /**
   * @summary Generate arbitrary transaction from array of requests.
   */
  const walletTransactionGenerate = (requestsHolder: RequestsHolder) => {
    return instance<ErgoTransaction>({
      url: `/wallet/transaction/generate`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: requestsHolder,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransaction),
    });
  };

  /**
   * @summary Generate unsigned transaction from array of requests.
   */
  const walletUnsignedTransactionGenerate = (
    requestsHolder: RequestsHolder,
  ) => {
    return instance<UnsignedErgoTransaction>({
      url: `/wallet/transaction/generateUnsigned`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: requestsHolder,
      transformResponse: JsonFieldBigintFactory(bigIntsUnsignedErgoTransaction),
    });
  };

  /**
   * @summary Sign arbitrary unsigned transaction with wallet secrets and also secrets provided.
   */
  const walletTransactionSign = (
    transactionSigningRequest: TransactionSigningRequest,
  ) => {
    return instance<ErgoTransaction>({
      url: `/wallet/transaction/sign`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: transactionSigningRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransaction),
    });
  };

  /**
   * @summary Generate and send arbitrary transaction
   */
  const walletTransactionGenerateAndSend = (requestsHolder: RequestsHolder) => {
    return instance<TransactionId>({
      url: `/wallet/transaction/send`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: requestsHolder,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Generate and send payment transaction (default fee of 0.001 Erg is used)
   */
  const walletPaymentTransactionGenerateAndSend = (
    paymentRequest: PaymentRequest[],
  ) => {
    return instance<TransactionId>({
      url: `/wallet/payment/send`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: paymentRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Get the private key corresponding to a known address
   */
  const walletGetPrivateKey = (privateKeyRequest: PrivateKeyRequest) => {
    return instance<DlogSecret>({
      url: `/wallet/getPrivateKey`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: privateKeyRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsDlogSecret),
    });
  };

  /**
   * @summary Request block candidate
   */
  const miningRequestBlockCandidate = () => {
    return instance<WorkMessage>({
      url: `/mining/candidate`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsWorkMessage),
    });
  };

  /**
   * @summary Request block candidate
   */
  const miningRequestBlockCandidateWithMandatoryTransactions = (
    transactions: Transactions,
  ) => {
    return instance<WorkMessage>({
      url: `/mining/candidateWithTxs`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: transactions,
      transformResponse: JsonFieldBigintFactory(bigIntsWorkMessage),
    });
  };

  /**
   * @summary Read miner reward address
   */
  const miningReadMinerRewardAddress = () => {
    return instance<RewardAddress>({
      url: `/mining/rewardAddress`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsRewardAddress),
    });
  };

  /**
   * @summary Read public key associated with miner rewards
   */
  const miningReadMinerRewardPubkey = () => {
    return instance<RewardPubKey>({
      url: `/mining/rewardPublicKey`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsRewardPubKey),
    });
  };

  /**
   * @summary Submit solution for current candidate
   */
  const miningSubmitSolution = (powSolutions: PowSolutions) => {
    return instance<void>({
      url: `/mining/solution`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: powSolutions,
    });
  };

  /**
   * @summary Get serialized batch proof for given set of boxes
   */
  const getBoxesBinaryProof = (transactionBoxId: TransactionBoxId[]) => {
    return instance<SerializedAdProof>({
      url: `/utxo/getBoxesBinaryProof`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: transactionBoxId,
      transformResponse: JsonFieldBigintFactory(bigIntsSerializedAdProof),
    });
  };

  /**
   * @summary Get box contents for a box by a unique identifier.
   */
  const getBoxById = (boxId: string) => {
    return instance<ErgoTransactionOutput>({
      url: `/utxo/byId/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Get serialized box from UTXO pool in Base16 encoding by an identifier.
   */
  const getBoxByIdBinary = (boxId: string) => {
    return instance<SerializedBox>({
      url: `/utxo/byIdBinary/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsSerializedBox),
    });
  };

  /**
   * @summary Get box contents for a box by a unique identifier, from UTXO set and also the mempool.
   */
  const getBoxWithPoolById = (boxId: string) => {
    return instance<ErgoTransactionOutput>({
      url: `/utxo/withPool/byId/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Get boxes for ids provided, from UTXO or the mempool.
   */
  const getBoxWithPoolByIds = (getBoxWithPoolByIdsBody: string[]) => {
    return instance<ErgoTransactionOutput[]>({
      url: `/utxo/withPool/byIds`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxWithPoolByIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Get serialized box in Base16 encoding by an identifier, considering also the mempool.
   */
  const getBoxWithPoolByIdBinary = (boxId: string) => {
    return instance<SerializedBox>({
      url: `/utxo/withPool/byIdBinary/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsSerializedBox),
    });
  };

  /**
   * @summary Get information about locally stored UTXO snapshots
   */
  const getSnapshotsInfo = () => {
    return instance<SnapshotsInfo>({
      url: `/utxo/getSnapshotsInfo`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsSnapshotsInfo),
    });
  };

  /**
   * @summary Get genesis boxes (boxes existed before the very first block)
   */
  const genesisBoxes = () => {
    return instance<ErgoTransactionOutput[]>({
      url: `/utxo/genesis`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTransactionOutput),
    });
  };

  /**
   * @summary Create P2SAddress from Sigma source
   */
  const scriptP2SAddress = (compileRequest: CompileRequest) => {
    return instance<AddressHolder>({
      url: `/script/p2sAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: compileRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressHolder),
    });
  };

  /**
   * @summary Create P2SHAddress from Sigma source
   */
  const scriptP2SHAddress = (compileRequest: CompileRequest) => {
    return instance<AddressHolder>({
      url: `/script/p2shAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: compileRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsAddressHolder),
    });
  };

  /**
   * @summary Convert an address to hex-encoded serialized ErgoTree (script)
   */
  const addressToTree = (address: ErgoAddress) => {
    return instance<ErgoTreeObject>({
      url: `/script/addressToTree/${address}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsErgoTreeObject),
    });
  };

  /**
   * @summary Convert an address to hex-encoded Sigma byte array constant which contains script bytes
   */
  const addressToBytes = (address: ErgoAddress) => {
    return instance<ScriptBytes>({
      url: `/script/addressToBytes/${address}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsScriptBytes),
    });
  };

  /**
   * @summary Execute script with context
   */
  const executeWithContext = (executeScript: ExecuteScript) => {
    return instance<CryptoResult>({
      url: `/script/executeWithContext`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: executeScript,
      transformResponse: JsonFieldBigintFactory(bigIntsCryptoResult),
    });
  };

  /**
   * @summary Register a scan
   */
  const registerScan = (scanRequest: ScanRequest) => {
    return instance<ScanId>({
      url: `/scan/register`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: scanRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsScanId),
    });
  };

  /**
   * @summary Stop tracking and deregister scan
   */
  const deregisterScan = (scanId: ScanId) => {
    return instance<ScanId>({
      url: `/scan/deregister`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: scanId,
      transformResponse: JsonFieldBigintFactory(bigIntsScanId),
    });
  };

  /**
   * @summary List all the registered scans
   */
  const listAllScans = () => {
    return instance<Scan[]>({
      url: `/scan/listAll`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsScan),
    });
  };

  /**
   * @summary List boxes which are not spent.
   */
  const listUnspentScans = (
    scanId: number,
    params?: ListUnspentScansParams,
  ) => {
    return instance<WalletBox[]>({
      url: `/scan/unspentBoxes/${scanId}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletBox),
    });
  };

  /**
   * @summary List boxes which are spent.
   */
  const listSpentScans = (scanId: number, params?: ListSpentScansParams) => {
    return instance<WalletBox[]>({
      url: `/scan/spentBoxes/${scanId}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsWalletBox),
    });
  };

  /**
   * @summary Stop scan-related box tracking
   */
  const scanStopTracking = (scanIdBoxId: ScanIdBoxId) => {
    return instance<ScanIdBoxId>({
      url: `/scan/stopTracking`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: scanIdBoxId,
      transformResponse: JsonFieldBigintFactory(bigIntsScanIdBoxId),
    });
  };

  /**
   * @summary Create and register a scan to track P2S address provided
   */
  const scriptP2SRule = (scriptP2SRuleBody: string) => {
    return instance<ScanId>({
      url: `/scan/p2sRule`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: scriptP2SRuleBody,
      transformResponse: JsonFieldBigintFactory(bigIntsScanId),
    });
  };

  /**
   * @summary Generate signature commitments for inputs of an unsigned transaction
   */
  const generateCommitments = (
    generateCommitmentsRequest: GenerateCommitmentsRequest,
  ) => {
    return instance<TransactionHintsBag>({
      url: `/wallet/generateCommitments`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: generateCommitmentsRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionHintsBag),
    });
  };

  /**
   * @summary Extract hints from a transaction
   */
  const extractHints = (hintExtractionRequest: HintExtractionRequest) => {
    return instance<TransactionHintsBag>({
      url: `/wallet/extractHints`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: hintExtractionRequest,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionHintsBag),
    });
  };

  /**
   * @summary Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.
   */
  const addBox = (scanIdsBox: ScanIdsBox) => {
    return instance<TransactionId>({
      url: `/scan/addBox`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: scanIdsBox,
      transformResponse: JsonFieldBigintFactory(bigIntsTransactionId),
    });
  };

  /**
   * @summary Shuts down the node
   */
  const nodeShutdown = () => {
    return instance<void>({ url: `/node/shutdown`, method: 'POST' });
  };

  /**
   * @summary Get emission data for a given height
   */
  const emissionAt = (blockHeight: number) => {
    return instance<EmissionInfo>({
      url: `/emission/at/${blockHeight}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsEmissionInfo),
    });
  };

  /**
   * @summary Print emission-related scripts
   */
  const emissionScripts = () => {
    return instance<EmissionScripts>({
      url: `/emission/scripts`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsEmissionScripts),
    });
  };

  /**
   * @summary Get current indexed block height. (The indexer has processed all blocks up to this height.)
   */
  const getIndexedHeight = () => {
    return instance<GetIndexedHeight200>({
      url: `/blockchain/indexedHeight`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsGetIndexedHeight200),
    });
  };

  /**
   * @summary Get an indexed block by its header ID.
   */
  const getBlockByHeaderId = (headerId: ModifierId) => {
    return instance<IndexedFullBlock>({
      url: `/blockchain/block/byHeaderId/${headerId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedFullBlock),
    });
  };

  /**
   * @summary Get an array of indexed blocks by their header IDs.
   */
  const getBlocksByHeaderIds = (modifierId: ModifierId[]) => {
    return instance<IndexedFullBlock[]>({
      url: `/blockchain/block/byHeaderIds`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: modifierId,
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedFullBlock),
    });
  };

  /**
   * @summary Retrieve a transaction by its id
   */
  const getTxById = (txId: string) => {
    return instance<IndexedErgoTransaction>({
      url: `/blockchain/transaction/byId/${txId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoTransaction),
    });
  };

  /**
   * @summary Retrieve a transaction by global index number
   */
  const getTxByIndex = (txIndex: number) => {
    return instance<IndexedErgoTransaction>({
      url: `/blockchain/transaction/byIndex/${txIndex}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoTransaction),
    });
  };

  /**
   * @summary Retrieve transactions by their associated address
   */
  const getTxsByAddress = (
    getTxsByAddressBody: string,
    params?: GetTxsByAddressParams,
  ) => {
    return instance<GetTxsByAddress200>({
      url: `/blockchain/transaction/byAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getTxsByAddressBody,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsGetTxsByAddress200),
    });
  };

  /**
   * @summary Get a range of transaction ids
   */
  const getTxRange = (params?: GetTxRangeParams) => {
    return instance<ModifierId[]>({
      url: `/blockchain/transaction/range`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsModifierId),
    });
  };

  /**
   * @summary Retrieve a box by its id
   */
  const getIndexedBoxById = (boxId: string) => {
    return instance<IndexedErgoBox>({
      url: `/blockchain/box/byId/${boxId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Retrieve a box by global index number
   */
  const getBoxByIndex = (boxIndex: number) => {
    return instance<IndexedErgoBox>({
      url: `/blockchain/box/byIndex/${boxIndex}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Retrieve boxes by an associated token id
   */
  const getBoxesByTokenId = (
    tokenId: ModifierId,
    params?: GetBoxesByTokenIdParams,
  ) => {
    return instance<GetBoxesByTokenId200>({
      url: `/blockchain/box/byTokenId/${tokenId}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsGetBoxesByTokenId200),
    });
  };

  /**
   * @summary Retrieve unspent boxes by an associated token id
   */
  const getBoxesByTokenIdUnspent = (
    tokenId: ModifierId,
    params?: GetBoxesByTokenIdUnspentParams,
  ) => {
    return instance<IndexedErgoBox[]>({
      url: `/blockchain/box/unspent/byTokenId/${tokenId}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Retrieve boxes by their associated address
   */
  const getBoxesByAddress = (
    getBoxesByAddressBody: string,
    params?: GetBoxesByAddressParams,
  ) => {
    return instance<GetBoxesByAddress200>({
      url: `/blockchain/box/byAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxesByAddressBody,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsGetBoxesByAddress200),
    });
  };

  /**
   * @summary Retrieve unspent boxes by their associated address
   */
  const getBoxesByAddressUnspent = (
    getBoxesByAddressUnspentBody: string,
    params?: GetBoxesByAddressUnspentParams,
  ) => {
    return instance<IndexedErgoBox[]>({
      url: `/blockchain/box/unspent/byAddress`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxesByAddressUnspentBody,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Retrieve boxes by their contract template hash
   */
  const getBoxesByTemplateHash = (
    hash: ModifierId,
    params?: GetBoxesByTemplateHashParams,
  ) => {
    return instance<IndexedErgoBox[]>({
      url: `/blockchain/box/byTemplateHash/${hash}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Retrieve unspent boxes by their contract template hash
   */
  const getBoxesByTemplateHashUnspent = (
    hash: ModifierId,
    params?: GetBoxesByTemplateHashUnspentParams,
  ) => {
    return instance<IndexedErgoBox[]>({
      url: `/blockchain/box/unspent/byTemplateHash/${hash}`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedErgoBox),
    });
  };

  /**
   * @summary Get a range of box ids
   */
  const getBoxRange = (params?: GetBoxRangeParams) => {
    return instance<ModifierId[]>({
      url: `/blockchain/box/range`,
      method: 'GET',
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsModifierId),
    });
  };

  /**
   * @summary Retrieve boxes by their associated ergotree
   */
  const getBoxesByErgoTree = (
    getBoxesByErgoTreeBody: string,
    params?: GetBoxesByErgoTreeParams,
  ) => {
    return instance<GetBoxesByErgoTree200>({
      url: `/blockchain/box/byErgoTree`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxesByErgoTreeBody,
      params,
      transformResponse: JsonFieldBigintFactory(bigIntsGetBoxesByErgoTree200),
    });
  };

  /**
   * @summary Retrieve unspent boxes by their associated ergotree
   */
  const getBoxesByErgoTreeUnspent = (
    getBoxesByErgoTreeUnspentBody: string,
    params?: GetBoxesByErgoTreeUnspentParams,
  ) => {
    return instance<GetBoxesByErgoTreeUnspent200>({
      url: `/blockchain/box/unspent/byErgoTree`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getBoxesByErgoTreeUnspentBody,
      params,
      transformResponse: JsonFieldBigintFactory(
        bigIntsGetBoxesByErgoTreeUnspent200,
      ),
    });
  };

  /**
   * @summary Retrieve minting information about a token
   */
  const getTokenById = (tokenId: string) => {
    return instance<IndexedToken>({
      url: `/blockchain/token/byId/${tokenId}`,
      method: 'GET',
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedToken),
    });
  };

  /**
   * @summary Retrieve minting information about a list of tokens
   */
  const getTokensByIds = (getTokensByIdsBody: string[]) => {
    return instance<IndexedToken[]>({
      url: `/blockchain/tokens`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getTokensByIdsBody,
      transformResponse: JsonFieldBigintFactory(bigIntsIndexedToken),
    });
  };

  /**
   * @summary Retrieve confirmed and unconfirmed balance of an address
   */
  const getAddressBalanceTotal = (getAddressBalanceTotalBody: string) => {
    return instance<GetAddressBalanceTotal200>({
      url: `/blockchain/balance`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getAddressBalanceTotalBody,
      transformResponse: JsonFieldBigintFactory(
        bigIntsGetAddressBalanceTotal200,
      ),
    });
  };

  return {
    getHeaderIds,
    sendMinedBlock,
    getFullBlockAt,
    getChainSlice,
    getFullBlockById,
    getFullBlockByIds,
    getBlockHeaderById,
    getBlockTransactionsById,
    getProofForTx,
    getLastHeaders,
    getModifierById,
    getPopowHeaderById,
    getPopowHeaderByHeight,
    getPopowProof,
    getPopowProofByHeaderId,
    getNodeInfo,
    sendTransaction,
    sendTransactionAsBytes,
    checkTransaction,
    checkTransactionAsBytes,
    getUnconfirmedTransactions,
    checkUnconfirmedTransaction,
    getUnconfirmedTransactionById,
    getUnconfirmedTxIds,
    getUnconfirmedTxsByIds,
    getUnconfirmedTransactionsByErgoTree,
    getUnconfirmedTransactionInputBoxById,
    getUnconfirmedTransactionOutputBoxById,
    getUnconfirmedTransactionOutputBoxesByErgoTree,
    getUnconfirmedTransactionOutputBoxesByTokenId,
    getUnconfirmedTransactionOutputBoxesByRegisters,
    getFeeHistogram,
    getRecommendedFee,
    getExpectedWaitTime,
    getAllPeers,
    getConnectedPeers,
    connectToPeer,
    getBlacklistedPeers,
    getPeersStatus,
    getPeersSyncInfo,
    getPeersTrackInfo,
    getRandomSeed,
    checkAddressValidityWithGet,
    checkAddressValidity,
    addressToRaw,
    rawToAddress,
    ergoTreeToAddressWithGet,
    ergoTreeToAddress,
    getRandomSeedWithLength,
    hashBlake2b,
    walletInit,
    walletRestore,
    checkSeed,
    walletUnlock,
    walletLock,
    walletRescan,
    getWalletStatus,
    walletUpdateChangeAddress,
    walletDeriveKey,
    walletDeriveNextKey,
    walletBalances,
    walletTransactions,
    walletGetTransaction,
    walletTransactionsByScanId,
    walletBoxes,
    walletBoxesCollect,
    walletUnspentBoxes,
    walletBalancesUnconfirmed,
    walletAddresses,
    walletTransactionGenerate,
    walletUnsignedTransactionGenerate,
    walletTransactionSign,
    walletTransactionGenerateAndSend,
    walletPaymentTransactionGenerateAndSend,
    walletGetPrivateKey,
    miningRequestBlockCandidate,
    miningRequestBlockCandidateWithMandatoryTransactions,
    miningReadMinerRewardAddress,
    miningReadMinerRewardPubkey,
    miningSubmitSolution,
    getBoxesBinaryProof,
    getBoxById,
    getBoxByIdBinary,
    getBoxWithPoolById,
    getBoxWithPoolByIds,
    getBoxWithPoolByIdBinary,
    getSnapshotsInfo,
    genesisBoxes,
    scriptP2SAddress,
    scriptP2SHAddress,
    addressToTree,
    addressToBytes,
    executeWithContext,
    registerScan,
    deregisterScan,
    listAllScans,
    listUnspentScans,
    listSpentScans,
    scanStopTracking,
    scriptP2SRule,
    generateCommitments,
    extractHints,
    addBox,
    nodeShutdown,
    emissionAt,
    emissionScripts,
    getIndexedHeight,
    getBlockByHeaderId,
    getBlocksByHeaderIds,
    getTxById,
    getTxByIndex,
    getTxsByAddress,
    getTxRange,
    getIndexedBoxById,
    getBoxByIndex,
    getBoxesByTokenId,
    getBoxesByTokenIdUnspent,
    getBoxesByAddress,
    getBoxesByAddressUnspent,
    getBoxesByTemplateHash,
    getBoxesByTemplateHashUnspent,
    getBoxRange,
    getBoxesByErgoTree,
    getBoxesByErgoTreeUnspent,
    getTokenById,
    getTokensByIds,
    getAddressBalanceTotal,
  };
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetHeaderIdsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getHeaderIds']>>
>;
export type SendMinedBlockResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['sendMinedBlock']>>
>;
export type GetFullBlockAtResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getFullBlockAt']>>
>;
export type GetChainSliceResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getChainSlice']>>
>;
export type GetFullBlockByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getFullBlockById']>>
>;
export type GetFullBlockByIdsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getFullBlockByIds']>>
>;
export type GetBlockHeaderByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBlockHeaderById']>>
>;
export type GetBlockTransactionsByIdResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getBlockTransactionsById']>
  >
>;
export type GetProofForTxResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getProofForTx']>>
>;
export type GetLastHeadersResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getLastHeaders']>>
>;
export type GetModifierByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getModifierById']>>
>;
export type GetPopowHeaderByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getPopowHeaderById']>>
>;
export type GetPopowHeaderByHeightResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getPopowHeaderByHeight']>
  >
>;
export type GetPopowProofResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getPopowProof']>>
>;
export type GetPopowProofByHeaderIdResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getPopowProofByHeaderId']>
  >
>;
export type GetNodeInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getNodeInfo']>>
>;
export type SendTransactionResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['sendTransaction']>>
>;
export type SendTransactionAsBytesResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['sendTransactionAsBytes']>
  >
>;
export type CheckTransactionResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['checkTransaction']>>
>;
export type CheckTransactionAsBytesResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['checkTransactionAsBytes']>
  >
>;
export type GetUnconfirmedTransactionsResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getUnconfirmedTransactions']>
  >
>;
export type CheckUnconfirmedTransactionResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['checkUnconfirmedTransaction']>
  >
>;
export type GetUnconfirmedTransactionByIdResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['getUnconfirmedTransactionById']
    >
  >
>;
export type GetUnconfirmedTxIdsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getUnconfirmedTxIds']>>
>;
export type GetUnconfirmedTxsByIdsResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getUnconfirmedTxsByIds']>
  >
>;
export type GetUnconfirmedTransactionsByErgoTreeResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['getUnconfirmedTransactionsByErgoTree']
    >
  >
>;
export type GetUnconfirmedTransactionInputBoxByIdResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['getUnconfirmedTransactionInputBoxById']
    >
  >
>;
export type GetUnconfirmedTransactionOutputBoxByIdResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoNodeAPI
      >['getUnconfirmedTransactionOutputBoxById']
    >
  >
>;
export type GetUnconfirmedTransactionOutputBoxesByErgoTreeResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoNodeAPI
      >['getUnconfirmedTransactionOutputBoxesByErgoTree']
    >
  >
>;
export type GetUnconfirmedTransactionOutputBoxesByTokenIdResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoNodeAPI
      >['getUnconfirmedTransactionOutputBoxesByTokenId']
    >
  >
>;
export type GetUnconfirmedTransactionOutputBoxesByRegistersResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoNodeAPI
      >['getUnconfirmedTransactionOutputBoxesByRegisters']
    >
  >
>;
export type GetFeeHistogramResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getFeeHistogram']>>
>;
export type GetRecommendedFeeResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getRecommendedFee']>>
>;
export type GetExpectedWaitTimeResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getExpectedWaitTime']>>
>;
export type GetAllPeersResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getAllPeers']>>
>;
export type GetConnectedPeersResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getConnectedPeers']>>
>;
export type ConnectToPeerResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['connectToPeer']>>
>;
export type GetBlacklistedPeersResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBlacklistedPeers']>>
>;
export type GetPeersStatusResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getPeersStatus']>>
>;
export type GetPeersSyncInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getPeersSyncInfo']>>
>;
export type GetPeersTrackInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getPeersTrackInfo']>>
>;
export type GetRandomSeedResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getRandomSeed']>>
>;
export type CheckAddressValidityWithGetResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['checkAddressValidityWithGet']>
  >
>;
export type CheckAddressValidityResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['checkAddressValidity']>>
>;
export type AddressToRawResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['addressToRaw']>>
>;
export type RawToAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['rawToAddress']>>
>;
export type ErgoTreeToAddressWithGetResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['ergoTreeToAddressWithGet']>
  >
>;
export type ErgoTreeToAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['ergoTreeToAddress']>>
>;
export type GetRandomSeedWithLengthResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getRandomSeedWithLength']>
  >
>;
export type HashBlake2bResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['hashBlake2b']>>
>;
export type WalletInitResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletInit']>>
>;
export type WalletRestoreResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletRestore']>>
>;
export type CheckSeedResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['checkSeed']>>
>;
export type WalletUnlockResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletUnlock']>>
>;
export type WalletLockResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletLock']>>
>;
export type WalletRescanResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletRescan']>>
>;
export type GetWalletStatusResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getWalletStatus']>>
>;
export type WalletUpdateChangeAddressResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['walletUpdateChangeAddress']>
  >
>;
export type WalletDeriveKeyResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletDeriveKey']>>
>;
export type WalletDeriveNextKeyResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletDeriveNextKey']>>
>;
export type WalletBalancesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletBalances']>>
>;
export type WalletTransactionsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletTransactions']>>
>;
export type WalletGetTransactionResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletGetTransaction']>>
>;
export type WalletTransactionsByScanIdResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['walletTransactionsByScanId']>
  >
>;
export type WalletBoxesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletBoxes']>>
>;
export type WalletBoxesCollectResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletBoxesCollect']>>
>;
export type WalletUnspentBoxesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletUnspentBoxes']>>
>;
export type WalletBalancesUnconfirmedResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['walletBalancesUnconfirmed']>
  >
>;
export type WalletAddressesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletAddresses']>>
>;
export type WalletTransactionGenerateResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['walletTransactionGenerate']>
  >
>;
export type WalletUnsignedTransactionGenerateResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['walletUnsignedTransactionGenerate']
    >
  >
>;
export type WalletTransactionSignResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['walletTransactionSign']>
  >
>;
export type WalletTransactionGenerateAndSendResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['walletTransactionGenerateAndSend']
    >
  >
>;
export type WalletPaymentTransactionGenerateAndSendResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<
        typeof getErgoNodeAPI
      >['walletPaymentTransactionGenerateAndSend']
    >
  >
>;
export type WalletGetPrivateKeyResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['walletGetPrivateKey']>>
>;
export type MiningRequestBlockCandidateResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['miningRequestBlockCandidate']>
  >
>;
export type MiningRequestBlockCandidateWithMandatoryTransactionsResult =
  NonNullable<
    Awaited<
      ReturnType<
        ReturnType<
          typeof getErgoNodeAPI
        >['miningRequestBlockCandidateWithMandatoryTransactions']
      >
    >
  >;
export type MiningReadMinerRewardAddressResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['miningReadMinerRewardAddress']
    >
  >
>;
export type MiningReadMinerRewardPubkeyResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['miningReadMinerRewardPubkey']>
  >
>;
export type MiningSubmitSolutionResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['miningSubmitSolution']>>
>;
export type GetBoxesBinaryProofResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesBinaryProof']>>
>;
export type GetBoxByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxById']>>
>;
export type GetBoxByIdBinaryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxByIdBinary']>>
>;
export type GetBoxWithPoolByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxWithPoolById']>>
>;
export type GetBoxWithPoolByIdsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxWithPoolByIds']>>
>;
export type GetBoxWithPoolByIdBinaryResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxWithPoolByIdBinary']>
  >
>;
export type GetSnapshotsInfoResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getSnapshotsInfo']>>
>;
export type GenesisBoxesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['genesisBoxes']>>
>;
export type ScriptP2SAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['scriptP2SAddress']>>
>;
export type ScriptP2SHAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['scriptP2SHAddress']>>
>;
export type AddressToTreeResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['addressToTree']>>
>;
export type AddressToBytesResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['addressToBytes']>>
>;
export type ExecuteWithContextResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['executeWithContext']>>
>;
export type RegisterScanResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['registerScan']>>
>;
export type DeregisterScanResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['deregisterScan']>>
>;
export type ListAllScansResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['listAllScans']>>
>;
export type ListUnspentScansResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['listUnspentScans']>>
>;
export type ListSpentScansResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['listSpentScans']>>
>;
export type ScanStopTrackingResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['scanStopTracking']>>
>;
export type ScriptP2SRuleResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['scriptP2SRule']>>
>;
export type GenerateCommitmentsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['generateCommitments']>>
>;
export type ExtractHintsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['extractHints']>>
>;
export type AddBoxResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['addBox']>>
>;
export type NodeShutdownResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['nodeShutdown']>>
>;
export type EmissionAtResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['emissionAt']>>
>;
export type EmissionScriptsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['emissionScripts']>>
>;
export type GetIndexedHeightResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getIndexedHeight']>>
>;
export type GetBlockByHeaderIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBlockByHeaderId']>>
>;
export type GetBlocksByHeaderIdsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBlocksByHeaderIds']>>
>;
export type GetTxByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getTxById']>>
>;
export type GetTxByIndexResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getTxByIndex']>>
>;
export type GetTxsByAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getTxsByAddress']>>
>;
export type GetTxRangeResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getTxRange']>>
>;
export type GetIndexedBoxByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getIndexedBoxById']>>
>;
export type GetBoxByIndexResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxByIndex']>>
>;
export type GetBoxesByTokenIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByTokenId']>>
>;
export type GetBoxesByTokenIdUnspentResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByTokenIdUnspent']>
  >
>;
export type GetBoxesByAddressResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByAddress']>>
>;
export type GetBoxesByAddressUnspentResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByAddressUnspent']>
  >
>;
export type GetBoxesByTemplateHashResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByTemplateHash']>
  >
>;
export type GetBoxesByTemplateHashUnspentResult = NonNullable<
  Awaited<
    ReturnType<
      ReturnType<typeof getErgoNodeAPI>['getBoxesByTemplateHashUnspent']
    >
  >
>;
export type GetBoxRangeResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxRange']>>
>;
export type GetBoxesByErgoTreeResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByErgoTree']>>
>;
export type GetBoxesByErgoTreeUnspentResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getBoxesByErgoTreeUnspent']>
  >
>;
export type GetTokenByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getTokenById']>>
>;
export type GetTokensByIdsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getErgoNodeAPI>['getTokensByIds']>>
>;
export type GetAddressBalanceTotalResult = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof getErgoNodeAPI>['getAddressBalanceTotal']>
  >
>;
