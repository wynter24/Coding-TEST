let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(Number);
let A = +input.pop();
let cheering = input.map(row => row.split(' ').map(Number))

let maxSum = 0;

const colSum = Array(M).fill(0);

for (let col = 0; col < M; col++) {
  for (let row = 0; row < N; row++) {
    colSum[col] += cheering[row][col];
  }
}

// 초기 구간 합 설정
let currentSum = 0;
for (let i = 0; i < A; i++) {
  currentSum += colSum[i];
}

maxSum = currentSum;

// 슬라이딩 윈도우로 최대 구간 합 찾기 (start를 0부터 시작)
for (let start = 0; start < M - A; start++) {
  currentSum = currentSum - colSum[start] + colSum[start + A];
  maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);