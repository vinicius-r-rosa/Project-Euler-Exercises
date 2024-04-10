function isEven(n) {
  return n % 2 === 0;
}

function fiboEvenSum(n) {
  let fiboAux = 0;
  let result = 0;
  let fiboN = 1;
  let fiboM = 2;

  for (let i = 0; fiboM <= n; i++) {
    if (isEven(fiboM)) {
      result += fiboM;
    }

    fiboAux = fiboN + fiboM;
    fiboN = fiboM;
    fiboM = fiboAux;
  }

  return result;
}
