let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
let graph = input.map(v => v.split('').map(Number));
let [goalY, goalX] = [n - 1, m - 1];
let ds = [[-1, 0], [1, 0], [0, 1], [0, -1]];

function dfs() {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    let [curY, curX, move] = queue.shift();

    if (curY === goalY && curX === goalX) return move;

    for (let i = 0; i < 4; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];

      if (ny >= 0 && ny < n && nx >= 0 && nx < m && graph[ny][nx]) {
        graph[ny][nx] = 0; // 방문
        queue.push([ny, nx, move + 1])
      }
    }
  }
}

console.log(dfs());