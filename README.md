# Fakefile

A Universal Makefile for JavaScript that proxies to your npm scripts. 

## Why 

This gets us the best of both worlds. Codify your tasks in a system (npm scripts) that won't be obsolete within the year, that's straightforward to people on Windows (they can ignore the Makefile and use `npm run`), and unix folks alike. In any repo I maintain, no matter the language, `make <something>` gets me what I want without thinking twice.

I wrote a [blog post](http://kvz.io/blog/2016/02/18/a-universal-makefile-for-javascript/) that goes into more detail why this makes for a great JavaScript task running environment.

## Use 

After installing you can type `mak<TAB><TAB>` for [autocompletion](http://davidalger.com/development/bash-completion-on-os-x-with-brew/), and Fakefile quickly enumerates any npm scripts in your `package.json` and presents these. It does this `make` at runtime, so it won't need any maintenance as your project changes its npm scripts.

Run `make test` and the command is passed onto `npm run test` that should do the lower-level plumbing.

Makefiles can't handle `:` characters well so it will offer `npm run build:production` to you as `make build-production`.

## Install

```bash
npm install --save-exact fakefile
```

This will save a Makefile into your project root. 

If the installer detects a Makefile it does not recognize by its sha1 hash, it will warn you instead of overwriting it. This gives you a chance to port any existing Makefile logic to npm scripts, after which you can safely remove your original Makefile and rerun the installation, this time successfully installing Fakefile. The installer is happy to overwrite known sha1s, so that we can upgrade should the need arise.

## Authors

- Kevin van Zonneveld (<http://kvz.io>)

## Sponsoring

<!-- badges/ -->
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=green)](https://flattr.com/submit/auto?user_id=kvz&url=https://github.com/kvz/bash3boilerplate&title=bash3boilerplate&language=&tags=github&category=software "Sponsor the development of bash3boilerplate via Flattr")
<!-- /badges -->

## License

Copyright (c) 2013 Kevin van Zonneveld, [http://kvz.io](http://kvz.io)  
Licensed under MIT: [http://kvz.io/licenses/LICENSE-MIT](http://kvz.io/licenses/LICENSE-MIT)
