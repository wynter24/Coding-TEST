let [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.split(' ').map(Number);
let answer = new Array(+n).fill(-1);
let stack = [];

for (let i = 0; i < +n; i++) {
  while(stack.length > 0 && arr[stack[stack.length-1]] < arr[i]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));