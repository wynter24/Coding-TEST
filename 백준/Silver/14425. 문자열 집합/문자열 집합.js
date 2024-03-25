let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0].split(' ')[0];

const sArr = new Set(input.slice(1,n+1));
const toCheckArr = input.slice(n+1,);

function countContainedStr(set, arr) {
  let sum = 0;

  arr.forEach(s => {
    if(set.has(s)) sum++;
  })

  return sum;
}

console.log(countContainedStr(sArr, toCheckArr));