import test from 'node:test';
import assert from 'node:assert/strict';
import { mean, variance, standardDeviation } from '../src/stats.js';

test('mean computes arithmetic average', () => {
  assert.equal(mean([2, 4, 6, 8]), 5);
});

test('mean rejects empty array', () => {
  assert.throws(() => mean([]), RangeError);
});

test('variance: sample vs population differ by Bessel correction', () => {
  const values = [2, 4, 4, 4, 5, 5, 7, 9];
  const sampleVar = variance(values, false);
  const popVar = variance(values, true);
  assert.ok(sampleVar > popVar);
});

test('standardDeviation matches known textbook example', () => {
  const values = [2, 4, 4, 4, 5, 5, 7, 9];
  const sd = standardDeviation(values, true);
  assert.ok(Math.abs(sd - 2) < 1e-9);
});

test('variance rejects fewer than 2 values', () => {
  assert.throws(() => variance([5]), RangeError);
});
