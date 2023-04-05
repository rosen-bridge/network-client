import Axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = Axios.create();

export const axios = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> =>
  axiosInstance({
    ...config,
    ...options,
  }).then(({ data }) => data);
