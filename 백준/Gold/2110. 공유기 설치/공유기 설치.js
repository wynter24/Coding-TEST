let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, c] = input.shift().split(' ');
let houses = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = houses[n - 1] - houses[0];
let answer = 0;

const isPossible = (dis) => {
  let count = 1;
  let lastInstalled = houses[0];

  for (let i = 1; i < n; i++) {
    if (houses[i] - lastInstalled >= dis) {
      lastInstalled = houses[i];
      count++;
    }
  }

  return count >= c ? true : false;
}

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  const installed = isPossible(mid);

  if (installed) { // 설치 가능하니까
    answer = mid;
    left = mid + 1; // 간격 더 넓히기
  } else {
    right = mid - 1;
  }
}

console.log(answer)