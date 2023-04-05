/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.7
 */
import type {
  Peer,
  BlacklistedPeers,
  PeersStatus,
  SyncInfo,
  TrackInfo,
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
 * @summary Get all known peers
 */
export const getAllPeers = (options?: SecondParameter<typeof axios>) => {
  return axios<Peer[]>({ url: `/peers/all`, method: 'get' }, options);
};
/**
 * @summary Get current connected peers
 */
export const getConnectedPeers = (options?: SecondParameter<typeof axios>) => {
  return axios<Peer[]>({ url: `/peers/connected`, method: 'get' }, options);
};
/**
 * @summary Add address to peers list
 */
export const connectToPeer = (
  connectToPeerBody: string,
  options?: SecondParameter<typeof axios>
) => {
  return axios<void>(
    {
      url: `/peers/connect`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: connectToPeerBody,
    },
    options
  );
};
/**
 * @summary Get blacklisted peers
 */
export const getBlacklistedPeers = (
  options?: SecondParameter<typeof axios>
) => {
  return axios<BlacklistedPeers>(
    { url: `/peers/blacklisted`, method: 'get' },
    options
  );
};
/**
 * @summary Get last incoming message timestamp and current network time
 */
export const getPeersStatus = (options?: SecondParameter<typeof axios>) => {
  return axios<PeersStatus[]>({ url: `/peers/status`, method: 'get' }, options);
};
/**
 * @summary Get sync info reported by peers, including versions, current status and height (if available)
 */
export const getPeersSyncInfo = (options?: SecondParameter<typeof axios>) => {
  return axios<SyncInfo[]>({ url: `/peers/syncInfo`, method: 'get' }, options);
};
/**
 * @summary Get track info reported by peers, including count of invalid modifiers and details of requested and received modifiers
 */
export const getPeersTrackInfo = (options?: SecondParameter<typeof axios>) => {
  return axios<TrackInfo[]>(
    { url: `/peers/trackInfo`, method: 'get' },
    options
  );
};
export type GetAllPeersResult = NonNullable<
  Awaited<ReturnType<typeof getAllPeers>>
>;
export type GetConnectedPeersResult = NonNullable<
  Awaited<ReturnType<typeof getConnectedPeers>>
>;
export type ConnectToPeerResult = NonNullable<
  Awaited<ReturnType<typeof connectToPeer>>
>;
export type GetBlacklistedPeersResult = NonNullable<
  Awaited<ReturnType<typeof getBlacklistedPeers>>
>;
export type GetPeersStatusResult = NonNullable<
  Awaited<ReturnType<typeof getPeersStatus>>
>;
export type GetPeersSyncInfoResult = NonNullable<
  Awaited<ReturnType<typeof getPeersSyncInfo>>
>;
export type GetPeersTrackInfoResult = NonNullable<
  Awaited<ReturnType<typeof getPeersTrackInfo>>
>;
