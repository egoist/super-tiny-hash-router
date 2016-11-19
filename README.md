# super-tiny-hash-router [![NPM version](https://img.shields.io/npm/v/super-tiny-hash-router.svg?style=flat-square)](https://npmjs.com/package/super-tiny-hash-router) [![NPM downloads](https://img.shields.io/npm/dm/super-tiny-hash-router.svg?style=flat-square)](https://npmjs.com/package/super-tiny-hash-router) [![Build Status](https://img.shields.io/circleci/project/egoist/super-tiny-hash-router/master.svg?style=flat-square)](https://circleci.com/gh/egoist/super-tiny-hash-router)

bite-sized front-end router.

## Install

```bash
$ npm install --save super-tiny-hash-router
```

CDN version: https://unpkd.com/super-tiny-hash-router/dist/

## Usage

```js
import createRouter from 'super-tiny-hash-router'

const router = createRouter()

router.add('/', () => {
  renderHome()
})

router.add('*', () => {
  render404()
})

// home router and 404 router are required before calling router.init()
router.init()

router.go('/user/egoist')
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)