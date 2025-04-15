// 1. 순열 구하기: 가능한 모든 순서 조합 (백트랙킹 사용)
// 2. 식 계산
// 3. 최대값 찾기

let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arrA = input[0].split(' ').map(Number);

const permutation = (permu, rests, output) => {
  if (rests.length === 0) {
    return output.push(permu);
  }

  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
}

const sum = (arr) => {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result += Math.abs(arr[i] - arr[i + 1]);
  }
  return result;
}

let output = [];
permutation([], arrA, output);

let maxSum = 0;
for (let i = 0; i < output.length; i++) {
  maxSum = Math.max(maxSum, sum(output[i]));
}

console.log(maxSum);