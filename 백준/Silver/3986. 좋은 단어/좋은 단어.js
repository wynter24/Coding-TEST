let [_, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let words = input.map(word => word.trim());

let totalGoodWord = 0;
words.forEach(word => {
  let stack = []
  for (let i = 0; i < word.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === word[i]) {
      stack.pop();
    } else {
      stack.push(word[i]);
    }
  }
  if (stack.length === 0) totalGoodWord++;
});

console.log(totalGoodWord);