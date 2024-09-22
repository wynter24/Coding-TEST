let input = +require('fs').readFileSync('/dev/stdin').toString().trim();
let dp = Array(input + 1).fill(0); // dp 배열 초기화

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[input]);