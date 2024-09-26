let input = +require('fs').readFileSync('/dev/stdin').toString().trim();
// SK(start) CY
// 마지막에 돌 가져 가는 사람이 짐.
// dp에는 마지막에 돌 가져간 사람 저장
// 문제는 이긴 사람 출력
let dp = Array(input).fill(0);
dp[1] = 1; // SK
if (input > 1) dp[2] = 0; // CY 
if (input > 2) dp[3] = 1; // SK 

for (let i = 4; i <= input; i++) {
  if (dp[i - 1] === 0 || dp[i - 3] === 0) {
    dp[i] = 1;
  } else {
    dp[i] = 0;
  }
}

console.log(dp[input] === 1 ? "CY" : "SK");