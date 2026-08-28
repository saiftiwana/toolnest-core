/**
 * @module grade
 * Pure academic grade/GPA utilities used across ToolNest education tools.
 */

/**
 * Calculate GPA from a list of courses.
 * @param {Array<{gradePoints: number, creditHours: number}>} courses
 * @returns {number} weighted GPA
 */
export function calculateGPA(courses) {
  if (!courses.length) throw new RangeError('courses must not be empty');
  let totalPoints = 0;
  let totalCredits = 0;
  for (const c of courses) {
    if (c.creditHours <= 0) throw new RangeError('creditHours must be greater than 0');
    totalPoints += c.gradePoints * c.creditHours;
    totalCredits += c.creditHours;
  }
  return totalPoints / totalCredits;
}

/**
 * Convert a percentage score to a common letter grade.
 * @param {number} percentage - 0-100
 * @returns {string} letter grade (A+, A, B+, B, C+, C, D, F)
 */
export function percentageToGrade(percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new RangeError('percentage must be between 0 and 100');
  }
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C+';
  if (percentage >= 40) return 'C';
  if (percentage >= 33) return 'D';
  return 'F';
}
