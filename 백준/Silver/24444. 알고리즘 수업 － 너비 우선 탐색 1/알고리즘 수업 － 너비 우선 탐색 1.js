let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, r] = input.shift().split(' ').map(Number);
const arr = input.map(v => v.split(' ').map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(0);
let order = 1;

// 그래프 구성
arr.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

graph.map(v => v.sort((a, b) => a - b));

function bfs(start) {
  const queue = [];
  queue.push(start);
  visited[start] = order++;

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = order++; // 방문했음을 표시
        queue.push(neighbor); // 큐에 방문할 노드 추가
      }
    }
  }
}

bfs(r);

console.log(visited.slice(1).join('\n'));