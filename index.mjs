// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r,s,i){var a,m;if(!e(r))throw new TypeError(n("invalid argument. First argument must be a function. Value: `%s`.",r));if(!t(s))throw new TypeError(n("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",s));for(a=[],m=0;m<s;m++)a.push(r.call(i,m));return a}export{r as default};
//# sourceMappingURL=index.mjs.map
