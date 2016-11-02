# eslint-config-ggc
ESLint shareable config based on [Green Global's JavaScript Style Guide](https://github.com/greenglobal/node-style-guide)


[![NPM](https://badge.fury.io/js/eslint-config-ggc.svg)](https://badge.fury.io/js/eslint-config-ggc)
[![Build Status](https://travis-ci.org/greenglobal/eslint-config-ggc.svg?branch=master)](https://travis-ci.org/greenglobal/eslint-config-ggc)


# Usage

In order to use this shareable config you have to install the package "eslint-config-ggc" into your project:

```
npm install --save-dev eslint-config-ggc
```

Then, create ESLint config file named ".eslintrc.json" (or edit if it exists). The content is short as below:

*.eslintrc.json*
```
{
  "extends": "eslint-config-ggc"
}
```

That's all. It will works.

Sometimes [the rules we shared](https://github.com/greenglobal/eslint-config-ggc/blob/master/.eslintrc.json) may be not enough for you. Just add more or overwrite them with your own rules by modifying ".eslintrc.json". For example:

*.eslintrc.json*
```
{
  "env": {
    "browser": false,
    "node": true,
    "es6": true
  },

  "globals": {
    "goog": true,
    "mocha": true,
    "Polymer": true
  },

  "plugins": [
    "fp"
  ],

  "extends": "eslint-config-ggc",

  rules: {
    "fp/no-arguments": "error",
    "fp/no-class": "error",
    "max-lines": 400,
    "semi": [2, "always"]
  }
}
```

You will often want to add the commands to package.json, here is a sample:

```
{
  "name": "sample",
  "version": "0.0.1",
  "description": "A sample for using eslint and eslint-config-ggc",
  "engines": {
    "node": ">= 6.0"
  },
  "scripts": {
    "lint": "eslint ./src"
  },
  "devDependencies": {
    "eslint": "latest",
    "eslint-config-ggc": "latest"
  },
  "license": "MIT"
}

```

As you can see, we need 2 packages "eslint" and "eslint-config-ggc". After installing them with "npm install", you can check your convention with "npm run lint" command.

# References:

- [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)
- [Green Global's JavaScript Style Guide](https://github.com/greenglobal/node-style-guide)



# License

The MIT License (MIT)
