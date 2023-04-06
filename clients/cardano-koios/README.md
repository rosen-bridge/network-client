# @rosen-clients/cardano-koios

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`@rosen-clients/cardano-koios` is a Cardano Koios client library. It is created
by latest OpenAPI spec of Cardano Koios and is the main client library which
powers Rosen Bridge.

## Installation

npm:

```sh
npm i @rosen-clients/cardano-koios
```

yarn:

```sh
yarn add @rosen-clients/cardano-koios
```

## Usage

```ts
import cardanoKoiosClientFactory from '@rosen-clients/cardano-koios';

const cardanoKoiosClient = cardanoKoiosClientFactory('YOUR_KOIOS_URL');

// `cardanoKoiosClient` contains all of the apis categorized by their tag, e.g.
cardanoKoiosClient.transactions.postTxInfo({ _tx_hashes: ['SOME_TX_HASH'] });
```
