const input = require('fs').readFileSync('/dev/stdin').toString();

for (let i = 1; i <= input; i++) {
  let arr = [];
  for (let j = input; j > i; j--) {
    arr.push(' ');
  }
  arr.push('*'.repeat(i));
  console.log(arr.join(''));  
};