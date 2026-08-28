import test from 'node:test';
import assert from 'node:assert/strict';
import { percentOf, percentageChange, discountedPrice } from '../src/percentage.js';

test('percentOf computes correct value', () => {
  assert.equal(percentOf(200, 10), 20);
});

test('percentageChange computes increase and decrease', () => {
  assert.equal(percentageChange(100, 150), 50);
  assert.equal(percentageChange(200, 100), -50);
});

test('percentageChange rejects zero base', () => {
  assert.throws(() => percentageChange(0, 10), RangeError);
});

test('discountedPrice computes discount amount and final price', () => {
  const { discountAmount, finalPrice } = discountedPrice(1000, 20);
  assert.equal(discountAmount, 200);
  assert.equal(finalPrice, 800);
});
