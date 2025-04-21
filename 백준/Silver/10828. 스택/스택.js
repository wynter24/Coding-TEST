let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let stack = [];
let answer = [];

for (let i = 0; i < n; i++) {
  const [method, num] = input[i].trim().split(' ');
  const len = stack.length;

  if (method === 'push') {
    stack.push(num);
  } else if (method === 'pop') {
    answer.push(len > 0 ? stack.pop() : -1);
  } else if (method === 'size') {
    answer.push(len);
  } else if (method === 'empty') {
    answer.push(len ? 0 : 1);
  } else if (method === 'top') {
    answer.push(len > 0 ? stack[len - 1] : -1);
  }
}

console.log(answer.join('\n'));