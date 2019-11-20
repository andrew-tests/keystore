[![Build Status](https://travis-ci.org/andrew-tests/keystore.svg?branch=master)](https://travis-ci.org/andrew-tests/keystore)
[![Maintainability](https://api.codeclimate.com/v1/badges/f5615a9c55b3d9574ea3/maintainability)](https://codeclimate.com/github/andrew-tests/keystore/maintainability)

## Instructions

    $ npm install
    $ npm test
    $ npm run coverage

# Store API

    $ npm run store help
    $ npm run store add mykey myvalue
    $ npm run store list
    $ npm run store get mykey
    $ npm run store remove mykey

### Contents of .gitignore

    .vscode
    node_modules
    coverage
    store.json
    test.json

### Contents of .prettierrc

    {
      "trailingComma": "all",
      "arrowParens": "always",
      "semi": true,
      "singleQuote": true
    }

### Demo Images

#### Operations

![Preview1](./1.png)

#### Tests

![Preview2](./2.png)