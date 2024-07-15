let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
let str = input[0];
let bomb = input[1];
let bomLen = bomb.length;
let stack = [];
let top = 0;

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  top = str[i];
  if(top === bomb[bomLen-1]) {
    let last = stack.slice(-bomLen);
    if(last.join('') === bomb) stack.splice(-bomLen);
  }
}

console.log(stack.join('') ? stack.join('') : 'FRULA')