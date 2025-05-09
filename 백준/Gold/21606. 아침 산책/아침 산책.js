let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const INOUT = input.shift().split('').map(Number);
const trees = Array.from({ length: N + 1 }, () => []);

input.forEach(el => {
  const [from, to] = el.trim().split(' ').map(Number);
  trees[from].push(to);
  trees[to].push(from);
})

let count = 0;

function countWalkPaths(start) {
  let k = 0;

  for (const next of trees[start]) {
    if (INOUT[next - 1] === 1) {
      k++;
    }
  }

  return k * (k - 1);
}

for (let i = 1; i <= N; i++) {
  if (INOUT[i - 1] === 1) {
    for (const next of trees[i]) {
      if (INOUT[next - 1] === 1) {
        count++;
      }
    }
  } else {
    count += countWalkPaths(i);
  }
}

console.log(count)