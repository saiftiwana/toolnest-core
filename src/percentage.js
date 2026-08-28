/**
 * @module percentage
 * Pure percentage utilities used across ToolNest calculators.
 */

/**
 * Value that a percent represents of a base value.
 * @param {number} value
 * @param {number} percent
 * @returns {number}
 */
export function percentOf(value, percent) {
  return (value * percent) / 100;
}

/**
 * Percentage change from an old value to a new value.
 * @param {number} oldValue
 * @param {number} newValue
 * @returns {number} percent change (positive = increase, negative = decrease)
 */
export function percentageChange(oldValue, newValue) {
  if (oldValue === 0) {
    throw new RangeError('oldValue must not be 0 (division by zero)');
  }
  return ((newValue - oldValue) / oldValue) * 100;
}

/**
 * Discounted price after applying a percentage discount.
 * @param {number} originalPrice
 * @param {number} discountPercent
 * @returns {{discountAmount: number, finalPrice: number}}
 */
export function discountedPrice(originalPrice, discountPercent) {
  if (originalPrice < 0 || discountPercent < 0) {
    throw new RangeError('originalPrice and discountPercent must be non-negative');
  }
  const discountAmount = percentOf(originalPrice, discountPercent);
  return { discountAmount, finalPrice: originalPrice - discountAmount };
}
