import test from 'node:test';
import assert from 'node:assert/strict';
import { simpleInterest, compoundInterest, emiCalculator } from '../src/finance.js';

test('simpleInterest computes interest and total', () => {
  const { interest, totalAmount } = simpleInterest({ principal: 1000, rate: 5, time: 2 });
  assert.equal(interest, 100);
  assert.equal(totalAmount, 1100);
});

test('simpleInterest rejects negative inputs', () => {
  assert.throws(() => simpleInterest({ principal: -1, rate: 5, time: 1 }), RangeError);
});

test('compoundInterest annual compounding matches known value', () => {
  const { totalAmount } = compoundInterest({ principal: 1000, rate: 10, time: 1, compoundsPerYear: 1 });
  assert.ok(Math.abs(totalAmount - 1100) < 1e-9);
});

test('compoundInterest monthly compounding grows faster than simple interest', () => {
  const compound = compoundInterest({ principal: 1000, rate: 12, time: 1, compoundsPerYear: 12 });
  const simple = simpleInterest({ principal: 1000, rate: 12, time: 1 });
  assert.ok(compound.interest > simple.interest);
});

test('emiCalculator computes a positive EMI for a standard loan', () => {
  const { emi, totalPayment, totalInterest } = emiCalculator({
    loanAmount: 100000,
    annualRatePercent: 10,
    tenureMonths: 12
  });
  assert.ok(emi > 0);
  assert.ok(Math.abs(totalPayment - emi * 12) < 1e-6);
  assert.ok(totalInterest > 0);
});

test('emiCalculator handles 0% interest as a straight division', () => {
  const { emi } = emiCalculator({ loanAmount: 12000, annualRatePercent: 0, tenureMonths: 12 });
  assert.equal(emi, 1000);
});

test('emiCalculator rejects zero/negative tenure', () => {
  assert.throws(() => emiCalculator({ loanAmount: 1000, annualRatePercent: 5, tenureMonths: 0 }), RangeError);
});
