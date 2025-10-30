let [total, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;

const groupCheck = (word) => {
  let words = word.split('');
  let stack = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const prev = stack[stack.length - 1];
    if (prev !== words[i]) {
      if (stack.includes(words[i])) return false;
      stack.push(words[i])
    }
  }
  return true;
}

for (let i = 0; i < total; i++) {
  if (groupCheck(arr[i])) count++;
}

console.log(count);