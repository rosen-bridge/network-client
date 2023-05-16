import { axiosInstance } from './axios';

import * as address from './api/address';
import * as asset from './api/asset';
import * as block from './api/block';
import * as epoch from './api/epoch';
import * as network from './api/network';
import * as pool from './api/pool';
import * as script from './api/script';
import * as stackAccount from './api/stake-account';
import * as transactions from './api/transactions';

const cardanoKoiosClientFactory = (baseURL: string) => {
  axiosInstance.defaults.baseURL = baseURL;

  return {
    address,
    asset,
    block,
    epoch,
    network,
    pool,
    script,
    stackAccount,
    transactions,
  };
};

export default cardanoKoiosClientFactory;

export * from './types';
