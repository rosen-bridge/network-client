/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type {
  AddressHolder,
  SourceHolder,
  ErgoTreeObject,
  ErgoAddress,
  ScriptBytes,
  CryptoResult,
  ExecuteScript,
} from '../types';
import { axios } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Create P2SAddress from Sigma source
 */
export const scriptP2SAddress = (
  sourceHolder: SourceHolder,
  options?: SecondParameter<typeof axios>
) => {
  return axios<AddressHolder>(
    {
      url: `/script/p2sAddress`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: sourceHolder,
    },
    options
  );
};
/**
 * @summary Create P2SHAddress from Sigma source
 */
export const scriptP2SHAddress = (
  sourceHolder: SourceHolder,
  options?: SecondParameter<typeof axios>
) => {
  return axios<AddressHolder>(
    {
      url: `/script/p2shAddress`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: sourceHolder,
    },
    options
  );
};
/**
 * @summary Convert an address to hex-encoded serialized ErgoTree (script)
 */
export const addressToTree = (
  address: ErgoAddress,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ErgoTreeObject>(
    { url: `/script/addressToTree/${address}`, method: 'get' },
    options
  );
};
/**
 * @summary Convert an address to hex-encoded Sigma byte array constant which contains script bytes
 */
export const addressToBytes = (
  address: ErgoAddress,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ScriptBytes>(
    { url: `/script/addressToBytes/${address}`, method: 'get' },
    options
  );
};
/**
 * @summary Execute script with context
 */
export const executeWithContext = (
  executeScript: ExecuteScript,
  options?: SecondParameter<typeof axios>
) => {
  return axios<CryptoResult>(
    {
      url: `/script/executeWithContext`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: executeScript,
    },
    options
  );
};
export type ScriptP2SAddressResult = NonNullable<
  Awaited<ReturnType<typeof scriptP2SAddress>>
>;
export type ScriptP2SHAddressResult = NonNullable<
  Awaited<ReturnType<typeof scriptP2SHAddress>>
>;
export type AddressToTreeResult = NonNullable<
  Awaited<ReturnType<typeof addressToTree>>
>;
export type AddressToBytesResult = NonNullable<
  Awaited<ReturnType<typeof addressToBytes>>
>;
export type ExecuteWithContextResult = NonNullable<
  Awaited<ReturnType<typeof executeWithContext>>
>;
