let [a, b, c] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt); // BigInt로 변환

function pow(a, b, c) {
  if (b === 1n) return a % c;

  let half = pow(a, b / 2n, c);
  let result = (half * half) % c; // 짝수

  if (b % 2n === 1n) {
    result = (result * (a % c)) % c; // 홀수
  }

  return result;
}

console.log(pow(a, b, c).toString());