const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, val) => sum + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, val) => sum * val, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(x) { 
  return x === 0 || x === 1 ? 1 : x * factorial(x-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
