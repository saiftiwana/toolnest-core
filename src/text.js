/**
 * @module text
 * Pure text/data formatting utilities used across ToolNest text tools.
 */

/**
 * Count words in a string (whitespace-delimited, ignores empty tokens).
 * @param {string} text
 * @returns {number}
 */
export function wordCount(text) {
  const trimmed = String(text).trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
}

/**
 * Count characters in a string.
 * @param {string} text
 * @param {boolean} [includeSpaces=true]
 * @returns {number}
 */
export function charCount(text, includeSpaces = true) {
  const str = String(text);
  return includeSpaces ? str.length : str.replace(/\s/g, '').length;
}

/**
 * Estimate reading time in minutes for a given word count.
 * @param {number} words
 * @param {number} [wordsPerMinute=200]
 * @returns {number} minutes, rounded up to the nearest whole minute (minimum 1 for non-zero word counts)
 */
export function estimateReadingTimeMinutes(words, wordsPerMinute = 200) {
  if (words <= 0) return 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
