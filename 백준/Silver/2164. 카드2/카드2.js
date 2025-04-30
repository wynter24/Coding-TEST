let input = +require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let queue = Array.from({ length: input }, (_, i) => i + 1);
let head = 0;

while (queue.length - head > 1) {
  head++;
  queue.push(queue[head]);
  head++;
}

console.log(queue[head]);