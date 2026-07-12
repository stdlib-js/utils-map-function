"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=s(function(c,n){
var v=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r,t){var a,i;if(!v(e))throw new TypeError(u('1VH3c',e));if(!m(r))throw new TypeError(u('1VH3X',r));for(a=[],i=0;i<r;i++)a.push(e.call(t,i));return a}n.exports=g
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
