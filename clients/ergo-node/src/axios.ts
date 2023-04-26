import Axios, { AxiosRequestConfig } from 'axios';
import JsonBigintFactory from 'json-bigint';

const JsonBigInt = JsonBigintFactory({
  alwaysParseAsBig: true,
  useNativeBigInt: true,
});

export const axiosInstance = Axios.create({
  transformResponse: (data) => JsonBigInt.parse(data),
});

export const axios = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> =>
  axiosInstance({
    ...config,
    ...options,
  }).then(({ data }) => data);
