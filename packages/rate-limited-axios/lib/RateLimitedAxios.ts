import originalAxios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CanceledError,
  CancelToken,
  formToJSON,
  getAdapter,
  InternalAxiosRequestConfig,
  isCancel,
} from 'axios';

import pkg from '../package.json' with { type: 'json' };
import { RateLimitedAxiosConfig } from './config';
import { Rule } from './types';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    meta: { release: (() => void) | undefined; startedTime: number };
  }
}

class RateLimitedAxios extends originalAxios.Axios {
  VERSION = pkg.version;
  protected static releaseTimeoutMap = new Map<
    () => void,
    ReturnType<typeof setTimeout>
  >();
  Axios = RateLimitedAxios;
  RateLimitedAxiosConfig = RateLimitedAxiosConfig;
  CanceledError = CanceledError;
  CancelToken = {} as CancelToken;
  isCancel = isCancel;
  toFormData = originalAxios.toFormData;
  AxiosError = originalAxios.AxiosError;
  Cancel = CanceledError;
  all = function all(promises: Promise<any>[]) {
    return Promise.all(promises);
  };
  spread = originalAxios.spread;
  isAxiosError = originalAxios.isAxiosError;
  mergeConfig = originalAxios.mergeConfig;
  AxiosHeaders = originalAxios.AxiosHeaders;
  formToJSON = formToJSON;
  getAdapter = getAdapter;
  HttpStatusCode = originalAxios.HttpStatusCode;

  constructor(config?: AxiosRequestConfig) {
    super(
      originalAxios.mergeConfig(
        originalAxios.defaults as AxiosRequestConfig,
        config || {},
      ),
    );
    this.interceptors.request.use(RateLimitedAxios.interceptorForRequest);
    this.interceptors.response.use(
      RateLimitedAxios.interceptorForResponse,
      RateLimitedAxios.interceptorForResponseError,
    );
  }

  /**
   * Releases the request queue associated with the given Axios request configuration.
   * @param config
   * @returns
   */
  protected static releaseQueue = (config: InternalAxiosRequestConfig) => {
    const url = this.getFullAddress(config);

    if (config.meta.release) {
      const release = config.meta.release;
      config.meta.release = undefined;
      const rule = RateLimitedAxios.getUrlRule(url);
      let releaseTime = 0;
      if (rule) releaseTime = rule.throttleWindow * 1000;
      clearTimeout(RateLimitedAxios.releaseTimeoutMap.get(release));
      RateLimitedAxios.releaseTimeoutMap.delete(release);
      setTimeout(() => {
        // release the locked queue
        release();
      }, releaseTime);
    }
  };

  /**
   * get request config and return full URL address
   *
   * @param config
   * @returns
   */
  protected static getFullAddress = (config: InternalAxiosRequestConfig) => {
    return config.baseURL
      ? originalAxios.getUri({ baseURL: config.baseURL, url: config.url })
      : (config.url ?? '');
  };

  /**
   * This function manages rate limiting for requests by matching URLs against regex patterns.
   * @param config
   * @returns
   */
  protected static interceptorForRequest = async (
    config: InternalAxiosRequestConfig,
  ) => {
    const url = this.getFullAddress(config);

    const rule = RateLimitedAxios.getUrlRule(url);

    config.meta = { release: undefined, startedTime: Date.now() };

    if (!rule) return config;
    const release = await rule.semaphore.acquire();
    config.meta.release = release;

    RateLimitedAxios.releaseTimeoutMap.set(
      release,
      setTimeout(() => {
        const censoredUrl = RateLimitedAxios.censorUrl(rule.pattern, url);
        RateLimitedAxiosConfig.getLogger().debug(
          `The response time has exceeded the defined limit for the ${censoredUrl} URL.`,
        );
        RateLimitedAxios.releaseQueue(config);
      }, rule.timeout * 1000),
    );

    return config;
  };

  /**
   * Censors a URL by hiding its middle parts, keeping only
   * the prefix (protocol + domain) and the last path segment.
   *
   * Example:
   *   input:  https://example.com/users/12345/profile
   *   output: https://example.com/*** /profile
   *
   * @param pattern regex pattern to match the URL
   * @param url the URL to censor
   * @returns censored version of the URL (or original if not matched)
   */
  protected static censorUrl = (pattern: RegExp, url: string): string => {
    const match = url.match(pattern);
    if (!match) return url;

    try {
      const parsed = new URL(url);
      const parts = parsed.pathname.split('/').filter(Boolean);

      if (parts.length <= 1) {
        // nothing to censor, just return host
        return parsed.origin;
      }

      const firstPart = `${parsed.origin}/***`;
      const lastPart = url.slice(match[0].length);
      return `${firstPart}${lastPart.startsWith('/') ? '' : '/'}${lastPart}`;
    } catch {
      // fallback if not a valid URL
      return match[0];
    }
  };

  /**
   * Axios response interceptor that triggers queue release logic.
   * @param response
   * @returns
   */
  protected static interceptorForResponse = (response: AxiosResponse) => {
    this.releaseQueue(response.config);
    return response;
  };

  /**
   * Axios error interceptor that handles failed responses by releasing the request queue.
   * @param error
   * @returns
   */
  protected static interceptorForResponseError = (error: AxiosError) => {
    if (error.config) this.releaseQueue(error.config);
    return Promise.reject(error);
  };

  /**
   * return rate limiter and pattern of received url
   * @param url
   * @returns
   */
  protected static getUrlRule = (url: string): Rule | undefined => {
    for (const rule of RateLimitedAxiosConfig.getRules()) {
      if (rule.pattern.test(url)) return rule;
    }
  };

  /**
   * Create a rate-limited axios instance
   * @param config
   * @returns
   */
  public create = (config: AxiosRequestConfig = {}) => {
    const axiosInstance = new RateLimitedAxios(
      originalAxios.mergeConfig(
        this.defaults as AxiosRequestConfig,
        config || {},
      ),
    );
    return axiosInstance;
  };
}

export { RateLimitedAxios, RateLimitedAxiosConfig };
