const add = function(firstNum, secondNum) {
  const result = firstNum + secondNum;
	return result;
};

const subtract = function(firstNum, secondNum) {
	const result = firstNum - secondNum;
  return result;
};

const sum = function(array) {
	const result = array.reduce((total, nextNumber) => total + nextNumber, 0);
  return result;
};

const multiply = function(array) {
	const result = array.reduce((total, nextNumber) => total * nextNumber, 1);
  return result;
};

const power = function(num, power) {
  const result = num ** power;
  return result;
};

const factorial = function(num) {
  let result = 1;
  if (num == 0 || num == 1){
    return result;
  } else {
    for (i = num; i >= 1; i--)
      result = result * i;
  }
  return result;
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
