let n = +require('fs').readFileSync('/dev/stdin').toString().trim();

const dp = Array(n + 1).fill(BigInt(0));
dp[1] = BigInt(1);

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());