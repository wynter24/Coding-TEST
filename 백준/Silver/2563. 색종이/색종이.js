const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.trim().split(' '));

let paper = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < n; i++) {
  let startX = +arr[i][0];
  let startY = +arr[i][1];
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if(paper[startX + j][startY + k] !== 0) continue;
      if(paper[startX + j][startY + k] === 0) {
        paper[startX + j][startY + k] = 1;
        count++;
      }
    }
  }
}

console.log(count);