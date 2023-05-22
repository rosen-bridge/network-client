import { getErgoNodeAPI } from './api/ergoNodeAPI';

const ergoNodeClientFactory = (baseURL: string) => {
  return getErgoNodeAPI(baseURL);
};

export default ergoNodeClientFactory;

export * from './types';
