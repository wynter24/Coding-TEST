function solution(weights) {
  // 등장 횟수 map
  let map = {};
  // 거리: 동일, 2 & 3, 3 & 4, 2 & 2 비율
  let ratio = [1,3/2,4/3,2];

  // 무게를 내림차순 정렬 후 reduce로 합산
  return weights
    .sort((a,b) => b-a)
    .reduce((result, weight) => {
      // 해당 무게의 비율을 곱하여 result에 합산
      // 짝무게(무게*비율)가 map에 존재하면 등장횟수만큼 결과에 더한다.
      ratio.map(v => result += (map[weight*v] || 0))
      
      // 해당 무게의 등장 횟수 1 증가
      map[weight] = (map[weight] || 0) + 1;
      return result;      
    },0)
}