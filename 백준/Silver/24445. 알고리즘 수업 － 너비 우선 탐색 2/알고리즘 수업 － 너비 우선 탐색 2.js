let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m, r] = input.shift().split(' ').map(Number);
let arr = input.map(v => v.split(' ').map(Number));
let graph = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(0);
let order = 1;

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.map(v => v.sort((a, b) => b - a));

function dfs(start) {
  let queue = [start];
  visited[start] = order++;

  while (queue.length) {
    let node = queue.shift();
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = order++;
        queue.push(neighbor);
      }
    }
  }
}

dfs(r);

console.log(visited.slice(1).join('\n'));