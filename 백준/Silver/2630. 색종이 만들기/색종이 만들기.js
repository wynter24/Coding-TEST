let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let papers = input.map(el => el.trim().split(' ').map(Number));
let whiteCnt = 0;
let blueCnt = 0;

function isSameColor(x, y, size) {
  let color = papers[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (papers[i][j] !== color) return false;
    }
  }
  return true;
}

function cutting(x, y, size) {
  if (isSameColor(x, y, size)) {
    papers[x][y] === 0 ? whiteCnt++ : blueCnt++;
    return;
  }

  let half = size / 2;
  cutting(x, y, half);
  cutting(x, y + half, half);
  cutting(x + half, y, half);
  cutting(x + half, y + half, half);
}

cutting(0, 0, +n);
console.log(whiteCnt);
console.log(blueCnt);