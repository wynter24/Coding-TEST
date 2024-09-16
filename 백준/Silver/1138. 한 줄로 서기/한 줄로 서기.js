let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const arr = input[0].split(' ').map(Number);
let result = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let count = arr[i];
  for (let j = 0; j < N; j++) {
    if (result[j] === 0) {
      if (count === 0) {
        result[j] = i + 1;
        break;
      }
      count--;
    }
  }
}

console.log(result.join(' '));