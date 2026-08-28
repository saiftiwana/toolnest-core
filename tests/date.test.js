import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAge } from '../src/date.js';

test('calculateAge computes exact years/months/days', () => {
  const age = calculateAge('2000-05-15', '2026-08-28');
  assert.equal(age.years, 26);
  assert.equal(age.months, 3);
  assert.equal(age.days, 13);
});

test('calculateAge handles same-day birthday', () => {
  const age = calculateAge('2000-08-28', '2026-08-28');
  assert.equal(age.years, 26);
  assert.equal(age.months, 0);
  assert.equal(age.days, 0);
});

test('calculateAge rejects birthDate after referenceDate', () => {
  assert.throws(() => calculateAge('2027-01-01', '2026-08-28'), RangeError);
});

test('calculateAge rejects invalid dates', () => {
  assert.throws(() => calculateAge('not-a-date', '2026-08-28'), RangeError);
});
