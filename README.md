# Equipment Loan Service — Code Review Coursework

A JavaScript code-review exercise about lending laboratory equipment to students.

**The service is intentionally defective. This is a student starter repository, not a completed implementation.** No database, credentials, or network access is required. All demo records are fictional and stored in memory.

## Quick start

Use Node.js 22 or newer with npm. There are no external dependencies and no installation step.

```bash
npm run demo
npm run test:smoke
npm test
```

The demo uses one valid request and exits successfully, but exposes a Date-mutation issue. The smoke suite passes. **The initial full suite is expected to report 2 passing tests and 8 failing acceptance tests.** Those failures describe behaviour students must implement; they are not setup failures.

## Assignment

Read [the coursework brief](docs/assignment.md), then inspect [the starter service](src/loanService.js). Formal LaTeX source is available at [docs/assignment.tex](docs/assignment.tex).

The provided repository adapter and test helpers support the exercise. The primary implementation target is `src/loanService.js`. Preserve the public function signature, supplied assertions, and repository contract.

Students should extend the tests; the supplied suite does not cover every requirement. No model solution is included.

## Repository contents

| File | Purpose |
| --- | --- |
| src/loanService.js | Intentionally incomplete implementation to review and repair |
| src/memoryRepository.js | Provided in-memory storage adapter |
| src/demo.js | Safe local demonstration |
| test/smoke.test.js | Working baseline checks |
| test/acceptance.test.js | Initially failing acceptance tests |
| test/helpers.js | Recording mock and deterministic clock |
| docs/assignment.md | Student coursework brief |
| docs/assignment.tex | Standalone formal LaTeX coursework |
| docs/review-record.md | Peer-review evidence template |
| .github/PULL_REQUEST_TEMPLATE.md | Pull-request description template |
| docs/instructor-setup.md | Classroom setup and expected baseline |

## Student workflow

1. Create a branch such as `student/<name>/loan-review` in your assigned copy.
2. Record your initial review, including strengths as well as concerns.
3. Fix the service and add tests for the remaining requirements.
4. Run `npm test` and record actual results.
5. Open a pull request against the instructor-designated target branch.
6. Review a peer's pull request, respond to feedback, and revise.

## LaTeX

Upload `docs/assignment.tex` to Overleaf and select pdfLaTeX. It is self-contained: no external code listings, images, bibliography, or shell escape are required.

## Attribution

This is an original teaching example prepared for the coursework. It is not copied from the shopping-cart demonstration repository.
