let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const graph = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);

input.forEach(el => {
  const [from, to] = el.trim().split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
})

let parent = [];

function dfs(currentNode) {
  visited[currentNode] = true;

  for (const next of graph[currentNode]) {
    if (!visited[next]) {
      parent[next] = currentNode;
      dfs(next);
    }
  }
}

dfs(1);
console.log(parent.slice(2).join('\n'));