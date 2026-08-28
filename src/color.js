/**
 * @module color
 * Pure color conversion utilities (no DOM/browser APIs required).
 */

/**
 * Convert a HEX color string to RGB.
 * @param {string} hex - e.g. "#3fb950" or "3fb950" or shorthand "#3f5"
 * @returns {{r: number, g: number, b: number}}
 */
export function hexToRgb(hex) {
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) {
    h = h.split('').map((c) => c + c).join('');
  }
  if (!/^[0-9a-fA-F]{6}$/.test(h)) {
    throw new RangeError(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16)
  };
}

/**
 * Convert RGB values to a HEX color string.
 * @param {number} r - 0-255
 * @param {number} g - 0-255
 * @param {number} b - 0-255
 * @returns {string} e.g. "#3fb950"
 */
export function rgbToHex(r, g, b) {
  for (const [name, v] of [['r', r], ['g', g], ['b', b]]) {
    if (v < 0 || v > 255 || !Number.isFinite(v)) {
      throw new RangeError(`${name} must be a number between 0 and 255`);
    }
  }
  const toHex = (v) => Math.round(v).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
