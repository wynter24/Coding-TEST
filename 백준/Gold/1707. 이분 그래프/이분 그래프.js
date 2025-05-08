let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const CASE = +input.shift();

for (let i = 0; i < CASE; i++) {
  const [V, E] = input.shift().split(' ').map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);
  const color = Array(V + 1).fill(0); // 0: empty, 1: red, 2: blue

  input.splice(0, E).forEach(el => {
    const [from, to] = el.trim().split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  })

  let isBipartite = true;

  function dfs(node, c) {
    color[node] = c;

    for (const next of graph[node]) {
      if (color[next] === 0) {
        if (!dfs(next, 3 - c)) return false; // 이웃한 색은 다른 색으로 
      } else if (color[next] === c) {
        return false;
      }
    }

    return true;
  }

  for (let i = 1; i <= V; i++) {
    if (color[i] === 0) {
      if (!dfs(i, 1)) {
        isBipartite = false;
        break;
      }
    }
  }

  console.log(isBipartite ? 'YES' : 'NO');
}