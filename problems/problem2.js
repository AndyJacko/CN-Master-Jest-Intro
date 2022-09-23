// Return (n) Character From A String

// Write a function that takes a string and a number as arguments
// Return the nth character of 'str'

const retChar = (str, n) => {
  if (!str || !n) {
    return "Missing Arguments";
  }

  return str[n - 1];
};

module.exports = { retChar };
