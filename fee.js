

// improved equipment loan fee calculation
function calculateFee (borrowingDays,dailyRate) 
{
  //
  if(!Number.isInteger(borrowingDays) || borrowingDays <= 0)
  {
      throw new Error ("Borrowing days only accepts positive int");
  }
  
  if(!Number.isFinite(dailyRate) || dailyRate < 0)
  {
    throw new Error ("daily Rate only accepts finite and non negative);
  }

  return borrowingDays * dailyRate;
}
