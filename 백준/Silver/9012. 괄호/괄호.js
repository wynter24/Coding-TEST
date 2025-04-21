let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = [];
const arr = input.map(el => el.trim());

for (const el of arr) {
  let stack = [];

  if (el[0] === ')') {
    answer.push('NO');
    continue;
  }

  for (let i = 0; i < el.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === '(' && el[i] === ')') {
      stack.pop();
      continue;
    }
    stack.push(el[i]);
  }

  answer.push(stack.length ? 'NO' : 'YES');
}

console.log(answer.join('\n'));