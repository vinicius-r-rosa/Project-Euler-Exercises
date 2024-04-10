function largestPrimeFactor(number) {
  let quotient = 0;
  let remainder = 0;
  let divisor = 2;
  let dividend = number;

  while (dividend !== divisor) {
    remainder = dividend % divisor;
    if (remainder === 0) {
      quotient = dividend / divisor;
      dividend = quotient;
    } else divisor += 1;
  }
  return divisor;
}

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(12));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
