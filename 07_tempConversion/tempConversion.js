const convertToCelsius = function(fah) {
  let decimal = (fah - 32) / 1.8;
  return Math.round((decimal + Number.EPSILON) * 10) / 10; // EPSILON ensures <1-bit accuracy
};

const convertToFahrenheit = function(cel) {
  let decimal = cel * 1.8 + 32;
  return Math.round((decimal + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
