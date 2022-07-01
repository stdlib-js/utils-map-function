// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e,i,n){var o,d;if(!r(e))throw new TypeError(t("0kU3p",e));if(!s(i))throw new TypeError(t("0kU3k",i));for(o=[],d=0;d<i;d++)o.push(e.call(n,d));return o}export{e as default};
//# sourceMappingURL=index.mjs.map
