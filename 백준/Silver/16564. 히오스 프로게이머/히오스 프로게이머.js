let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input.shift().split(' ');
const arr = input.map(Number);

let min = 1;
let max = k;
let answer = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let minLevel = Math.min(...arr) + mid;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] < minLevel) sum += minLevel - arr[i];
  }

  if (k >= sum) {
    answer = minLevel;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);