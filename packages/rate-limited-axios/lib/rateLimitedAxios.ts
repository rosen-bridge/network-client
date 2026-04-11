import originalAxios, {
  AxiosInstance,
  AxiosStatic,
  CreateAxiosDefaults,
  AxiosRequestConfig,
  toFormData,
  mergeConfig,
  AxiosError,
  AxiosHeaders,
  HttpStatusCode,
  CanceledError,
  spread,
  isAxiosError,
} from 'axios';

import pkg from '../package.json' with { type: 'json' };
import { RateLimitedAxios } from './core/rateLimitedAxios';
import { bindMethod, extendInstance } from './utils';

/**
 * Axios-like instance with rate limiting: callable as a function, exposes `.create()`, and matches `AxiosInstance` typing.
 */
export interface RateLimitedAxiosInstance extends AxiosInstance {
  create(config?: CreateAxiosDefaults): RateLimitedAxiosInstance;
}

/**
 * Default export shape: axios `AxiosStatic` with this package’s `Axios` constructor.
 */
export interface RateLimitedAxiosStatic
  extends Omit<AxiosStatic, 'Axios' | 'create'> {
  Axios: typeof RateLimitedAxios;
  create(config?: CreateAxiosDefaults): RateLimitedAxiosInstance;
  default: RateLimitedAxiosStatic;
}

/**
 * Builds a callable axios-compatible instance (same pattern as axios `createInstance`).
 * @param defaultConfig Initial config for this instance; nested `create()` merges against this value.
 * @returns A rate-limited client usable as `instance(config)`, `instance(url, config)`, or `instance.get(...)`.
 */
export const createRateLimitedInstance = (
  defaultConfig?: AxiosRequestConfig,
): RateLimitedAxiosInstance => {
  const context = new RateLimitedAxios(defaultConfig);
  const instance = bindMethod(
    originalAxios.Axios.prototype.request,
    context,
  ) as RateLimitedAxiosInstance;

  extendInstance(instance, originalAxios.Axios.prototype, context);
  extendInstance(instance, context as unknown as object, null);

  instance.create = (instanceConfig?: CreateAxiosDefaults) =>
    createRateLimitedInstance(
      mergeConfig(
        defaultConfig ?? ({} as AxiosRequestConfig),
        (instanceConfig ?? {}) as AxiosRequestConfig,
      ) as AxiosRequestConfig,
    );

  return instance;
};

// Create the default instance to be exported
const axios = createRateLimitedInstance(
  originalAxios.defaults as AxiosRequestConfig,
) as unknown as RateLimitedAxiosStatic;

// Expose Axios class to allow class inheritance
axios.Axios = RateLimitedAxios;

// AxiosStatic types VERSION as readonly; this module sets it once at load.
// @ts-expect-error TS2540 — assign to readonly VERSION from AxiosStatic
axios.VERSION = pkg.version;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = originalAxios.CancelToken;
axios.isCancel = originalAxios.isCancel;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders;

axios.formToJSON = originalAxios.formToJSON;

axios.getAdapter = originalAxios.getAdapter;

axios.HttpStatusCode = HttpStatusCode;

axios.default = axios;

// this module should only have a default export
export default axios;
