/**
 * @module stats
 * Pure statistics utilities used across ToolNest calculators.
 */

/**
 * Arithmetic mean of a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
export function mean(values) {
  if (!values.length) throw new RangeError('values must not be empty');
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/**
 * Variance of a list of numbers.
 * @param {number[]} values
 * @param {boolean} [population=false] - true for population variance (÷n), false for sample variance (÷n-1)
 * @returns {number}
 */
export function variance(values, population = false) {
  if (values.length < 2) throw new RangeError('values must contain at least 2 numbers');
  const m = mean(values);
  const sumSquares = values.reduce((acc, v) => acc + (v - m) ** 2, 0);
  const denominator = population ? values.length : values.length - 1;
  return sumSquares / denominator;
}

/**
 * Standard deviation of a list of numbers.
 * @param {number[]} values
 * @param {boolean} [population=false] - true for population standard deviation, false for sample
 * @returns {number}
 */
export function standardDeviation(values, population = false) {
  return Math.sqrt(variance(values, population));
}
