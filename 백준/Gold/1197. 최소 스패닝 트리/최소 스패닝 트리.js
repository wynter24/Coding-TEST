let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [V, E] = input[0].split(' ').map(Number);

// 1. 간선 정보 파싱
const edge = [];
for (let i = 1; i <= E; i++) {
  const [a, b, cost] = input[i].split(' ').map(Number);
  edge.push([cost, a, b]); // 비용, 시작노드, 끝노드
}

// 2. 비용 기준 정렬
edge.sort((a, b) => a[0] - b[0]);

// 3. 유니온 - 파인드 셋업
const parent = Array(V + 1).fill(0).map((_, i) => i);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]); // 경로압축(최상위 부모로 할당)
  }
  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);
  if (rootX === rootY) return false;
  parent[rootY] = rootX; // 보통 x를 기준으로 y 합치기
  return true;
}

// 4. Kruskal 알고리즘 실행
let total = 0;
let count = 0;

for (const [cost, a, b] of edge) {
  if (union(a, b)) {
    total += cost;
    count++;
    if (count === V - 1) break;
  }
}

console.log(total);