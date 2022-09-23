// Check Two Dates Are Within An Hour Of Each Other

// Write a function that takes two dates as arguments
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

const chkDatesWithinHour = (date1, date2) => {
  if (!date1 || !date2) {
    return "Missing Arguments";
  }

  return (
    Math.abs(
      (new Date(date1).getTime() - new Date(date2).getTime()) / 1000 / 60
    ) <= 60
  );
};

module.exports = {
  chkDatesWithinHour,
};
