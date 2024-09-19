let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input.shift();
input = input.map(Number);

let positives = [];
let negatives = [];
let result = 0;

// 양수와 음수 나누기
input.forEach(num => {
  if (num > 1) {
    positives.push(num);
  } else if (num <= 0) {
    negatives.push(num);
  } else {
    result += 1; // 1은 그냥 더하는 게 이득
  }
});

// 양수는 큰 수끼리 묶음 (내림차순 정렬)
positives.sort((a, b) => b - a);
for (let i = 0; i < positives.length; i += 2) {
  if (i + 1 < positives.length) {
    result += positives[i] * positives[i + 1];
  } else {
    result += positives[i];
  }
}

// 음수는 작은 수끼리 묶음 (오름차순 정렬)
negatives.sort((a, b) => a - b);
for (let i = 0; i < negatives.length; i += 2) {
  if (i + 1 < negatives.length) {
    result += negatives[i] * negatives[i + 1];
  } else {
    result += negatives[i]; // 묶지 못한 음수는 그냥 더하기
  }
}

console.log(result);