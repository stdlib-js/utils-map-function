/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var mapFun = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mapFun, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapFun( value, 10 );
		};
	}
});

tape( 'the function throws an error if not provided a second argument which is a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapFun( noop, value );
		};
	}
});

tape( 'the function invokes a function a specified number of times and returns an array of accumulated function return values', function test( t ) {
	var expected;
	var actual;

	function fcn( i ) {
		return i;
	}

	expected = [ 0, 1, 2, 3, 4 ];
	actual = mapFun( fcn, 5 );

	t.deepEqual( actual, expected, 'returns expected results' );
	t.end();
});

tape( 'the function supports providing an execution context for the invoked function', function test( t ) {
	var expected;
	var actual;
	var ctx;

	function fcn( i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return i;
	}

	ctx = {
		'count': 0
	};
	expected = [ 0, 1, 2, 3, 4 ];
	actual = mapFun( fcn, 5, ctx );

	t.deepEqual( actual, expected, 'returns expected results' );
	t.strictEqual( ctx.count, 5, 'updates context' );

	t.end();
});

tape( 'the function returns an array containing `undefined` values if an invoked function does not return anything', function test( t ) {
	var expected;
	var actual;

	expected = [ void 0, void 0, void 0, void 0, void 0 ];
	actual = mapFun( noop, 5 );

	t.deepEqual( actual, expected, 'returns expected results' );
	t.end();
});
