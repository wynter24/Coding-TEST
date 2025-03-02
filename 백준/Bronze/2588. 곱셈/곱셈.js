let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = [];
let sum = 0;
const len = B.length - 1;

for (let i = len; i > -1; i--) {
  let calc = A * +B[i];
  answer.push(calc);
  sum += calc * Math.pow(10, len - i);
}

answer.push(sum);
console.log(answer.join('\n'));