const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.trim());

const turnCnt = Math.max(...input.map(el => el.length));

let answer = '';

for (let i = 0; i < turnCnt; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
		else answer += input[j][i];
  }
}

console.log(answer);