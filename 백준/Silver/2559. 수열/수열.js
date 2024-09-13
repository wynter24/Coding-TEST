let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input.shift().split(' ').map(Number);
let temps = input[0].split(' ').map(Number);
let maxSum = 0;

let tempSum = 0;
for (let i = 0; i < K; i++) {
  tempSum += temps[i];
}
maxSum = tempSum;

let prev = 0;
let next = K;
while (next < N) {
  tempSum = tempSum + temps[next++] - temps[prev++];
  if (maxSum < tempSum) maxSum = tempSum;
  // next++;
  // prev++;
}

console.log(maxSum);