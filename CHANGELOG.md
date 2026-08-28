# Changelog

All notable changes to `toolnest-core` are documented here.
This project follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

## [1.0.0] - 2026-08-28

### Added
- Initial release as part of ToolNest Phase 9 (Developer Ecosystem).
- `finance.js`: `simpleInterest`, `compoundInterest`, `emiCalculator`
- `percentage.js`: `percentOf`, `percentageChange`, `discountedPrice`
- `area.js`: `convertArea`, `MARLA_STANDARDS` (matches Land & Plot Toolkit conversion constants)
- `color.js`: `hexToRgb`, `rgbToHex`
- `date.js`: `calculateAge`
- `text.js`: `wordCount`, `charCount`, `estimateReadingTimeMinutes`
- `stats.js`: `mean`, `variance`, `standardDeviation`
- `grade.js`: `calculateGPA`, `percentageToGrade`
- Full unit test suite (44 tests) via Node's built-in test runner, zero test-framework dependency.
- `examples/basic-usage.js` runnable usage examples for every exported function.
