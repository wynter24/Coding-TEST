let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(n);
let map = arr.map(el => el.split('').map(Number))
let visited = Array(N).fill().map(el => Array(N).fill(false));

let count = 0;
let houseArr = [];
let each = 0;

const DY = [0, -1, 0, 1]
const DX = [1, 0, -1, 0]

const Dfs = (y, x) => {
  each++;
  for (let i = 0; i < 4; i++) {
    const ny = y + DY[i];
    const nx = x + DX[i];

    if (ny >= 0 && nx >= 0 && ny < N && nx < N) {
      if (map[ny][nx] === 1 && !visited[ny][nx]) {
        visited[ny][nx] = true;
        Dfs(ny, nx);
      }
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (map[y][x] === 1 && !visited[y][x]) {
      visited[y][x] = true;
      each = 0;
      Dfs(y, x)
      houseArr.push(each);
      count++;
    }
  }
}

houseArr.sort((a, b) => a - b);
console.log(count);
console.log(houseArr.join(`\n`));