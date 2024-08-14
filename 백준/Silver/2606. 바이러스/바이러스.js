let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let arr = input.slice(2,).map(v => v.split(' ').map(Number));
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(0);
let order = 1;

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function dfs(node) {
  if (!visited[node]) {
    visited[node] = order++;
    for (let next of graph[node]) dfs(next);
  }
}

dfs(1);

const answer = visited.slice(1).filter(v => v !== 0).length;

console.log(answer - 1);