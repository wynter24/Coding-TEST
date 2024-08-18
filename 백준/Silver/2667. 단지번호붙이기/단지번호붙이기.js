let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input.shift();
let map = input.map(v => v.split('').map(Number));
let visited = Array.from({ length: N }, () => Array(N).fill(false));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(x, y) {
  let count = 1;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (map[nx][ny] === 1 && !visited[nx][ny]) {
        count += dfs(nx, ny);
      }
    }
  }

  return count;
}

const complexes = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      complexes.push(dfs(i, j));
    }
  }
}

console.log(complexes.length);
complexes.sort((a, b) => a - b);
for (const count of complexes) {
  console.log(count);
}