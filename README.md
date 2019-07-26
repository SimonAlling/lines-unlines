# lines-unlines

Haskell's [`lines`][haskell-lines] and [`unlines`][haskell-unlines] in TypeScript.

[![NPM Version][shield-npm]][npm-url]
[![Downloads Stats][shield-downloads]][npm-url]


## Installation

```
npm install --save lines-unlines
```


## Usage

```typescript
import { lines, unlines } from "lines-unlines";

lines("one\ntwo\n"); // ["one","two"]

unlines(["one", "two"]); // "one\ntwo\n"
```

For details, refer to [the Haskell documentation][haskell-lines].
Note in particular that `lines` is _not_ the same function as `_ => _.split("\n")`, and `unlines` is _not_ the same as `_ => _.join("\n")`.

Note also that, strictly speaking, neither `lines` nor `unlines` is the other's inverse, even though Hackage (as of 2019‑07‑26) says that "`unlines` is an inverse operation to `lines`".
For example, `unlines (lines "a")` evaluates to `"a\n"`, and `lines (unlines ["\n"])` evaluates to `["", ""]`.


## Contribute

`npm run verify` lints, builds and tests the package.

Test cases can be generated using GHCi* (Haskell's REPL, included in the [Haskell Platform](https://www.haskell.org/downloads/)):

```
$ ghci Spec.hs
*Main> spec lines ["", "one"]
*Main> spec unlines [[], ["one"]]
```

The output can then be pasted into `index.test.ts`.

<small>* If you have the [Nix package manager](https://nixos.org/nix/), you can run `nix-shell` to get a shell with `ghci` on the path.</small>


[haskell-lines]: http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-String.html#v:lines
[haskell-unlines]: http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-String.html#v:unlines

[npm-url]: https://npmjs.org/package/lines-unlines
[shield-npm]: https://img.shields.io/npm/v/lines-unlines.svg
[shield-downloads]: https://img.shields.io/npm/dm/lines-unlines.svg
