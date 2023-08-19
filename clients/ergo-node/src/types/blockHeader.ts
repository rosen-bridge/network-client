/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 * OpenAPI spec version: 5.0.10
 */
import type { ModifierId } from './modifierId';
import { bigIntsModifierId } from './modifierId';
import type { Timestamp } from './timestamp';
import { bigIntsTimestamp } from './timestamp';
import type { Version } from './version';
import { bigIntsVersion } from './version';
import type { Digest32 } from './digest32';
import { bigIntsDigest32 } from './digest32';
import type { ADDigest } from './aDDigest';
import { bigIntsADDigest } from './aDDigest';
import type { PowSolutions } from './powSolutions';
import { bigIntsPowSolutions } from './powSolutions';
import type { Votes } from './votes';

import { bigIntsVotes } from './votes';

export interface BlockHeader {
  id: ModifierId;
  timestamp: Timestamp;
  version: Version;
  adProofsRoot: Digest32;
  stateRoot: ADDigest;
  transactionsRoot: Digest32;
  nBits: bigint;
  extensionHash: Digest32;
  powSolutions: PowSolutions;
  height: number;
  difficulty: string;
  parentId: ModifierId;
  votes: Votes;
  /** Size in bytes */
  size?: number;
  extensionId?: ModifierId;
  transactionsId?: ModifierId;
  adProofsId?: ModifierId;
}

export const bigIntsBlockHeader = [
  ...bigIntsModifierId.map((item) => (item === '' ? 'id' : `id.${item}`)),
  ...bigIntsTimestamp.map((item) =>
    item === '' ? 'timestamp' : `timestamp.${item}`
  ),
  ...bigIntsVersion.map((item) =>
    item === '' ? 'version' : `version.${item}`
  ),
  ...bigIntsDigest32.map((item) =>
    item === '' ? 'adProofsRoot' : `adProofsRoot.${item}`
  ),
  ...bigIntsADDigest.map((item) =>
    item === '' ? 'stateRoot' : `stateRoot.${item}`
  ),
  ...bigIntsDigest32.map((item) =>
    item === '' ? 'transactionsRoot' : `transactionsRoot.${item}`
  ),
  'nBits',
  ...bigIntsDigest32.map((item) =>
    item === '' ? 'extensionHash' : `extensionHash.${item}`
  ),
  ...bigIntsPowSolutions.map((item) =>
    item === '' ? 'powSolutions' : `powSolutions.${item}`
  ),
  ...bigIntsModifierId.map((item) =>
    item === '' ? 'parentId' : `parentId.${item}`
  ),
  ...bigIntsVotes.map((item) => (item === '' ? 'votes' : `votes.${item}`)),
  ...bigIntsModifierId.map((item) =>
    item === '' ? 'extensionId' : `extensionId.${item}`
  ),
  ...bigIntsModifierId.map((item) =>
    item === '' ? 'transactionsId' : `transactionsId.${item}`
  ),
  ...bigIntsModifierId.map((item) =>
    item === '' ? 'adProofsId' : `adProofsId.${item}`
  ),
];
