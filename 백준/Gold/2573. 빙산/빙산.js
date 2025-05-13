let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let iceMap = input.map(ice => ice.trim().split(' ').map(Number));
const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// 빙산 덩어리 세기(인접 빙산 방문 여부 확인) 
const dfs = (y, x, visited) => {
  visited[y][x] = true;
  for (const [dy, dx] of direction) {
    const ny = y + dy;
    const nx = x + dx;
    if (ny >= 0 && nx >= 0 && ny < N && nx < M &&
      iceMap[ny][nx] > 0 &&
      !visited[ny][nx]) {
      dfs(ny, nx, visited);
    }
  }
}

let year = 0;
while (true) {
  year++;

  // 빙하 녹이기 
  const nextIceMap = iceMap.map(row => [...row]); // 깊은 복사(녹은 빙하가 다음 빙하에 영향을 주면 안됨)
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (iceMap[y][x] > 0) {
        let seaCount = 0;
        for (const [dy, dx] of direction) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 0 && ny < N && nx >= 0 && nx < M && iceMap[ny][nx] === 0) {
            seaCount++;
          }
        }
        nextIceMap[y][x] = Math.max(0, iceMap[y][x] - seaCount);
      }
    }
  }
  iceMap = nextIceMap;

  // 덩어리 세기
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (iceMap[y][x] > 0 && !visited[y][x]) {
        dfs(y, x, visited);
        count++;
      }
    }
  }

  if (count === 0) {
    console.log(0);
    break;
  }
  if (count > 1) {
    console.log(year);
    break;
  }
}