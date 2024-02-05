const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [a,b] = input.map(el => +el);

console.log(a/b);