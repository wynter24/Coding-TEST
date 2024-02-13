const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const arr = input.slice(1,2).join().split(' ');
const v = input[2];
let count = 0;

arr.forEach(el => el===v ? count += 1 : 0);
console.log(count);