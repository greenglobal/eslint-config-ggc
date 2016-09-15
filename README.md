# eslint-config-ggc
ESLint shareable config based on [Green Global's JavaScript Style Guide](https://github.com/greenglobal/node-style-guide)


[![NPM](https://badge.fury.io/js/eslint-config-ggc.svg)](https://badge.fury.io/js/eslint-config-ggc)
![Travis](https://travis-ci.org/greenglobal/eslint-config-ggc.svg?branch=master)


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

Sometimes [the rules we shared](https://github.com/greenglobal/eslint-config-ggc/blob/master/.eslintrc.json) are not enough for you. Just add more or overwrite them with your own rules by modifying ".eslintrc.json". For example:

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


# References:

- [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)
- [Green Global's JavaScript Style Guide](https://github.com/greenglobal/node-style-guide)



# License

The MIT License (MIT)
