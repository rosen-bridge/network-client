import { axiosInstance } from './axios';

import * as blockchain from './api/blockchain';
import * as blocks from './api/blocks';
import * as emission from './api/emission';
import * as info from './api/info';
import * as inputs from './api/inputs';
import * as mining from './api/mining';
import * as nipopow from './api/nipopow';
import * as node from './api/node';
import * as outputs from './api/outputs';
import * as peers from './api/peers';
import * as scan from './api/scan';
import * as script from './api/script';
import * as transactions from './api/transactions';
import * as utils from './api/utils';
import * as utxo from './api/utxo';
import * as wallet from './api/wallet';

const ergoNodeClientFactory = (baseURL: string) => {
  axiosInstance.defaults.baseURL = baseURL;

  return {
    blockchain,
    blocks,
    emission,
    info,
    inputs,
    mining,
    nipopow,
    node,
    outputs,
    peers,
    scan,
    script,
    transactions,
    utils,
    utxo,
    wallet,
  };
};

export default ergoNodeClientFactory;