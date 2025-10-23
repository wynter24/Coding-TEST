let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let campus = input.map(el => el.trim().split(' ').map(Number));
let visited = Array(N).fill().map(el => Array(M).fill(false));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

const Bfs = (y, x) => {
  let queue = [[y, x]];
  let size = 1;
  while (queue.length) {
    const [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny >= 0 && nx >= 0 && ny < N && nx < M) {
        if (campus[ny][nx] === 1 && !visited[ny][nx]) {
          size++;
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  }
  return size;
}

let count = 0;
let maxSize = 0;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (campus[y][x] === 1 && !visited[y][x]) {
      visited[y][x] = true;
      count++;
      maxSize = Math.max(maxSize, Bfs(y, x));
    }
  }
}

console.log(`${count}\n${maxSize}`);