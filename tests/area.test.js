import test from 'node:test';
import assert from 'node:assert/strict';
import { convertArea, MARLA_STANDARDS } from '../src/area.js';

test('convertArea: marla to sqft using default (225) standard', () => {
  assert.equal(convertArea(1, 'marla', 'sqft'), 225);
});

test('convertArea: marla to sqft using older/regional (272.25) standard', () => {
  assert.equal(convertArea(1, 'marla', 'sqft', MARLA_STANDARDS.OLDER_REGIONAL), 272.25);
});

test('convertArea: 1 kanal equals 20 marla', () => {
  assert.ok(Math.abs(convertArea(1, 'kanal', 'marla') - 20) < 1e-9);
});

test('convertArea: acre to sqft is a fixed constant regardless of marla standard', () => {
  assert.equal(convertArea(1, 'acre', 'sqft'), 43560);
  assert.equal(convertArea(1, 'acre', 'sqft', MARLA_STANDARDS.OLDER_REGIONAL), 43560);
});

test('convertArea: round trip conversion returns original value', () => {
  const sqft = convertArea(5, 'marla', 'sqft');
  const back = convertArea(sqft, 'sqft', 'marla');
  assert.ok(Math.abs(back - 5) < 1e-9);
});

test('convertArea: rejects unknown unit', () => {
  assert.throws(() => convertArea(1, 'marla', 'bigha'), RangeError);
});

test('convertArea: rejects non-positive sqftPerMarla', () => {
  assert.throws(() => convertArea(1, 'marla', 'sqft', 0), RangeError);
});
