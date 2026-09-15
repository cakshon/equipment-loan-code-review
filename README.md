# Equipment Loan Fee — Code Review Coursework

**Course:** COMP3028 — Software Construction  
**Assessment:** Individual coding with paired peer review  
**Total:** 10 marks

## Overview

A university laboratory charges a daily fee for borrowing equipment. The function below calculates the total fee but needs review and improvement before it is accepted.

This introductory exercise focuses on readable code, input validation, simple checks, and constructive peer feedback. Complete the programming work in **one JavaScript file**. No database, external packages, or testing framework is required.

## Starter code

Create a file named `fee.js` and copy this code into it:

```javascript
function fee(d, r) {
  let total = d * r;
  console.log(total);
  return total;
}
```

Here, `d` represents borrowing days and `r` represents the daily rate. The starter intentionally lacks some required behaviour; students must improve it.

## Task 1: Review the original code

Identify **three concerns**, explain why each matters, and suggest an improvement. Consider:

- Function and parameter names.
- Validation of input values.
- Unnecessary console output.

Recognise that multiplication already produces the expected total for valid ordinary inputs.

## Task 2: Improve the function

Your revised function must:

1. Use a descriptive function name and meaningful parameter names.
2. Accept borrowing days only as a positive integer number.
3. Accept the daily rate only as a finite, nonnegative number.
4. Throw an `Error` with a clear message when input is invalid.
5. Reject numeric strings such as `"3"` rather than convert them.
6. Return the total fee for valid input without printing from inside the calculation function.

Keep the solution short and readable. Update example calls if you rename the function. Assume valid inputs are within an ordinary range for fee calculations.

Briefly distinguish **refactoring** from **behaviour changes**. Renaming can preserve behaviour when callers are updated. Adding validation and removing console output change observable behaviour.

## Task 3: Check the behaviour

Demonstrate all five cases and record the actual result alongside the expected result:

| Borrowing days | Daily rate | Expected outcome |
| --- | --- | --- |
| `3` | `10` | Returns `30` |
| `1` | `0` | Returns `0` |
| `0` | `10` | Throws an error |
| `2` | `-5` | Throws an error |
| `"3"` | `10` | Throws an error because days is a string |

Use simple calls with `try...catch` so an expected error does not stop later checks. Place demonstration calls in the same JavaScript file. Console output in demonstration code is permitted; it should be separate from the calculation function.

The five cases are the required demonstrations. Your implementation must still meet every requirement in Task 2.

### Run your file

If Node.js is installed, open a terminal in the folder containing `fee.js` and run:

```bash
node fee.js
```

No `npm install` command is needed. Alternatively, run the function and demonstration calls in a browser's JavaScript console.

## Task 4: Participate in peer review

Work with one classmate. Each student acts as both an author and a reviewer.

1. Create a branch in your assigned repository, for example `student-name/fee-review`.
2. Improve the code, check its behaviour, and review your own changes.
3. Commit the changes with a meaningful message.
4. Open a pull request against the instructor-designated target branch. Explain what changed, why, and how you checked it.
5. Review your classmate's changes against the assignment requirements.
6. Leave at least one meaningful comment or question, explaining its relevance.
7. Respond to feedback and revise where necessary. If no revision is needed, explain your reasoning.

Example review comment:

> Does the validation reject a numeric string such as `"3"`? Please explain which check prevents it from being accepted.

Do not invent a defect to produce a comment. Specific questions and well-supported observations are also useful feedback. Follow the instructor's rules for merging changes.

## Submission

Submit through the instructor-designated channel:

- One JavaScript file containing the improved function and demonstration calls.
- A brief note identifying three concerns and explaining your changes.
- Evidence of the five checks, including expected and actual results.
- Your pull-request link and evidence of the review you gave and received.

**Deadline:** As announced by the instructor.

## Assessment criteria

| Criterion | Marks |
| --- | ---: |
| Identifies and explains three relevant code concerns | 3 |
| Implements the required improvements correctly | 3 |
| Demonstrates and records the five required checks | 2 |
| Provides constructive peer feedback and responds appropriately | 2 |
| **Total** | **10** |

## Coursework document

The accompanying formal brief is named `simplified_code_review_coursework.tex`. If provided in your repository, upload it to Overleaf and compile using pdfLaTeX. This README also contains the full assignment instructions.
