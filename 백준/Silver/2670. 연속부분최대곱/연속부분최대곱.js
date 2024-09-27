let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let N = input.shift();
let dp = Array(N).fill(0);
dp[0] = input[0];
let maxNum = dp[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(input[i], dp[i - 1] * input[i]);
  maxNum = Math.max(maxNum, dp[i]);
}


console.log(maxNum.toFixed(3));