// Return Object Key Value

// Write a function that takes an object and a string as arguments
// It should return the value of the property with key equal to the value of the string

const retObjKeyVal = (obj, key) => {
  if (!obj || !key) {
    return "Missing Arguments";
  }

  return obj[key];
};

module.exports = {
  retObjKeyVal,
};
