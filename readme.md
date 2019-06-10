# Euro Exchange Rates by ECB for Node RED

[Node-RED](https://nodered.org) plugin to retrieve Euro foreign exchange reference rates from an [API](http://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html) provided by the European Central Bank.

Based on my [ecb-euro-exchange-rates](https://github.com/qqilihq/ecb-euro-exchange-rates) module.

This serves as my “hello world” to learn how to build Node RED nodes. Most steps are simply following the [“Create your first node”](https://nodered.org/docs/creating-nodes/first-node) tutorial, additionally I used the `@types/node-red` to write this in TS.

## Build

Use a current version of [Node.js](https://nodejs.org/en/). Install the dependencies, run the tests, and compile the TypeScript code with [yarn](https://yarnpkg.com/lang/en/) or npm:

```shell
$ yarn
$ yarn test
$ yarn build
```

## Releasing to NPM

Commit all changes and run the following:

```shell
$ npm login
$ npm version <update_type>
$ npm publish
```

… where `<update_type>` is one of `patch`, `minor`, or `major`. This will update the `package.json`, and create a tagged Git commit with the version number.


- - -

Copyright Philipp Katz, 2019
