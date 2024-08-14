let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let arr = input.slice(2,).map(v => v.split(' ').map(Number));
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function dfs(node) {
  visited[node] = true;
  let count = 1;
  graph[node].forEach(next => {
    if (!visited[next]) {
      count += dfs(next);
    }
  });
  return count;
}

console.log(dfs(1) - 1);