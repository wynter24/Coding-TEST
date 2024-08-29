function solution(m, n, puddles) {
  // dp 배열 초기화: n행 m열 크기로 설정
  let dp = Array.from({ length: n }, () => Array(m).fill(0));

  // 시작점 초기화
  dp[0][0] = 1;

  // 물에 잠긴 지역 표시
  puddles.forEach(([x, y]) => {
    dp[y - 1][x - 1] = -1; // 물에 잠긴 곳을 -1로 설정
  });

  // DP 배열 채우기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 물에 잠긴 지역은 경로 수를 0으로 유지
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }

      // 왼쪽에서 오는 경로 추가
      if (j > 0 && dp[i][j - 1] !== -1) {
        dp[i][j] += dp[i][j - 1];
      }

      // 위쪽에서 오는 경로 추가
      if (i > 0 && dp[i - 1][j] !== -1) {
        dp[i][j] += dp[i - 1][j];
      }

      // 모듈러 연산 적용
      dp[i][j] %= 1000000007;
    }
  }

  // 최종 경로 수 반환
  return dp[n - 1][m - 1];
}