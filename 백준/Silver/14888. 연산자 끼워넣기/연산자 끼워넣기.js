let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const numArr = input.shift().split(' ').map(Number);
const operators = input.shift().split(' ').map(Number);

let max = -Infinity;
let min = Infinity;

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b),
]

const dfs = (count, result) => {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      if (!operators[i]) continue;
      operators[i]--;
      dfs(count + 1, calculate[i](result, numArr[count + 1]));
      operators[i]++;
    }
  }
}

dfs(0, numArr[0]);
console.log(max);
console.log(min);