// Check Object Property Exists And Is Truthy

// Write a function that takes an object and a string as arguments
// Return true if the object has a property with key, but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

function chkObjProperty(obj, key) {
  if (!obj || !key) {
    return "Missing Arguments";
  }

  return key in obj ? (obj[key] ? true : false) : false;
}

module.exports = { chkObjProperty };
