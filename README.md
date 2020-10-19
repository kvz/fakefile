# Fakefile

A Universal Makefile for JavaScript projects that proxies to your npm scripts. 

## How

After installing, you can type `mak<TAB><TAB>` for [autocompletion](https://davidalger.com/posts/bash-completion-on-os-x-with-brew/). Fakefile then quickly enumerates any npm scripts in your `package.json` and presents these. It does this at runtime, so it won't need any maintenance as your project changes its npm scripts.

## Why 

This gets us the best of both worlds. Codify your tasks in a system (npm scripts) that won't be obsolete within the year, that's straightforward to people on Windows (they can ignore the Makefile and use `npm run` or `yarn`), and unix folks alike. 

- Profit from instant autocomplete (Makefile's autocomplete is much faster than npm's)
- Offer polite and consistent convenience shortcuts to non-js folk into your project.

I wrote a [blog post](https://kvz.io/blog/2016/02/18/a-universal-makefile-for-javascript/) that goes into more detail why this makes for a great JavaScript task running environment.

## Usage 

After installing into your project, you can type `make test` which will map to `npm run test` or `yarn test` depending on wether you have a `yarn.lock` file in your project root.

Makefiles cannot handle `:` characters well so it will offer `npm run build:production` to you as `make build-production`. 

## Install

First, make sure Makefiles [autocomplete](https://davidalger.com/posts/bash-completion-on-os-x-with-brew/) on your system. Then install via:

```bash
yarn add fakefile # or: npm i fakefile
```

This will save a `./Makefile` into your project root. 

If the installer detects a Makefile that it does not recognize by its sha1 hash, it will warn you instead of overwriting it. The installer is happy to overwrite known sha1s, so that we can upgrade Makefiles that weren't customized by you.

## Contributors

- [Kevin van Zonneveld](https://kvz.io)
- [@Jarvie8176](https://github.com/Jarvie8176)

## License

Copyright (c) 2016 Kevin van Zonneveld, [https://kvz.io](https://kvz.io)  
Licensed under MIT: [https://kvz.io/licenses/LICENSE-MIT](https://kvz.io/licenses/LICENSE-MIT)
