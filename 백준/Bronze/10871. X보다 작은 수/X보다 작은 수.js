let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const X = +input[0].split(' ')[1];
const arr = input[1].split(' ').map(Number);

console.log(arr.filter(num => num < X).join(' '));