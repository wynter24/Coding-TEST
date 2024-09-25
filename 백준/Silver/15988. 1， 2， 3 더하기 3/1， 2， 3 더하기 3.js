let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

const MAX = 1000000; // 문제에서 주어진 n의 최대값
const MOD = 1000000009; // 문제에서 요구한 모듈러 값

// dp 배열 미리 계산
let dp = Array(MAX).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= MAX; i++) {
  dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % MOD;
}

input.forEach(el => console.log(dp[el]))