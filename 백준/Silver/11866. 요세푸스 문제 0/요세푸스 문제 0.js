let [n, k] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);


let queue = Array.from({ length: n }, (_, i) => i + 1);
let answer = [];
let curIdx = 0;

while (queue.length > 0) {
  let next = (curIdx + k - 1) % queue.length;
  answer.push(queue[next]);
  queue.splice(next, 1);
  curIdx = next;
}

console.log(`<${answer.join(', ')}>`);