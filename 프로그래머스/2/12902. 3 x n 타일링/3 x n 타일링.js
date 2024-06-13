function solution(n) {
  let dp = new Array(n+1);
  let mod = 1000000007;
  dp[0] = 1; dp[2] = 3; 

  for (let i = 4; i <= n; i+=2) {
    dp[i] = (dp[i-2]*4%mod - dp[i-4]%mod + mod) % mod;
  }

  return dp[n];
}