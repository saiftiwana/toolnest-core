/**
 * @module area
 * Land/area unit conversions. Constants mirror the ones used in
 * ToolNest's Land & Plot Toolkit (land-plot-toolkit.html) so results
 * stay consistent between the website and this library.
 */

/** Common Marla standards used in Pakistan/India (sq ft per Marla). */
export const MARLA_STANDARDS = {
  STANDARD: 225, // ToolNest default
  OLDER_REGIONAL: 272.25
};

/**
 * Build the sq-ft conversion table for a given Marla standard.
 * @param {number} [sqftPerMarla=225]
 * @returns {Record<string, number>}
 */
function unitsToSqft(sqftPerMarla = MARLA_STANDARDS.STANDARD) {
  return {
    marla: sqftPerMarla,
    kanal: sqftPerMarla * 20,
    acre: 43560,
    hectare: 107639,
    sqft: 1,
    sqyd: 9,
    sqm: 10.7639
  };
}

/**
 * Convert an area value between units.
 * @param {number} value
 * @param {string} fromUnit - one of marla, kanal, acre, hectare, sqft, sqyd, sqm
 * @param {string} toUnit - same set as fromUnit
 * @param {number} [sqftPerMarla=225] - Marla standard to use (see MARLA_STANDARDS)
 * @returns {number}
 */
export function convertArea(value, fromUnit, toUnit, sqftPerMarla = MARLA_STANDARDS.STANDARD) {
  if (sqftPerMarla <= 0) {
    throw new RangeError('sqftPerMarla must be greater than 0');
  }
  const table = unitsToSqft(sqftPerMarla);
  if (!(fromUnit in table) || !(toUnit in table)) {
    throw new RangeError(`Unknown unit. Supported units: ${Object.keys(table).join(', ')}`);
  }
  const sqft = value * table[fromUnit];
  return sqft / table[toUnit];
}
