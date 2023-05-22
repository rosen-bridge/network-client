import { getErgoExplorerAPIV0 } from './v0/api/ergoExplorerAPIV0';
import { getErgoExplorerAPIV1 } from './v1/api/ergoExplorerAPIV1';

const ergoExplorerClientFactory = (baseURL: string) => {
  return {
    v0: getErgoExplorerAPIV0(baseURL),
    v1: getErgoExplorerAPIV1(baseURL),
  };
};

export default ergoExplorerClientFactory;

export * from './types';
