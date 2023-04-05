/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type { AddressValidity, ErgoAddress } from '../types';
import { axios } from '../axios';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Get random seed of 32 bytes
 */
export const getRandomSeed = (options?: SecondParameter<typeof axios>) => {
  return axios<string>({ url: `/utils/seed`, method: 'get' }, options);
};
/**
 * @summary Check address validity (prefer POST request as addresses can be too big)
 */
export const checkAddressValidityWithGet = (
  address: ErgoAddress,
  options?: SecondParameter<typeof axios>
) => {
  return axios<AddressValidity>(
    { url: `/utils/address/${address}`, method: 'get' },
    options
  );
};
/**
 * @summary Checks address validity
 */
export const checkAddressValidity = (
  checkAddressValidityBody: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<AddressValidity>(
    {
      url: `/utils/address`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: checkAddressValidityBody,
    },
    options
  );
};
/**
 * @summary Convert Pay-To-Public-Key Address to raw representation (hex-encoded serialized curve point)
 */
export const addressToRaw = (
  address: ErgoAddress,
  options?: SecondParameter<typeof axios>
) => {
  return axios<string>(
    { url: `/utils/addressToRaw/${address}`, method: 'get' },
    options
  );
};
/**
 * @summary Generate Pay-To-Public-Key address from hex-encoded raw pubkey (secp256k1 serialized point)
 */
export const rawToAddress = (
  pubkeyHex: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ErgoAddress>(
    { url: `/utils/rawToAddress/${pubkeyHex}`, method: 'get' },
    options
  );
};
/**
 * @summary Generate Ergo address from hex-encoded ErgoTree (prefer POST request as ErgoTree can be too big)
 */
export const ergoTreeToAddressWithGet = (
  ergoTreeHex: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ErgoAddress>(
    { url: `/utils/ergoTreeToAddress/${ergoTreeHex}`, method: 'get' },
    options
  );
};
/**
 * @summary Generate Ergo address from hex-encoded ErgoTree
 */
export const ergoTreeToAddress = (
  ergoTreeToAddressBody: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<ErgoAddress>(
    {
      url: `/utils/ergoTreeToAddress`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: ergoTreeToAddressBody,
    },
    options
  );
};
/**
 * @summary Generate random seed of specified length in bytes
 */
export const getRandomSeedWithLength = (
  length: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<string>(
    { url: `/utils/seed/${length}`, method: 'get' },
    options
  );
};
/**
 * @summary Return Blake2b hash of specified message
 */
export const hashBlake2b = (
  hashBlake2bBody: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<string>(
    {
      url: `/utils/hash/blake2b`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: hashBlake2bBody,
    },
    options
  );
};
export type GetRandomSeedResult = NonNullable<
  Awaited<ReturnType<typeof getRandomSeed>>
>;
export type CheckAddressValidityWithGetResult = NonNullable<
  Awaited<ReturnType<typeof checkAddressValidityWithGet>>
>;
export type CheckAddressValidityResult = NonNullable<
  Awaited<ReturnType<typeof checkAddressValidity>>
>;
export type AddressToRawResult = NonNullable<
  Awaited<ReturnType<typeof addressToRaw>>
>;
export type RawToAddressResult = NonNullable<
  Awaited<ReturnType<typeof rawToAddress>>
>;
export type ErgoTreeToAddressWithGetResult = NonNullable<
  Awaited<ReturnType<typeof ergoTreeToAddressWithGet>>
>;
export type ErgoTreeToAddressResult = NonNullable<
  Awaited<ReturnType<typeof ergoTreeToAddress>>
>;
export type GetRandomSeedWithLengthResult = NonNullable<
  Awaited<ReturnType<typeof getRandomSeedWithLength>>
>;
export type HashBlake2bResult = NonNullable<
  Awaited<ReturnType<typeof hashBlake2b>>
>;