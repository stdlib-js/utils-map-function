// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=e,i=t.isPrimitive,s=r;var a=function(e,t,r){var a,m;if(!n(e))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",e));if(!i(t))throw new TypeError(s("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));for(a=[],m=0;m<t;m++)a.push(e.call(r,m));return a};export{a as default};
//# sourceMappingURL=index.mjs.map
