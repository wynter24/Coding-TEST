let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, K] = input.shift().split(' ').map(Number);
let seats = input.map(seat => seat.split('').map(Number));
let count = 0;

for (let i = 0; i < N; i++) {
  let empty = 0;
  let start = 0;
  let end = 0;
  let seat = seats[i];

  while (end < M) {
    empty += seat[end];
    if (empty >= 1) {
      empty -= seat[start];
      start++;
    } else {
      if (end - start + 1 === K) {
        count++;
        start++;
      }
    }
    end++;
  }
}

console.log(count);