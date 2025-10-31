let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let houseMap = [];
let chickenMap = [];

// 1. 집, 치킨집 각각 좌표 배열에 저장
for (let y = 0; y < N; y++) {
  const city = input[y].trim().split(' ').map(Number);
  city.forEach((v, i) => {
    if (v === 1) houseMap.push([y, i]);
    if (v === 2) chickenMap.push([y, i]);
  })
}

let minDistSum = Infinity;

// 2. 치킨 배열에서 M개 뽑기 -> dfs
const dfs = (start, seleted) => {
  // M개를 충족할 때, 최단 거리 구하고 합 구하기
  if (seleted.length === M) {
    let cityDist = 0;
    for (const [hy, hx] of houseMap) {
      let minDist = Infinity;
      for (const [cy, cx] of seleted) {
        minDist = Math.min(minDist, Math.abs(hy - cy) + Math.abs(hx - cx));
      }
      cityDist += minDist;
    }
    minDistSum = Math.min(minDistSum, cityDist);
    return;
  }

  // 백트래킹
  for (let i = start; i < chickenMap.length; i++) {
    dfs(i + 1, [...seleted, chickenMap[i]])
  }
}

dfs(0, []);
console.log(minDistSum)