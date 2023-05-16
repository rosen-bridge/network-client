import { axiosInstance } from './axios';

import * as v0 from './v0/api/default';
import * as v1 from './v1/api/default';

type ErgoExplorerClient = {
  v0: typeof v0;
  v1: typeof v1;
};

const ergoExplorerClientFactory = (baseURL: string) => {
  axiosInstance.defaults.baseURL = baseURL;

  return {
    v0,
    v1,
  };
};

export default ergoExplorerClientFactory;

export type { ErgoExplorerClient };
