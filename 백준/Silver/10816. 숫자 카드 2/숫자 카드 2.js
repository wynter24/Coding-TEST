let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let nArr = input[1].split(' ').map(Number);
let mArr = input[3].split(' ').map(Number);
let map = new Map();

nArr.forEach(el =>{
  if(map.has(el)) map.set(el, map.get(el)+1)
  else map.set(el, 1)
});

let answer = [];

mArr.forEach(el => answer.push(map.get(el) || 0))

console.log(answer.join(' '));