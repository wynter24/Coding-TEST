const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num1 = input[0];
const num2 = input[1];
let sum = 0;

for (let i = 2; i > -1; i--) {
  sum += +num1 * +num2[i] * Math.pow(10,2-i);
  console.log( +num1 * +num2[i] );
}

console.log(sum);