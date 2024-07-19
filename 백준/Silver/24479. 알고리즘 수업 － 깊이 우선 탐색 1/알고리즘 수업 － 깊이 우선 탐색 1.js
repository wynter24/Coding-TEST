let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n,m,r] = input.shift().split(' ').map(Number);
let arr = input.map(el => el.split(' ').map(Number));
let graph = [...Array(n+1)].map(() => []);
let visited = new Array(n).fill(0);
let cnt = 1;

// 무방향(양방향) 그래프
arr.forEach(([from,to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

//오름차순
graph.map(v => v.sort((a,b) => a - b));

// dfs
function dfs(node) {
  if(!visited[node - 1]) { // node가 방문되지 않은 경우
    visited[node - 1] = cnt; // 현재 방문 순서를 기록
    cnt++; // 다음 방문 순서를 위해 cnt를 1 증가
    for(const next of graph[node]) dfs(next);  // 인접한 정점들을 재귀적으로 방문
  }
}

dfs(r);

console.log(visited.join('\n'));