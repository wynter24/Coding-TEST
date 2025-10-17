let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let lab = input.map(el => el.trim().split(' ').map(Number));
let empties = [];
let virus = [];

// 0. 벽 세울 수 있는 좌표, 바이러스 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (lab[i][j] === 0) empties.push([i, j]);
    if (lab[i][j] === 2) virus.push([i, j]);
  }
}

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

const go = () => {
  let visited = new Array(N).fill().map(e => new Array(M).fill(0));

  // 2. 바이러스 퍼트리기
  const dfs = (y, x) => {
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
      if (visited[ny][nx] === 1) continue;
      if (lab[ny][nx] === 1) continue;
      visited[ny][nx] = 1;
      dfs(ny, nx);
    }
  }

  virus.forEach(([y, x]) => {
    visited[y][x] = 1;
    dfs(y, x);
  })

  // 3. 안전 지역 세기
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0 && visited[i][j] === 0) count++;
    }
  }
  return count;
}

let safeCnt = 0;
// 1. 벽세우기 - 조합(nCn)
for (let i = 0; i < empties.length; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = 0; k < j; k++) {
      lab[empties[i][0]][empties[i][1]] = 1;
      lab[empties[j][0]][empties[j][1]] = 1;
      lab[empties[k][0]][empties[k][1]] = 1;
      safeCnt = Math.max(safeCnt, go());
      lab[empties[i][0]][empties[i][1]] = 0;
      lab[empties[j][0]][empties[j][1]] = 0;
      lab[empties[k][0]][empties[k][1]] = 0;
    }
  }
}

console.log(safeCnt);