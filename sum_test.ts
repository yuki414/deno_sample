import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";
import { sum } from "./sum.ts";
// deno test

Deno.test("sum() adds given numbers", () => {
  const actual = sum(1, 2);
  const expected = 3;
  assertEquals(actual, expected);
});

Deno.test("sum() returns 0 when no arguments given", () => {
  const actual = sum();
  const expected = 0;
  assertEquals(actual, expected);
});
