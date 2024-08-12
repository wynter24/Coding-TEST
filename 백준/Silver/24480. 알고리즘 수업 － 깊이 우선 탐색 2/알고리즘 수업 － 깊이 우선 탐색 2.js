let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m, r] = input.shift().split(' ').map(Number);
let arr = input.map(v => v.split(' ').map(Number));
let graph = [...new Array(n + 1)].map(() => []);
let visited = new Array(n).fill(0);
let cnt = 1;

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.map(v => v.sort((a, b) => b - a));

function dfs(node) {
  if (!visited[node - 1]) {
    visited[node - 1] = cnt;
    cnt++;
    for (const next of graph[node]) dfs(next);
  }
}

dfs(r);

console.log(visited.join('\n'));