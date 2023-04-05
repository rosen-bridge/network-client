# @rosen-clients/ergo-node

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`@rosen-clients/ergo-node` is an Ergo Node client library. It is created by
latest OpenAPI spec of Ergo Node and is the main client library which powers
Rosen Bridge.

## Installation

npm:

```sh
npm i @rosen-clients/ergo-node
```

yarn:

```sh
yarn add @rosen-clients/ergo-node
```

## Usage

```ts
import ergoNodeClientFactory from '@rosen-clients/ergo-node';

const ergoNodeClient = ergoNodeClientFactory('YOUR_NODE_URL');

// `ergoNodeClient` contains all of the apis categorized by their tag, e.g.
ergoNodeClient.blockchain.getBoxById('SOME_BOX_ID');
```
