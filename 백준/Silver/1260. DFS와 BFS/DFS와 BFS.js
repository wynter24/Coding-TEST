let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, v] = input.shift().split(' ').map(Number);
const arr = input.map(v => v.split(' ').map(Number));
let graph = Array.from({ length: n + 1 }, () => []);
let visitedD = Array(n + 1).fill(false);
let visitedB = Array(n + 1).fill(false);

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach(v => v.sort((a, b) => a - b));

function dfs(node) {
  let result = [];
  let stack = [node];

  while (stack.length) {
    let curr = stack.pop();
    if (!visitedD[curr]) {
      visitedD[curr] = true;
      result.push(curr);
    }
    for (let i = graph[curr].length - 1; i >= 0; i--) {
      let next = graph[curr][i];
      if (!visitedD[next]) {
        stack.push(next);
      }
    }
  }
  return result;
}

function bfs(node) {
  let result = [];
  let queue = [node];
  visitedB[node] = true;

  while (queue.length) {
    let curr = queue.shift();
    result.push(curr);
    for (let next of graph[curr]) {
      if (!visitedB[next]) {
        visitedB[next] = true;
        queue.push(next);
      }
    }
  }

  return result;
}


console.log(dfs(v).join(' '));
console.log(bfs(v).join(' '));

// DFS: 스택에 넣을 때 방문 여부를 확인하므로, 꺼낼 때 방문 처리
// BFS: 큐에 넣을 때 방문 처리를 해야 큐에 중복된 노드가 들어가지 않게 된다