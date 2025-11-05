let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);
const DY = [-1, 0, 1, 0];
const DX = [0, -1, 0, 1];

let box = input.map(el => el.trim().split(' ').map(Number));
let redTomato = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (box[y][x] === 1) {
      redTomato.push([y, x])
    }
  }
}

let head = 0;
while (head < redTomato.length) {
  const [y, x] = redTomato[head++];
  for (let k = 0; k < 4; k++) {
    const ny = y + DY[k];
    const nx = x + DX[k];
    if (ny >= 0 && nx >= 0 && ny < N && nx < M && box[ny][nx] === 0) {
      box[ny][nx] = box[y][x] + 1;
      redTomato.push([ny, nx]);
    }
  }
}

let allRipe = true;
let maxDay = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 0) {
      allRipe = false;
      break;
    }
    maxDay = Math.max(maxDay, box[i][j]);
  }
  if (!allRipe) break;
}

console.log(allRipe ? maxDay - 1 : -1);