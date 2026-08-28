/**
 * Runnable examples for every function in toolnest-core.
 * Run with: node examples/basic-usage.js
 */
import {
  simpleInterest,
  compoundInterest,
  emiCalculator,
  percentOf,
  percentageChange,
  discountedPrice,
  convertArea,
  MARLA_STANDARDS,
  hexToRgb,
  rgbToHex,
  calculateAge,
  wordCount,
  charCount,
  estimateReadingTimeMinutes,
  mean,
  variance,
  standardDeviation,
  calculateGPA,
  percentageToGrade
} from '../src/index.js';

console.log('--- finance.js ---');
console.log('simpleInterest:', simpleInterest({ principal: 1000, rate: 5, time: 2 }));
console.log('compoundInterest:', compoundInterest({ principal: 1000, rate: 10, time: 2, compoundsPerYear: 4 }));
console.log('emiCalculator:', emiCalculator({ loanAmount: 500000, annualRatePercent: 9, tenureMonths: 60 }));

console.log('\n--- percentage.js ---');
console.log('percentOf(200, 15):', percentOf(200, 15));
console.log('percentageChange(100, 130):', percentageChange(100, 130));
console.log('discountedPrice(1000, 25):', discountedPrice(1000, 25));

console.log('\n--- area.js ---');
console.log('1 Marla in sq ft (default 225 standard):', convertArea(1, 'marla', 'sqft'));
console.log('1 Marla in sq ft (272.25 standard):', convertArea(1, 'marla', 'sqft', MARLA_STANDARDS.OLDER_REGIONAL));
console.log('5 Kanal in Acre:', convertArea(5, 'kanal', 'acre'));

console.log('\n--- color.js ---');
console.log('hexToRgb("#58a6ff"):', hexToRgb('#58a6ff'));
console.log('rgbToHex(63, 185, 80):', rgbToHex(63, 185, 80));

console.log('\n--- date.js ---');
console.log('calculateAge("2000-05-15", "2026-08-28"):', calculateAge('2000-05-15', '2026-08-28'));

console.log('\n--- text.js ---');
console.log('wordCount("ToolNest is a free tool ecosystem"):', wordCount('ToolNest is a free tool ecosystem'));
console.log('charCount("hello world", false):', charCount('hello world', false));
console.log('estimateReadingTimeMinutes(600):', estimateReadingTimeMinutes(600));

console.log('\n--- stats.js ---');
const marks = [78, 85, 62, 90, 74];
console.log('mean:', mean(marks));
console.log('variance (sample):', variance(marks));
console.log('standardDeviation (sample):', standardDeviation(marks));

console.log('\n--- grade.js ---');
console.log('calculateGPA:', calculateGPA([
  { gradePoints: 4.0, creditHours: 3 },
  { gradePoints: 3.3, creditHours: 4 },
  { gradePoints: 3.7, creditHours: 3 }
]));
console.log('percentageToGrade(82):', percentageToGrade(82));
