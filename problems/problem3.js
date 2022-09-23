// Return (n) Elements From End Of Array

// Write a function that takes an array and a number as arguments
// It should return the last (n) elements of (arr)

const retArrayElements = (arr, n) => {
  if (!arr || !n) {
    return "Missing Arguments";
  }

  return arr.slice(-n);
};

module.exports = {
  retArrayElements,
};
