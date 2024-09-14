let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input.shift();
let timeTable = input.map(table => table.split(' ').map(Number));
timeTable.sort((a, c) => a[1] === c[1] ? a[0] - c[0] : a[1] - c[1]);

let count = 1;
let curE = timeTable[0][1];

for (let i = 1; i < N; i++) {
  const [nextS, nextE] = timeTable[i];
  if (curE <= nextS) {
    curE = nextE;
    count++;
  }
}

console.log(count);