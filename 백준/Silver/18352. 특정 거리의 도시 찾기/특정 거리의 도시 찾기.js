let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, K, X] = input.shift().split(' ').map(Number);
const cities = Array.from({ length: N + 1 }, () => []);
input.forEach(el => {
  const [from, to] = el.trim().split(' ').map(Number);
  cities[from].push(to);
});

let dist = Array(N + 1).fill(-1);
dist[X] = 0;

let queue = [X];
let idx = 0;

while (idx < queue.length) {
  let node = queue[idx++];
  for (const next of cities[node]) {
    if (dist[next] === -1) {
      dist[next] = dist[node] + 1;
      queue.push(next);
    }
  }
}

let result = [];
for (let i = 1; i < N + 1; i++) {
  if (dist[i] === K) result.push(i);
}

console.log(result.length ? result.sort((a, b) => a - b).join('\n') : -1);