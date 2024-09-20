let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
let result = [];

for (const num of input) {
  let dp = Array.from({ length: num + 1 }, () => Array(2).fill(0));
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= num; i++) {
    const zero = dp[i - 1][0] + dp[i - 2][0];
    const one = dp[i - 1][1] + dp[i - 2][1];
    dp[i] = [zero, one];
  }
  result.push(dp[num].join(' '));
}

console.log(result.join('\n'));