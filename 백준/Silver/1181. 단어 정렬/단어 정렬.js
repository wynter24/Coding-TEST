let [n, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

arr.sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else return a > b ? 1 : -1;
});

let answer = [...new Set(arr)].join('\n');

console.log(answer);