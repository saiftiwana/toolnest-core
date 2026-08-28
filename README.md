# toolnest-core

Reusable, dependency-free JavaScript utility functions powering [ToolNest](https://toolnest.link)'s 99+ free browser-based tools — calculators, converters, and formatters.

- Zero dependencies, zero build step (plain ES modules)
- Works in the browser (via CDN or bundler) and in Node.js 18+
- Every function is pure (same input → same output, no side effects, no network/DOM access)
- Fully unit tested with Node's built-in test runner

## Installation

### NPM

```bash
npm install toolnest-core
```

```js
import { simpleInterest, convertArea, hexToRgb } from 'toolnest-core';
```

### CDN (browser, no build step)

```html
<script type="module">
  import { simpleInterest } from 'https://cdn.jsdelivr.net/npm/toolnest-core/src/index.js';
</script>
```

## Modules

| Module | Functions | Used by (example ToolNest tool) |
|---|---|---|
| `finance.js` | `simpleInterest`, `compoundInterest`, `emiCalculator` | Simple & Compound Interest Calculator, Property Loan EMI & Mortgage Calculator |
| `percentage.js` | `percentOf`, `percentageChange`, `discountedPrice` | Discount & Scholarship Calculator, Sales Tax / GST Calculator |
| `area.js` | `convertArea`, `MARLA_STANDARDS` | Land & Plot Toolkit |
| `color.js` | `hexToRgb`, `rgbToHex` | Color Toolkit, HEX ↔ RGB Converter |
| `date.js` | `calculateAge` | Age Calculator for School |
| `text.js` | `wordCount`, `charCount`, `estimateReadingTimeMinutes` | Word & Character Counter |
| `stats.js` | `mean`, `variance`, `standardDeviation` | Standard Deviation Calculator |
| `grade.js` | `calculateGPA`, `percentageToGrade` | Student Academic Toolkit, Marks & Final Grade Calculator |

See [`examples/basic-usage.js`](./examples/basic-usage.js) for runnable examples of every function.

## Usage examples

```js
import { simpleInterest, emiCalculator, convertArea, hexToRgb, calculateAge } from 'toolnest-core';

simpleInterest({ principal: 1000, rate: 5, time: 2 });
// -> { interest: 100, totalAmount: 1100 }

emiCalculator({ loanAmount: 500000, annualRatePercent: 9, tenureMonths: 60 });
// -> { emi: 10379.85..., totalPayment: ..., totalInterest: ... }

convertArea(1, 'marla', 'sqft');
// -> 225   (ToolNest default Marla standard; pass MARLA_STANDARDS.OLDER_REGIONAL for 272.25)

hexToRgb('#3fb950');
// -> { r: 63, g: 185, b: 80 }

calculateAge('2000-05-15', '2026-08-28');
// -> { years: 26, months: 3, days: 13, totalDays: ... }
```

## Error handling

Every function validates its inputs and throws a `RangeError` with a clear message on invalid input (negative amounts, empty arrays, unknown units, etc.) instead of returning `NaN` or silently failing.

```js
try {
  simpleInterest({ principal: -100, rate: 5, time: 1 });
} catch (e) {
  console.error(e.message); // "principal, rate and time must be non-negative"
}
```

## Testing

```bash
npm test
```

Runs the full suite via Node's built-in test runner (`node --test`). No test framework dependency required.

## Versioning

This package follows [Semantic Versioning](https://semver.org/). See [`CHANGELOG.md`](./CHANGELOG.md) for release history. Breaking changes will always bump the MAJOR version and include migration notes.

## Design principles

- **Deterministic only.** No AI, no randomness, no network calls — same input always produces the same output.
- **No duplicated logic.** Formulas here mirror the ones used live on [toolnest.link](https://toolnest.link) (e.g. `area.js`'s Marla standard matches the Land & Plot Toolkit exactly) so results never drift apart.
- **Privacy by construction.** These functions never read, write, or transmit data anywhere — everything happens in memory, wherever you run them.

## License

MIT — see [`LICENSE`](./LICENSE).
