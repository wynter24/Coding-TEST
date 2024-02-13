const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const maxN = Math.max(...input);
const indexN = input.indexOf(maxN);

console.log(maxN);
console.log(indexN+1);