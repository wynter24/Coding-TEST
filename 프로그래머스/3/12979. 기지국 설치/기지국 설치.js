function solution(n, stations, w) {
  let answer = 0;
  let curIdx = 1; // 현재 아파트 위치
  const len = 2 * w + 1;

  stations.forEach(station => {
    const range = station - w - curIdx;
    answer += Math.ceil(range / len);
    curIdx = station + w + 1;
  });

  // 커버되지 않은 마지막 구간
  if(curIdx <= n) answer += Math.ceil((n - curIdx + 1) / len);
    
  return answer;
}