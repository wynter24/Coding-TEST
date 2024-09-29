function solution(n, money) {
  let dp = Array(n + 1).fill(0);
  dp[0] = 1; // 숫자 자신

  for (const coin of money) {
    // for문으로 코인 하나의 경우를 차례로 구해서 더함
    // 총식: dp[i-1]+dp[i-2]+dp[i-5] 이걸 for문으로 쪼갬
    for (let i = coin; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % 1000000007;
    }
  }
  return dp[n];
}