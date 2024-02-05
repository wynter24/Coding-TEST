const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [A,B] = input.map(el => +el);

console.log(A+B);