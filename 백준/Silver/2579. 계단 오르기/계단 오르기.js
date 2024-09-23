let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let N = input.shift();
let dp = Array(N).fill(0);

if (N === 1) {
  console.log(input[0]);
  return;
}

dp[0] = input[0];
dp[1] = input[0] + input[1];
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(input[i] + dp[i - 2], input[i] + input[i - 1] + dp[i - 3]);
}

console.log(dp[N - 1]);