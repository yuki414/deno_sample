// import時には特定のバージョンを指定する

// std/path
import {
  posix,
  extname,
  resolve,
} from 'https://deno.land/std@0.137.0/path/mod.ts';

console.log(posix.join('dist', 'index.html'));
console.log(extname('public/index.html')); // => ".html"
console.log(resolve('public/index.html'));

// std/test
import {
  assert,
  assertEquals,
  assertNotEquals,
  assertMatch,
} from 'https://deno.land/std@0.137.0/testing/asserts.ts';
const num = 15;
assert(num % 3 === 0);
// assert(num % 2 === 0); NG case. Raise error
assertEquals(15, num);
assertEquals({ foo: 15, bar: 'baz' }, { foo: num, bar: 'baz' });
assertNotEquals({ foo: 15, bar: 'baz' }, { fo: num, bar: 'bazz' });
assertMatch('foobar', /bar$/); // => OK
