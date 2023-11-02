import { getKoiosAPI } from './api/koiosAPI';

const cardanoKoiosClientFactory = (baseURL: string, authToken?: string) => {
  return getKoiosAPI(baseURL, authToken);
};

export default cardanoKoiosClientFactory;

export * from './types';
