function isMultipleOf(numToCheck, numMain) {
  return numToCheck % numMain === 0;
}

function multiplesOf3Or5(number) {
  let result = 0;
  for (let auxNum = 1; auxNum < number; auxNum++) {
    if (isMultipleOf(auxNum, 3) || isMultipleOf(auxNum, 5)) {
      result += auxNum;
    }
  }

  return result;
}
