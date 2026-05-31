# @rosen-clients/rate-limited-axios

## 2.0.1

### Patch Changes

- Replace the `await-semaphore` dependency with `@rosen-bridge/semaphore`

## 2.0.0

### Major Changes

- Refactor package types to be compatible with original axios.

## 1.1.1

### Patch Changes

- Update dependencies
  - @rosen-bridge/abstract-logger@4.0.0
  - axios@1.13.2

## 1.1.0

### Minor Changes

- Export RateLimitedAxiosInstace instead of AxiosInstance
- Update rosen dependencies and replace json-bigint with @rosen-bridge/json-bigint also add clean script
- Regenerate clients due to updating orval and apply lint

### Patch Changes

- Updated eslint and related comments

## 1.0.0

### Major Changes

- Update to node 22.18.0

## 0.1.1

### Patch Changes

- Add `censorUrl` utility for safe url logging
