import test from 'node:test';
import assert from 'node:assert/strict';
import { hexToRgb, rgbToHex } from '../src/color.js';

test('hexToRgb parses a standard 6-digit hex', () => {
  assert.deepEqual(hexToRgb('#3fb950'), { r: 63, g: 185, b: 80 });
});

test('hexToRgb parses without leading #', () => {
  assert.deepEqual(hexToRgb('3fb950'), { r: 63, g: 185, b: 80 });
});

test('hexToRgb expands 3-digit shorthand', () => {
  assert.deepEqual(hexToRgb('#0f0'), { r: 0, g: 255, b: 0 });
});

test('hexToRgb rejects invalid hex', () => {
  assert.throws(() => hexToRgb('#zzz123'), RangeError);
});

test('rgbToHex converts back correctly', () => {
  assert.equal(rgbToHex(63, 185, 80), '#3fb950');
});

test('rgbToHex rejects out-of-range values', () => {
  assert.throws(() => rgbToHex(300, 0, 0), RangeError);
});

test('hexToRgb -> rgbToHex round trip', () => {
  const { r, g, b } = hexToRgb('#58a6ff');
  assert.equal(rgbToHex(r, g, b), '#58a6ff');
});
