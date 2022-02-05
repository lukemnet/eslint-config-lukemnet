# eslint-config-lukemnet

[![Build status](https://ci.appveyor.com/api/projects/status/ntnhq38j3vcc99if/branch/master?svg=true)](https://ci.appveyor.com/project/lwojcik/eslint-config-lukemnet/branch/master)
[![npm (tag)](https://img.shields.io/npm/v/eslint-config-lukemnet/latest)](https://www.npmjs.com/package/eslint-config-lukemnet)

Opinionated ESLint config with TypeScript and Prettier support for React and Node.js projects.

Heavily inspired by [eslint-config-airbnb-typescript-prettier](https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier) by [Toshihisa Tomatsu](https://github.com/toshi-toma) and [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) by [Matt Turnbull](https://github.com/iamturns).

## Install

```bash
$ npm install  --save-dev typescript eslint prettier eslint-config-lukemnet
```

Add to `.eslintrc.js`:

```js
module.exports = {
  extends: "lukemnet",
};
```

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/eslint-config-lukemnet/blob/master/LICENSE) for more information.
