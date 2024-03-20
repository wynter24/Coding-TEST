let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const result = arr.sort((a,b) => a-b)
console.log(result.join('\n'));