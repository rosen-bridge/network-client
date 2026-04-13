import rateLimitedAxios from './rateLimitedAxios';

const {
  isCancel,
  CancelToken,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig,
} = rateLimitedAxios;

export type { Rule } from './core/types';
export type {
  RateLimitedAxiosInstance as AxiosInstance,
  RateLimitedAxiosStatic as AxiosStatic,
} from './rateLimitedAxios';
export type {
  AxiosHeaderValue,
  RawAxiosRequestHeaders,
  AxiosRequestHeaders,
  RawAxiosResponseHeaders,
  AxiosResponseHeaders,
  AxiosRequestTransformer,
  AxiosResponseTransformer,
  AxiosAdapter,
  AxiosBasicCredentials,
  AxiosProxyConfig,
  Method,
  ResponseType,
  responseEncoding,
  TransitionalOptions,
  GenericAbortSignal,
  FormDataVisitorHelpers,
  SerializerVisitor,
  SerializerOptions,
  FormSerializerOptions,
  ParamEncoder,
  CustomParamsSerializer,
  ParamsSerializerOptions,
  AxiosProgressEvent,
  AddressFamily,
  LookupAddressEntry,
  LookupAddress,
  AxiosRequestConfig,
  RawAxiosRequestConfig,
  InternalAxiosRequestConfig,
  HeadersDefaults,
  AxiosDefaults,
  CreateAxiosDefaults,
  AxiosResponse,
  AxiosPromise,
  CancelStatic,
  Canceler,
  CancelTokenStatic,
  CancelTokenSource,
  AxiosInterceptorOptions,
  AxiosInterceptorManager,
  GenericFormData,
  GenericHTMLFormElement,
} from 'axios';

// Its important to export the Axios like this not from the rateLimitedAxios
// so that it can be used as a class
export { RateLimitedAxios as Axios } from './core/rateLimitedAxios';
export { RateLimitedAxiosConfig } from './core/rateLimitedAxiosConfig';

export {
  rateLimitedAxios as default,
  AxiosHeaders,
  HttpStatusCode,
  CancelToken,
  Cancel,
  getAdapter,
  toFormData,
  formToJSON,
  isAxiosError,
  spread,
  isCancel,
  all,
  mergeConfig,
};
