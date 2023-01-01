<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# mapFun

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function `n` times and return an array of accumulated function return values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mapFun = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-function@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mapFun = require( 'path/to/vendor/umd/utils-map-function/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-function@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mapFun;
})();
</script>
```

#### mapFun( fcn, n\[, thisArg ] )

Invokes a function `n` times and returns an `array` of accumulated function return values.

```javascript
function fcn( i ) {
    return i;
}

var arr = mapFun( fcn, 5 );
// returns [ 0, 1, 2, 3, 4 ]
```

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( i ) {
    this.count += 1;
    return i;
}

var context = {
    'count': 0
};

var arr = mapFun( fcn, 5, context );
// returns [ 0, 1, 2, 3, 4 ]

console.log( context.count );
// => 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The invoked `function` is provided a single argument: the invocation index (zero-based).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-function@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function rand( i ) {
    return randu() * i * 10.0;
}

var arr = mapFun( rand, 100 );
console.log( arr );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/async/map-function`][@stdlib/utils/async/map-function]</span><span class="delimiter">: </span><span class="description">invoke a function n times and return an array of accumulated function return values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map-function

[test-image]: https://github.com/stdlib-js/utils-map-function/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-map-function/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map-function/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-map-function/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-map-function/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-map-function/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map-function/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/async/map-function]: https://github.com/stdlib-js/utils-async-map-function/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
