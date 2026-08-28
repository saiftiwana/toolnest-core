import test from 'node:test';
import assert from 'node:assert/strict';
import { wordCount, charCount, estimateReadingTimeMinutes } from '../src/text.js';

test('wordCount counts whitespace-separated words', () => {
  assert.equal(wordCount('Hello world from ToolNest'), 4);
});

test('wordCount returns 0 for empty/whitespace-only string', () => {
  assert.equal(wordCount('   '), 0);
  assert.equal(wordCount(''), 0);
});

test('charCount includes spaces by default', () => {
  assert.equal(charCount('ab cd'), 5);
});

test('charCount excludes whitespace when requested', () => {
  assert.equal(charCount('ab cd', false), 4);
});

test('estimateReadingTimeMinutes rounds up and has a 1-minute floor', () => {
  assert.equal(estimateReadingTimeMinutes(50, 200), 1);
  assert.equal(estimateReadingTimeMinutes(450, 200), 3);
  assert.equal(estimateReadingTimeMinutes(0), 0);
});
