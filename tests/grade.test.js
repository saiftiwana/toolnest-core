import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateGPA, percentageToGrade } from '../src/grade.js';

test('calculateGPA computes credit-weighted average', () => {
  const gpa = calculateGPA([
    { gradePoints: 4.0, creditHours: 3 },
    { gradePoints: 3.0, creditHours: 3 },
    { gradePoints: 3.5, creditHours: 2 }
  ]);
  // (4*3 + 3*3 + 3.5*2) / 8 = 28/8 = 3.5
  assert.ok(Math.abs(gpa - 3.5) < 1e-9);
});

test('calculateGPA rejects empty course list', () => {
  assert.throws(() => calculateGPA([]), RangeError);
});

test('calculateGPA rejects zero credit hours', () => {
  assert.throws(() => calculateGPA([{ gradePoints: 4, creditHours: 0 }]), RangeError);
});

test('percentageToGrade maps common bands correctly', () => {
  assert.equal(percentageToGrade(95), 'A+');
  assert.equal(percentageToGrade(85), 'A');
  assert.equal(percentageToGrade(75), 'B+');
  assert.equal(percentageToGrade(65), 'B');
  assert.equal(percentageToGrade(55), 'C+');
  assert.equal(percentageToGrade(45), 'C');
  assert.equal(percentageToGrade(35), 'D');
  assert.equal(percentageToGrade(20), 'F');
});

test('percentageToGrade rejects out-of-range input', () => {
  assert.throws(() => percentageToGrade(150), RangeError);
});
