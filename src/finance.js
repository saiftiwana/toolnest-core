/**
 * @module finance
 * Pure, dependency-free finance formulas used across ToolNest calculators.
 */

/**
 * Simple interest.
 * @param {Object} p
 * @param {number} p.principal
 * @param {number} p.rate - annual rate in percent (e.g. 5 for 5%)
 * @param {number} p.time - time in years
 * @returns {{interest: number, totalAmount: number}}
 */
export function simpleInterest({ principal, rate, time }) {
  if (principal < 0 || rate < 0 || time < 0) {
    throw new RangeError('principal, rate and time must be non-negative');
  }
  const interest = (principal * rate * time) / 100;
  return { interest, totalAmount: principal + interest };
}

/**
 * Compound interest.
 * @param {Object} p
 * @param {number} p.principal
 * @param {number} p.rate - annual rate in percent
 * @param {number} p.time - time in years
 * @param {number} [p.compoundsPerYear=1] - compounding frequency per year
 * @returns {{interest: number, totalAmount: number}}
 */
export function compoundInterest({ principal, rate, time, compoundsPerYear = 1 }) {
  if (principal < 0 || rate < 0 || time < 0 || compoundsPerYear <= 0) {
    throw new RangeError('principal, rate and time must be non-negative and compoundsPerYear must be > 0');
  }
  const totalAmount =
    principal * Math.pow(1 + rate / 100 / compoundsPerYear, compoundsPerYear * time);
  return { interest: totalAmount - principal, totalAmount };
}

/**
 * Monthly loan EMI (Equated Monthly Installment).
 * @param {Object} p
 * @param {number} p.loanAmount
 * @param {number} p.annualRatePercent - annual interest rate in percent
 * @param {number} p.tenureMonths - loan tenure in months
 * @returns {{emi: number, totalPayment: number, totalInterest: number}}
 */
export function emiCalculator({ loanAmount, annualRatePercent, tenureMonths }) {
  if (loanAmount < 0 || annualRatePercent < 0 || tenureMonths <= 0) {
    throw new RangeError('loanAmount and annualRatePercent must be non-negative, tenureMonths must be > 0');
  }
  const monthlyRate = annualRatePercent / 12 / 100;
  let emi;
  if (monthlyRate === 0) {
    emi = loanAmount / tenureMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, tenureMonths);
    emi = (loanAmount * monthlyRate * factor) / (factor - 1);
  }
  const totalPayment = emi * tenureMonths;
  return { emi, totalPayment, totalInterest: totalPayment - loanAmount };
}
