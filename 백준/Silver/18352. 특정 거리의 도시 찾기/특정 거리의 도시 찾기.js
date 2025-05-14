let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, K, X] = input.shift().split(' ').map(Number);
const cities = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);

input.forEach(el => {
  const [from, to] = el.trim().split(' ').map(Number);
  cities[from].push(to);
});

let result = [];

function bfs(start, curr) {
  let index = 0;
  let queue = [[start, curr]];
  visited[start] = true;

  while (index < queue.length) {
    const [node, move] = queue[index++];
    if (move === K) result.push(node);
    for (const next of cities[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, move + 1]);
      }
    }
  }
}

bfs(X, 0);
console.log(result.length ? result.sort((a, b) => a - b).join('\n') : -1);