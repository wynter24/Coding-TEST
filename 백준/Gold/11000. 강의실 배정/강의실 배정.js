let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let timeTable = input.map(table => table.split(' ').map(Number));
const times = [];

timeTable.forEach(table => {
  times.push([table[0], 1]); //강의실 필요
  times.push([table[1], -1]); // 강의실 해제
})

// 시간이 같을 때 끝나는 시간(-1)이 시작 시간(1)보다 먼저 오게 해야 한다.
// 끝난 후에 바로 다음 수업이 시작될 수 있기 때문
times.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

let answer = 0;
let result = 0;

for (let i = 0; i < times.length; i++) {
  result += times[i][1];
  answer = Math.max(result, answer);
}

console.log(answer);