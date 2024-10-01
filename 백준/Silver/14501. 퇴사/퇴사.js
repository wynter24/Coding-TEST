let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let dp = Array(N + 1).fill(0);
N = Number(N)
dp[N + 1] = 0;

for (let i = N; i > 0; i--) {
  let [time, pay] = input[i - 1].trim().split(' ').map(Number);

  if (i + time - 1 <= N) {
    dp[i] = Math.max(dp[i + 1], pay + dp[i + time])
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[1])