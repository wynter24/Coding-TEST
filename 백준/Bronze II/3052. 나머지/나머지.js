let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(el => el%42);
let new_arr = new Set(arr);

console.log(new_arr.size);