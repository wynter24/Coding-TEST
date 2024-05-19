let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('-');

let nums = input.map(el => el.split('+').map(Number).reduce((a,c) => a + c));
let answer = nums.reduce((a,c) => a-c);

console.log(answer);