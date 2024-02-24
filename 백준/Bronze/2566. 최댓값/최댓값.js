const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));

let maxArray = [];
let result = '';

for (let i = 0; i < 9; i++) {
  maxArray.push(Math.max(...input[i]));
}

const max = Math.max(...maxArray);
const rowIdx  = maxArray.indexOf(max);
const columnIdx = input[rowIdx].indexOf(max);

result += max+'\n'+`${rowIdx+1} ${columnIdx+1}`;

console.log(result);