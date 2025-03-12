let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function sumOfAnswer(num) {
  if (num === 0) return 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += num - i;
  }
  return sum;
}

let answer = [];
for (let i = 0; i < +n; i++) {
  let quiz = arr[i].trim().split('X');
  answer.push(quiz.reduce((a, c) => a + sumOfAnswer(c.length), 0));
}

console.log(answer.join('\n'));