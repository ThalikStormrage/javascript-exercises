const sumAll = function(firstNum, secondNum) {
  if ((firstNum || secondNum) < 0 || typeof (firstNum && secondNum) !== "number"){
    return 'ERROR'
  }
  let array = [];
  const startingNum = Math.min(firstNum, secondNum);
  const endingNum = Math.max(firstNum, secondNum);
    for (i = startingNum; i <= endingNum; i++){
        array.push(i);
    }
  const sum = array.reduce((arraySum, currentArrayValue) => 
    arraySum + currentArrayValue, 0);
  return sum;
}
module.exports = sumAll;
