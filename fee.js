//mofidification made by chatgpt

function calculateLoanFee(days, dailyRate) {
  if (!Number.isInteger(days) || days <= 0) {
    throw new Error("Borrowing days must be a positive integer.");
  }

  if (!Number.isFinite(dailyRate) || dailyRate < 0) {
    throw new Error("Daily rate must be a finite, nonnegative number.");
  }

  return days * dailyRate;
}

const testCases = [
  { days: 3, dailyRate: 10, expected: 30 },
  { days: 1, dailyRate: 0, expected: 0 },
  { days: 0, dailyRate: 10, shouldThrow: true },
  { days: 2, dailyRate: -5, shouldThrow: true },
  { days: "3", dailyRate: 10, shouldThrow: true }
];

for (const [index, testCase] of testCases.entries()) {
  const label = `Test ${index + 1}`;

  try {
    const actual = calculateLoanFee(
      testCase.days,
      testCase.dailyRate
    );

    if (testCase.shouldThrow) {
      console.log(`${label}: FAIL — expected an error, received ${actual}`);
    } else if (actual === testCase.expected) {
      console.log(`${label}: PASS — returned ${actual}`);
    } else {
      console.log(
        `${label}: FAIL — expected ${testCase.expected}, received ${actual}`
      );
    }
  } catch (error) {
    if (testCase.shouldThrow && error instanceof Error) {
      console.log(`${label}: PASS — ${error.message}`);
    } else {
      console.log(`${label}: FAIL — unexpected error: ${error.message}`);
    }
  }
}
