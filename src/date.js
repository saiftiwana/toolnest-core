/**
 * @module date
 * Pure date utilities used across ToolNest calculators.
 */

/**
 * Calculate exact age (years, months, days) between a birth date and a
 * reference date (defaults to now).
 * @param {string|Date} birthDate
 * @param {string|Date} [referenceDate=new Date()]
 * @returns {{years: number, months: number, days: number, totalDays: number}}
 */
export function calculateAge(birthDate, referenceDate = new Date()) {
  const birth = birthDate instanceof Date ? birthDate : new Date(birthDate);
  const ref = referenceDate instanceof Date ? referenceDate : new Date(referenceDate);

  if (Number.isNaN(birth.getTime()) || Number.isNaN(ref.getTime())) {
    throw new RangeError('birthDate and referenceDate must be valid dates');
  }
  if (birth > ref) {
    throw new RangeError('birthDate must not be after referenceDate');
  }

  let years = ref.getFullYear() - birth.getFullYear();
  let months = ref.getMonth() - birth.getMonth();
  let days = ref.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(ref.getFullYear(), ref.getMonth(), 0).getDate();
    days += prevMonth;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.floor((ref.getTime() - birth.getTime()) / msPerDay);

  return { years, months, days, totalDays };
}
