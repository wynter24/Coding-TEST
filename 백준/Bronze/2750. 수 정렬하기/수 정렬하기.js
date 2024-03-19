let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();

input.sort((a, b) => a - b).forEach(num => console.log(num));