let input = +require('fs').readFileSync('/dev/stdin').toString().trim();
let dp = Array.from({ length: input + 1 }, () => Array(10).fill(0));
const MOD = 1000000000;

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= input; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][1]
    else if (j === 9) dp[i][j] = dp[i - 1][8]
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD
  }
}

let result = 0;
for (let i = 0; i < 10; i++) {
  result = (result + dp[input][i]) % MOD;
}

console.log(result);