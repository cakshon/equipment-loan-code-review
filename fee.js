function fee(borrowingDays, dailyRate) {
  if (!Number.isInteger(borrwingDays) && borrowingDays <= 0) {
    throw new Error("Borrowing days only as a positive integer number.");
  }
  if (!Number.isFinite(dailyRate) && dailyRate < 0) {
    throw new Error("Daily rate only as a finite, nonnegative number.");
  }

  return borrowingDays * dailyRate;
}
