import { getKoiosAPI } from './api/koiosAPI';

const cardanoKoiosClientFactory = (baseURL: string) => {
  return getKoiosAPI(baseURL);
};

export default cardanoKoiosClientFactory;

export * from './types';
