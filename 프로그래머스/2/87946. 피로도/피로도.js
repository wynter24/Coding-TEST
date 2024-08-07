let maxDungeons = 0;

function exploreDungeons(currentFatigue, dungeons, count) {
  // 현재까지 탐험한 던전 수가 최대값보다 크다면 갱신
  if(count > maxDungeons) {
    maxDungeons = count;
  }

  // 모든 던전 탐험을 시도
  for (let i = 0; i < dungeons.length; i++) {
    let [minFatigue, fatigueCost] = dungeons[i];
    // 현재 피로도가 최소 필요 피로도 이상인 경우 탐험 가능
    if(minFatigue <= currentFatigue) {
      // 해당 던전을 제거한 새로운 던전 배열 생성
      let remainingDungeons = [...dungeons.slice(0,i),...dungeons.slice(i+1)];
      // 재귀적으로 다음 탐험 진행
      exploreDungeons(
        currentFatigue-fatigueCost,
        remainingDungeons,
        count + 1
      );
    }
  }
}

function solution(k,dungeons) {
  exploreDungeons(k,dungeons,0);
  return maxDungeons;
}