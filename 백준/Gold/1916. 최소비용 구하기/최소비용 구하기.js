let [N, M, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.trim());

M = +M;
N = +N;

const [start, target] = input.pop().split(' ').map(Number);
const cityMap = Array.from({ length: N + 1 }, () => []);

input.forEach(el => {
  const [from, to, cost] = el.split(' ').map(Number);
  cityMap[from].push({ node: to, cost });
})

let dist = Array(N + 1).fill(Infinity);
let visited = Array(N + 1).fill(false);

function findSmallestNode() {
  let minDist = Infinity;
  let minNode = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i] && dist[i] < minDist) {
      minDist = dist[i];
      minNode = i;
    }
  }
  return minNode;
}

function dijkstra() {
  dist[start] = 0;

  cityMap[start].forEach(next => {
    dist[next] = Math.min(dist[next.node], next.cost);
  })

  for (let i = 1; i <= N; i++) {
    const nowNode = findSmallestNode();
    if (nowNode === 0) break;
    visited[nowNode] = true;

    cityMap[nowNode].forEach(next => {
      const acc = dist[nowNode] + next.cost;
      if (acc < dist[next.node]) {
        dist[next.node] = acc;
      }
    })
  }
}
dijkstra();
console.log(dist[target]);