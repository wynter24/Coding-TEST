let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const INOUT = input.shift().split('').map(Number);
const trees = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);
let count = 0;

input.forEach(el => {
  const [from, to] = el.trim().split(' ').map(Number);
  trees[from].push(to);
  trees[to].push(from);

  if (INOUT[from - 1] === 1 && INOUT[to - 1] === 1) count += 2;
})

function dfs(node) {
  visited[node] = true;
  let indoorCount = 0;

  for (const next of trees[node]) {
    if (visited[next]) continue;
    if (INOUT[next - 1] === 1) indoorCount++;
    else indoorCount += dfs(next);
  }

  return indoorCount;
}

for (let i = 1; i <= N; i++) {
  if (!visited[i] && INOUT[i - 1] === 0) {
    const indoorCount = dfs(i);
    count += indoorCount * (indoorCount - 1);
  }
}

console.log(count);