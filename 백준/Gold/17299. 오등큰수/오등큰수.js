let [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.split(' ').map(Number);
let answer = new Array(+n).fill(-1);
let frequency = {}
let stack = [];

arr.forEach(el => frequency[el] = (frequency[el] || 0) + 1);

for (let i = 0; i < +n; i++) {
  while(stack.length > 0 && frequency[arr[stack[stack.length-1]]] < frequency[arr[i]]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));